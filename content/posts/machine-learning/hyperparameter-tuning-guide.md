---
title: "Hyperparameter Tuning Guide in Hindi: GridSearchCV & RandomSearch"
description: "Machine Learning model ko best perform karwane ke liye Hyperparameter Tuning kya hoti hai? GridSearch aur RandomSearch ko asaan example se samjhein."
date: "2026-04-30"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Hyperparameter Tuning", "GridSearchCV", "RandomizedSearchCV", "Optimization"]
image: "/images/hyperparameter_tuning.png"
slug: "hyperparameter-tuning-guide"
featured: false
readingTime: 8
tableOfContents: true
order: 53
---

![Hyperparameter Tuning](/images/hyperparameter_tuning.png)

Aapne ek Machine Learning model bana liya (maan lo Random Forest). Ab wo accuracy toh de raha hai, par kya wo apni *maximum* speed aur power par chal raha hai? Shayad nahi! 

Kyunki har model ke andar kuch "dials" ya "switches" hote hain jinhe set karna padta hai. Inhi switches ko theek se adjust karne ke process ko **Hyperparameter Tuning** kehte hain.

## 1. Parameters vs Hyperparameters me Kya Farak Hai?

Ye samajhna bohot zaroori hai:
*   **Parameters:** Ye wo cheezein hain jo model *khud* seekhta hai training data se (jaise linear regression ka weight/slope). Inhe hum change nahi kar sakte.
*   **Hyperparameters:** Ye wo settings hain jo *hum* (Data Scientist) model train hone se **pehle** set karte hain. Jaise Random Forest me kitne trees banenge (n_estimators) ya Decision Tree kitna deep hoga (max_depth). Inhi par sab kuch depend karta hai!

Socho Hyperparameter tuning aisi hai jaise ek nayi gaadi ka suspension, tyre pressure, aur steering adjust karna taaki wo race me best perform kar sake.

## 2. Tuning Kaise Karein? (The 2 Famous Ways)

Data scientists ke paas Hyperparameter tuning ke do sabse popular tareeqe hote hain, jo `scikit-learn` library me asani se mil jate hain. Aaiye inko ek "Radio Station" dhoondhne ke example se samjhein.

### A. GridSearchCV (Grid Search CV)

Maan lo aap apne radio par `98.3 FM` dhoondhna chahte hain aur aap shuru se har ek decimal point check karna shuru karte hain: `98.0, 98.1, 98.2, 98.3...` 

**GridSearch me:** Hum system ko ek 'Grid' (list) de dete hain saare possible values ki (jaise n_estimators = [10, 50, 100] aur max_depth = [5, 10, 20]). Ab GridSearchCV baith kar in sabke **har ek combination** ko try karta hai aur dekhta hai kahan sabse achhi accuracy aayi.
*   **Fayda:** Aapko 100% sabse best answer milega kyunki usne kuch nahi chhoda.
*   **Nuksan:** Ye bohot, BOHOT zyada slow hota hai. Agar data bada ho toh isme kai ghante ya din lag sakte hain.

### B. RandomizedSearchCV (Random Search)

Radio station dhoondhne ka dusra tarika: Aap seedha random numbers par switch karte ho `95.1`, `100.4`, `98.5`, aur dekhte ho kahan signal achha hai. Phir jahan signal strong lage wahan aas paas tune karte ho.

**RandomSearch me:** Hum same list dete hain, par model saare combinations try nahi karta. Wo randomly kuch combinations uthata hai aur test karta hai. Hum bata sakte hain ki "Sirf 50 random attempts karo".
*   **Fayda:** Ye GridSearchCV se kaafi fast hota hai aur kam time me almost wahi accuracy laa deta hai jo GridSearch lata.
*   **Nuksan:** Shayad sabse "perfect" setting chhoot jaye, par mostly jo setting milti hai wo enough hoti hai.

## 3. Best Practices for Tuning

1.  Hamesha pehle model ka ek basic version run karein (jise "baseline model" kehte hain).
2.  Seedha GridSearch na lagayein, pehle RandomSearch lagakar dekhein ki kis range me values achhi aa rahi hain. Phir us chhoti range me GridSearch lagayein.
3.  Hamesha **Cross-Validation (CV)** ka use karein tuning ke sath (Jiske baare me hum agli post me padhenge!).

## Conclusion

Hyperparameter Tuning model ke andar chhupi hui extra 5-10% accuracy ko bahar nikalne ki chabi hai. Ye thoda time-consuming hota hai, lekin Kaggle competitions aur real-world apps me yahi choti si detail ek aam Data Scientist ko ek Expert banati hai.

Next post me padhiye ki ye 'CV' (Cross-Validation) aakhir kya cheez hai aur ye hamare model ko overfit hone se kaise bachati hai!
