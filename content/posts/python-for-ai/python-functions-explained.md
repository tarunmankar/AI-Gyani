---
title: "Python Functions kya hote hain? Beginner Guide"
slug: "python-functions-explained"
category: "python-for-ai"
categoryLabel: "Python for AI"
description: "Python Functions kya hote hain aur inhe kaise banayein? Parameters aur Return ka concept asaan bhasha aur real-life examples ke sath."
author: "Tarun"
tags: ["Python Functions", "Def Python", "Coding Basics", "Python for AI"]
image: "/images/python-functions.png"
featured: false
relatedPosts: ["python-loops-and-conditions", "why-python-for-ai"]
readingTime: 12
tableOfContents: true
order: 18
---

Pichle kuch posts mein humne variables, loops, aur conditions seekhe. Agar aapne unhe try kiya hoga, toh aapko realise hua hoga ki jab code thoda bada hone lagta hai, toh use padhna aur manage karna mushkil ho jata hai.

Khaaskar tab, jab aapko ek hi kaam (jaise GST calculate karna ya Image ka size chhota karna) baar-baar apne program mein alag-alag jagah par karna ho. Kya aap baar-baar same code copy-paste karenge? 

Bilkul nahi! Ek smart coder kabhi same code 2 baar nahi likhta. Yahi par "Magic" shuru hota hai jise hum **Functions** kehte hain.

Aaj ki is guide mein hum bilkul simple Hinglish mein samjhenge ki Python Functions kya hain, inhe kaise banate hain, aur AI ki duniya mein inki kya ehmiyat hai.

---

## 1. Function Kya Hota Hai? (The Factory Example)

Function ko ek **Factory ki Machine** (Juicer) samajh lijiye. 

Aap ek juicer mein kaccha santra (Orange) daalte hain, juicer uspar process karta hai (crush karna), aur aapko fresh juice bahar nikal kar de deta hai. 

Programming mein bhi Function wahi kaam karta hai:
1. Aap ise kuch Data dete hain (Jise **Input/Argument** kehte hain).
2. Function us data par apna code chalata hai (Process).
3. Aur aakhiri mein aapko result de deta hai (Jise **Return** kehte hain).

Ek baar aapne "Juicer" (Function) bana liya, ab aap chahe usme Apple dalo ya Mango, wo aapko har baar fresh juice nikal kar dega, bina machine ko dobara banaye!

---

## 2. Python mein Function Kaise Banayein?

Python mein koi bhi function banane ke liye `def` (define) keyword ka use hota hai.

**Ek simple function ka example:**
```python
def namaste_karo():
    print("Namaste! AI Gyani mein aapka swagat hai.")

# Function ko call karna (Machine ko chalu karna)
namaste_karo()
```
Yahan humne ek function banaya jo sirf ek line print karta hai. Lekin dhyan rahe, function banane se wo khud run nahi hota, jab tak aap use uska naam lekar bulao nahi (Yani "Call" na karo).

---

## 3. Parameters aur Arguments (Juicer mein Phal dalna)

Sirf "Namaste" bolne wala function toh theek hai, lekin asali maza tab hai jab function humse data le aur us hisaab se result de. Ise `Parameters` pass karna kehte hain.

**Example:**
Maan lo hum ek AI bana rahe hain jo user ko uske naam se bulata hai.
```python
def namaste(naam):
    print("Hello " + naam + ", kaise ho aap?")

# Function ko data dena (Arguments pass karna)
namaste("Rohan")
namaste("Priya")
```
Yahan `naam` ek parameter hai. Jab humne "Rohan" bheja, toh output aaya "Hello Rohan, kaise ho aap?". Humne ek hi code likha, par use 2 alag logo ke liye use kar liya!

---

## 4. Return Statement (Juice bahar nikalna)

Kai baar humein function se sirf screen par `print` nahi karwana hota, balki result ko kisi variable me save karna hota hai taaki use aage math mein use kar sakein. Uske liye hum `return` use karte hain.

**Example:**
```python
def add_karo(a, b):
    total = a + b
    return total

# Result ko save karna
result = add_karo(10, 20)
print(result) # Output aayega 30
```
Jab function `return` tak pahunchta hai, toh wo wahan ruk jata hai aur result de kar bahar aa jata hai.

---

## 5. Built-in Functions vs Custom Functions

Python ki duniya mein do tarah ke functions hote hain:
1. **Built-in Functions:** Jo Python walon ne pehle se aapke liye bana kar rakhe hain. Jaise `print()`, `len()` (kisi list ki length napne ke liye), `type()` wagaira.
2. **Custom (User-defined) Functions:** Jo hum (coders) apni zaroorat ke hisaab se `def` lagakar khud banate hain.

AI mein TensorFlow ya PyTorch jaisi libraries mein hum hazaron pre-built functions ka use karte hain taaki humein math dobara na likhni pade.

---

## FAQs (Aksar Puche Jane Wale Sawal)

### 1. Kya function ke andar ek aur function bana sakte hain?
Haan! Aap ek function ke andar kitne bhi function bana sakte hain, ya ek function ko dusre function ke andar se call bhi kar sakte hain. Ise aage chal kar hum advanced coding mein seekhenge.

### 2. Print aur Return mein kya difference hai?
`print()` sirf screen par output dikhata hai. `return` us result ko computer ki memory mein wapas bhejta hai taaki aap us value ko kisi aur calculation mein use kar sakein.

### 3. Default parameter kya hota hai?
Agar aap chahte hain ki agar koi data na de toh bhi function error na de, toh aap default value set kar sakte hain. Jaise `def greet(naam="Dost"):`. Agar aapne koi naam pass nahi kiya toh wo apne aap "Dost" use kar lega.

---

## Conclusion aur Aapka Agla Kadam

Doston, aaj aapne Python ka bahut bada milestone achieve kar liya hai. Functions aane ke baad aapka code ekdam clean, professional, aur chota ho jata hai. 

Lekin baat yahan khatam nahi hoti. Jab software bahut bada ho jata hai (jaise Video Game ya Real AI Chatbot), toh wahan sirf functions se kaam nahi chalta. Wahan aati hai Object-Oriented Programming (OOPs), jahan hum "Classes" aur "Objects" banate hain.

Hamara agla article, *"Python OOP Concepts for AI"* padhna bilkul miss na karein. Wahan se aapka level ek absolute beginner se nikal kar ek intermediate developer ka ho jayega! **Share karein aur seekhte rahein!**
