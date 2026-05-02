---
title: "Data Preprocessing kya hai? ML ka Sabse Zaroori Step (Python Code ke saath)"
description: "Data preprocessing kya hota hai aur ML mein kyun zaroori hai? Missing values, outliers, encoding, scaling — sab Python code ke saath step-by-step guide."
date: "2026-04-28"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Data Preprocessing", "Data Cleaning", "Python", "Pandas", "Scikit-learn"]
image: "/images/data_preprocessing_guide.png"
slug: "data-preprocessing-machine-learning"
featured: false
readingTime: 10
tableOfContents: true
order: 41
---

![Data Preprocessing](/images/data_preprocessing_guide.png)

Agar aap Machine Learning mein koi ek cheez sabse zyada important seekhni ho — wo hai **Data Preprocessing**.

Data Scientists ka 70-80% time sirf data ko saaf karne mein jaata hai. Ye sunne mein boring lagta hai, par ye exactly wahi jagah hai jahan model ki quality decide hoti hai.

**"Garbage In, Garbage Out"** — ye ML ka golden rule hai. Ganda data → ganda model, chahe algorithm kitna bhi advanced ho.

Is post mein hum real messy data lekar usse ML-ready banayenge — Python code ke saath har step.

---

## Real Dataset Mein Kya Problems Hoti Hain?

```python
import pandas as pd
import numpy as np

# Ek "ganda" dataset banao (real-world jaisa)
data = {
    'age': [25, np.nan, 32, -5, 28, 150, 35, np.nan, 29, 31],
    'salary': [50000, 65000, np.nan, 45000, 72000, 58000, np.nan, 48000, 61000, 55000],
    'city': ['Mumbai', 'Delhi', 'Mumbai', 'Pune', 'delhi', 'MUMBAI', 'Pune', 'Delhi', np.nan, 'Mumbai'],
    'education': ['Graduate', 'Post-Graduate', 'Graduate', 'HSC', 'Graduate', 'Post-Graduate', 'Graduate', 'HSC', 'Graduate', 'Post-Graduate'],
    'bought_insurance': [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
}
df = pd.DataFrame(data)
print("Raw Data:")
print(df)
print(f"\nMissing values:\n{df.isnull().sum()}")
```

**Kya problems dikh rahi hain?**
- `age = -5` → Negative age possible nahi
- `age = 150` → Outlier (koi 150 saal ka nahi hota)
- `age = NaN` → Missing value
- `city = 'delhi'` vs `'Delhi'` → Case inconsistency
- `city = 'MUMBAI'` vs `'Mumbai'` → Same problem
- `salary = NaN` → Missing value

---

## Step 1: Missing Values Handle Karo

```python
print("\nBefore handling missing values:")
print(df.isnull().sum())

# Strategy 1: Delete rows (sirf jab data bahut zyada ho)
df_dropped = df.dropna()
print(f"After drop: {len(df_dropped)} rows (was {len(df)})")

# Strategy 2: Fill with Mean/Median/Mode (better approach)
from sklearn.impute import SimpleImputer

# Numeric columns — Median se fill karo (outliers se safe)
num_imputer = SimpleImputer(strategy='median')
df[['age', 'salary']] = num_imputer.fit_transform(df[['age', 'salary']])

# Categorical columns — Mode se fill karo
cat_imputer = SimpleImputer(strategy='most_frequent')
df[['city']] = cat_imputer.fit_transform(df[['city']])

print("\nAfter imputation:")
print(df.isnull().sum())  # 0 missing values!
```

### Kab Kya Strategy Use Karein?

| Strategy | Kab Use Karein | Code |
|---|---|---|
| **Delete row** | < 5% data missing | `df.dropna()` |
| **Mean fill** | Normal distribution, no outliers | `strategy='mean'` |
| **Median fill** | Outliers hain | `strategy='median'` |
| **Mode fill** | Categorical data | `strategy='most_frequent'` |
| **Forward fill** | Time series | `df.fillna(method='ffill')` |

---

## Step 2: Outliers Handle Karo

```python
import matplotlib.pyplot as plt

# Outlier visualize karo
fig, axes = plt.subplots(1, 2, figsize=(12, 4))
axes[0].boxplot(df['age'])
axes[0].set_title('Age — Before Outlier Removal')
axes[1].boxplot(df['salary'])
axes[1].set_title('Salary — Before Outlier Removal')
plt.savefig('outliers.png')

# Method 1: IQR (Interquartile Range)
def remove_outliers_iqr(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    print(f"{column}: Valid range [{lower:.1f}, {upper:.1f}]")
    return df[(df[column] >= lower) & (df[column] <= upper)]

df = remove_outliers_iqr(df, 'age')
print(f"After outlier removal: {len(df)} rows")

# Method 2: Z-Score (normal distribution ke liye)
from scipy import stats
z_scores = np.abs(stats.zscore(df[['salary']]))
df = df[z_scores['salary'] < 3]  # 3 standard deviations ke andar

# Method 3: Clip (outliers ko boundary par rakho, delete mat karo)
df['salary'] = df['salary'].clip(
    lower=df['salary'].quantile(0.05),
    upper=df['salary'].quantile(0.95)
)
```

---

## Step 3: Text Data Clean Karo

