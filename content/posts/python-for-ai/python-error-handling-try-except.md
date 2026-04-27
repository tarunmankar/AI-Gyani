---
title: "Python Error Handling (Try/Except) Simple Guide"
slug: "python-error-handling-try-except"
category: "python-for-ai"
categoryLabel: "Python for AI"
description: "Python mein errors aur bugs ko kaise sambhalein? Try aur Except block ka use karke apne code ko crash hone se bachana seekhein."
author: "Tarun"
tags: ["Python Errors", "Try Except", "Bug Fixing", "Python for AI"]
featured: false
relatedPosts: ["python-oop-concepts-for-ai", "python-functions-explained"]
readingTime: 12
tableOfContents: true
order: 20
---

![Python Error Handling](/images/python-error-handling.png)

Maan lijiye aapne 1000 lines ka ek bahut shaandaar AI program banaya. Aapne use run kiya, wo 99% kaam kar gaya, lekin aakhiri step par usne aapse ek number manga aur galti se user ne text (ABC) daal diya. 

Dhadam! 💥 Aapka poora program ek bhayanak lal rang ke "Error" ke sath crash ho gaya.

Real duniya ke software aise crash nahi hote. Jab aap kisi app mein galat password dalte hain, toh app band nahi hota, balki aapko ek pyaar bhara message dikhata hai ki *"Password galat hai, dobara try karein."*

Python mein is crash hone se bachne ki technique ko **Error Handling** ya **Exception Handling** kehte hain. Aaj hum yahi jaadui trick seekhenge jisse aapka code kabhi fail nahi hoga.

---

## 1. Error (Exception) Kya Hota Hai?

Programming ki bhasha mein jab code chalte-chalte kisi aisi problem mein phas jata hai jiska solution uske paas nahi hai, toh wo "Exception" throw karta hai aur program wahin ruk jata hai.

**Common Errors in Python:**
- **ZeroDivisionError:** Jab aap kisi number ko 0 se divide karne ki koshish karte hain.
- **ValueError:** Jab system ko number chahiye aur user ne string daal diya.
- **FileNotFoundError:** Jab code kisi aisi file ko open karne ki koshish kare jo wahan exist hi nahi karti.

---

## 2. Try aur Except Block (Aapka Safety Net)

In errors se nipatne ke liye Python humein do special blocks deta hai: **try** aur **except**.

Ise ek circus ke jaal (Safety Net) ki tarah samjhein. Khiladi oopar rassi par chalne ki koshish (Try) karta hai. Agar wo perfectly chal liya, toh badhiya hai. Lekin agar wo gira, toh zameen par gir ke marne (Crash) ke bajaye, uske neeche laga jaal use pakad (Except) lega.

**Basic Example:**
```python
try:
    # Wo kaam jisme risk (error) ho sakta hai
    result = 10 / 0
    print(result)

except:
    # Agar try fail ho gaya, toh ye block chalega (Program crash nahi hoga!)
    print("Oops! Aap kisi number ko Zero (0) se divide nahi kar sakte.")
```

Yahan agar aap normal division `10 / 0` karte toh screen laal error se bhar jati. Lekin **Try/Except** lagane se humein ek simple message mila aur program smoothly aage badh gaya.

---

## 3. Specific Errors Ko Pakadna

Asli coding mein humein pata hona chahiye ki kaunsa error aaya hai, taaki hum user ko sahi message dikha sakein. 

Aap alag-alag error ke liye alag-alag `except` block bana sakte hain:

```python
try:
    umar = int(input("Apni umar (age) bataiye: "))
    print("Aapki umar hai:", umar)

except ValueError:
    print("Bhaijaan, umar numbers (jaise 20, 25) mein likhi jati hai, ABCD nahi!")
except KeyboardInterrupt:
    print("Aapne program beech mein band kar diya.")
```

Yahan Python khud samajh jayega ki galti kahan hui hai aur usi block ke andar jayega.

---

## 4. Finally Block (Jo har haal mein chalega)

Try aur Except ke alawa ek teesra bhai bhi hota hai: **finally**. 

`finally` block ke andar likha code har haal mein chalega hi chalega. Chahe error aaya ho, ya program successfully run ho gaya ho. Iska use wahan hota hai kahan humein kisi kaam ko safely band karna ho, jaise:
- Database ka connection close karna.
- Open ki hui file ko close karna.

```python
try:
    file = open("secret_data.txt", "r")
    # File padhne ka code...
except FileNotFoundError:
    print("Bhai file toh mili hi nahi!")
finally:
    print("Mai toh har haal mein print hounga. Clean up done!")
```

---

## FAQs (Aksar Puche Jane Wale Sawal)

### 1. Kya mujhe apne poore code ko 'try' ke andar daal dena chahiye?
Nahi! Ye ek bahut buri aadat (bad practice) mani jati hai. Sirf us code ko `try` block mein rakhein jisme aapko lagta hai ki user galat input de sakta hai ya file/network ka issue aa sakta hai. Saara code daalne se aapke original bugs (jo aapko theek karne chahiye) bhi chhup jayenge.

### 2. Bugs aur Exceptions mein kya farq hai?
Bug ka matlab hai code ka logic galat hai (jaise + ki jagah - laga diya, output galat aa raha hai). Exception ka matlab hai runtime par koi external issue aaya hai (jaise server band ho gaya ya internet chala gaya).

### 3. Kya hum errors ko pass kar sakte hain?
Haan, agar aap chahte hain ki error aaye par kuch show na ho aur chup-chap program chalta rahe, toh aap `except:` block mein sirf `pass` likh sakte hain.

---

## Conclusion aur Aapka Agla Kadam

Doston, aaj aapne ek mature programmer banne ka thappa laga liya hai. **Try, Except, aur Finally** blocks aapke code ko us bhole bacche se nikal kar ek rough-and-tough software bana dete hain jo kisi bhi galat input ka has ke samna kar sakta hai.

Congratulations! Yahan tak aapne **"Python for AI"** category ke core topics poore kar liye hain. Data types se lekar error handling tak, ab aapka logic dimaag mein set ho chuka hai. 

Lekin abhi AI ke liye zaroori **Libraries (NumPy, Pandas)** ka aana baaki hai. Hamara agla safar bahut hi exciting hone wala hai. Agar aapko ye guide helpful lagi toh is post ko **apne network mein Share karna na bhoolein**. Happy coding with AI Gyani!
