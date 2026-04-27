import os
import re

posts_dir = 'content/posts'
images_dir = 'public/images'

missing_info = []

for root, dirs, files in os.walk(posts_dir):
    for file in files:
        if file.endswith('.md'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Check frontmatter
                image_match = re.search(r'image:\s*"(.*?)"', content)
                image_path = image_match.group(1) if image_match else None
                
                # Check if file exists
                exists = False
                if image_path:
                    img_file = os.path.basename(image_path)
                    if os.path.exists(os.path.join(images_dir, img_file)):
                        exists = True
                
                if not image_path or not exists:
                    title_match = re.search(r'title:\s*"(.*?)"', content)
                    title = title_match.group(1) if title_match else file
                    missing_info.append({
                        'path': path,
                        'title': title,
                        'current_image': image_path
                    })

print("Posts missing images:")
for item in missing_info:
    print(f"{item['path']} | {item['title']} | {item['current_image']}")
