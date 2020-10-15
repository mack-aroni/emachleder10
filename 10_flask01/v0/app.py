#Team Random: Ethan Machleder, Mary Shang, Jessica Yeung
#SoftDev
#K10: Putting Little Pieces Together
#2020-10-10

from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__) #prints _main_ in the terminal
    return "No hablo queso!" #prints "No hablo queso!" on the webpage in plain text

app.run() 
