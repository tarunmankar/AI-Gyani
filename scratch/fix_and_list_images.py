import os
import re

posts_dir = 'content/posts'
images_dir = 'public/images'

# Map titles or slugs to potential image filenames
# This is a bit manual but safer
image_mapping = {
    "ai-algorithms-models": "ai-algorithms-models.png",
    "real-life-ai-applications": "ai-applications.png",
    "role-of-data-in-ai": "ai-data-role.png",
    "history-of-ai": "ai-history.png",
    "ai-ml-deep-learning-difference": "ai-ml-dl.png",
    "ai-myths-vs-reality": "ai-myths-reality.png",
    "ai-terms-explained": "ai-terms-explained.png",
    "ai-vs-human-intelligence": "ai-vs-human.png",
    "future-of-ai-in-india-and-world": "future-of-ai.png",
    "how-ai-works-step-by-step": "how-ai-works.png",
    "types-of-ai-explained": "types-of-ai.png",
    "what-is-ai": "what-is-ai.png",
    "python-basics-variables-datatypes": "python-basics.png",
    "python-data-structures-lists-tuples-dictionaries": "python-data-structures.png",
    "why-python-for-ai": "python-for-ai.png",
    "python-loops-and-conditions": "python-loops-conditions.png",
    "python-setup-guide": "python-setup.png",
}

missing_images = []

for root, dirs, files in os.walk(posts_dir):
    for file in files:
        if file.endswith('.md'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract slug or filename without ext
            slug = os.path.splitext(file)[0]
            
            # Check if image field exists
            image_field_match = re.search(r'image:\s*"(.*?)"', content)
            
            if not image_field_match:
                # Potential image name
                potential_img = image_mapping.get(slug)
                if potential_img and os.path.exists(os.path.join(images_dir, potential_img)):
                    print(f"Fixing {file}: adding image {potential_img}")
                    # Insert image field after title
                    new_content = re.sub(r'(title: ".*?")', r'\1\nimage: "/images/' + potential_img + '"', content)
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                else:
                    missing_images.append(path)
            else:
                img_path = image_field_match.group(1)
                img_file = os.path.basename(img_path)
                if not os.path.exists(os.path.join(images_dir, img_file)):
                    missing_images.append(path)

print("\nStill missing images (need generation):")
for path in missing_images:
    print(path)
