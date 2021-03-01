import os
import shutil

os.mkdir("bin")
os.chdir("bin")

os.mkdir("content")
os.mkdir("content/css")
os.mkdir("assets")
os.mkdir("assets/img")


with open("index.html", 'a') as txt:
    txt.write("""<!DOCTYPE html>\n
<html>\n
<head>
  <meta charset="UTF-8">\n
  <title>test</title>\n
  <link rel="stylesheet" href="content/css/master.css">\n
  <link rel="stylesheet" href="content/css/header.css">\n
  <link rel="stylesheet" href="content/css/additional.css">\n
  <link rel="stylesheet" href="content/css/footer.css">\n
</head>\n
<body>\n\n""")

shutil.copy('../modules/content/master/master.css', 'content/css/master.css')

with open("../modules/content/header/1/header.txt") as f:
    shutil.copy('../modules/content/header/1/header.css', 'content/css/header.css')
    shutil.copy2('../modules/content/header/1/header.css', 'assets/img/logo.svg')
    with open("index.html", 'a') as f1:
        for line in f:
            f1.write(line)
            
with open("../modules/content/additional/1/additional.txt") as f:
    shutil.copy('../modules/content/additional/1/additional.css', 'content/css/additional.css')
    with open("index.html", 'a') as f1:
        for line in f:
            f1.write(line)

with open("../modules/content/footer/1/footer.txt") as f:
    shutil.copy('../modules/content/footer/1/footer.css', 'content/css/footer.css')
    with open("index.html", 'a') as f1:
        for line in f:
            f1.write(line)

with open("index.html", 'a') as txt:
    txt.write("</body\n</html>")
