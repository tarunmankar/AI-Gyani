---
title: "Web Scraping Basics in Hindi: BeautifulSoup ka use"
description: "Agar data CSV me na mile to internet se data kaise nikalein? Python me Web Scraping ke basics aur BeautifulSoup library."
date: "2026-04-27"
author: "Tarun"
category: "python-for-ai"
categoryLabel: "Python for AI"
tags: ["Python", "Web Scraping", "BeautifulSoup", "Data Collection"]
image: "/images/web_scraping_beautifulsoup.png"
readingTime: 6
tableOfContents: true
order: 26
---

![Web Scraping Basics in Hindi: BeautifulSoup ka use](/images/web_scraping_beautifulsoup.png)

Machine Learning models data ke bhookhe hote hain. Lekin kya hoga agar aapko jo data chahiye wo kisi CSV file mein available na ho balki kisi website par likha ho? Yahi entry hoti hai **Web Scraping** ki. Is post mein hum dekhenge ki kisi bhi website se code ke zariye data kaise nikala jata hai.

## 1. Web Scraping Kya Hai?

**Web Scraping** ek aisi technique hai jisme aapka Python program ek insaan ki tarah website par jata hai, aur usme se kaam ka text (jaise news, prices, reviews) copy karke aapko de deta hai.

### Kya ye legal hai?
Hamesha kisi website ko scrape karne se pehle uski `robots.txt` file (jaise `website.com/robots.txt`) check karni chahiye. Private data scrape karna illegal ho sakta hai.

## 2. Tools You Need: Requests aur BeautifulSoup

Hum do libraries ka use karenge:
1. **Requests:** Website par jakar uska HTML code lane ke liye.
2. **BeautifulSoup:** Us HTML code me se kaam ki cheezein (headings, links) dhoondhne ke liye.

Install karein:
```bash
pip install requests beautifulsoup4
```

## 3. Pehla Web Scraper Banate Hain

Maan lijiye hum ek dummy book store website (`quotes.toscrape.com`) se quotes (suvichar) nikalna chahte hain.

```python
import requests
from bs4 import BeautifulSoup

# 1. URL decide karein
url = "http://quotes.toscrape.com/"

# 2. Website se HTML mangwayein
response = requests.get(url)
html_code = response.text

# 3. HTML ko BeautifulSoup me daalein
soup = BeautifulSoup(html_code, "html.parser")

# 4. Sare quotes dhundhein ('span' tag jinki class 'text' hai)
quotes = soup.find_all("span", class_="text")

# 5. Print karein
for q in quotes:
    print(q.text)
```

## 4. BeautifulSoup ki Main Methods

- `soup.find("h1")`: Pehla H1 heading dega.
- `soup.find_all("p")`: Sare paragraphs ka ek list dega.
- `element.text`: Kisi bhi tag ke andar likha hua text nikal kar dega.
- `element["href"]`: Agar wo ek link (`<a>` tag) hai, to uska URL nikal kar dega.

## Conclusion

Web scraping Data Scientists ke liye ek aakhiri hathiyar hai. Jab kahin bana banaya dataset nahi milta, to hum internet ko hi apna dataset bana lete hain. 

Lekin dhyan rakhein, websites ka code badalta rehta hai, isliye aapke scrapers bhi samay ke sath toot sakte hain aur unhe update karna pad sakta hai!
