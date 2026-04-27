---
title: "Python Loops aur Conditions Explained"
image: "/images/python-loops-conditions.png"
slug: "python-loops-and-conditions"
category: "python-for-ai"
categoryLabel: "Python for AI"
description: "Python mein if-else Conditions aur for/while Loops kaise kaam karte hain? Janiye asaan bhasha mein taaki aap apne code ko smart bana sakein."
author: "Tarun"
tags: ["Python Loops", "If-Else Python", "Python Conditions", "Python for AI"]
featured: false
relatedPosts: ["python-data-structures-lists-tuples-dictionaries"]
readingTime: 13
tableOfContents: true
order: 17
---

![Python Loops aur Conditions](/images/python-loops-conditions.png)

Ab tak humne Python mein data jama karna seekh liya (Variables aur Lists ke zariye). Lekin computer ka asli maza toh tab hai jab wo khud soch sake aur humare liye repetitive (baar-baar hone wale) kaam kar sake. 

AI (Artificial Intelligence) ko smart banane ka pehla step yehi hai—computer ko "Faisla" (Decision) lena sikhana aur bina thake kaam karna sikhana.

Aaj hum do sabse zaroori concepts sikhenge: **Conditions (If-Else)** aur **Loops (For aur While)**. Ye dono concept coding ki aatma (soul) hain. Inko samajh liya toh aap practically koi bhi chhota-mota software bana sakte hain.

Chaliye, shuru karte hain is logic building ke safar ko!

---

## 1. Conditions: Computer ko Faisla lena sikhana (If-Else)

Socho aap driving kar rahe ho. Agar traffic light **Red** hai, toh aap ruk jaoge. Agar light **Green** hai, toh aap chal padoge. 

Computer ko yahi baat sikhane ke liye hum **If-Else** ka use karte hain. "If" ka matlab hai "Agar", aur "Else" ka matlab hai "Warna".

**Example:**
Maan lo hum ek voting software bana rahe hain:
```python
age = 20

if age >= 18:
    print("Aap vote de sakte hain!")
else:
    print("Aap abhi chhote hain.")
```

Yahan computer check karega ki age 18 ya usse badi hai ya nahi. Agar sach (True) hai, toh pehla message dikhayega, warna (Else) dusra message dikhayega.

### Elif (Agar-Magar)
Kabhi-kabhi humare paas 2 se zyada choices hoti hain. Aise mein hum `elif` (Else If) use karte hain. Jaise: Agar light Red hai toh ruko, `elif` Yellow hai toh wait karo, `else` Green hai toh jao.

---

## 2. Loops: Computer se Mazdoori karwana

Agar main aapse kahu ki apna naam 5 baar likho, toh aap likh doge. Lekin agar main kahu ki apna naam 10,000 baar likho, toh aap thak jaoge aur gussa karoge. 

Lekin computer kabhi nahi thakta! Kisi bhi kaam ko baar-baar karwane ki technique ko coding mein **Loop** kehte hain. Python mein mainly do tarah ke loops hote hain:

### A. For Loop (Jab pata ho kitni baar chalana hai)
Jab aapko pehle se pata ho ki kaam exactly kitni baar karna hai, ya aapke paas koi List hai jiske har item ko check karna hai, toh `For Loop` use hota hai.

**Example:**
```python
dost = ["Rahul", "Priya", "Amit"]

for naam in dost:
    print("Hello " + naam)
```
Ye loop list ke andar jayega, ek-ek karke doston ka naam uthayega aur sabko "Hello" bol dega. AI mein hazaron images ko process karne ke liye For loop ka hi use hota hai.

### B. While Loop (Jab tak condition sach na ho)
While loop ka matlab hai "Jab tak". Ye loop tab tak chalta rahega jab tak iski condition True (sach) rahegi. 

**Example:**
```python
battery = 100

while battery > 0:
    print("Phone chal raha hai...")
    battery = battery - 20  # Battery kam ho rahi hai

print("Phone switch off ho gaya!")
```
Isme computer baar-baar battery check karega. Jaise hi battery 0 hogi, loop ruk jayega.

---

## 3. Break aur Continue (Loop ko control karna)

Kabhi-kabhi humein loop ko beech mein rokna padta hai.
- **Break:** Agar aapko ek dum se loop tod kar bahar aana hai. (Jaise list mein apna naam milte hi search rok dena).
- **Continue:** Agar aapko koi ek step chhod kar (skip karke) loop ko aage badhana hai. (Jaise Sunday ki chhutti skip karke Monday par chale jana).

---

## FAQs (Aksar Puche Jane Wale Sawal)

### 1. Indentation (Space) ka Python mein kya role hai?
Dusri languages brackets `{ }` use karti hain, lekin Python line ke shuru mein 'Space' (Tab) use karta hai ye batane ke liye ki kaunsa code 'If' ya 'Loop' ke andar hai. Agar space galat diya, toh Python "Indentation Error" de dega.

### 2. Kya main Loop ke andar If-Else laga sakta hoon?
Bilkul! Aap loop ke andar kitne bhi conditions laga sakte hain. Ise Nested logic kehte hain aur real AI algorithms isi tarah kaam karte hain.

### 3. Infinite Loop kya hota hai?
Agar aap While loop mein koi aisi condition laga de jo kabhi False ho hi na (jaise `while 1 > 0:`), toh loop zindagi bhar chalta rahega aur aapka computer hang ho jayega. Ise Infinite Loop kehte hain. Bachke rehna!

---

## Conclusion aur Aapka Agla Kadam

Doston, aaj aapne Python ka sabse powerful hissa seekh liya hai. **If-Else** aur **Loops** ko aapas mein mila kar aap ek Calculator se lekar AI ka logic tak sab kuch likh sakte hain. Inhe apne VS Code mein zarur try karke dekhein.

Lekin socho, agar aapne loops aur conditions laga kar ek badhiya sa 50 line ka logic likh diya, aur use website mein 10 jagah use karna hai, toh kya har jagah 50 lines dobara likhoge? 

Nahi! Iske liye aate hain **Functions**. 

Hamara agla post, *"Python Functions kya hote hain?"* padhein jahan hum code ko reuse karna sikhenge. **AI Gyani ko Bookmark karna na bhoolein!**
