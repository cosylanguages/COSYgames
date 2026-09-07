import json, glob, os

def build_prompt(item):
    title = item.get('title', '')
    age = item.get('age', '')
    loc = item.get('location', '')
    vdesc = item.get('visualDescription', '')
    category = item.get('category', '').lower()

    # Clean up location string if it has emoji/extra bullets
    clean_loc = loc.replace('📍', '').replace('•', ',').strip()

    if any(k in category for k in ['property', 'properties', 'house', 'studio', 'apartment']):
        return f"High-end architectural and interior photography of {title} in {clean_loc}. {vdesc} Natural daylight streaming through windows, cozy inviting atmosphere, 35mm lens, photorealistic 8k detail, ultra-high quality."
    elif any(k in category for k in ['hobby', 'hobbies']):
        return f"Authentic lifestyle candid photograph illustrating {title} at {clean_loc}. {vdesc} Shallow depth of field, warm golden-hour lighting, cinematic color grading, hyper-detailed 35mm camera portrait."
    else:
        # Default person profile portrait
        return f"Modern candid portrait photograph for a profile of {title}, {age}, located in {clean_loc}. {vdesc} Soft natural cinematic lighting, shot on 85mm portrait lens at f/1.8, high detail skin texture, shallow bokeh background, highly aesthetic."

files = glob.glob('this_or_that/decks/*.json')

count = 0
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    def process_node(node):
        global count
        if isinstance(node, dict):
            if 'title' in node and 'visualDescription' in node:
                node['imagePrompt'] = build_prompt(node)
                count += 1
            for k, v in node.items():
                process_node(v)
        elif isinstance(node, list):
            for elem in node:
                process_node(elem)

    process_node(data)

    with open(fpath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Successfully added imagePrompt to {count} profiles across all deck files!")
