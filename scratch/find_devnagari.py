import os
import re

posts_dir = r"d:\My Apps\AI-Gyani\content\posts"
devnagari_pattern = re.compile(r'[\u0900-\u097F]+')

for root, _, files in os.walk(posts_dir):
    for file in files:
        if file.endswith(".md"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                lines = f.readlines()
            
            for i, line in enumerate(lines):
                matches = devnagari_pattern.findall(line)
                if matches:
                    print(f"File: {file}, Line {i+1}: {line.strip()}")
                    print(f"  Matches: {matches}")
