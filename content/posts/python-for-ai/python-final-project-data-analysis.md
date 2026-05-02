---
title: "Python Final Project: Sales Data Analysis — Ek Complete Data Science Project"
description: "Python for AI series ka final project! Pandas, NumPy, Matplotlib aur Seaborn use karke ek real Sales Data Analysis project complete karein — step by step. Portfolio ke liye ready project."
date: "2026-04-27"
author: "Tarun"
category: "python-for-ai"
categoryLabel: "Python for AI"
tags: ["Python", "Project", "Data Analysis", "Pandas", "Portfolio", "Data Science"]
image: "/images/python_data_project.png"
readingTime: 10
tableOfContents: true
order: 27
slug: "python-final-project-data-analysis"
---

![Python Final Data Analysis Project](/images/python_data_project.png)

Congratulations! Aapne Python for AI series ka almost poora safar complete kar liya hai:
- ✅ Variables, loops, functions
- ✅ OOP concepts
- ✅ NumPy aur Pandas
- ✅ Data Visualization
- ✅ File handling
- ✅ Web scraping

Ab waqt hai **sab kuch ek jagah apply karne ka** — ek real data analysis project jo aap apne portfolio mein rakh sakein.

Is project mein hum ek e-commerce company ka sales data analyse karenge. Goal hai: **Business decisions ke liye actionable insights nikalna**.

---

## Project Overview

**Business Question:** "Humari company ka performance kaisa hai? Kaunsa product best seller hai? Kaunse months mein sale peak hoti hai? Aur kahan improvement ki zaroorat hai?"

**Data:** Hum ek realistic sales dataset banayenge (aur phir analyse karenge).

**Tools:**
- `pandas` — data manipulation
- `numpy` — calculations  
- `matplotlib` + `seaborn` — visualization
- `datetime` — date handling

---

## Step 1: Project Setup aur Data Create Karna

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

# Style set karo
sns.set_theme(style="whitegrid", palette="husl")
plt.rcParams['figure.figsize'] = (12, 6)

# Seed for reproducibility
np.random.seed(42)

# Realistic Sales Data Generate Karna
n_records = 1000

# Products aur their base prices
products = {
    'Laptop': 55000,
    'Smartphone': 18000,
    'Tablet': 22000,
    'Headphones': 3500,
    'Smartwatch': 8000,
    'Keyboard': 2000,
    'Mouse': 1200,
    'Monitor': 12000
}

# Regions
regions = ['North', 'South', 'East', 'West', 'Central']
cities = {
    'North': ['Delhi', 'Chandigarh', 'Lucknow'],
    'South': ['Bangalore', 'Chennai', 'Hyderabad'],
    'East': ['Kolkata', 'Bhubaneswar', 'Patna'],
    'West': ['Mumbai', 'Pune', 'Ahmedabad'],
    'Central': ['Bhopal', 'Nagpur', 'Indore']
}

# Generate synthetic data
data_rows = []
start_date = datetime(2025, 1, 1)

for _ in range(n_records):
    product = np.random.choice(list(products.keys()))
    region = np.random.choice(regions)
    city = np.random.choice(cities[region])
    
    # Seasonal pattern (diwali boost in Oct-Nov)
    date = start_date + timedelta(days=np.random.randint(0, 365))
    month = date.month
    season_multiplier = 1.5 if month in [10, 11] else 1.0
    season_multiplier *= 1.2 if month in [12, 1] else 1.0  # Year end
    
    units = max(1, int(np.random.exponential(3) * season_multiplier))
    base_price = products[product]
    discount_pct = np.random.choice([0, 5, 10, 15, 20], p=[0.4, 0.3, 0.15, 0.1, 0.05])
    unit_price = base_price * (1 - discount_pct/100)
    
    data_rows.append({
        'Date': date,
        'Product': product,
        'Region': region,
        'City': city,
        'Units_Sold': units,
        'Unit_Price': round(unit_price, 2),
        'Discount_Pct': discount_pct,
        'Customer_Rating': round(np.random.normal(3.8, 0.8), 1)
    })

df = pd.DataFrame(data_rows)
df['Date'] = pd.to_datetime(df['Date'])
df['Month'] = df['Date'].dt.month
df['Month_Name'] = df['Date'].dt.strftime('%B')
df['Quarter'] = df['Date'].dt.quarter
df['Total_Revenue'] = df['Units_Sold'] * df['Unit_Price']

print("Dataset ready!")
print(f"Shape: {df.shape}")
print("\nFirst few rows:")
print(df.head())
```

---

## Step 2: Exploratory Data Analysis (EDA)

```python
# Basic statistics
print("=== DATASET OVERVIEW ===")
print(f"Total Records: {len(df):,}")
print(f"Date Range: {df['Date'].min().date()} to {df['Date'].max().date()}")
print(f"Total Revenue: ₹{df['Total_Revenue'].sum()/1e7:.2f} Crore")
print(f"Average Order Value: ₹{df['Total_Revenue'].mean():,.0f}")
print(f"Total Units Sold: {df['Units_Sold'].sum():,}")

