---
title: "ML Model Save aur Load kaise karein: Pickle, Joblib aur ONNX Complete Guide"
image: "/images/projects/save-load-ml-models.png"
slug: "save-load-ml-models"
category: "projects-deployment"
categoryLabel: "Projects & Deployment"
description: "Model training ke baad use save karna kyon zaroori hai? Pickle, Joblib, aur ONNX se ML models serialize kaise karein — versioning, deployment, aur best practices ke saath."
author: "Tarun"
tags: ["Model Serialization", "Pickle", "Joblib", "ONNX", "Python", "ML Deployment"]
featured: false
relatedPosts: ["flask-fastapi-ml-api", "ai-model-deployment-guide", "streamlit-ai-app-tutorial"]
readingTime: 9
tableOfContents: true
order: 106
date: "2026-04-29"
---

![ML Model Save aur Load kaise karein](/images/projects/save-load-ml-models.png)

Sochiye aapne ek complex Random Forest model train kiya — 1 ghanta laga. Jupyter Notebook band ki. Ab prediction ke liye phir se 1 ghante ka wait?

Bilkul nahi! **Model Serialization** se aap trained model ko ek file mein save kar sakte ho — aur baad mein seconds mein load karke predictions le sakte ho.

Ye ML deployment ka **pehla aur zaroori step** hai. Bina model save kiye, aap API nahi bana sakte, Streamlit app nahi deploy kar sakte.

---

## Model Serialization Kya Hai?

**Serialization** = Python object (trained model) ko bytes (file) mein convert karna

**Deserialization** = File se wapas Python object banana

```
Training Phase:
Model train karo → Serialize karo → File save karo (.pkl)

Deployment Phase:
File load karo → Deserialize karo → Predictions lo
```

---

## Method 1: Pickle — Python Standard Library

Pickle Python ka built-in serialization module hai. Extra installation ki zaroorat nahi.

### Complete Example
```python
# train_and_save.py
import pickle
from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from datetime import datetime

# Data load
cancer = load_breast_cancer()
X, y = cancer.data, cancer.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Preprocessing (important: scaler bhi save karna hai!)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Model train
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)
accuracy = accuracy_score(y_test, model.predict(X_test_scaled))
print(f"Model Accuracy: {accuracy:.3f}")

# Save karo — model AND scaler dono!
model_data = {
    'model': model,
    'scaler': scaler,
    'accuracy': accuracy,
    'features': cancer.feature_names.tolist(),
    'classes': cancer.target_names.tolist(),
    'trained_at': datetime.now().isoformat(),
    'version': '1.0'
}

with open('cancer_model_v1.pkl', 'wb') as f:  # 'wb' = write binary
    pickle.dump(model_data, f)

print("Model saved successfully!")
```

### Load aur Use karo
```python
# load_and_predict.py
import pickle
import numpy as np

# Load karo
with open('cancer_model_v1.pkl', 'rb') as f:  # 'rb' = read binary
    model_data = pickle.load(f)

model = model_data['model']
scaler = model_data['scaler']

print(f"Model version: {model_data['version']}")
print(f"Accuracy: {model_data['accuracy']:.3f}")
print(f"Trained at: {model_data['trained_at']}")

# Naye data par prediction karo
new_patient = np.array([[17.99, 10.38, 122.8, 1001.0, 0.1184, 0.2776,
                          0.3001, 0.1471, 0.2419, 0.07871, 1.095, 0.9053,
                          8.589, 153.4, 0.006399, 0.04904, 0.05373, 0.01587,
                          0.03003, 0.006193, 25.38, 17.33, 184.6, 2019.0,
                          0.1622, 0.6656, 0.7119, 0.2654, 0.4601, 0.1189]])

# Scaler bhi apply karo!
new_patient_scaled = scaler.transform(new_patient)
prediction = model.predict(new_patient_scaled)[0]
probability = model.predict_proba(new_patient_scaled)[0]

print(f"\nPrediction: {model_data['classes'][prediction]}")
print(f"Confidence: {max(probability):.1%}")
```

