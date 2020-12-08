# Team Elephant (Jeffrey Huang, Matthew Hui, Winnie Huang, Ethan Machleder)
# SoftDev
# K14 -- Form and Function
# 2020-12-10

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission

#the conventional way:
#from flask import Flask, render_template, request
app = Flask(__name__)    #create Flask object

@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    #print("***DIAG: request.args['username']  ***") ; can't request an argument that isn't avaliable
    #print(request.args['username'])  ; can't request an argument that isn't avaliable
    print("***DIAG: request.headers ***")
    print(request.headers)
    return render_template( 'login.html' )

@app.route("/auth") # , methods=['GET', 'POST'])
def authenticate():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.args['username']  ***")
    print(request.args['username'])  # now that arg 'username' is made/inputted, the request is valid
    print("***DIAG: request.headers ***")
    print(request.headers)
    name = request.args['username']
    return render_template( 'response.html' , user = name)  #response to a form submission


if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()