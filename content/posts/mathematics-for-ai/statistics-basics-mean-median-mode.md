---
title: "Statistics Basics: Mean, Median, Mode aur Dispersion Guide"
description: "Data Science aur AI mein data ko kaise analyze karein? Seekhein Mean, Median, Mode, Standard Deviation, aur Variance ko simple Hindi examples ke saath."
date: "2026-04-28"
author: "Tarun"
category: "mathematics-for-ai"
categoryLabel: "Mathematics for AI"
tags: ["Statistics", "Mean", "Median", "Mode", "Standard Deviation", "Variance", "Data Science"]
image: "/images/statistics_mean_median_mode.png"
readingTime: 12
tableOfContents: true
order: 32
slug: "statistics-basics-mean-median-mode"
---

![Statistics for AI](/images/statistics_mean_median_mode.png)

Jab bhi hum AI ki baat karte hain, toh hum "Data" ki baat karte hain. Lekin 1 million users ka data sirf numbers ki ek bheed hai jab tak aap use **Statistics** ki nazar se na dekhein. Statistics humein wo chashma deta hai jisse hum bheed mein se "Pattern" dekh sakte hain.

Is post mein hum Statistics ke un pillar concepts ko samjhenge jo har Data Scientist aur AI Engineer ko aane chahiye.

---

## 1. Central Tendency: Data ka Markaz (Center)

Humein ye janna hota hai ki hamara data aam taur par (on average) kaisa dikhta hai.

### A. Mean (Average)
Sabko jodo aur count se divide karo. 
- **Use:** Jab data balanced ho.
- **Dushmani:** Outliers (bahut bada ya bahut chhota number) mean ko bigad dete hain.

### B. Median (Middle Value)
Data ko line se lagao (Sort) aur beech wala number uthao.
- **Use:** Jab data mein outliers hon (jaise salary data).

### C. Mode (Most Frequent)
Jo value sabse zyada baar aaye.
- **Use:** Categorical data ke liye (jaise sabse zyada bikne wala T-shirt size).

---

## 2. Dispersion: Data kitna "Faila" hua hai?

Sirf average janna kaafi nahi hai. Maan lijiye do shehron ka average temperature 25°C hai. Ek shehar mein roz 25 rehta hai, aur doosre mein kabhi 0 toh kabhi 50. Dono shehar alag hain! Ise naapne ke liye hum **Dispersion** use karte hain.

### A. Variance
Ye batata hai ki har data point average se kitna door hai. Jitna zyada variance, utna zyada bikhrav.

### B. Standard Deviation (SD)
Ye Variance ka square root hota hai. Ye humein batata hai ki "Aam taur par" data average se kitna bhatka hua hai. AI mein hum data ko "Standardize" karne ke liye SD ka use karte hain.

```python
import numpy as np

data = [10, 20, 30, 40, 50]
print(f"Mean: {np.mean(data)}")
print(f"Standard Deviation: {np.std(data):.2f}")
print(f"Variance: {np.var(data):.2f}")
```

---

## 3. Skewness aur Kurtosis (Data ki Shape)

- **Skewness:** Kya data ek taraf jhuka hua hai? (Right skewed matlab zyada log gareeb hain, left skewed matlab zyada log ameer hain).
- **Kurtosis:** Kya data ka "Peak" bahut uncha hai ya flat?

---

## 4. Why it matters in AI?

1. **Feature Scaling:** AI models tab acche chalte hain jab saare features (jaise Age aur Salary) ka scale same ho. Iske liye hum Mean aur SD use karte hain.
2. **Outlier Detection:** Agar koi data point Standard Deviation se bahut door hai, toh wo "Galti" ho sakti hai jise humein hatana chahiye.
3. **Model Evaluation:** Model ki error ka average (Mean Absolute Error) nikalne mein statistics hi kaam aati hai.

---

## Summary Table: Statistical Tools

| Concept | Simple Meaning | Real World Example |
|---|---|---|
| **Mean** | Average | Class ke average marks |
| **Median** | Center | India ki middle-class income |
| **Mode** | Popularity | Sabse zyada bikne wala mobile |
| **Std Dev** | Consistency | Virat Kohli ki batting consistency |
| **Variance** | Spread | Stock market ki volatility |

---

## FAQs

**1. Mean aur Median mein se kaunsa better hai?**
Dono ki apni jagah hai. Agar data saaf hai toh Mean, agar data mein "Elon Musk" jaisa koi ameer insaan (Outlier) hai toh Median better hai.

**2. Standard Deviation aur Variance mein kya fark hai?**
Variance ka unit square ho jata hai (jaise $cm^2$), par SD ka unit wahi rehta hai jo asli data ka hai (jaise $cm$). Isliye SD samajhna aasaan hota hai.

**3. AI ke liye kitni statistics chahiye?**
Basics (Mean, SD, Probability, Normal Distribution) 90% kaam ke liye kaafi hain.

**4. Normal Distribution kya hota hai?**
Ise "Bell Curve" bhi kehte hain. Asli duniya ka zyada tar data (height, weight, IQ) isi shape mein hota hai jahan zyada log average hote hain aur bahut kam log extremes par.

---

**Statistics data ki "Story" sunati hai. Ise samajh liya toh aap numbers se baate karna seekh jayenge! 📊**

---

**Tarun ke baare mein:** Tarun messy data se meaningful patterns nikalne mein expert hain. AI-Gyani par har stats concept crystal clear hai.
