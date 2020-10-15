# Team Random: Ethan Machleder, Mary Shang, Jessica Yeung
# SoftDev
# K10: Putting Little Pieces Together
# 2020-10-13

# Import the neccesary modules
from csv import DictReader
from random import choices as c
from flask import Flask

############

# Credits to Team "Ethan and Dean" for the code for randomly selecting a weighted job

with open("occupations.csv") as file:  # open the file
    reader = DictReader(file)

    jobs = []
    weights = []

    for row in reader:
        jobs.append(row["Job Class"])
        weights.append(float(row['Percentage']))  # casts each str into a float

    # creates a string of all jobs with linebreaks (should be <br> instead of \n)
    jobstr = ""
    for job in jobs[:-1]:
        jobstr += job + "<br>"

file.close()

occ = (f"Job selected: {c(jobs[:-1], weights=weights[:-1])[0]}.")

############

app = Flask(__name__)

@app.route("/") # assigns function to route

# prints TNPG, roster, job list, and job selected on the webpage
def hello_world():
    return "Team Random: Ethan Machleder, Mary Shang, Jessica Yeung<br><br>Job list:<br>" + jobstr + "<br>" + occ

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()