import os
import re

posts_dir = r"d:\My Apps\AI-Gyani\content\posts"
images_dir = r"d:\My Apps\AI-Gyani\public\images"

missing_images = []
removed_headings_count = 0

print("Checking for missing images and removing '## IS ARTICLE MEIN'...")

for root, _, files in os.walk(posts_dir):
    for file in files:
        if file.endswith(".md"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # 1. Remove '## IS ARTICLE MEIN'
            new_content = re.sub(r'## IS ARTICLE MEIN\s*\n', '', content)
            if new_content != content:
                removed_headings_count += 1
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                content = new_content

            # 2. Check Image
            # Extract image path from frontmatter
            image_match = re.search(r'^image:\s*"(.*)"', content, re.MULTILINE)
            if image_match:
                image_path = image_match.group(1)
                # image_path usually looks like "/images/filename.png"
                image_filename = os.path.basename(image_path)
                full_image_path = os.path.join(images_dir, image_filename)
                
                if not os.path.exists(full_image_path):
                    missing_images.append(f"MISSING IMAGE FILE: {image_filename} (Referenced in {file})")
            else:
                missing_images.append(f"MISSING FRONTMATTER IMAGE FIELD: {file}")

print(f"\nRemoved '## IS ARTICLE MEIN' from {removed_headings_count} files.")
print("\nImage Status:")
if not missing_images:
    print("All posts have an image field and the corresponding image file exists!")
else:
    for msg in missing_images:
        print(msg)
