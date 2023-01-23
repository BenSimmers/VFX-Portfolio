#!/usr/bin/env python

import os
import urllib.parse


files = os.listdir("/Users/bensimmers/Documents/projects/Quick-Notes/VFX-Portfolio")

#image_ext = '".jpg", ".jpeg", ".png", ".bmp", ".gif", ".webm"'

readme_contents = "\n# VFX Portfolio\n\n"

for item in files:
    if item.endswith(".jpg") or item.endswith(".jpeg") or item.endswith(".png") or item.endswith(".bmp") or item.endswith(".gif") or item.endswith(".webm"):
        readme_contents += str(f'## {item}\n\n![{item}]({urllib.parse.quote(item)})\n\n')
        
with open("/Users/bensimmers/Documents/projects/Quick-Notes/VFX-Portfolio/README.md", "w") as readme:
    readme.write(readme_contents)
    readme.close()

#print(readme_contents)