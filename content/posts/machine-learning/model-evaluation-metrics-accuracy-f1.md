---
title: "Model Evaluation Metrics: Accuracy, Precision, Recall, aur F1-Score Explained"
description: "Machine Learning model ko test kaise karein? Accuracy, Precision, Recall aur F1-Score ke beech ka difference aasaan bhasha me samjhein."
date: "2026-04-30"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Model Evaluation", "Accuracy", "Precision", "Recall", "F1 Score"]
image: "/images/model_evaluation_metrics.png"
slug: "model-evaluation-metrics-accuracy-f1"
featured: false
readingTime: 8
tableOfContents: true
order: 48
---

![Model Evaluation Metrics](/images/model_evaluation_metrics.png)

Aapne ek Machine Learning model bana toh liya, par **kya wo sach me accha kaam kar raha hai?** Ye sawal sabse bada hai.

Socho aapne ek Spam Filter banaya jo emails ko Spam ya Not Spam me classify karta hai. Agar wo har email ko "Not Spam" bol de, toh uski "Accuracy" toh shayad 90% aa jaye (kyunki 90% emails real hoti hain), par kya wo model sach me useful hai? Bilkul nahi!

Isiliye sirf 'Accuracy' dekhna kaafi nahi hota. Hamein kuch aur important metrics (naapne ke tarike) sikhne honge: **Precision, Recall aur F1-Score.**

## 1. Confusion Matrix (Confusion Khatam Karne Ka Tarika)

Sabse pehle aata hai Confusion Matrix. Ye ek simple 2x2 table hota hai jo batata hai ki model ne kitni baar sahi prediction ki aur kitni baar galti ki.

Maan lo hum ek model se poochte hain: "Kya is patient ko bimari hai?" (Yes = Positive, No = Negative)

*   **True Positive (TP):** Patient ko bimari thi, aur model ne bhi kaha "Haan hai". (Sahi Jawab)
*   **True Negative (TN):** Patient ekdum theek tha, aur model ne bhi kaha "Nahi hai". (Sahi Jawab)
*   **False Positive (FP):** Patient theek tha, par model ne kaha "Bimari hai" (Galat Alarm - Type I Error).
*   **False Negative (FN):** Patient ko bimari thi, par model ne kaha "Nahi hai" (Khatarnak Galti - Type II Error).

## 2. Accuracy: Kitna Sahi Hai?

Accuracy ka matlab hota hai: "Model ne Total Predictions me se kitne Sahi Predictions kiye?"

**Formula:** (TP + TN) / Total Predictions

**Kab Use Karein:** Jab aapka data balanced ho. Matlab dono categories lagbhag barabar matra me hon.
**Kab Use NA Karein:** Jab data imbalance ho (jaise fraud detection me, jahan 99% cases normal hote hain aur sirf 1% fraud).

## 3. Precision: Jo Bola, Usme Se Kitna Sahi Tha?

Precision ka matlab hai: "Agar model ne 10 logon ko bola ki inko bimari hai, toh unme se sach me kitne logon ko bimari thi?"

**Formula:** TP / (TP + FP)

**Kahan Zaroori Hai:** Jahan **False Positive bahut mehanga ya nuksandayak ho.** Jaise Spam email detection. Agar koi important email galti se Spam me chali jaye (False Positive), toh aapka nuksan ho sakta hai. Isiliye wahan high precision chahiye.

## 4. Recall (Sensitivity): Asli Wale Kitne Pakde?

Recall (ya Sensitivity) ka matlab hai: "Jitne logon ko sach me bimari thi, unme se model ne kitno ko sahi pakda?"

**Formula:** TP / (TP + FN)

**Kahan Zaroori Hai:** Jahan **False Negative jaanlewa ho sakta hai.** Jaise Cancer detection. Agar kisi ko cancer hai par model kahe "Nahi hai" (False Negative), toh patient ki jaan ja sakti hai. Is case me hamein High Recall chahiye, bhale hi ek-do False Positives (galat alarm) aa jayein.

## 5. F1-Score: Dono Ka Balance

Zyadatar cases me hamein Precision aur Recall dono ka ek achha balance chahiye hota hai. F1-Score in dono ka 'Harmonic Mean' hota hai. 

Agar aapka F1-Score accha hai, matlab aapka model sach me solid perform kar raha hai, chahe data imbalanced hi kyu na ho.

## Conclusion

Sirf 99% Accuracy dekh kar khush mat ho jaiye! Hamesha problem par dhyan dijiye. Agar bimari pakadni hai, toh **Recall** par focus karein. Agar spam filtering karni hai, toh **Precision** par dhyaan dein. Aur agar ek balanced view chahiye toh **F1-Score** dekhein.

Agar aapko in metrics ke peeche ka math samajh aa gaya, toh aap ek behtar Data Scientist banne ke raaste par hain.

Agli post me hum baat karenge ek aur badi problem ke bare me—**Overfitting vs Underfitting**. Padhna na bhoolein!

**Agar ye topic pasand aaya toh doston ke sath zaroor share karein!**
