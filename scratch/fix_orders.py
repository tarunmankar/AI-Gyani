import os
import re

# Correct orders based on the updated plan
order_mapping = {
    "why-python-for-ai.md": 13,
    "python-setup-guide.md": 14,
    "python-basics-variables-datatypes.md": 15,
    "python-data-structures-lists-tuples-dictionaries.md": 16,
    "python-loops-and-conditions.md": 17,
    "python-functions-explained.md": 18,
    "python-oop-concepts-for-ai.md": 19,
    "python-modules-and-libraries.md": 20,
    "python-error-handling-try-except.md": 21,
    "numpy-for-ai-beginners.md": 22,
    "pandas-crash-course-data-science.md": 23,
    "matplotlib-seaborn-data-visualization.md": 24,
    "python-file-handling-reading-csv-json.md": 25,
    "python-web-scraping-basics-beautifulsoup.md": 26,
    "python-final-project-data-analysis.md": 27,
    "why-math-is-important-for-ai.md": 28,
    "linear-algebra-vectors-matrices-ai.md": 29,
    "calculus-basics-machine-learning.md": 30
}

posts_dir = 'content/posts'

for root, dirs, files in os.walk(posts_dir):
    for file in files:
        if file in order_mapping:
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_order = order_mapping[file]
            
            # Check if order field exists
            if re.search(r'order:\s*\d+', content):
                new_content = re.sub(r'order:\s*\d+', f'order: {new_order}', content)
            else:
                # Add it before the closing ---
                new_content = re.sub(r'(---)', f'order: {new_order}\n\\1', content, count=1, flags=re.MULTILINE)
                # Wait, re.sub with count=1 on --- might replace the first one.
                # Let's use a safer replacement.
                lines = content.split('\n')
                in_frontmatter = False
                inserted = False
                new_lines = []
                for line in lines:
                    if line.strip() == '---':
                        if not in_frontmatter:
                            in_frontmatter = True
                        else:
                            if not inserted:
                                new_lines.append(f"order: {new_order}")
                                inserted = True
                    new_lines.append(line)
                new_content = '\n'.join(new_lines)

            if new_content != content:
                print(f"Updating order for {file} to {new_order}")
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
