---
title: "Statistics Basics: Mean, Median, Mode — Data Science ke liye"
description: "Mean, Median, aur Mode kya hote hain? AI aur Data Science mein statistics ke in 3 sabse zaroori concepts ko asaan Hinglish mein samjhein."
date: "2026-04-28"
author: "Tarun"
category: "mathematics-for-ai"
categoryLabel: "Mathematics for AI"
tags: ["Statistics", "Mean", "Median", "Mode", "Data Science"]
image: "/images/statistics_mean_median_mode.png"
readingTime: 7
tableOfContents: true
order: 32
---

![Statistics Basics: Mean, Median, Mode — Data Science ke liye](/images/statistics_mean_median_mode.png)

Jab mujhe pehli baar kisi ne kaha ki Machine Learning ke liye Statistics zaroori hai, toh main thoda dara. Math mein kabhi zyada interest nahi tha. Lekin jab mujhe pata chala ki Mean, Median sirf 3 simple cheezein hain — toh lagaa, yaar itna simple tha? Chaliye same realisation aapko bhi 5 minute mein de deta hoon.

## 1. Mean (Average) — Sabse Common

**Mean** ka matlab hai data ke saare numbers ko jodkar unki count se divide karna. Isse hum "Average" bhi kehte hain.

**Formula:** Mean = Sum of all values ÷ Number of values

**Example:**
Maan lo 5 students ke marks hain: `[60, 70, 80, 90, 100]`

```python
import numpy as np

marks = np.array([60, 70, 80, 90, 100])
mean = marks.mean()
print(f"Mean (Average): {mean}")  # Output: 80.0
```

**Kab use karein?** Jab data mein koi zyada bada ya bada chota outlier (alag hata hua number) na ho.

**Problem with Mean:** Agar ek outlier ho, jaise ek student ne `0` marks liye, toh mean ghat jayega aur galat impression dega.

## 2. Median — Beech wala Number

**Median** wo number hota hai jo data ko exactly do barabar halves mein baant deta hai — jab data sorted ho.

**Steps:**
1. Data ko chote se bade order mein sort karo
2. Beech wala number nikalo
3. Agar even numbers hain, toh beech ke do numbers ka average lo

**Example:**
```python
import numpy as np

marks = np.array([60, 70, 80, 90, 500])  # 500 ek outlier hai!
print(f"Mean: {marks.mean()}")    # Output: 160 (galat impression!)
print(f"Median: {np.median(marks)}")  # Output: 80 (sahi!)
```

**Kab use karein?** Jab data mein outliers ho. Jaise ghar ki keemat batani ho — ek bahut mehenga ghar average ko bigad deta hai, lekin median sahi picture deta hai.

## 3. Mode — Sabse Zyada Aane Wala

**Mode** wo value hoti hai jo data mein **sabse zyada baar aati hai**.

**Example:**
Maan lo ek dukaan par ek hafte mein biki huyi T-shirt sizes: `[S, M, L, M, XL, M, S, M]`

```python
from scipy import stats

sizes = [1, 2, 3, 2, 4, 2, 1, 2]  # S=1, M=2, L=3, XL=4
mode_result = stats.mode(sizes)
print(f"Mode: {mode_result.mode[0]}")  # Output: 2 (yaani Size M!)
```

Dukaan ko pata chala ki **Size M sabse zyada bikti hai** — ab woh zyada stock rakhe ga!

**Kab use karein?** Jab aapko pata karna ho ki kaunsi category sabse popular hai. Sales analysis, recommendation systems, aur market research mein.

## 4. Teen mein se Kaunsa Use Karein?

| Situation | Best Choice |
|:---|:---|
| Data mein koi bada outlier nahi | **Mean** |
| Data mein outliers hain | **Median** |
| Categories ya most popular item | **Mode** |
| Salary distribution | **Median** (ek CEO ki salary average bigad deti hai) |
| Student marks | **Mean** (aam taur par balanced hote hain) |

## Kestudy: Salary Analysis

Maan lo ek company mein 5 employees hain:
- 4 employees earn: ₹30,000/month
- 1 CEO earns: ₹10,00,000/month

```python
import numpy as np
from scipy import stats

salaries = [30000, 30000, 30000, 30000, 1000000]

print(f"Mean salary: ₹{np.mean(salaries):,.0f}")     # ₹2,24,000 — Bahut misleading!
print(f"Median salary: ₹{np.median(salaries):,.0f}") # ₹30,000 — Sahi reality!
print(f"Mode salary: ₹{stats.mode(salaries).mode[0]:,.0f}") # ₹30,000 — Sahi!
```

Isliye jab log kehte hain "Average salary ₹2 lakh hai" — dhyan raho, median zyada honest hoti hai!

Mean, Median, aur Mode sirf statistics nahi, balki data ki aankhein hain. Inke bina aap sirf andhere mein teer maar rahe hote ho. Jab bhi aapke paas koi naya dataset aaye, sabse pehle yahi teen cheezein calculate karein — reality wahan dikhti hai jahan average (mean) fail ho jata hai.

Agla topic hai **Probability Basics** — jahan hum sikhenge ki AI kaise bolta hai '90% chance hai ki ye billi hai'! Taiyaar ho?
