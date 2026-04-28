---
title: "Regression Algorithms Explained: Linear aur Logistic Regression"
description: "Machine Learning me Regression kya hota hai? Linear Regression aur Logistic Regression ko asaan Hindi examples ke sath samjhein."
date: "2026-04-28"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Regression", "Linear Regression", "Logistic Regression"]
image: "/images/regression_algorithms_explained.png"
slug: "regression-algorithms-explained"
featured: false
readingTime: 6
tableOfContents: true
order: 42
---

![Regression Algorithms](/images/regression_algorithms_explained.png)

Pichli posts me humne dekha ki Supervised Learning me hum computer ko purana data (history) dikhate hain aur wo future ki cheezein predict karta hai. Supervised Learning ke sabse main pillars me se ek hai **Regression**.

Lekin ye Regression hota kya hai? Aur ML me ye kaise kaam karta hai? Aaiye bilkul simple bhasha me samajhte hain.

## Regression Kya Hota Hai?

Jab aapko kisi aisi cheez ki prediction karni ho jo ek **continuous number** ho (yani jiski value kuch bhi ho sakti hai), wahan Regression use hota hai.

**Examples:**
* Kisi ghar ki keemat kya hogi? (₹50 Lakh, ₹51.5 Lakh, ₹60 Lakh...)
* Agle mahine stock market ka price kya hoga?
* Ek student ko exams me kitne marks milenge?

Jab bhi sawal *"Kitna?" (How much?)* hota hai, wahan Regression model lagta hai.

## 1. Linear Regression (Sabse Aasaan Algorithm)

Linear Regression, Machine Learning ki "A-B-C-D" hai. Ye sabse simple aur sabse zyada seekha jane wala algorithm hai.

### Ye kaam kaise karta hai?
Sochiye ki aapke paas data hai: Ghar ka Size (Square feet) aur uski Keemat.
* 1000 sq ft = ₹50 Lakh
* 1500 sq ft = ₹75 Lakh

Agar aap is data ko ek graph par draw karein, toh points banenge. **Linear Regression ka ek hi kaam hota hai: In points ke beech se ek aisi seedhi line (Straight Line) nikalna jo saare points ke sabse kareeb ho.** Ise "Best Fit Line" kehte hain.

Jab ye line ban jati hai, toh agar koi 1200 sq ft wale naye ghar ki keemat puche, toh hum us line ke base par bata sakte hain ki uski keemat kareeb ₹60 Lakh hogi.

## 2. Polynomial Regression

Kya har data seedhi line me aata hai? Nahi!
Jaise age aur health ka relationship. Bachpan me health acchi hoti hai, phir badhti hai, aur budhape me girti hai. Ye ek curve banata hai.
Jab data ek curve jaisa ho, tab hum Linear Regression ki jagah **Polynomial Regression** ka use karte hain, jo seedhi line ki jagah graph par ek curved line banata hai.

## 3. Logistic Regression (Naam me Regression, par kaam Classification)

Ye ek thoda confusing concept hai lekin interview me zarur pucha jata hai. 
Iska naam "Logistic Regression" zaroor hai, lekin **ye Regression nahi, Classification karta hai.** 

Yani ye numbers predict nahi karta, balki categories predict karta hai.
* Ye email Spam hai ya nahi? (Yes/No)
* Patient ko cancer hai ya nahi? (Yes/No)

### Ye kaise kaam karta hai?
Ye ek S-shape ki curve (Sigmoid Curve) banata hai. Iska output hamesha 0 aur 1 ke beech (Probability) hota hai. 
Agar probability 0.5 se zyada hai, toh answer "Yes" hoga, aur agar kam hai toh "No". 

## Summary

* **Linear Regression:** Numbers aur amounts predict karne ke liye (Jaise: Price, Salary). Graph par seedhi line banata hai.
* **Logistic Regression:** "Yes/No" ya categories me divide karne ke liye (Jaise: Spam/Not Spam). Graph par S-Curve banata hai.

Agar aap apna ML career shuru kar rahe hain, toh Linear Regression sabse pehla algorithm hoga jiska aap code likhenge!

Agli post me hum baaki **Classification Algorithms** (jaise Decision Trees) ke bare me detail me baat karenge.
