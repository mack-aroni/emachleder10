'''
Team "Dean and Ethan"
Roster: Ethan Machleder, Dean Carey, Ethan Shenker
SoftDev
K07: StI/O: Divine your Destiny!
2020-10-1
'''

import random

def create_dict():
    #open the file
    file = open('occupations.csv')
    #create dictionary
    new_dict = {}
    #split lines into key, value by last comma
    for line in file: 
        key,val = line.strip().rsplit(',',1)
        new_dict[key] = val
    #pop the first and last lines
    new_dict.pop("Job Class")
    new_dict.pop("Total")
    #create a list of the keys, and weights
    pop_list = list(new_dict.keys())
    weight_list = [float(a) for a in list(new_dict.values())]
    #use randomchoices to pick a weighted item
    print(random.choices(pop_list, weight_list, k = 1)[0])
    file.close() #Closes file

create_dict()