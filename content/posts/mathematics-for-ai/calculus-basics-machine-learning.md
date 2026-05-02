---
title: "Calculus for Machine Learning: Gradient Descent aur Derivatives Explained"
description: "Calculus aur Derivatives kya hain? Janiye ki AI kaise apni galtiyon se seekhta hai. Gradient Descent, Loss Function, Learning Rate — complete beginner-friendly Hindi guide with code."
date: "2026-04-27"
author: "Tarun"
category: "mathematics-for-ai"
categoryLabel: "Mathematics for AI"
tags: ["Math", "Calculus", "Gradient Descent", "Derivatives", "Backpropagation"]
image: "/images/calculus_basics_ai.png"
readingTime: 8
tableOfContents: true
order: 30
slug: "calculus-basics-machine-learning"
---

![Calculus for Machine Learning](/images/calculus_basics_ai.png)

AI ki sabse mysterious power ye hai ki wo **khud se seekhta hai**. Aap data dete ho, wo galtiyan karta hai, aur phir dhire-dhire better hota jaata hai.

Par ek computer program apni galti ko khud theek kaise karta hai? Is magic ke peeche **Calculus** ka hath hai.

Aur ye sunke mat dariye — hum aaj wahi simple calculus dekhenge jo AI mein actually use hoti hai. Koi complex integration nahi, koi scary formulas nahi. Sirf ek concept jo AI ko "seekhne" ki power deta hai: **Derivative**.

---

## Derivative Kya Hota Hai? (Ek Simple Story)

Maan lijiye aap ek pahaad par khade ho, aur aapki aankhon par patti (blindfold) bandhi hai. Aapko jaldi se pahaad ke sabse neeche pahunchna hai.

Aap kya karenge?

Aap apne pair se zameen ko mehsoos karenge. Check karenge — "Is taraf dhalan neeche ja rahi hai? Ya us taraf?"

Jo direction sabse steep neeche ho, us taraf ek kadam badhoge. Phir phir check. Phir kadam. Aur aise karte-karte aap neeche pahunch jaoge.

Math mein, kisi bhi point par us "dhalan" (slope) ko calculate karna hi **Derivative** nikalna kehlata hai.

**Formal definition:** Derivative batata hai ki ek function ki value kisi point par kitni fast badal rahi hai — ek variable ke change ke response mein.

---

## Loss Function: AI Ki "Galti" Ka Paimana

AI model jab koi prediction karta hai, pehle wo bahut galtiyan karta hai. Hum in galtiyon ko ek number mein naapte hain — jise **Loss Function** kehte hain.

**Common Loss Functions:**

```python
import numpy as np

# Mean Squared Error (MSE) — Regression ke liye
y_true = np.array([3.0, 5.0, 7.0, 9.0])
y_pred = np.array([2.5, 5.5, 6.0, 8.0])

mse = np.mean((y_true - y_pred)**2)
print(f"MSE Loss: {mse:.2f}")  # Output: 0.44

# Cross Entropy — Classification ke liye
# (higher = worse model)
```

**Loss ka matlab:**
- Loss = 0 → Perfect model (practically impossible)
- Loss = High → Model bahut galat hai
- Loss = Low → Model achha hai

Hamara goal: **Loss ko minimum karna**.

Yahan aata hai Calculus.

---

## Gradient Descent: AI Ka Seekhne Ka Tarika

**Gradient Descent** wo algorithm hai jo derivatives use karke model ko step-by-step better banata hai.

### Intuition (Pahaad Analogy)

Maan lo Loss Function ek pahaad ki tarah hai (Y-axis = loss, X-axis = model parameter).

- Pahaad ka top = High Loss (model bahut galat)
- Pahaad ki talaab (lowest point) = Minimum Loss (model best)

Hum chahte hain talaah tak pahunchna. Kaise?

1. Current position par slope (derivative) check karo
2. "Kis direction mein slope neeche jaata hai?"
3. Us direction mein thoda move karo
4. Wapas step 1

Ye hi Gradient Descent hai!

### Mathematical Formula (Simple Version)

```
Naya Weight = Purana Weight - (Learning Rate × Derivative of Loss)
```

Ya code mein:
```python
# Manual Gradient Descent Example
import numpy as np

# Simple function: f(x) = x^2 (minimum at x=0)
def f(x):
    return x**2

def df(x):  # Derivative of x^2 = 2x
    return 2 * x

x = 10.0          # Start point (far from minimum)
learning_rate = 0.1  # Step size

for step in range(20):
    gradient = df(x)    # Calculate slope
    x = x - learning_rate * gradient  # Move downhill
    loss = f(x)
    if step % 5 == 0:
        print(f"Step {step}: x = {x:.3f}, loss = {loss:.4f}")

# Output:
# Step 0: x = 8.000, loss = 64.0000
# Step 5: x = 2.621, loss = 6.8716
# Step 10: x = 0.859, loss = 0.7374
# Step 15: x = 0.282, loss = 0.0793
# (Converges towards x=0)
```

---

## Learning Rate: Kadam Ka Size

