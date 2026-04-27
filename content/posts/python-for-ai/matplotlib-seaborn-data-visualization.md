---
title: "Data Visualization: Matplotlib aur Seaborn Tutorial in Hindi"
description: "AI aur Data Science mein charts aur graphs kaise banate hain? Seekhein Matplotlib aur Seaborn ke sath data visualization karna."
date: "2026-04-27"
author: "Tarun"
category: "python-for-ai"
categoryLabel: "Python for AI"
tags: ["Python", "Matplotlib", "Seaborn", "Data Visualization"]
image: "/images/matplotlib_seaborn_viz.png"
readingTime: 6
tableOfContents: true
order: 24
---

Ek purani kahawat hai, "Ek picture hazar shabdo ke barabar hoti hai." Data Science aur AI mein bhi ye baat bilkul sach hai. Jab aapke paas lakho rows ka data ho, to numbers dekh kar pattern samajhna mushkil hota hai. Yahin kaam aati hain **Matplotlib** aur **Seaborn** libraries!

Is post mein hum in dono libraries ko use karke data se sundar charts aur graphs banana seekhenge.

## 1. Matplotlib Kya Hai?

**Matplotlib** Python ki sabse basic aur popular data visualization library hai. Ye aapko graphs banane ka poora control deti hai.

### Matplotlib Install Karein:
```bash
pip install matplotlib
```

### Pehla Line Chart Banana:
Chaliye dekhte hain ki hafte bhar ka temperature kaisa raha:
```python
import matplotlib.pyplot as plt

# Data
din = ["Som", "Mangal", "Buddh", "Guru", "Shukra", "Shani", "Ravi"]
temp = [30, 32, 33, 31, 29, 28, 34]

# Chart Banana
plt.plot(din, temp, marker='o', color='blue')
plt.title("Hafte ka Temperature")
plt.xlabel("Din")
plt.ylabel("Temperature (°C)")

# Chart Dikhana
plt.show()
```

## 2. Seaborn Kya Hai?

**Seaborn** asal mein Matplotlib ke upar hi bani hui ek aur library hai. Matplotlib thoda purana lagta hai, isliye Seaborn ko banaya gaya taaki hum **kam code mein jyada sundar aur modern charts** bana sakein.

### Seaborn Install Karein:
```bash
pip install seaborn
```

### Ek Sundar Bar Chart Banana:
```python
import seaborn as sns
import matplotlib.pyplot as plt

# Data
courses = ["Python", "Machine Learning", "Deep Learning", "Data Science"]
students = [150, 120, 80, 100]

# Bar Chart
sns.barplot(x=courses, y=students, palette="viridis")
plt.title("Course me Students ki Sankhya")
plt.show()
```

## 3. Scatter Plot (AI me Sabse Zyada Use Hone Wala)

Machine Learning me hum aksar data points ke beech ka relation dekhte hain (jaise Ghar ka Area vs Ghar ki Keemat). Iske liye **Scatter Plot** use hota hai.

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Maan lijiye hamare paas Area aur Keemat ka data hai
area = [1000, 1500, 2000, 2500, 3000]
price = [50, 75, 100, 120, 145] # Lakhs mein

sns.scatterplot(x=area, y=price, color="red", s=100)
plt.title("Ghar ka Area vs Keemat")
plt.xlabel("Area (sq ft)")
plt.ylabel("Keemat (Lakhs)")
plt.show()
```

## Conclusion

Data Visualization ek Data Scientist aur AI Engineer ka sabse bada hathiyar hai. Jab aap apne boss ya client ko apna model samjhate hain, to unhe code nahi balki yehi charts aur graphs samajh aate hain.

Aap in libraries ko alag-alag datasets par try kijiye. Agle lesson me hum file se data read karna seekhenge!
