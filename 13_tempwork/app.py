#Team Calculator: Ethan Machleder, Eric Lo
#SoftDev
#K13: Template for Success
#2020-10-16

from flask import Flask, render_template
from csv import DictReader
from random import choices as c
app = Flask(__name__) 

@app.route("/") 
def home():
    return "Team Calculator: Ethan Machleder, Eric Lo<br>SoftDev<br>K13: Template for Success<br>2020-10-16" # homepage

@app.route("/occupyflaskst")
def tablified():
    with open("data/occupations.csv") as file: # opens the file
        reader = DictReader(file)
        dic = {'jobs': [], 'percentage': []} #sets up a destination for the contents of the csv file
        for row in reader:
            dic['jobs'].append(row["Job Class"])
            dic['percentage'].append(float(row['Percentage'])) # casts each percentage str into a float
        file.close() # closes the file
        listx = zip(tuple(dic['jobs']),tuple(dic['percentage'])) # groups each job and percentage as a tuple
    titles = ['Jobs', 'Percentages']
    random_occ = (c(dic['jobs'][:-1], weights=dic['percentage'][:-1])[0]) # chooses a random occupation by weight
    return render_template('tablified.html', randomocc = random_occ, titles = titles, data = listx )
    
if __name__ == "__main__":
    app.debug = True
    app.run()
