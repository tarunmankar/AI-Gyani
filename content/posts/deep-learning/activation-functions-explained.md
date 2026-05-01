---
title: "Activation Functions kya hote hain? (AI Math Explained)"
image: "/images/activation_functions_ai.png"
slug: "activation-functions-explained"
category: "deep-learning"
categoryLabel: "Deep Learning"
description: "Deep Learning me Activation Functions (ReLU, Sigmoid, Tanh) kya hote hain aur inka use kyu hota hai? Aasaan Hindi guide me samjhiye."
author: "Tarun"
tags: ["Activation Functions", "ReLU", "Sigmoid", "Deep Learning Math"]
featured: false
relatedPosts: ["neural-networks-explained-simple-way", "loss-functions-explained"]
readingTime: 11
tableOfContents: true
order: 60
---

![Activation Functions in AI](/images/activation_functions_ai.png)

Pichle post mein humne Neural Networks ki puri factory samjhi thi. Humne dekha tha ki kaise har Neuron ek chota sa math calculation karta hai (Input × Weight + Bias). Lekin us calculation ke baad ek sabse zaroori step aata hai, jise hum **Activation Function** kehte hain.

Agar aap ek AI developer banna chahte hain, toh aapko "ReLU", "Sigmoid", aur "Softmax" jaise words baar-baar sunne ko milenge. Ye sab Activation Functions ke naam hain. 

Par aakhir **Activation Functions kya hote hain?** Aur inke bina Neural Network ek normal calculator kyu ban jata hai? Aaiye is post me isko ekdum simple bhasha me samajhte hain.

---

## 1. Activation Function kya hai? (Simple Concept)

Socho aapke dimaag (brain) ke andar ek Neuron hai jo "Garam cheez" (Hot object) ko pehchanta hai. Aapne ek garam chai ki pyali pakdi. Agar pyali halki si garam hai, toh aapka neuron chup rahega. Lekin agar pyali bahut zyada jalti hui garam hai, toh wo neuron turant "Activate" ho jayega aur aapka dimaag hath peeche kheench lega.

Neural Network me bhi **Activation Function ek "Gatekeeper" (Chowkidaar) ki tarah kaam karta hai.**

Jab ek Artificial Neuron ke paas bahut saara data (inputs aur weights) add hokar aata hai, toh Activation function us data ko check karta hai aur decide karta hai:
**"Kya is Neuron ka result itna important hai ki isko aage (next layer me) bheja jaye?"**

Ya toh wo us neuron ko *Fire* (Activate) kar dega, ya phir usko block kar dega (Zero kar dega).

---

## 2. Humhe Activation Functions ki Zaroorat Kyu Hai?

Iska ek word me answer hai: **Non-Linearity**. (Ghabraiye mat, is bhari shabd ka matlab simple hai).

Maan lijiye aapke network me 100 layers hain, lekin aapne koi activation function use nahi kiya. Aise me, wo 100 layers mil kar bhi sirf wahi kaam kar payengi jo 1 single layer kar sakti hai. Kyu? Kyunki Maths me `Linear + Linear = Linear` hi hota hai. 

Duniya ki maximum problems (jaise kutte-billi ko pehchanna, aawaz samajhna) straight lines (Linear) nahi hoti, wo complex aur teudhi-medhi (Non-linear) hoti hain. Activation Functions network me us "teudhe-pan" (curves) ko introduce karte hain, taaki AI complex problems solve kar sake. Bina iske, Deep Learning deep reh hi nahi jayegi, sirf ek simple linear equation ban jayegi!

---

## 3. Top 3 Sabse Popular Activation Functions

Industry me aaj kal kuch ginti ke activation functions sabse zyada use hote hain. Chaliye unhe dekhte hain:

### A. Sigmoid (The S-Curve)
Ye purane jamane ka superstar hai. 
* **Kaise kaam karta hai?** Ye kisi bhi number ko squish karke `0 se 1` ke beech me la deta hai. Agar number bahut bada negative hai, toh ye usko 0 ke paas kar dega. Agar bahut bada positive hai, toh 1 ke paas kar dega.
* **Kahan use hota hai?** Aaj kal ise sirf Output layer me use kiya jata hai jab humhe **Probability** (0% se 100% chance) nikalni hoti hai. (Jaise: "Ye email 0.99 (99%) spam hai").
* **Problem:** Ye deep networks me "Vanishing Gradient" naam ki problem create karta hai jisse network seekhna band kar deta hai.

