---
title: "Overfitting vs Underfitting in Machine Learning: Simple Hindi Guide"
description: "Machine Learning me Overfitting aur Underfitting kya hota hai? Ratta marne wale model aur aalsi model ke beech ka difference aasaan example se samjhein."
date: "2026-04-30"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Overfitting", "Underfitting", "Bias Variance"]
image: "/images/overfitting_vs_underfitting.png"
slug: "overfitting-vs-underfitting-explained"
featured: false
readingTime: 7
tableOfContents: true
order: 49
---

![Overfitting vs Underfitting](/images/overfitting_vs_underfitting.png)

Jab hum ek Machine Learning model train karte hain, toh humara ultimate goal kya hota hai? Ki wo model naye, unseen data par achhi performance de. Lekin kai baar model training me toh 99% marks le aata hai, par real world me fail ho jata hai. Aisa kyu?

Isi problem ko samajhne ke liye hamein **Overfitting** aur **Underfitting** ka concept janna zaroori hai. Aaiye isko ek school ke student ke example se samajhte hain.

## 1. Underfitting: "Aalsi Student"

Maan lo ek student hai jiska kal Math ka exam hai. Usne poore saal kuch nahi padha, sirf last night 1-2 formula dekh liye. Exam me jab normal questions aaye, toh wo fail ho gaya.

**Machine Learning me:** Jab aapka model data ke pattern ko samajhne me puri tarah nakam rehta hai aur training data par hi bohot kharab accuracy deta hai, toh use **Underfitting** kehte hain.
Ye ek aalsi model hota hai jo trend pakad hi nahi paya.

*   **Pehchan:** Training Error bhi High, Testing Error bhi High.
*   **Kyu hota hai?** Model bahut zyada simple hai (jaise complex problem ke liye Linear Regression use karna) ya data bahut kam hai.

## 2. Overfitting: "Ratta Maar Student"

Ab ek doosre student ki baat karte hain. Isne book ke har ek question ko, har ek page ko 'rat liya' (memorize kar liya). Jab class me teacher ne book wale sawaal pooche, toh usne 100/100 score kiya! Par jab final exam me wahi question thoda ghuma kar (values change karke) aaya, toh wo confuse ho gaya aur fail ho gaya.

**Machine Learning me:** Jab aapka model training data ko itna zyada yaad kar leta hai (har choti-moti noise aur exception ko bhi pakad leta hai) ki naye data par wo perform hi nahi kar pata, toh use **Overfitting** kehte hain.

*   **Pehchan:** Training Error bohot Low (99% accuracy), par Testing Error bohot High (50% accuracy).
*   **Kyu hota hai?** Model bahut zyada complex hai (jaise bohot gehra Decision Tree) ya data me bohot noise hai.

## 3. The "Good Fit" (Perfect Student)

Ek achha student concepts ko samajhta hai. Wo questions ratne ke bajaye, unke peeche ka logic samjhega. Exam me koi naya sawaal aaye toh wo apne concepts apply karke answer nikal lega.

**Machine Learning me:** Ise **"Generalization"** kehte hain. Model ne data ka general trend pakad liya hai aur ab wo unseen/new data par achhe se kaam karta hai. Hamara goal yahi "Good Fit" achieve karna hota hai.

## Overfitting ko Kaise Rokein? (Solutions)

Overfitting ML ki sabse common problem hai. Ise rokne ke kuch tareeqe:

1.  **More Data:** Model ko aur zyada training data do.
2.  **Cross-Validation:** Training aur Testing data ko alag-alag tukdo me test karna.
3.  **Regularization (L1/L2):** Model ko thoda simple banane ke liye mathematical constraints lagana (Ridge, Lasso).
4.  **Pruning:** Decision trees ko zyada gehra banne se rokna.
5.  **Early Stopping:** Neural networks me jab testing accuracy girne lage, tabhi training rok dena.

## Conclusion

Underfitting tab hoti hai jab model data se kuch nahi seekhta, aur Overfitting tab hoti hai jab model data ko aankh band karke rat leta hai. Ek Data Scientist ka main kaam in dono ke beech ek sahi balance dhoondhna hota hai!

Next post me hum isi concept ka ek thoda mathematical version dekhenge jise **Bias vs Variance Tradeoff** kehte hain. 

**Agar ye basic concept samajh aaya ho, toh post ko doston ke sath share zaroor karein!**
