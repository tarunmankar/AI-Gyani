---
title: "Flask aur FastAPI se ML Model ki API kaise banaye — Complete Guide"
image: "/images/projects/flask-fastapi-api.png"
slug: "flask-fastapi-ml-api"
category: "projects-deployment"
categoryLabel: "Projects & Deployment"
description: "Apne Machine Learning model ko web API mein kaise badle? Flask aur FastAPI ka use karke production-ready ML API banayein — complete code, error handling, authentication, aur deployment guide."
author: "Tarun"
tags: ["Flask", "FastAPI", "ML API", "Model Deployment", "Python", "REST API"]
featured: false
relatedPosts: ["machine-learning-project-guide", "save-load-ml-models", "docker-for-ai-beginners"]
readingTime: 11
tableOfContents: true
order: 105
date: "2026-04-29"
---

![Flask vs FastAPI for ML Model Deployment](/images/projects/flask-fastapi-api.png)

Aapne model train kar liya — accuracy bhi achhi aa gayi. Ab kya?

Jupyter Notebook mein model raha toh sirf aap hi use kar sakte ho. **API banane ke baad** — koi bhi app, website, ya mobile client aapke model se predictions le sakta hai.

Ye step ek "Data Scientist" ko "ML Engineer" banata hai.

Python mein do popular frameworks hain: **Flask** (classic) aur **FastAPI** (modern). Dono seekhenge aaj.

---

## API Kya Hai? (Simple Explanation)

API = Application Programming Interface. Ek interface jisse different software ek-doosre se baat karte hain.

**ML API ka flow:**

```
User/App → HTTP Request (JSON data) → Your ML API → Model → Prediction → HTTP Response (JSON)
```

**Waitress analogy:** API ek waitress hai. Aap order dete ho (JSON request), wo kitchen (ML model) tak jaati hai, result lekar aati hai (JSON response).

---

## Pehle: Model Train aur Save karo

```python
# train_model.py
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

# Data load karo
iris = load_iris()
X, y = iris.data, iris.target

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Model train karo
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Accuracy check karo
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")

# Save karo!
joblib.dump(model, 'iris_model.pkl')
joblib.dump(iris.target_names, 'target_names.pkl')
print("Model saved as iris_model.pkl")
```

---

## Part 1: Flask API

Flask ek micro web framework hai — simple, flexible, beginner-friendly.

### Installation
```bash
pip install flask joblib scikit-learn
```

### Basic Flask ML API
```python
# flask_app.py
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Model ek baar load karo (startup par)
model = joblib.load('iris_model.pkl')
target_names = joblib.load('target_names.pkl')

@app.route('/')
def home():
    return jsonify({
        'message': 'Iris Classifier API',
        'version': '1.0',
        'endpoints': {
            '/predict': 'POST — flower species predict karo',
            '/health': 'GET — API status check karo'
        }
    })

@app.route('/health')
def health():
    return jsonify({'status': 'healthy', 'model': 'loaded'})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Request data lo
        data = request.get_json()
        
        # Validation
        if 'features' not in data:
            return jsonify({'error': 'features field missing'}), 400
        
        features = np.array(data['features'])
        
        if features.shape != (4,):
            return jsonify({'error': '4 features required: sepal_length, sepal_width, petal_length, petal_width'}), 400
        
        # Prediction
        features = features.reshape(1, -1)
        prediction = model.predict(features)[0]
        probability = model.predict_proba(features)[0].tolist()
        
        return jsonify({
            'species': target_names[prediction],
            'species_id': int(prediction),
            'confidence': round(max(probability), 3),
            'probabilities': {
                name: round(prob, 3) 
                for name, prob in zip(target_names, probability)
            }
        })
    
    except ValueError as e:
        return jsonify({'error': f'Invalid data: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
```

### Test karo
```bash
# API start karo
python flask_app.py

# Dusre terminal mein test karo
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{"features": [5.1, 3.5, 1.4, 0.2]}'

# Expected output:
# {"species": "setosa", "confidence": 0.99, ...}
```

---

## Part 2: FastAPI — Modern aur Fast

FastAPI 2024-2026 mein rapidly popular hua hai. Kyon?
- **Automatic documentation** (Swagger UI) — zero extra work
- **Type hints** — bugs kam hote hain
- **Async support** — faster under load
- **Speed** — Node.js se compare karta hai

### Installation
```bash
pip install fastapi uvicorn joblib scikit-learn
```

