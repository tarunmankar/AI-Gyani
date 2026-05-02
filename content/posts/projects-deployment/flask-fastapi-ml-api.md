---
title: "Flask aur FastAPI se ML Model ki API kaise banaye"
image: "/images/projects/flask-fastapi-api.png"
slug: "flask-fastapi-ml-api"
category: "projects-deployment"
categoryLabel: "Projects & Deployment"
description: "Apne Machine Learning model ko web service mein kaise badle? Janiye Flask aur FastAPI ka use karke production-ready API banane ka tarika."
author: "Tarun"
tags: ["Flask", "FastAPI", "ML API", "Model Deployment", "Python"]
featured: false
relatedPosts: ["machine-learning-project-guide", "save-load-ml-models"]
readingTime: 14
tableOfContents: true
order: 105
---

![Flask vs FastAPI for ML](/images/projects/flask-fastapi-api.png)

Aapne model train kar liya, accuracy bhi achhi aa gayi. Lekin ab aap chahte hain ki aapka model ek website ya mobile app ke sath connect ho sake. Iska sabse achha tarika hai—**API (Application Programming Interface)** banana.

Python mein ML model ki API banane ke liye do sabse popular frameworks hain: **Flask** aur **FastAPI**. Aaj hum in dono ke baare mein baat karenge.

---

## API Kya Hoti Hai? (Simple Bhasha Mein)

API ek "Waitress" ki tarah hai. Aap (Frontend/User) use order dete hain (Data bhejte hain), wo kitchen (Machine Learning Model) mein jati hai, aur wahan se khaana (Prediction result) lekar wapas aapke paas aati hai.

---

## 1. Flask: The Classic Choice

Flask ek micro-framework hai jo bahut simple aur beginner-friendly hai.

### Flask API kaise banaye?
1. **Install Flask:** `pip install flask`
2. **Model Load karein:** `pickle` ya `joblib` ka use karke.
3. **Route banayein:** Ek POST request handle karne ke liye function likhein.

```python
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('my_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction = model.predict([data['features']])
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
```

---

## 2. FastAPI: The Modern Choice

FastAPI aajkal bahut popular ho raha hai kyunki ye Flask se tez hai aur automatic documentation (Swagger UI) deta hai.

### FastAPI ke Fayde:
- **Speed:** Ye Node.js aur Go ke barabar tez hai.
- **Auto-Docs:** `localhost:8000/docs` par aapko automatic testing interface mil jata hai.
- **Data Validation:** Pydantic ka use karke ye data ko pehle hi check kar leta hai.

```python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load('my_model.pkl')

class InputData(BaseModel):
    features: list

@app.post("/predict")
def predict(data: InputData):
    prediction = model.predict([data.features])
    return {"prediction": int(prediction[0])}
```

---

## Flask vs FastAPI: Kaunsa chunein?

| Feature | Flask | FastAPI |
|---------|-------|---------|
| Complexity | Very Simple | Slightly complex for beginners |
| Performance | Average | Extremely Fast |
| Documentation | Manual | Automatic (Swagger) |
| Async Support | No (Directly) | Yes |

**Verdict:** Agar aap pehli baar API bana rahe hain toh **Flask** se shuru karein. Lekin agar aap production-ready, fast application banana chahte hain, toh **FastAPI** best hai.

---

## Conclusion

API banana aapke ML project ko "Real-World" banata hai. Isse aapka model sirf Jupyter Notebook tak limit nahi rehta, balki duniya ke kisi bhi kone se access kiya ja sakta hai.

Agli post mein hum dekhenge ki **Model ko save aur load kaise karte hain** (Serialization) taaki use API mein use kiya ja sake.

**Aapka Task:** Ek simple Flask API banayein jo do numbers ko add karke JSON response de!
