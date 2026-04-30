---
title: "Bias vs Variance Tradeoff Kya Hai? Simple Explanation"
description: "Machine Learning me Bias aur Variance kya hote hain? Bias-Variance Tradeoff ko archery (teer-andaazi) ke aasaan example se samjhein."
date: "2026-04-30"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Bias", "Variance", "Bias-Variance Tradeoff", "Overfitting"]
image: "/images/bias_variance_tradeoff.png"
slug: "bias-vs-variance-simple-guide"
featured: false
readingTime: 8
tableOfContents: true
order: 50
---

![Bias vs Variance](/images/bias_variance_tradeoff.png)

Pichli post me humne **Overfitting aur Underfitting** ki baat ki thi. Aaj hum iska mathematical bhai padhenge, jise bolte hain **Bias vs Variance**. Har data scientist ke interview me ek na ek baar ye sawaal zaroor aata hai!

Isko samajhne ke liye socho aap teer (arrow) chala rahe hain aur aapka target hai bilkul beech (bullseye) par hit karna. Ye bullseye wahi perfect answer hai jo hamara model predict karna chahta hai.

## 1. Bias Kya Hota Hai? (High Bias = Underfitting)

Maan lo aapke paas ek sasti bow (dhanush) hai. Aap lagataar teer chala rahe hain, par har baar aapka teer bullseye se bohot door jaakar lag raha hai, aur sare teer aas-paas hi lag rahe hain. Aap accuracy achieve nahi kar pa rahe.

**Machine Learning me:** Jab aapka model itna simple hota hai ki wo data ke underlying patterns ko samajh hi nahi pata, toh kehte hain ki model ka **Bias High** hai. Ye model thoda 'ziddi' hota hai, ye pehle se hi kuch assumptions le leta hai aur real data par dhyan nahi deta. (Yahi Underfitting ki nishani hai).
*   *Example:* Non-linear data par simple Linear Regression laga dena.

## 2. Variance Kya Hota Hai? (High Variance = Overfitting)

Ab maan lo aapke paas ek duniya ki sabse mehangi bow hai, jo itni sensitive hai ki hawa ke ek halke jhonke se bhi uska nishana badal jata hai. Is baar teer pure target board par yahan-wahan bikhre hue hain. Kisi teer ka nishana ek doosre se match nahi kar raha.

**Machine Learning me:** Jab aapka model data ki har choti se choti detail aur noise ko bhi learn kar leta hai, toh kehte hain model me **Variance High** hai. Aise model training data pe toh solid kaam karte hain, par naye data (hawa ke naye jhonke) par inki accuracy puri tarah bikhar jati hai. (Yahi Overfitting ki nishani hai).
*   *Example:* Ek bahut bada Deep Decision tree jo data ko memorize kar leta hai.

## 3. The Bias-Variance Tradeoff (Balance Banana)

Agar aap apne model ko bohot simple banayenge toh Bias badh jayega (Underfitting). 
Agar aap model ko bohot complex banayenge toh Variance badh jayega (Overfitting).

Hamein na toh High Bias chahiye aur na hi High Variance! Hamein chahiye **Low Bias aur Low Variance**. 
Lekin problem ye hai ki aap ek ko kam karenge, toh dusra badh jayega. Ise hi **Bias-Variance Tradeoff** kaha jata hai.

**Hamara Goal:** Ek aisa "Sweet Spot" dhoondhna jahan Model thoda complex ho taaki patterns samajh sake (Low Bias), par itna complex na ho ki ratta maar le (Low Variance).

### Ise Kaise Control Karein?

1.  **High Bias kam karne ke liye:** Model ki complexity badhayein, naye features (columns) add karein, ya Linear ki jagah Non-linear model use karein (jaise Decision Trees).
2.  **High Variance kam karne ke liye:** Data ko badhayein (More Data), Regularization (L1/L2) lagayein, ya Ensemble learning (Random Forest) ka use karein.

## Conclusion

Simple bhasha me kahu toh: 
*   **Bias** = Model ka galat sochna (kyunki wo samajhna hi nahi chahta).
*   **Variance** = Model ka over-react karna (kyunki wo har choti cheez yaad rakhta hai).

Dono ka balance hi ek perfect Machine Learning model banata hai! 

Agli post me hum baat karenge ki apne data ko is tarah se kaise tayar karein ki model asani se samajh sake. Ise bolte hain **Feature Engineering**. Stay tuned!
