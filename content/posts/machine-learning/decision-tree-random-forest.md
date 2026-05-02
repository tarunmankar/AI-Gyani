---
title: "Decision Trees & Random Forest: Pedon ka jangal"
description: "Decision Tree kaise kaam karta hai? Entropy, Gini Impurity, aur Random Forest ka Bagging logic samjhein simple Hindi mein."
date: "2026-04-30"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Decision Tree", "Random Forest", "Entropy", "Gini Impurity", "Overfitting", "Bagging", "ML Algorithms"]
image: "/images/decision_tree_random_forest.png"
featured: false
readingTime: 12
tableOfContents: true
order: 44
slug: "decision-tree-random-forest"
---

![Decision Tree and Random Forest](/images/decision_tree_random_forest.png)

Insaani dimaag sawaal puch kar faisle leta hai: *"Kya dhoop hai? Haan -> Chashma pehno."* **Decision Tree** bilkul isi tarah kaam karta hai. Lekin ek akela ped "Ziddi" (Overfit) ho sakta hai. Isliye hum pura **Random Forest** (Pedon ka jangal) banate hain.

---

## 1. Decision Tree: The Root of Wisdom

Decision Tree data ko "Sawal-Jawab" ke basis par split karta hai.
- **Entropy:** Data mein kitna "Confusion" ya kachra hai.
- **Gini Impurity:** Ek chhota aur fast formula jo batata hai ki split kitna saaf hai.
- **Information Gain:** Kis sawal ko puchne se sabse zyada "Clarity" mili.

---

## 2. Overfitting & Pruning

Ek ped hamesha koshish karta hai ki wo har point ko "Rat" (Memorize) le. 
- Ise rokne ke liye hum **Pruning** (Ped ki chhatai) karte hain.
- Hum `max_depth` set karte hain taaki ped zaroorat se zyada bada na ho jaye.

---

## 3. Random Forest: The Power of many

Ek akela expert galti kar sakta hai, par 100 experts ka "Average" hamesha behtar hota hai.
- **Bagging:** Forest ka har ped data ke alag "Random Sample" par train hota hai.
- **Feature Randomness:** Har split par model sirf kuch random features hi dekh sakta hai. 
Ise "Diversity" badhti hai aur accuracy super-high ho jati hai.

---

## 4. Feature Importance

Random Forest ka sabse bada fayda ye hai ki wo batata hai ki kaunsa column (feature) sabse zaroori hai. 
- "Ghar ki price mein Location zyada zaroori hai ya Bedrooms?" 
Random Forest aapko ek score dega jo business decisions mein bahut kaam aata hai.

---

## 5. Summary Table: Tree vs Forest

| Feature | Decision Tree | Random Forest |
|---|---|---|
| **Interpretability**| High (Can see splits) | Low (Black box) |
| **Accuracy** | Moderate | High |
| **Stability** | Low (Small data change impacts tree) | High |
| **Overfitting** | High | Low |

---

## FAQs

**1. Entropy aur Gini mein se kaunsa chunu?**
Gini Impurity fast hai (math chhota hai), par Entropy thode behtar splits de sakta hai. Professionally, results mein bahut zyada fark nahi padta.

**2. "Out-of-Bag" (OOB) error kya hai?**
Kyonki har ped kuch data chhod deta hai (Bagging), hum us chhoote hue data par model ko test kar sakte hain bina alag se "Test set" banaye.

**3. Kya Random Forest Regression kar sakta hai?**
Haan! Classification ke liye ye "Voting" karta hai, aur Regression ke liye ye saare trees ka "Average" nikalta hai.

**4. Random Forest ko 'Black Box' kyon kehte hain?**
Kyonki 500 pedon ke voting logic ko insaan ke liye trace karna namumkin hai. Hum sirf output par bharosa karte hain.

---

**Random Forest tabular data (Excel sheets) ka "King" hai. Ise master kar liya toh aap kisi bhi prediction project ko handle kar sakte hain! 🌳**

---

**Tarun ke baare mein:** Tarun ensemble architectures aur tree-based models ke specialist hain. AI-Gyani par har ped rooted hai.