Pahaad se neeche aate waqt aap kitna bada kadam loge? Ye decide karta hai **Learning Rate**.

```python
# Learning Rate comparison
x_small = 10.0; lr_small = 0.01   # Bahut chhote kadam
x_good = 10.0;  lr_good = 0.1    # Theek kadam
x_large = 10.0; lr_large = 0.9   # Bahut bada kadam

def gradient_descent_demo(start, lr, steps=10):
    x = start
    for _ in range(steps):
        x = x - lr * 2 * x  # df/dx of x^2 = 2x
    return x

print(f"Small LR (0.01):  x = {gradient_descent_demo(10, 0.01):.3f}")   # Slow
print(f"Good LR (0.1):    x = {gradient_descent_demo(10, 0.1):.3f}")    # Good
print(f"Large LR (0.9):   x = {gradient_descent_demo(10, 0.9):.3f}")    # Oscillates!
```

**Problems:**

| Learning Rate | Kya Hota Hai |
|---|---|
| **Bahut Chhota** | Bahut slow convergence, training mein sadiyan lagengi |
| **Bilkul Sahi** | Smooth, steady convergence |
| **Bahut Bada** | Overshooting — model zigzag karta rahega |

---

## Chain Rule: Backpropagation Ki Neenv

Neural networks mein multiple layers hoti hain. Jab hum loss calculate karte hain, hume propagate karna hota hai — last layer se pehli layer tak — ki har weight ne kitna contribute kiya loss mein.

Ye **Chain Rule** se hota hai:

```
d(Loss)/d(w1) = d(Loss)/d(output) × d(output)/d(hidden) × d(hidden)/d(w1)
```

Ye complex lagta hai, lekin PyTorch aur TensorFlow ye automatically karte hain:

```python
import torch

# PyTorch mein automatic differentiation
x = torch.tensor(3.0, requires_grad=True)
y = x**2 + 2*x + 1  # y = (x+1)^2

y.backward()  # Automatically calculate karta hai: dy/dx = 2x + 2

print(x.grad)  # dy/dx at x=3: 2*3 + 2 = 8.0
# Output: tensor(8.)
```

Ye `backward()` call puri neural network mein chain rule apply karta hai — automatically!

---

## Neural Network Training: Sab Kuch Ek Saath

```python
import torch
import torch.nn as nn

# Simple model
model = nn.Linear(2, 1)  # 2 inputs, 1 output
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
criterion = nn.MSELoss()

X = torch.tensor([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]])
y = torch.tensor([[3.0], [7.0], [11.0]])

# Training loop
for epoch in range(100):
    # 1. Forward pass: prediction karo
    y_pred = model(X)
    
    # 2. Loss calculate karo
    loss = criterion(y_pred, y)
    
    # 3. Gradients clear karo (PyTorch accumulate karta hai)
    optimizer.zero_grad()
    
    # 4. Backward pass: gradients calculate karo (Chain Rule!)
    loss.backward()
    
    # 5. Weights update karo (Gradient Descent!)
    optimizer.step()
    
    if epoch % 20 == 0:
        print(f"Epoch {epoch}: Loss = {loss.item():.4f}")
```

Ye 5 steps hi **har** neural network training ka core hai — chota ho ya bada.

---

## Optimizers: Gradient Descent ke Advanced Versions

Vanilla Gradient Descent mein problems hain. Modern AI **optimizer algorithms** use karta hai jo zyada smart hain:

| Optimizer | How It's Better | When to Use |
|---|---|---|
| **SGD** | Basic, predictable | Simple models, research |
| **Momentum** | Oscillations reduce karta hai | Better than basic SGD |
| **RMSProp** | Adaptive learning rate | RNNs |
| **Adam** | Momentum + adaptive LR | **Default choice** — most cases |

```python
# Adam optimizer — almost always best choice
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
```

---

## FAQs

**1. Kya mujhe manually derivatives calculate karni padti hain?**
Nahi! PyTorch aur TensorFlow `autograd` feature ke saath automatic differentiation karte hain. `loss.backward()` sab handle karta hai.

**2. Gradient Descent aur Backpropagation mein kya farq hai?**
Gradient Descent ek optimization algorithm hai (step size decide karta hai). Backpropagation gradients calculate karne ka method hai. Dono milkar kaam karte hain.

**3. Learning rate kaise choose karein?**
0.001 default se shuru karo (Adam ke saath). Learning Rate Scheduler ya grid search se tune karo. Too high: loss diverge karta hai. Too low: bahut slow training.

**4. Loss converge nahi ho raha — kya karein?**
- Learning rate kam karo
- Data normalize karo
- Model architecture check karo
- Batch size change karo

**5. GPU training mein calculus same hota hai?**
Haan, concepts same hain. GPU sirf matrix operations ko faster karta hai — math same hi rehti hai.

---

**Gradient Descent ka concept clear hua? Koi specific topic aur samajhna chahte ho? Comment mein zaroor batayein! 📉**

---

**Tarun ke baare mein:** Tarun ek AI educator hain jo Mathematics ko real code examples ke saath practical banana chahte hain. AI-Gyani par har concept hands-on hai.
