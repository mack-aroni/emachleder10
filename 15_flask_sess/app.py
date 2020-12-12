# Team Elephant (Jeffrey Huang, Matthew Hui, Winnie Huang, Ethan Machleder)
# SoftDev
# K15 -- Sessions Greetings
# 2020-12-11
from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session
import os

#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object
app.secret_key = os.urandom(32) #Need this, if we didn't include this it would produce a runtime error


@app.route("/") #, methods=['GET', 'POST'])
def disp_loginpage():
    if 'username' in session: #Checks if the user is logged in
        return render_template('response.html', user = 'abc')
    else:
        return render_template( 'login.html')



@app.route("/auth") # , methods=['GET', 'POST'])
def welcome():
    username = "abc"
    password = "123"
    if request.args['username'] == username:
        if request.args['password'] == password:
            session["username"] = username
            return render_template('response.html', user = username)
    else:
        return render_template('invalid.html')

    return render_template ( 'response.html')  #response to a form submission

@app.route("/logout")
def logout():
    session.pop('username', None) #removes the session
    return render_template('login.html')
    
if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
