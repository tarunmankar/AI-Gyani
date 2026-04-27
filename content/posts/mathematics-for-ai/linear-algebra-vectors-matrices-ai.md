---
title: "Linear Algebra: Vectors aur Matrices (AI ke liye aasaan Hindi mein)"
description: "AI images aur data ko kaise samajhta hai? Sikhein Linear Algebra ke basics: Scalars, Vectors, aur Matrices aasaan example ke sath."
date: "2026-04-27"
author: "Tarun"
category: "mathematics-for-ai"
categoryLabel: "Mathematics for AI"
tags: ["Math", "Linear Algebra", "Vectors", "Matrices"]
image: "/images/linear_algebra_ai.png"
readingTime: 6
tableOfContents: true
order: 29
---

![Linear Algebra: Vectors aur Matrices (AI ke liye aasaan Hindi mein)](/images/linear_algebra_ai.png)

Machine Learning me **Linear Algebra** wo language hai jisme Data baat karta hai. Computer kisi word, rang (color), ya awaz ko directly nahi samajh sakta. Use sab kuch Numbers me chahiye hota hai. Inhi numbers ko systematically organize karna hi Linear Algebra kehlata hai.

Is post me hum 3 sabse ahem words samjhenge: **Scalar, Vector, aur Matrix**.

## 1. Scalar (Sirf Ek Number)

Agar main kahun "Mera wajan 70 Kg hai", to ye `70` sirf ek single number hai. Math aur physics ki bhasha me is single number ko **Scalar** kehte hain. 
* Example: Temperature (35°C), Speed (60 km/h).
* Python me: `x = 70`

## 2. Vector (Numbers ki List)

Ab man lijiye aap apne ghar ki jaankari AI ko dena chahte hain. Aap usme batate hain:
1. Kamre (Rooms) - 3
2. Area - 1500 sq ft
3. Umar - 5 saal

Agar hum in teeno numbers ko ek line ya list me likh dein: `[3, 1500, 5]`, to ise **Vector** kehte hain. 
* Asaan bhasha me: 1D Array ya ek simple List ko Vector kehte hain. 
* AI me har ek example ya data point ek Vector hota hai.

## 3. Matrix (Numbers ki Table)

Vector to sirf ek ghar ki details thi. Agar mujhe apne dosto ke gharo ki details bhi store karni ho to? Main bahut saare Vectors ko ek sath mila dunga. Isse jo Excel jaisi table banegi, use **Matrix** kehte hain.

* Example:
```text
[
  [3, 1500, 5],   # Mera ghar
  [2, 1200, 10],  # Dost ka ghar
  [4, 2000, 2]    # Relative ka ghar
]
```
Ye ek 2D array hai jisme rows aur columns hain. Deep Learning me images ek Matrix ke roop me hi save hoti hain, jahan har ek pixel ka ek number hota hai.

## 4. Tensor (Matrices ka Baap)

Agar aap Matrix ko 3D (aur usse zyada) me soch sakein, to use **Tensor** kehte hain. Jaise Google ki library ka naam "TensorFlow" hai, wo isiliye hai kyunki wahan data (Tensors) flow kar raha hota hai.

Ek colorful image asal me ek Tensor hoti hai, kyunki usme 3 layers hoti hain (Red, Green, Blue ki Matrices).

## 5. Inka Use Kaise Hota Hai? (Dot Product)

AI models in Matrices aur Vectors ko aapas me multiply aur add karte hain taaki patterns nikal sakein. Is multiplication ko **Dot Product** kehte hain. 
Jab aap NumPy padh rahe the, tab `np.dot(a, b)` isi Linear Algebra ko fast speed par kar raha tha!

## Conclusion

AI aur Data Science me aap jidhar bhi dekhenge, aapko Data **Vectors** aur **Matrices** me hi milega. Ise practically apply karne ke liye humne NumPy padha tha. Teoritical knowledge hone se aap samajh sakte hain ki code ke andar numbers kis tarah flow kar rahe hain.