### B. ReLU (Rectified Linear Unit) - The King 👑
Aaj ki date me **90% Deep Learning models me ReLU ka hi use hota hai**. Ye sabse simple aur powerful hai.
* **Kaise kaam karta hai?** Iska rule simple hai: **"Agar number Negative hai, toh usko 0 kar do. Agar number Positive hai, toh usko waisa hi rehne do."**
  * `ReLU(-10) = 0`
  * `ReLU(50) = 50`
* **Kahan use hota hai?** Har Neural Network ki **Hidden Layers** me almost humesha ReLU lagaya jata hai.
* **Faida:** Ye calculations ko bahut fast kar deta hai, kyunki negative aane par neuron band (0) ho jata hai, toh processor ki speed bach jati hai.

### C. Softmax (The Multi-chooser)
Softmax function Sigmoid ka bada bhai hai.
* **Kaise kaam karta hai?** Jab aapke paas 2 se zyada options (classes) hon, tab Softmax kaam aata hai. Ye saare options ki probability is tarah adjust karta hai ki un sabka total humesha 1 (100%) aaye.
* **Kahan use hota hai?** Humesha **Output Layer** me (Multi-class classification me). 
* **Example:** Agar model ko batana hai ki photo me Car, Bike, ya Truck hai. Toh Softmax answer dega:
  * Car: 70% (0.7)
  * Bike: 20% (0.2)
  * Truck: 10% (0.1)
  (Total = 100%)

---

## 4. Tanh aur Leaky ReLU kya hain?

In teen ke alawa bhi kuch functions hotey hain jo kabhi-kabhi dikh jate hain:

* **Tanh (Hyperbolic Tangent):** Ye bilkul Sigmoid jaisa hota hai, par iski range `0 se 1` ki bajaye `-1 se +1` tak hoti hai. Ye RNNs (Recurrent Neural Networks) me use hota hai.
* **Leaky ReLU:** ReLU me ek problem hoti hai "Dying ReLU" (yani jab inputs humesha negative aane lagein toh wo neuron hamesha ke liye 0 hokar 'mar' jata hai). Ise theek karne ke liye Leaky ReLU banaya gaya. Isme negative hone par ekdum 0 nahi kiya jata, balki ek bahut choti value (jaise 0.01) rakhi jati hai, taaki neuron zinda rahe.

---

## FAQs (Aksar Puche Jane Wale Sawal)

### 1. Mai kaise decide karu ki konsa Activation function use karna hai?
Bahut simple rule hai:
- Hidden layers me hamesha **ReLU** se start karein.
- Agar aapka final answer sirf Yes/No me aana hai (Binary), toh output layer me **Sigmoid** use karein.
- Agar final answer me kai saari categories me se ek chunni hai (Multi-class), toh output layer me **Softmax** use karein.

### 2. Kya bina Activation function ke neural network ban sakta hai?
Ban sakta hai, par use neural network nahi, sirf Linear Regression kahenge. Wo complicated cheezein (jaise images ko pehchanna) nahi kar payega.

---

## Conclusion

Activation Functions Neural Networks ki "Decision Making" power hote hain. Inke bina, ek AI network sirf numbers ko jodna-ghatana janta. ReLU, Sigmoid aur Softmax network me us "Non-Linearity" ka jadoo bharte hain jisse AI humari duniya ke aade-tirche patterns ko samajh pata hai.

Ab humhe pata hai ki network kaam kaise karta hai aur decision kaise leta hai. Lekin humne baat ki thi ki jab AI galti karta hai (jaise dog ko cat bol deta hai), toh wo "seekhta" hai. Par ye pata kaise chalta hai ki usne kitni badi galti ki hai? 

Is galti (error) ko napne ke mathematical tarike ko **Loss Function** kehte hain. Agle post me hum janenge ki ye AI ki duniya me *Loss Functions kya hote hain* aur kaise kaam karte hain. 

Agar aapko is post me ReLU aur Sigmoid ka concept clear hua ho, toh is article ko un dosto ke sath share karein jo AI field me apna career shuru kar rahe hain!
