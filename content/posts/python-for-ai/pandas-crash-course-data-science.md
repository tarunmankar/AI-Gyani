---
title: "Pandas Crash Course: Data Analysis ke liye Python Library"
description: "Data Science aur AI mein Excel jaisa data kaise handle karein? Seekhein Pandas library ke bare mein is simple Hindi crash course mein."
date: "2026-04-27"
author: "Tarun"
category: "python-for-ai"
categoryLabel: "Python for AI"
tags: ["Python", "Pandas", "Data Analysis", "DataFrame"]
image: "/images/pandas_crash_course.png"
readingTime: 7
tableOfContents: true
order: 23
---

![Pandas Crash Course: Data Analysis ke liye Python Library](/images/pandas_crash_course.png)

Machine Learning models data par chalte hain. Lekin data hamesha saaf aur ready nahi hota. Aksar data CSV files, Excel sheets ya databases mein hota hai. Is raw data ko samajhne aur saaf karne ke liye Python ki ek superhero library hai: **Pandas**. 

## 1. Pandas Kya Hai?

Aasan bhasha mein, **Pandas** Python ke liye "Excel on Steroids" hai. 
Jab aapke paas tables wala data (Rows aur Columns) ho, to aap Pandas ka use karte hain. Ye data ko analyze, filter, aur clean karne ko itna aasaan bana deta hai ki aap minto me ghanto ka kaam kar sakte hain.

Pandas do main cheezon par kaam karta hai:
1. **Series:** Ek single column.
2. **DataFrame:** Ek poori table (Excel sheet ki tarah).

## 2. Install aur Import

Terminal mein likhein:
```bash
pip install pandas
```

Code mein import karne ka standard tarika:
```python
import pandas as pd
```

## 3. DataFrame Banana

Chaliye ek aasaan sa DataFrame banate hain logo ke data se:

```python
import pandas as pd

# Ek dictionary (data) banate hain
data = {
    "Naam": ["Rahul", "Priya", "Amit", "Neha"],
    "Umar": [25, 22, 28, 24],
    "City": ["Delhi", "Mumbai", "Pune", "Delhi"]
}

# Isko DataFrame me convert karna
df = pd.DataFrame(data)

print(df)
```
**Output:**
```text
    Naam  Umar    City
0  Rahul    25   Delhi
1  Priya    22  Mumbai
2   Amit    28    Pune
3   Neha    24   Delhi
```
Dekha? Bilkul ek Excel table jaisa lag raha hai!

## 4. Data ko Dekhna aur Samajhna

Jab aapke paas lakho rows ka data ho, to sab ek sath print nahi kar sakte. Pandas aapko smart tarike se data dekhne deta hai:

* `df.head(5)`: Shuru ki 5 rows dikhata hai.
* `df.tail(3)`: Aakhiri 3 rows dikhata hai.
* `df.info()`: Data mein kitne rows/columns hain aur data kis type ka hai, uski poori summary deta hai.
* `df.describe()`: Numbers wale columns ka average, max, min nikal kar deta hai.

## 5. Data ko Filter Karna

Maan lijiye hamein sirf un logo ka data chahiye jinki umar 25 se kam hai. Excel me hum filter lagate, Pandas me ye bas ek line ka code hai:

```python
# Sirf wo rows jahan Umar < 25 hai
young_people = df[df["Umar"] < 25]

print(young_people)
```
**Output:**
```text
    Naam  Umar    City
1  Priya    22  Mumbai
3   Neha    24   Delhi
```

Agar humein sirf "Delhi" walon ka data chahiye:
```python
delhi_walo = df[df["City"] == "Delhi"]
```

## 6. Naya Column Jodna

Pandas me naya column banana bahut aasaan hai. Maan lijiye in sabki salary ka ek naya column dalna hai:

```python
df["Salary"] = [50000, 60000, 55000, 65000]
print(df)
```

## Conclusion

Data Science ka **80% time** data ko clean aur prepare karne mein nikalta hai, aur ye kaam Pandas se hota hai. Aaj humne dekha ki Pandas kitna powerful hai table data ko handle karne ke liye.

Aage chalkar hum dekhenge ki isi table wale data se sundar charts aur graphs kaise banaye jate hain!
