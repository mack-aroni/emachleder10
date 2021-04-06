# Team guy (Eric Lo, Ethan Machleder)
# SoftDev
# K19 — A RESTful Journey Skyward / playing with APIs
# 2021-04-05

import urllib.request as s
from flask import Flask, render_template, request
import json as t

app = Flask(__name__)

@app.route("/")
def disp_loginpage():
    #visit the url
    demokeyfile = open("key_nasa.txt", "r") 
    demokey = demokeyfile.read() 
    url = "https://api.nasa.gov/planetary/apod?api_key=" + demokey
    u = s.urlopen(url) #use urllib api to get ref to webpage

    #create ref to url contents
    data = u.read()

    #turn data into a json dictionary using json api
    dictionary = t.loads(data)

    #extract image and explanation
    image = dictionary['url']
    explanation = dictionary['explanation']

    #jinja things
    return render_template("main.html", img = image, expl = explanation)

if __name__ == "__main__":
    app.run(debug=True)

"""
demokeyfile = open("key_nasa.txt", "r")
demokey = demokeyfile.read()
#print(demokey)
url = "https://api.nasa.gov/planetary/apod?api_key=" + demokey
u = s.urlopen(url)
data = u.read()
print(data)
"""
© 2021 GitHub, Inc.