print("\n=== MISSING VALUES ===")
print(df.isnull().sum())

print("\n=== DATA TYPES ===")
print(df.dtypes)

print("\n=== NUMERIC SUMMARY ===")
print(df[['Units_Sold', 'Unit_Price', 'Discount_Pct', 
          'Customer_Rating', 'Total_Revenue']].describe().round(2))
```

---

## Step 3: Product Analysis

```python
# Product-wise performance
product_analysis = df.groupby('Product').agg(
    Total_Revenue=('Total_Revenue', 'sum'),
    Total_Units=('Units_Sold', 'sum'),
    Avg_Rating=('Customer_Rating', 'mean'),
    Orders=('Product', 'count')
).sort_values('Total_Revenue', ascending=False)

product_analysis['Revenue_Crore'] = product_analysis['Total_Revenue'] / 1e7
product_analysis['Avg_Rating'] = product_analysis['Avg_Rating'].round(2)

print("=== PRODUCT PERFORMANCE ===")
print(product_analysis[['Revenue_Crore', 'Total_Units', 'Avg_Rating', 'Orders']])

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(16, 6))

# Revenue bar chart
colors = sns.color_palette('husl', len(product_analysis))
bars = axes[0].barh(product_analysis.index, product_analysis['Revenue_Crore'], 
                    color=colors)
axes[0].set_xlabel('Revenue (₹ Crore)')
axes[0].set_title('Product-wise Revenue 2025', fontweight='bold')

for bar, val in zip(bars, product_analysis['Revenue_Crore']):
    axes[0].text(bar.get_width() + 0.01, bar.get_y() + bar.get_height()/2,
                 f'₹{val:.1f}Cr', va='center')

# Market share pie
axes[1].pie(product_analysis['Total_Revenue'], 
            labels=product_analysis.index,
            autopct='%1.1f%%',
            colors=colors,
            startangle=90)
axes[1].set_title('Revenue Market Share', fontweight='bold')

plt.tight_layout()
plt.savefig('product_analysis.png', dpi=150, bbox_inches='tight')
plt.show()
```

---

## Step 4: Time Series Analysis

```python
# Monthly trend
monthly = df.groupby(['Month', 'Month_Name']).agg(
    Revenue=('Total_Revenue', 'sum'),
    Units=('Units_Sold', 'sum'),
    Orders=('Product', 'count')
).reset_index().sort_values('Month')

monthly['Revenue_Lakhs'] = monthly['Revenue'] / 1e5

fig, axes = plt.subplots(2, 1, figsize=(14, 10))

# Revenue trend
axes[0].plot(monthly['Month_Name'], monthly['Revenue_Lakhs'], 
             marker='o', linewidth=2.5, color='#2E86AB', markersize=8)
axes[0].fill_between(range(len(monthly)), monthly['Revenue_Lakhs'], 
                     alpha=0.1, color='#2E86AB')
axes[0].set_title('Monthly Revenue Trend 2025', fontsize=14, fontweight='bold')
axes[0].set_ylabel('Revenue (₹ Lakhs)')
axes[0].tick_params(axis='x', rotation=45)

# Peak months mark karo
peak_idx = monthly['Revenue_Lakhs'].idxmax()
axes[0].annotate('🎆 Diwali Peak!', 
                 xy=(monthly['Month_Name'].iloc[peak_idx], 
                     monthly['Revenue_Lakhs'].iloc[peak_idx]),
                 xytext=(peak_idx-2, monthly['Revenue_Lakhs'].max() * 0.95),
                 arrowprops=dict(arrowstyle='->', color='red'),
                 fontsize=11, color='red', fontweight='bold')

# Orders trend
axes[1].bar(monthly['Month_Name'], monthly['Orders'], 
            color=sns.color_palette('husl', 12))
