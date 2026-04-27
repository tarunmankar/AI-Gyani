---
title: "Python Final Project: Ek Simple Data Analysis Project"
description: "Sikhein Python ka practical use! Ab tak sikhe gaye Python, Pandas aur Matplotlib skills ko is final Data Analysis project mein apply karein."
date: "2026-04-27"
author: "Tarun"
category: "python-for-ai"
categoryLabel: "Python for AI"
tags: ["Python", "Project", "Data Analysis", "Pandas"]
image: "/images/python_data_project.png"
readingTime: 7
tableOfContents: true
order: 27
---

Badhai ho! Aapne **Python for AI** category ke saare important concepts (Variables, Loops, OOP, Pandas, NumPy, Matplotlib) cover kar liye hain. Lekin knowledge tabhi pakki hoti hai jab aap use apply karte hain. 

Is post mein, hum ab tak ki saari learning ko mila kar ek chota sa **Data Analysis Project** banayenge.

## Project ka Goal

Hum ek "Sales Data" analyse karenge. Hum pata lagayenge ki konsa product sabse zyada bika aur kis mahine me sabse zyada profit hua.

### Step 1: Data Create Karna
Kyunki hamare paas koi file nahi hai, hum Pandas me hi ek chota dataset banayenge.

```python
import pandas as pd

# Dummy Sales Data
data = {
    "Month": ["Jan", "Feb", "Mar", "Apr", "May"],
    "Product": ["Laptop", "Phone", "Laptop", "Tablet", "Phone"],
    "Units_Sold": [10, 25, 15, 30, 20],
    "Price_Per_Unit": [50000, 20000, 50000, 15000, 20000]
}

df = pd.DataFrame(data)
print("Data Ready:")
print(df)
```

### Step 2: Total Revenue (Kamai) Calculate Karna
Ab hum ek naya column banayenge jo humein batayega ki kis transaction me kitne paise aaye. (Revenue = Units * Price)

```python
df["Total_Revenue"] = df["Units_Sold"] * df["Price_Per_Unit"]
print("\nRevenue Column Added:")
print(df)
```

### Step 3: Data Analysis (Sawal Jawab)
Chaliye dekhte hain ki humne Total kitne paise kamaye.

```python
# Sum of all revenues
total_earnings = df["Total_Revenue"].sum()
print(f"\nTotal Kamai: ₹{total_earnings}")
```

Kaunsa product sabse zyada bikta hai? Groupby use karenge:
```python
product_sales = df.groupby("Product")["Units_Sold"].sum()
print("\nProduct wise sales:")
print(product_sales)
```

### Step 4: Data Visualization (Graphs)
Is analysis ko apne boss ko dikhane ke liye ek chart banate hain.

```python
import matplotlib.pyplot as plt

# Product wise revenue ka bar chart
revenue_by_product = df.groupby("Product")["Total_Revenue"].sum()

plt.bar(revenue_by_product.index, revenue_by_product.values, color=['blue', 'green', 'orange'])
plt.title("Total Kamai (Product Wise)")
plt.xlabel("Products")
plt.ylabel("Revenue (Rs)")
plt.show()
```

## Conclusion

Is chote se project me aapne **Data Banaya, Data ko Calculate kiya, Analyse kiya aur Visualize kiya.** Yahi chaar steps duniya ke sabse bade AI aur Data Science projects me use hote hain.

Yahan par hamari **Python for AI** ki journey complete hoti hai. Ab aapke basics strong hain. Agla bada kadam hoga **Mathematics for AI** seekhna, kyunki AI ke models ke andar asal me advanced math hi kaam kar rahi hoti hai. Agli category mein milte hain!
