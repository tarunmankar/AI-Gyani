---
title: "NumPy Tutorial in Hindi: AI ke liye Array aur Math"
description: "NumPy kya hai aur AI mein iska kya use hai? Is beginner-friendly tutorial mein seekhein arrays banana aur unpar fast math operations karna."
date: "2026-04-27"
author: "Tarun"
category: "python-for-ai"
categoryLabel: "Python for AI"
tags: ["Python", "NumPy", "Arrays", "Data Science"]
image: "/images/numpy_ai_beginners.png"
readingTime: 7
tableOfContents: true
order: 22
---

Machine Learning aur AI mein humesha **Data** aur **Numbers** ki baat hoti hai. Lakhon numbers ko ek sath calculate karne ke liye normal Python list bahut slow hoti hai. Yahin entry hoti hai **NumPy** ki! Is post mein hum NumPy ke basics samjhenge.

## 1. NumPy Kya Hai?

**NumPy** ka full form hai *Numerical Python*. Ye ek aisi library hai jo Python mein arrays (ek tarah ki special list) aur complex math operations ko bahut fast bana deti hai. 

**Normal List vs NumPy Array:**
Agar aapke paas 10 lakh numbers ki ek list hai aur aap sabme +5 karna chahte hain, to normal Python `for` loop bahut time lega. Lekin NumPy ye kaam micro-seconds mein kar dega kyunki ye andar se C-language mein likha gaya hai.

## 2. NumPy Install aur Import Karna

Agar aapne abhi tak install nahi kiya hai, to terminal mein likhein:
```bash
pip install numpy
```

Ab apne code mein ise import karein:
```python
import numpy as np
```

## 3. NumPy Array Banana

Array ek box ki tarah hai jisme aap numbers rakhte hain.

### 1D Array (Line mein)
```python
# Ek normal list se array banana
my_list = [10, 20, 30, 40]
arr = np.array(my_list)

print(arr)
# Output: [10 20 30 40]
```

### 2D Array (Matrix/Table ki tarah)
2D array ka matlab hai rows aur columns. AI mein images 2D (ya 3D) arrays hi hoti hain!
```python
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix)
# Output:
# [[1 2 3]
#  [4 5 6]]
```

## 4. NumPy Arrays ki Superpowers (Math Operations)

NumPy ki sabse badi taqat hai ki aap pure ke pure array par ek sath math kar sakte hain, bina kisi loop ke! Isko "Vectorization" kehte hain.

```python
import numpy as np

prices = np.array([100, 200, 300, 400])

# Har price me 50 jodna
new_prices = prices + 50
print(new_prices) # Output: [150 250 350 450]

# Har price ko 2 se multiply karna
double_prices = prices * 2
print(double_prices) # Output: [200 400 600 800]
```
Ye normal Python list ke sath aise directly nahi ho sakta!

## 5. Kuch Zaroori NumPy Functions

NumPy mein kuch aise functions hain jo AI mein roz kaam aate hain:

1. **Zeroes ka array banana:** (Jab aapko khali jagah chahiye)
   ```python
   zeros = np.zeros(5)
   print(zeros) # Output: [0. 0. 0. 0. 0.]
   ```

2. **Random numbers generate karna:** (AI models ko start karne ke liye)
   ```python
   random_nums = np.random.rand(3)
   print(random_nums) # Output e.g.: [0.54 0.12 0.89]
   ```

3. **Stats nikalna (Mean, Max, Min):**
   ```python
   marks = np.array([85, 90, 78, 92, 88])
   
   print(marks.max())  # 92 (Sabse zyada marks)
   print(marks.min())  # 78 (Sabse kam marks)
   print(marks.mean()) # 86.6 (Average marks)
   ```

## Conclusion

NumPy Data Science aur AI ka foundation (neev) hai. Aap chahe image processing karein, voice recognition karein ya stock market prediction, andar hi andar sab kuch NumPy arrays ke form mein hi process ho raha hota hai.

Ek baar aapko NumPy samajh aa gaya, to agla step hai **Pandas**, jo table wale data (jaise Excel) ko handle karne ka king hai. Agli post mein hum Pandas seekhenge!