### FastAPI ML API
```python
# fastapi_app.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, validator
from typing import Dict
import joblib
import numpy as np

app = FastAPI(
    title="Iris Classifier API",
    description="ML model se flower species predict karo",
    version="1.0.0"
)

# Models load karo
model = joblib.load('iris_model.pkl')
target_names = joblib.load('target_names.pkl')

# Request/Response schemas (Pydantic)
class FlowerFeatures(BaseModel):
    sepal_length: float = Field(..., gt=0, le=20, description="Sepal length in cm")
    sepal_width: float = Field(..., gt=0, le=20, description="Sepal width in cm")
    petal_length: float = Field(..., gt=0, le=20, description="Petal length in cm")
    petal_width: float = Field(..., gt=0, le=20, description="Petal width in cm")
    
    class Config:
        schema_extra = {
            "example": {
                "sepal_length": 5.1,
                "sepal_width": 3.5,
                "petal_length": 1.4,
                "petal_width": 0.2
            }
        }

class PredictionResponse(BaseModel):
    species: str
    species_id: int
    confidence: float
    probabilities: Dict[str, float]

@app.get("/")
def root():
    return {"message": "Iris Classifier API is running!"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "model": "RandomForest", "accuracy": "97.5%"}

@app.post("/predict", response_model=PredictionResponse)
def predict(flower: FlowerFeatures):
    """
    Iris flower ki species predict karo based on measurements.
    
    - **setosa**: Chota, distinct petal
    - **versicolor**: Medium size
    - **virginica**: Bada, wide petals
    """
    features = np.array([[
        flower.sepal_length,
        flower.sepal_width,
        flower.petal_length,
        flower.petal_width
    ]])
    
    try:
        prediction = model.predict(features)[0]
        probability = model.predict_proba(features)[0]
        
        return PredictionResponse(
            species=str(target_names[prediction]),
            species_id=int(prediction),
            confidence=round(float(max(probability)), 4),
            probabilities={
                name: round(float(prob), 4) 
                for name, prob in zip(target_names, probability)
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Bulk prediction endpoint
@app.post("/predict/batch")
def predict_batch(flowers: list[FlowerFeatures]):
    """Multiple flowers ek saath predict karo"""
    if len(flowers) > 100:
        raise HTTPException(status_code=400, detail="Maximum 100 flowers per batch")
    
    features = np.array([[f.sepal_length, f.sepal_width, f.petal_length, f.petal_width] 
                         for f in flowers])
    predictions = model.predict(features)
    
    return {
        "predictions": [str(target_names[p]) for p in predictions],
        "count": len(predictions)
    }
```

### FastAPI Start karo
```bash
uvicorn fastapi_app:app --reload --port 8000

# Browser mein jaao:
# http://localhost:8000/docs — Swagger UI (automatic!)
# http://localhost:8000/redoc — ReDoc documentation
```

**FastAPI ka killer feature:** `localhost:8000/docs` par jaate hi poora interactive testing interface mil jaata hai — bina koi extra code likhne ke!

---

## Flask vs FastAPI: Honest Comparison

| Feature | Flask | FastAPI |
|---|---|---|
| **Learning Curve** | Easier for beginners | Slightly steeper (type hints) |
| **Performance** | Average (~500 req/s) | Excellent (~2000+ req/s) |
| **Auto Documentation** | Manual (Flask-RESTX etc.) | **Built-in Swagger** |
| **Type Safety** | No | **Yes (Pydantic)** |
| **Async Support** | Limited | **Native** |
| **Maturity** | 2010, battle-tested | 2018, rapidly growing |
| **Community** | Huge | Growing fast |
| **Best For** | Simple APIs, legacy projects | New production APIs |

**Verdict:**
- First API banana? → **Flask** (simpler)
- Production system? → **FastAPI** (better performance, validation)
- 2026 mein new projects? → **FastAPI** strongly recommended

---

## Production Tips

### Environment Variables use karo
```python
import os

# Development mein: .env file
# Production mein: system env variables
SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret')
MODEL_PATH = os.environ.get('MODEL_PATH', 'iris_model.pkl')
```

### Basic Rate Limiting (Flask)
```bash
pip install flask-limiter
```
```python
from flask_limiter import Limiter
limiter = Limiter(app, default_limits=["100/hour"])

@app.route('/predict', methods=['POST'])
@limiter.limit("10/minute")
def predict():
    # ...
```

### API Monitoring
```python
import time
from functools import wraps

def log_time(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = f(*args, **kwargs)
        duration = time.time() - start
        print(f"{f.__name__} took {duration:.3f}s")
        return result
    return wrapper

@app.route('/predict', methods=['POST'])
@log_time
def predict():
    # ...
```

---

## FAQs

**1. Flask ya FastAPI mein se konsa seekhun pehle?**
Flask pehle — concept simple hai. Phir FastAPI naturally seekhna aasaan ho jaata hai.

**2. Kya ye production mein directly use ho sakte hain?**
Development server (flask run, uvicorn) production ke liye nahi hai. **Gunicorn** (Flask) ya **Uvicorn with workers** (FastAPI) use karo production mein.

**3. ML model ko API mein kitni baar load karein?**
**Ek baar** — app startup par. Har request par reload mat karo — bahut slow hoga. Global variable mein store karo.

**4. Authentication kaise add karein?**
Simple: API keys headers mein. Better: JWT tokens. FastAPI mein built-in OAuth2 support bhi hai.

**5. Agar model bahut bada ho (GBs mein)?**
- Model ko separate server par host karo
- Caching add karo (same inputs ke liye)
- Model quantization (smaller model)
- TorchServe ya TFServing dedicated model servers

---

**API banaoге toh mujhe batao — GitHub link share karo! 🚀**

---

**Tarun ke baare mein:** Tarun ek AI educator aur developer hain jo ML deployment ko beginners ke liye accessible banana chahte hain. AI-Gyani par theory se production tak — sab cover hai.
