---
title: "KNN aur SVM Algorithm Explained in Hindi"
description: "K-Nearest Neighbors (KNN) aur Support Vector Machine (SVM) algorithms kaise kaam karte hain? ML classification algorithms ka complete guide."
date: "2026-04-28"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "KNN", "SVM", "Classification"]
image: "/images/knn_svm_algorithms.png"
slug: "knn-svm-algorithm-explained"
featured: false
readingTime: 6
tableOfContents: true
order: 45
---

![KNN and SVM Algorithms](/images/knn_svm_algorithms.png)

Decision Tree aur Random Forest ke baad, Machine Learning (Supervised Learning) ke do aur bahut popular "Classification Algorithms" hain: **KNN (K-Nearest Neighbors)** aur **SVM (Support Vector Machine)**.

In dono ka naam thoda complex lagta hai, par inke kaam karne ka tarika bahut hi interesting aur real-life se juda hua hai. Aaiye inhe bilkul aam bhasha me samajhte hain.

## 1. K-Nearest Neighbors (KNN)

Ek purani kahawat hai: *"Insaan apne doston se pehchana jata hai."* (A man is known by the company he keeps). KNN algorithm bilkul isi usool par kaam karta hai.

**KNN ka matlab kya hai?**
* "K" ka matlab hai padosiyon (Neighbors) ki ginti. Jaise K=3, ya K=5.
* "Nearest" ka matlab hai sabse kareebi.
* "Neighbors" ka matlab hai padosi.

**Kaise kaam karta hai?**
Maan lijiye aapke pas Apple (Laal rang) aur Banana (Peele rang) ka data hai jo ek graph par point kiya gaya hai. 
Ab aapke pas ek naya fruit aata hai jiske baare me aapko pata nahi ki wo Apple hai ya Banana. 

KNN kya karega? Wo us naye fruit ke sabse kareebi 'K' padosiyon ko dekhega. 
Agar K = 3 hai, toh wo sabse nazdeek wale 3 fruits dekhega. Agar un 3 me se 2 Apple hain aur 1 Banana hai, toh KNN ka result hoga ki naya fruit bhi "Apple" hai (Voting ke hisab se).

**Fayda:** Ye algorithm samajhne me aur code karne me sabse aasaan hai. Ise "Lazy Learner" bhi kehte hain kyunki ye pehle se kuch nahi seekhta, balki jab naya data aata hai tabhi calculations karta hai.

## 2. Support Vector Machine (SVM)

SVM sunne me kisi future ki sci-fi machine jaisa lagta hai, par ye ek mathematical tool hai jo categories ke beech me **"Diwaar" (Boundary)** banata hai.

**SVM ka matlab kya hai?**
Imagine kijiye ek bade se field me ek taraf kuch Billiyan baithi hain aur dusri taraf kuch Kutte baithe hain. Aapko unke beech se ek aisi seedhi line (diwaar) khichni hai taaki dono alag-alag ho jayein, aur dono ki taraf line se thodi khaali jagah (margin) bhi bache.

Is "Best Line" ko ML ki bhasha me **Hyperplane** kehte hain. SVM algorithm ka ek hi target hota hai: Aisa Hyperplane dhoondhna jo dono categories ke beech sabse zyada "Gap (Margin)" create kare.

**Support Vectors kise kehte hain?**
Jo Billi aur Kutta us diwaar ke sabse zyada kareeb hote hain, unhe "Support Vectors" kehte hain kyunki wahi decide karte hain ki diwaar kahan banegi. Agar wo apni jagah se hil jayein, toh line bhi hil jayegi.

**Kahan Use Hota Hai?**
Jab data clear-cut do hisson me banta ho (Jaise Cancer hai ya nahi), aur aapko 100% accuracy wali boundary chahiye, wahan SVM best kaam karta hai. Ye Face Recognition aur Text classification me bahut use hota hai.

## Summary

* **KNN** "Padosiyon" ko dekh kar naye data ki pehchan karta hai. Ye simple hai par bade data ke liye slow ho jata hai.
* **SVM** ek "Boundary/Diwaar" banata hai jo do categories ko dur-dur rakhti hai. Ye complex data aur High accuracy ke liye bahut zabardast hai.

Ab tak humne Supervised Learning (Labels wala data) padhi hai. Agli post me hum "Bina Label" wale data se seekhne ka tarika yani **Clustering (Unsupervised Learning)** ko samjhenge!
