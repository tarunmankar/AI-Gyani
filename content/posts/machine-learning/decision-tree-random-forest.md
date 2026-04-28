---
title: "Decision Tree aur Random Forest Explained: Simple Hindi Guide"
description: "Machine Learning me Decision Tree aur Random Forest kaise kaam karte hain? Real-life examples se samjhein in dono popular algorithms ko."
date: "2026-04-28"
author: "Tarun"
category: "machine-learning"
categoryLabel: "Machine Learning"
tags: ["Machine Learning", "Decision Tree", "Random Forest", "Classification"]
image: "/images/decision_tree_random_forest.png"
slug: "decision-tree-random-forest"
featured: false
readingTime: 6
tableOfContents: true
order: 44
---

![Decision Tree and Random Forest](/images/decision_tree_random_forest.png)

Pichli posts me humne Machine Learning ke alag-alag types dekhe the. Aaj hum 2 sabse zyada use hone wale aur sabse asaan algorithms ki baat karenge: **Decision Tree** aur **Random Forest**.

Ye dono algorithms **Classification** aur **Regression** dono ke liye use ho sakte hain, lekin zyada tar inhe classification (Categories me baantne) ke liye use kiya jata hai.

## 1. Decision Tree Kya Hai?

Decision Tree ka naam uske kaam se hi milta hai—"Faisle ka Ped". Ye waise hi faisle leta hai jaise hum insaan apni aam zindagi me lete hain.

**Ek Simple Example:**
Maan lijiye aapko decide karna hai ki aaj movie dekhne jana hai ya nahi. Aapka dimaag kuch sawal puchega:
1. *Kya mere paas paise hain?* 
   * Agar **Nahi**, toh plan cancel.
   * Agar **Haan**, toh agla sawal.
2. *Kya mere doston ke paas time hai?*
   * Agar **Nahi**, toh akele jaunga.
   * Agar **Haan**, toh sab milkar jayenge.

Decision Tree bilkul aise hi "If-Else" rules banata hai. Ye data ko dekhta hai aur usko alag-alag sawalo ke aadhar par todta jata hai jab tak final answer nahi mil jata. In sawalo ko "Nodes" aur answers ko "Leaves" (Patte) kaha jata hai.

**Fayde:** 
* Samajhne me sabse asaan hai.
* Ise draw karke kisi ko bhi samjhaya ja sakta hai (Highly interpretable).

**Nuksan (Problem):**
* **Overfitting:** Kabhi-kabhi ek Decision tree data ko itni bariki se yaad kar leta hai (rat leta hai) ki naye data par wo fail ho jata hai. Is problem ka solution hai **Random Forest**.

## 2. Random Forest Kya Hai?

Naam se hi pata chal raha hai—Bahut saare "Trees" (Ped) milkar ek "Forest" (Jungle) banate hain. 

**Ek Simple Example:**
Sochiye aapko ek nayi car kharidni hai. Aap ek dost se puchte hain (Ye ek Decision tree hua). Wo apne hisab se ek car bata deta hai. Lekin kya aap sirf ek dost ki baat manenge? Nahi!
Aap 10 doston se puchenge. Har dost aapse alag-alag sawal puchega (Mileage kitni chahiye? Budget kya hai? Family badi hai ya choti?). Har dost ek alag car recommend karega. 

Aakhir me, jis car ka naam sabse zyada doston ne liya hoga, aap wahi car kharidenge. Is Voting system ko ML ki bhasha me **Ensemble Learning** kehte hain.

**Random Forest me yahi hota hai:**
Ek akela Decision tree galat ho sakta hai. Isliye Random Forest me algorithm ek saath **saikdon (hundreds)** Decision Trees banata hai. Jab koi prediction karni hoti hai, toh saare trees apna-apna answer dete hain. Jiska vote sabse zyada hota hai, wahi final answer maan liya jata hai!

## Summary

* **Decision Tree** ek simple rasta hai jisme sawal puch kar answer milta hai. Par wo akela kabhi-kabhi galat raste par ja sakta hai.
* **Random Forest** dher saare Decision trees ka ek team hai jo "Voting" ke through milkar sabse accurate aur badiya decision leta hai. 

Aaj ke time me kisi bhi Machine Learning problem ke liye Data Scientists sabse pehle Random Forest ko hi try karte hain kyunki ye bahut powerful hota hai.