```python
# City names inconsistent hain — fix karo
print("Before:", df['city'].unique())
# ['Mumbai', 'Delhi', 'delhi', 'MUMBAI', 'Pune', 'pune']

# Standardize karo
df['city'] = df['city'].str.strip().str.title()
print("After:", df['city'].unique())
# ['Mumbai', 'Delhi', 'Pune']

# Galat spellings fix karo (optional — fuzzy matching)
city_mapping = {
    'Bombay': 'Mumbai',
    'New Delhi': 'Delhi',
    'Poona': 'Pune'
}
df['city'] = df['city'].replace(city_mapping)
```

---

## Step 4: Encoding — Words ko Numbers Mein Badlo

ML models sirf numbers samajhte hain. Categorical data ko numeric mein convert karna zaroori hai.

### Label Encoding (Ordinal Categories)

```python
from sklearn.preprocessing import LabelEncoder

# Education mein order hai: HSC < Graduate < Post-Graduate
edu_order = {'HSC': 0, 'Graduate': 1, 'Post-Graduate': 2}
df['education_encoded'] = df['education'].map(edu_order)
print(df[['education', 'education_encoded']])
```

### One-Hot Encoding (Nominal Categories)

```python
# City mein koi order nahi — One-Hot use karo
df_encoded = pd.get_dummies(df, columns=['city'], prefix='city', drop_first=True)
print(df_encoded.columns.tolist())
# ['age', 'salary', 'education', 'bought_insurance', 'education_encoded',
#  'city_Mumbai', 'city_Pune']  ← Delhi dropped (reference category)
```

### Kab Kaunsa?

| Method | Kab Use Karein | Example |
|---|---|---|
| **Label Encoding** | Ordered categories | Education level, Size (S/M/L/XL) |
| **One-Hot Encoding** | No order | City, Color, Gender |
| **Target Encoding** | High cardinality | 1000+ cities |
| **Binary Encoding** | Medium cardinality | 50-100 categories |

---

## Step 5: Feature Scaling — Ek Level Par Laao

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler
import numpy as np

# Problem: age (25-35) aur salary (45000-72000) same importance milni chahiye
# Model sochega salary zyada important hai kyunki numbers bade hain!

X = df_encoded[['age', 'salary', 'education_encoded']].values

# Method 1: StandardScaler (mean=0, std=1) — Most common
std_scaler = StandardScaler()
X_standard = std_scaler.fit_transform(X)
print("StandardScaler mean:", X_standard.mean(axis=0).round(2))
print("StandardScaler std:", X_standard.std(axis=0).round(2))

# Method 2: MinMaxScaler (0 to 1 range)
mm_scaler = MinMaxScaler()
X_minmax = mm_scaler.fit_transform(X)
print("\nMinMaxScaler range:", X_minmax.min(axis=0), "to", X_minmax.max(axis=0))

# Method 3: RobustScaler (outliers ke saath best)
robust_scaler = RobustScaler()
X_robust = robust_scaler.fit_transform(X)
```

### Kaunsa Scaler Kab?

| Scaler | Best For | Ignore Outliers? |
|---|---|---|
| **StandardScaler** | Normally distributed data | No |
| **MinMaxScaler** | Neural networks, 0-1 range chahiye | No |
| **RobustScaler** | Outliers hain data mein | Yes! |

---

## Complete Pipeline — Sab Ek Saath

```python
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

# Numeric aur categorical columns alag-alag handle karo
numeric_features = ['age', 'salary']
categorical_features = ['city', 'education']

numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('encoder', OneHotEncoder(handle_unknown='ignore'))
])

# ColumnTransformer sab ek saath karta hai
preprocessor = ColumnTransformer(transformers=[
    ('num', numeric_transformer, numeric_features),
    ('cat', categorical_transformer, categorical_features)
])

# ML model ke saath combine karo
from sklearn.linear_model import LogisticRegression

full_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', LogisticRegression(random_state=42))
])

X = df[numeric_features + categorical_features]
y = df['bought_insurance']

from sklearn.model_selection import cross_val_score
scores = cross_val_score(full_pipeline, X, y, cv=5, scoring='accuracy')
print(f"Pipeline CV accuracy: {scores.mean():.2%} ± {scores.std():.2%}")
```

---

## FAQs

**1. Scaling se pehle ya baad mein split karein?**
Hamesha PEHLE split karo, BAAD mein scale karo. Training data ke stats se fit karo, test data par sirf transform karo. Nahi toh data leakage hota hai.

**2. Missing values ke liye KNN Imputer kab use karein?**
Jab features correlated hon — KNN neighbors ke values se missing fill karta hai. `from sklearn.impute import KNNImputer`. Thoda slow hai par accurate.

**3. Kya hamesha One-Hot Encoding best hai?**
Nahi. High cardinality (100+ categories) mein One-Hot se bahut zyada columns bante hain — Target Encoding ya Embedding better hai.

**4. Outliers remove karein ya clip karein?**
Agar outlier genuinely wrong data hai → remove. Agar valid extreme value hai (billionaire ka salary) → clip ya RobustScaler use karo.

**5. Feature scaling kab zaruri nahi hoti?**
Tree-based models (Decision Tree, Random Forest, XGBoost) ko scaling ki zarurat nahi — ye distances pe nahi, splits pe kaam karte hain.

---

**Data preprocessing mein aur koi confusion? Comment mein poocho — specific column ke liye code denge! 🧹**

---

**Tarun ke baare mein:** Tarun ek AI educator hain jo Data Preprocessing jaise "boring" topics ko bhi practically interesting banate hain. AI-Gyani par real messy data se sikhao, clean examples se nahi.
