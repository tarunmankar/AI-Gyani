import os
import re

posts_dir = r"d:\My Apps\AI-Gyani\content\posts"
added_count = 0

for root, _, files in os.walk(posts_dir):
    for file in files:
        if file.endswith(".md"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Find frontmatter
            match = re.match(r'^---\n(.*?)\n---\n(.*)', content, re.DOTALL)
            if not match:
                continue
                
            frontmatter = match.group(1)
            body = match.group(2)
            
            # Check if there's already an inline image at the top of the body (ignoring empty lines)
            if re.search(r'^\s*!\[.*?\]\(.*?\)', body):
                continue # Already has an inline image

            # Extract title and image path from frontmatter
            title_match = re.search(r'^title:\s*"(.*?)"', frontmatter, re.MULTILINE)
            image_match = re.search(r'^image:\s*"(.*?)"', frontmatter, re.MULTILINE)
            
            if title_match and image_match:
                title = title_match.group(1)
                image = image_match.group(1)
                
                # We want the inline image right at the start of the body
                # Let's insert it right after the second '---'
                inline_img = f"![{title}]({image})\n\n"
                
                new_content = f"---\n{frontmatter}\n---\n\n{inline_img}{body.lstrip()}"
                
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                added_count += 1
                print(f"Added inline image to {file}")

print(f"\nAdded inline images to {added_count} files.")
