---
title: "Data Preprocessing kya hai? Machine Learning ka sabse zaroori step"
description: "Data preprocessing kya hota hai aur ML me data cleaning kyun zaroori hai? Missing values aur outliers ko handle karne ka simple Hindi guide."
date: "2026-04-28"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Data Preprocessing", "Data Science", "Beginners"]
image: "/images/data_preprocessing_guide.png"
slug: "data-preprocessing-machine-learning"
featured: false
readingTime: 7
tableOfContents: true
order: 41
---

![Data Preprocessing kya hai](/images/data_preprocessing_guide.png)

Ek baat bataiye, agar aapko aalu ki sabzi banani ho, toh kya aap sidhe aalu khet se laakar kadhai me daal dete hain? Nahi na! Pehle aap use dhote hain, chhilte hain, aur kaat-te hain. 

Bिल्कुल yahi process Machine Learning me bhi hota hai. Real world se jo data humein milta hai wo "Kacche Aalu" jaisa hota hai—ganda aur bikhra hua. Is gande data ko AI model ke laayak banane ke process ko hi **Data Preprocessing** kehte hain.

Data Scientists apna **70-80% time** sirf data ko saaf karne me lagate hain, kyunki AI ki duniya me ek bada famous rule hai: **"Garbage In, Garbage Out"** (Agar kachra andar jayega, toh result bhi kachra aayega).

## Data Preprocessing Kyun Zaroori Hai?

1. **Missing Data:** Real-world data me aksar blanks hote hain (jaise kisi user ne apna form pura nahi bhara).
2. **Noise (Kachra):** Kabhi-kabhi data me galat information hoti hai (jaise age me -5 saal likha hona).
3. **Improper Format:** Text data ko model nahi samajh sakta, use numbers me convert karna padta hai.
4. **Different Scales:** Agar ek column me age (20, 25, 30) ho aur dusre me salary (50000, 60000), toh model confuse ho sakta hai.

Chaliye dekhte hain ki Data Preprocessing ke main steps kya hote hain.

## Step 1: Handling Missing Data (Khali jagah bharna)

Agar aapke data me kuch values missing hain (jaise Excel me khali cell), toh model error dega. Ise theek karne ke 2 tarike hain:

* **Delete the Row:** Agar dataset bahut bada hai aur thodi si rows me hi values missing hain, toh un rows ko delete kar do.
* **Imputation (Fill the Blanks):** Ye behtar tarika hai. Hum us column ka *Mean (Average)*, *Median*, ya *Mode* nikal kar khali jagah me bhar dete hain. (Eg. Agar umar khali hai, toh sabki average umar wahan likh do).

## Step 2: Handling Outliers (Ajib values ko theek karna)

Maan lijiye aap class me bachho ki height map rahe hain. Sabki height 4 se 6 foot ke beech hai. Lekin kisi ne galti se 60 foot likh diya! Ye **Outlier** hai. Ye aapke pure ML model ki accuracy ko barbad kar sakta hai.
* Outliers ko ya toh hataya jata hai ya unhe theek kiya jata hai.

## Step 3: Encoding Categorical Data (Words ko Numbers me badalna)

Machine Learning models (jaise Linear Regression) Maths par chalte hain. Unhe 'Male' ya 'Female', 'Red' ya 'Blue' jaise words samajh nahi aate.
Humein in words ko numbers me convert karna padta hai. Iske liye 2 popular tarike hain:
1. **Label Encoding:** Words ko number dena (Jaise: Apple = 1, Banana = 2).
2. **One-Hot Encoding:** Har category ke liye naya column banana aur usme 0 ya 1 likhna.

## Step 4: Feature Scaling (Data ko ek level par lana)

Jaise main example diya tha, Height aur Salary ka comparison.
Height = 175 cm
Salary = 85000 INR
Machine ko lagega ki Salary wala column bahut bada hai aur Height unimportant hai. Is confusion ko dur karne ke liye hum saare data ko 0 se 1 (ya -1 se 1) ki range me laate hain.
Ise **Standardization** ya **Normalization** kehte hain.

## Summary

Data Preprocessing ek boring lekin sabse important kaam hai. Agar aapne apna data acche se saaf kar liya, toh aapka aadha Machine Learning project wahi successful ho gaya samjho!

Agli post me hum machine learning ke sabse popular type—**Regression Algorithms** ke baare me padhenge.
