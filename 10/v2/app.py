#Team Random: Ethan Machleder, Mary Shang, Jessica Yeung
#SoftDev
#K10: Putting Little Pieces Together
#2020-10-10

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/") #assign fxn to route
def hello_world():
    print("about to print __name__...") #prints "about to print __name__..." in the terminal
    print(__name__) #prints _main_ in the terminal
    return "No hablo queso!" #prints "No hablo queso!" on the website in plain text

app.run()

