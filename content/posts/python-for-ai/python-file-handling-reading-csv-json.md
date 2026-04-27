---
title: "Python me File Handling: CSV aur JSON kaise padhein"
description: "AI projects ke liye data external files se kaise read karein? Seekhein Python me Text, CSV aur JSON file handling ke basics."
date: "2026-04-27"
author: "Tarun"
category: "python-for-ai"
categoryLabel: "Python for AI"
tags: ["Python", "File Handling", "CSV", "JSON"]
image: "/images/python_file_handling.png"
readingTime: 6
tableOfContents: true
order: 25
---

Aapne Python me variables aur list banana to seekh liya, lekin asli zindagi me AI models ko jo data milta hai wo external files se aata hai. Yeh files aam taur par **CSV** (Excel format) ya **JSON** format me hoti hain. 

Is post me hum samjhenge ki in files ko Python me kaise padha (read) aur likha (write) jata hai.

## 1. Normal Text File Padha (TXT)

Python me kisi bhi file ko padhne ke liye `open()` function ka use hota hai.

```python
# 'r' ka matlab hai Read mode
with open("meri_file.txt", "r") as file:
    content = file.read()
    print(content)
```
*Note: `with` keyword ka use isliye karte hain kyunki ye file ko use karne ke baad apne aap close kar deta hai.*

## 2. CSV File Kya Hoti Hai aur Ise Kaise Padhein?

**CSV (Comma Separated Values)** data ko store karne ka sabse popular format hai. Machine learning datasets (jaise Kaggle datasets) mostly CSV format me hi aate hain.

Halanki Python me CSV ke liye in-built module hota hai, lekin AI me hum **Pandas** library ka use karte hain kyunki ye bahut fast aur aasaan hai.

### Pandas se CSV Padhna:
```python
import pandas as pd

# dataset.csv file ko padhna
df = pd.read_csv("dataset.csv")

# Data ke shuruati 5 rows print karna
print(df.head())
```

### CSV me Data Likhna (Save karna):
```python
import pandas as pd

data = {"Name": ["Ali", "Sara"], "Age": [22, 24]}
df = pd.DataFrame(data)

# 'index=False' taaki extra numbers save na hon
df.to_csv("naya_data.csv", index=False)
```

## 3. JSON File Kya Hoti Hai aur Ise Kaise Padhein?

**JSON (JavaScript Object Notation)** aajkal internet par data bhejne ka sabse bada standard ban gaya hai. APIs (Application Programming Interface) JSON format me hi data dete hain. Ye dikhne mein bilkul Python Dictionaries jaisa hota hai.

### JSON File Padhna:
Python ka in-built `json` module iske liye perfect hai.

```python
import json

# JSON data (file se bhi padh sakte hain)
json_string = '{"naam": "Tarun", "umar": 25, "city": "Delhi"}'

# JSON string ko Python dictionary me badalna
python_dict = json.loads(json_string)

print(python_dict["naam"]) # Output: Tarun
```

## Conclusion

AI aur Data Science me aapka 90% samay CSV aur JSON files se data nikalne aur unhe Pandas me daalne me jayega. Isliye in formats ko acche se samajhna bahut zaroori hai.

Ab aap external data handle karne ke liye puri tarah taiyar hain. Agle module me hum apne pehle chote AI/Data Analysis project par kaam karenge!
