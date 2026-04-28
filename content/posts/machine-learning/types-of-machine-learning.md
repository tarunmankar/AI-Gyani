---
title: "Types of Machine Learning Explained"
description: "Supervised, Unsupervised, aur Reinforcement Learning kya hote hain? Machine Learning ke sabhi types ko simple examples ke sath samjhein."
date: "2026-04-28"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]
image: "/images/types_of_machine_learning.png"
slug: "types-of-machine-learning"
featured: true
readingTime: 6
tableOfContents: true
order: 40
---

![Types of Machine Learning](/images/types_of_machine_learning.png)

Jab hum kisi bachhe ko sikhate hain, toh hum alag-alag tarike use karte hain. Kabhi hum use exact answer batate hain, kabhi use khud patterns dhoondhne dete hain, aur kabhi use galti karke seekhne dete hain. 

Bिल्कुल isi tarah, Machine Learning me bhi computers ko sikhane ke teen (3) main tarike hote hain. Aaiye in **Types of Machine Learning** ko detail me samajhte hain.

## 1. Supervised Learning (Teacher ki Nigrani me Seekhna)

Ye sabse aam aur sabse zyada use hone wala ML ka type hai.

* **Kya hai?** Isme hum model ko "Labeled Data" dete hain. Yani hum model ko input ke sath-sath uska correct output (answer) bhi pehle hi bata dete hain. Model ka kaam us input aur output ke beech ka relationship (pattern) samajhna hota hai.
* **Example:** Aapne computer ko 1000 billiyon aur kutton ki photos di, aur har photo par label lagaya hua hai "Ye billi hai", "Ye kutta hai". Computer isse seekh jata hai, aur agli baar jab aap bina label ki photo denge, toh wo bata dega ki photo kiski hai.
* **Real-World Use:** Email Spam Filtering, House Price Prediction.

Supervised Learning aage do hisson me banti hai:
1. **Classification:** Jab output ek category ho (Jaise: Spam ya Not Spam).
2. **Regression:** Jab output ek number ho (Jaise: Ghar ki keemat 50 Lakh).

## 2. Unsupervised Learning (Bina Teacher ke Seekhna)

* **Kya hai?** Yahan hum model ko data toh dete hain, lekin koi "Label" ya "Answer" nahi dete. Model ko khud hi data me chhhipe hue patterns, groupings, ya structures dhoondhne padte hain.
* **Example:** Aapne computer ko dher saare phalon ki photos de di, bina bataye ki kaunsa phal kya hai. Computer unke rang, aakar, aur shape ke hisab se unhe groups me baant dega. (Laal phal ek taraf, lambe phal ek taraf). Is grouping ko **Clustering** kehte hain.
* **Real-World Use:** Customer Segmentation (Amazon apne customers ko unki shopping habits ke hisab se groups me baant-ta hai), Recommendation Systems.

## 3. Reinforcement Learning (Galtiyon se Seekhna)

Ye type bilkul waisa hai jaise ek pet dog ko train kiya jata hai (Sahi kaam karne par reward, galat par punishment).

* **Kya hai?** Isme model (jise Agent kehte hain) ek environment me interact karta hai. Wo decisions leta hai. Agar decision sahi ho, toh use "Reward" milta hai, aur agar galat ho toh "Penalty". Model ka target sabse zyada rewards collect karna hota hai. Dheere-dheere wo samajh jata hai ki best strategy kya hai.
* **Example:** Video games khelne wala AI. Shuru me AI Mario ko gaddhe me gira deta hai, lekin penalty milne par wo samajh jata hai ki wahan koodna hai.
* **Real-World Use:** Self-driving Cars (Tesla), Robotics, Chess/Go khelne wale AI (AlphaGo).

## 4. Semi-Supervised Learning (Bonus Type)

Aajkal ek aur approach kafi popular hai jise Semi-Supervised Learning kehte hain. Isme thoda sa labeled data aur bahut saara unlabeled data hota hai. Ye tab use hota hai jab data ko label karna (jaise thousands of medical images ko mark karna) bahut mehenga ya time-consuming ho.

## Conclusion

Har problem ke liye ek alag type ka Machine Learning algorithm use hota hai. Agar aapke paas answers available hain toh **Supervised**, agar sirf data hai aur patterns dhoondhne hain toh **Unsupervised**, aur agar environment me decision lene hain toh **Reinforcement** Learning best hai.

Aane wale posts me hum In teeno types ke under aane wale popular Algorithms (jaise Linear Regression, Decision Trees) ke bare me detail me padhenge.