axes[1].set_title('Monthly Orders Count', fontsize=14, fontweight='bold')
axes[1].set_ylabel('Number of Orders')
axes[1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.savefig('monthly_trends.png', dpi=150, bbox_inches='tight')
plt.show()

print("\n=== TOP 3 MONTHS BY REVENUE ===")
print(monthly.nlargest(3, 'Revenue')[['Month_Name', 'Revenue_Lakhs', 'Orders']])
```

---

## Step 5: Regional Analysis

```python
# Region-wise breakdown
regional = df.groupby('Region').agg(
    Revenue=('Total_Revenue', 'sum'),
    Units=('Units_Sold', 'sum'),
    Avg_Discount=('Discount_Pct', 'mean'),
    Avg_Rating=('Customer_Rating', 'mean')
).round(2)

regional['Revenue_Crore'] = (regional['Revenue'] / 1e7).round(2)

print("=== REGIONAL PERFORMANCE ===")
print(regional[['Revenue_Crore', 'Units', 'Avg_Discount', 'Avg_Rating']])

# Heatmap — region x product
pivot = df.groupby(['Region', 'Product'])['Total_Revenue'].sum().unstack()
pivot = pivot / 1e5  # Lakhs mein

plt.figure(figsize=(12, 6))
sns.heatmap(pivot, annot=True, fmt='.0f', cmap='YlOrRd',
            linewidths=0.5, cbar_kws={'label': 'Revenue (₹ Lakhs)'})
plt.title('Revenue Heatmap: Region × Product (₹ Lakhs)', fontweight='bold')
plt.xlabel('Product')
plt.ylabel('Region')
plt.tight_layout()
plt.savefig('region_product_heatmap.png', dpi=150, bbox_inches='tight')
plt.show()
```

---

## Step 6: Key Insights aur Recommendations

```python
print("\n" + "="*50)
print("EXECUTIVE SUMMARY — KEY INSIGHTS")
print("="*50)

# Top product
top_product = product_analysis['Total_Revenue'].idxmax()
top_revenue = product_analysis.loc[top_product, 'Revenue_Crore']

# Worst product
worst_product = product_analysis['Total_Revenue'].idxmin()

# Best month
best_month = monthly.loc[monthly['Revenue'].idxmax(), 'Month_Name']

# Best region
best_region = regional['Revenue'].idxmax()

# Discount impact
low_disc = df[df['Discount_Pct'] == 0]['Total_Revenue'].mean()
high_disc = df[df['Discount_Pct'] >= 15]['Total_Revenue'].mean()

print(f"""
📊 BUSINESS INSIGHTS:

1. 🏆 Best Selling Product: {top_product}
   Revenue: ₹{top_revenue:.1f} Crore

2. 📅 Peak Sales Month: {best_month}
   (Diwali season drives maximum revenue)

3. 🗺️ Strongest Region: {best_region}
   (Focus marketing efforts here)

4. 🏷️ Discount Impact:
   - No discount → Avg order: ₹{low_disc:,.0f}
   - 15%+ discount → Avg order: ₹{high_disc:,.0f}
   - Conclusion: Discounts increase volume but reduce per-order value

5. ⚠️ Underperformer: {worst_product}
   Needs marketing push or bundle deals

RECOMMENDATIONS:
✅ Stock up Laptops before October (highest revenue)
✅ Run targeted campaigns in underperforming regions
✅ Cap discounts at 10% — diminishing returns beyond that
✅ Smartwatch + Headphones bundle could boost both
""")
```

---

## Step 7: Save Karo — Portfolio ke Liye

```python
# Final dataset save karo
df.to_csv('sales_analysis_complete.csv', index=False)

# Summary stats Excel mein
with pd.ExcelWriter('sales_report_2025.xlsx', engine='openpyxl') as writer:
    product_analysis.to_excel(writer, sheet_name='Products')
    monthly.to_excel(writer, sheet_name='Monthly_Trends', index=False)
    regional.to_excel(writer, sheet_name='Regional')

print("✅ Files saved!")
print("Files created:")
print("  - sales_analysis_complete.csv")
print("  - sales_report_2025.xlsx")
print("  - product_analysis.png")
print("  - monthly_trends.png")
print("  - region_product_heatmap.png")
```

---

## Project GitHub par Upload Kaise Karein?

```bash
# Git initialize karo
git init

# .gitignore banao
echo "*.pyc" > .gitignore
echo "__pycache__/" >> .gitignore
echo "*.csv" >> .gitignore  # Large data files optional

# Files add karo
git add analysis.py *.png *.xlsx README.md

git commit -m "feat: Sales Data Analysis project — Python for AI"
git remote add origin https://github.com/yourusername/sales-analysis.git
git push -u origin main
```

**README.md mein kya likhe:**
- Project description
- Skills used (Pandas, Seaborn, etc.)
- Key findings (bullet points mein)
- Screenshots of charts
- How to run

---

## FAQs

**1. Kya ye project resume par daal sakte hain?**
Bilkul! Data Cleaning + EDA + Visualization + Business Insights — ye data science role ke liye basic requirements hain. Is project ko GitHub par rakhein aur link resume mein daalein.

**2. Real dataset kahan se milega?**
- Kaggle.com (largest ML dataset repository)
- UCI ML Repository
- Google Dataset Search
- Data.gov.in (Indian government data)

**3. Excel file banana zaroori hai?**
Nahi, lekin business context mein Excel delivery format hoti hai. `openpyxl` install karo: `pip install openpyxl`.

**4. Ye project kitne time mein complete ho jaata hai?**
Ek baar steps samajh gaye toh 3-4 ghante mein. Pehli baar seedha karna 6-8 ghante le sakta hai.

**5. Agle step kya hain?**
- Machine Learning: Is data par price prediction model banana
- Dashboard: Streamlit se interactive dashboard banana
- Automation: Script ko daily schedule karo

---

**Badhai ho! Aapne Python for AI series complete kar li! Kaunsa insight sabse interesting laga? Comment mein batayein! 🎉**

**Agli category: Mathematics for AI — AI ke engine ko samajhna!**

---

**Tarun ke baare mein:** Tarun ek AI educator hain jo Python ko practical projects ke through sikhate hain. AI-Gyani unka mission hai — theory se hamesha project tak!
