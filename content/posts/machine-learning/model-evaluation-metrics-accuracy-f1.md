---
title: "Evaluation Metrics: Accuracy hi sab kuch nahi hai"
description: "Precision, Recall, F1-Score, aur ROC-AUC Curve. Model ki performance check karne ka professional guide. Confusion Matrix simple Hindi mein."
date: "2026-04-30"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Model Evaluation", "Accuracy", "Precision", "Recall", "F1-Score", "ROC-AUC", "Confusion Matrix"]
image: "/images/model_evaluation_metrics.png"
featured: false
readingTime: 12
tableOfContents: true
order: 56
slug: "model-evaluation-metrics-accuracy-f1"
---

![Model Evaluation Metrics](/images/model_evaluation_metrics.png)

Aapne ek Cancer detection model banaya aur accuracy aayi 99%. Khush na hon! Maan lijiye 1000 mein se 10 logon ko cancer tha, aur model ne sabko "Healthy" bol diya. Accuracy 99% aayegi, par model **Be-asar** hai. Yahi wajah hai ki humein **Precision aur Recall** ki zaroorat hoti hai.

---

## 1. Confusion Matrix: Sach ki Table

Confusion Matrix batata hai model kahan-kahan "Confuse" hua:
- **True Positive (TP):** Sahi pakda!
- **False Negative (FN):** Sabse bada dhokha! (Bimari thi par model ne "Nahi" bola).
Healthcare mein FN ko zero karna hamara goal hota hai.

---

## 2. Precision vs Recall: The Balance

- **Precision:** "Jitne 'Spam' bole, unmein se kitne asli spam the?" (No false alarms).
- **Recall:** "Jitne asli spam the, unmein se kitne pakad paaye?" (No missing data).
**F1-Score** in dono ka "Best Friend" hai, jo inka balance batata hai.

---

## 3. ROC-AUC Curve: Geometric Intuition

Ye ek graph hai jo batata hai model "Sahi" aur "Galat" ke beech kitna fark kar sakta hai.
- **AUC (Area Under Curve):** Jitna zyada area, utna behtar model.
- 0.5 ka matlab hai "Kismat" (Random guess), aur 1.0 ka matlab hai "Bhagwan" (Perfect model).

---

## 4. MCC: Matthews Correlation Coefficient

2026 mein professional developers sirf F1-score par bharosa nahi karte. 
- **MCC** ek aisi metric hai jo Confusion Matrix ke saare charo boxes (TP, TN, FP, FN) ko consider karti hai. 
- Ye imbalanced data ke liye F1 se bhi behtar hai.

---

## 5. Summary Table: Metrics for Industry

| Problem | Metric | Why? |
|---|---|---|
| **Banking (Fraud)** | Recall | Don't miss any fraud |
| **Email (Spam)** | Precision | Don't mark work mails as spam |
| **Search Engine** | MAP / NDCG | Ranking matters |
| **Medical** | F1 / Sensitivity | Balance is life |

---

## FAQs

**1. "Type I" aur "Type II" error mein kya fark hai?**
- **Type I (False Positive):** Khayali bhoot (Bimari nahi thi par bola 'Haan').
- **Type II (False Negative):** Chhupa hua dushman (Bimari thi par bola 'Nahi'). Type II hamesha zyada khatarnak hota hai.

**2. Accuracy kab use karein?**
Sirf tab jab aapke paas 50% Positive aur 50% Negative data ho (Balanced Data).

**3. "Threshold" kya hota hai?**
Model 0.7 probability deta hai. Agar threshold 0.5 hai toh ye "Yes" hai. Agar 0.8 hai toh ye "No" hai. Threshold badalne se Precision/Recall badal jate hain.

**4. Log-Loss kya hai?**
Ye tab use hota hai jab humein sirf "Yes/No" nahi, balki "Confidence" bhi chahiye. Jitna kam loss, utna model confident aur sahi.

---

**Metrics aapke model ki "Report Card" hain. Inhein samajh kar hi aap sahi AI engineer ban sakte hain! 📊**

---

**Tarun ke baare mein:** Tarun statistical metrics aur performance validation ke specialist hain. AI-Gyani par har report card transparent hai.