---

## Method 2: Joblib — Better for Large Models

Joblib specifically NumPy arrays aur large models ke liye optimized hai. Scikit-learn officially Joblib recommend karta hai.

```python
import joblib

# Save karo (simpler syntax)
joblib.dump(model_data, 'cancer_model_v1.joblib')

# Compressed save (file size kam hogi)
joblib.dump(model_data, 'cancer_model_v1_compressed.joblib', compress=3)

# Load karo
loaded = joblib.load('cancer_model_v1.joblib')
print(f"Loaded model accuracy: {loaded['accuracy']:.3f}")
```

### Pickle vs Joblib — Kab Kaunsa?

| Scenario | Choose |
|---|---|
| Small, simple models | Pickle |
| Large models (Random Forest, SVM) | **Joblib** |
| NumPy arrays heavy models | **Joblib** |
| Standard Python objects | Pickle |
| Production ML APIs | **Joblib** |

**Size comparison:**
```python
import os

# Compare file sizes
print(f"Pickle size: {os.path.getsize('cancer_model_v1.pkl') / 1024:.1f} KB")
print(f"Joblib size: {os.path.getsize('cancer_model_v1.joblib') / 1024:.1f} KB")
print(f"Joblib compressed: {os.path.getsize('cancer_model_v1_compressed.joblib') / 1024:.1f} KB")
```

---

## Method 3: ONNX — Cross-Platform Deployment

