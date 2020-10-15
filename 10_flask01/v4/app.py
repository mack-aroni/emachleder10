#Team Random: Ethan Machleder, Mary Shang, Jessica Yeung
#SoftDev
#K10: Putting Little Pieces Together
#2020-10-10

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ") #"the __name__ of this module is... "" in the terminal
    print(__name__) #prints _main_ in the terminal
    return "No hablo queso!" #prints "No hablo queso!" on the website in plain text

if __name__ == "__main__": #true if this file NOT imported
    app.debug = True #enable auto-reload upon code change
    app.run()
