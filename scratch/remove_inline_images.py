import os
import re

posts_dir = r"d:\My Apps\AI-Gyani\content\posts"
removed_count = 0

for root, _, files in os.walk(posts_dir):
    for file in files:
        if file.endswith(".md"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Remove lines that start with ![...](...)
            # We use a multiline regex to remove the line entirely
            new_content = re.sub(r'^!\[.*?\]\(.*?\)\s*\n', '', content, flags=re.MULTILINE)
            
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                removed_count += 1
                print(f"Removed inline image from {file}")

print(f"Finished. Removed inline images from {removed_count} files.")