**ONNX (Open Neural Network Exchange)** ek universal format hai — ek baar convert karo, kahin bhi deploy karo:
- Different languages (Python, C++, Java, C#)
- Different frameworks (PyTorch, TensorFlow, Sklearn)
- Different platforms (cloud, edge devices, mobile)

```bash
pip install onnx onnxruntime skl2onnx
```

```python
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType
import onnxruntime as rt
import numpy as np

# Sklearn model ko ONNX mein convert karo
initial_type = [('float_input', FloatTensorType([None, 30]))]  # 30 features
onnx_model = convert_sklearn(model, initial_types=initial_type)

# Save karo
with open('cancer_model.onnx', 'wb') as f:
    f.write(onnx_model.SerializeToString())

# ONNX Runtime se predict karo (framework-independent!)
sess = rt.InferenceSession('cancer_model.onnx')
input_name = sess.get_inputs()[0].name

# Numpy array float32 mein convert karo
new_data = new_patient_scaled.astype(np.float32)

prediction = sess.run(None, {input_name: new_data})
print(f"ONNX Prediction: {prediction[0][0]}")  # 0=benign, 1=malignant
```

**ONNX advantages:**
- Python se train karo, C++ mein deploy karo (10x faster inference)
- Mobile apps mein ML models (TensorFlow Lite jaisa)
- Hardware-optimized inference (Intel, NVIDIA ONNX optimizations)

---

## Method 4: Deep Learning Models Save Karna

### PyTorch
```python
import torch
import torch.nn as nn

model = nn.Sequential(nn.Linear(30, 64), nn.ReLU(), nn.Linear(64, 1))

# Method 1: State dict (recommended)
torch.save(model.state_dict(), 'pytorch_model.pth')

# Load karo
loaded_model = nn.Sequential(nn.Linear(30, 64), nn.ReLU(), nn.Linear(64, 1))
loaded_model.load_state_dict(torch.load('pytorch_model.pth'))
loaded_model.eval()

# Method 2: Full model (easier but less flexible)
torch.save(model, 'pytorch_full_model.pth')
loaded = torch.load('pytorch_full_model.pth')
```

### TensorFlow / Keras
```python
import tensorflow as tf

model = tf.keras.Sequential([...])
model.fit(X_train, y_train, epochs=10)

# Save karo (SavedModel format — recommended)
model.save('keras_model_dir/')

# HDF5 format
model.save('keras_model.h5')

# Load karo
loaded = tf.keras.models.load_model('keras_model_dir/')
predictions = loaded.predict(X_test)
```

---

## Model Versioning — Professional Practice

```python
import joblib
from datetime import datetime
import json
import os

def save_model_versioned(model, scaler, metrics, model_name="classifier"):
    """Versioned model saving with metadata"""
    
    version = datetime.now().strftime("%Y%m%d_%H%M%S")
    directory = f"models/{model_name}_v{version}"
    os.makedirs(directory, exist_ok=True)
    
    # Model save karo
    joblib.dump(model, f"{directory}/model.joblib")
    joblib.dump(scaler, f"{directory}/scaler.joblib")
    
    # Metadata save karo
    metadata = {
        'model_name': model_name,
        'version': version,
        'trained_at': datetime.now().isoformat(),
        'metrics': metrics,
        'model_type': type(model).__name__,
        'n_features': scaler.n_features_in_
    }
    
    with open(f"{directory}/metadata.json", 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"Model saved: {directory}")
    return directory

# Use karo
metrics = {'accuracy': 0.975, 'f1_score': 0.974, 'auc_roc': 0.996}
path = save_model_versioned(model, scaler, metrics, "cancer_classifier")
```

---

## Security Warning!

```python
# ⚠️ KABHI BHI unknown sources ki pkl files mat load karo!
# Pickle files mein arbitrary Python code ho sakta hai

# Unsafe:
model = pickle.load(open('untrusted_model.pkl', 'rb'))  # DANGEROUS!

# Safe alternative for production:
# 1. ONNX format use karo (no code execution possible)
# 2. Hash verify karo
import hashlib

def verify_model_hash(filepath, expected_hash):
    with open(filepath, 'rb') as f:
        actual_hash = hashlib.sha256(f.read()).hexdigest()
    return actual_hash == expected_hash

# Model save karte waqt hash generate karo aur store karo
```

---

## Deployment ke liye Model Loading Pattern

Flask/FastAPI mein sahi tarika:

```python
# app.py — SAHI TARIKA
import joblib
from functools import lru_cache

@lru_cache(maxsize=1)  # Model sirf ek baar load hoga
def get_model():
    return joblib.load('cancer_model_v1.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    model_data = get_model()  # Already cached — instant!
    model = model_data['model']
    # ...

# GALAT TARIKA — har request par reload:
@app.route('/predict', methods=['POST'])
def predict_wrong():
    model = joblib.load('model.pkl')  # Har request par slow!
    # ...
```

---

## FAQs

**1. Python version change hone par pkl file kaam karegi?**
Sometimes nahi — especially bade version jumps mein (3.8 → 3.11). **Best practice:** Major deployments mein Python version note karo. Docker use karo environment lock karne ke liye.

**2. Library version mismatch error kya karna hai?**
`sklearn` version match karo — `pip install scikit-learn==1.3.0` specific version ke liye. Virtual environments (venv/conda) use karo production mein.

**3. Model kitne samay tak valid rehta hai?**
Data drift ke kaaran model accuracy time ke saath girta hai. Regular retraining schedule banao (weekly, monthly — use case par depend).

**4. ONNX vs Joblib — production mein kaunsa better?**
High-throughput APIs ke liye ONNX (faster inference). Python-only deployment ke liye Joblib simpler hai.

**5. Model files Git mein store karein?**
Nahi! Large files Git ke liye nahi hain. **Git LFS** ya **DVC (Data Version Control)** ya cloud storage (S3, GCS) use karo.

---

**Model save karte waqt koi issue aaya? Comment mein batao — solve karte hain! 💾**

---

**Tarun ke baare mein:** Tarun ek AI educator aur developer hain jo ML deployment ko beginners ke liye accessible banana chahte hain. AI-Gyani par theory se production tak — sab kuch practical hai.
