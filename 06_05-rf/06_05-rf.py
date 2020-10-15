<<<<<<< HEAD
'''
Team "Dean and Ethan"
Roster: Ethan Machleder, Dean Carey, Ethan Shenker
SoftDev
K06: Learnination Through Amalgamation
2020-10-1
'''

#Write a program that will print the name of a randomly-selected student from team (orpheus, rex, or endymion).

import random

def pick():
    KREWES = {'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA',
                          'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
              'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE',
                      'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
              'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY',
                           'ERIN', 'MEIRU']}
    team = input("Enter team name: ").lower()
    #picks one of the group members
    print(random.choice(KREWES.get(team)))

pick()

'''
We all agreed that the question is asking to randomly choose a student from a random team. So we created a list
containing the three keys in KREWES and randomly picked a team's position. Then we randomly picked a student's
position in that team. When we print KREWES[teams[r]][pos], it randomly chooses a key/team in KREWES, and prints
one of its values/students at random.
'''
=======
'''
Team "Dean and Ethan"
Roster: Ethan Machleder, Dean Carey, Ethan Shenker
SoftDev
K06: Learnination Through Amalgamation
2020-10-1
'''

#Write a program that will print the name of a randomly-selected student from team (orpheus, rex, or endymion).

import random

def pick():
    KREWES = {'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA',
                          'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
              'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE',
                      'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
              'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY',
                           'ERIN', 'MEIRU']}
    team = input("Enter team name: ").lower()
    #picks one of the group members
    print(random.choice(KREWES.get(team)))

pick()

'''
We all agreed that the question is asking to randomly choose a student from a random team. So we created a list
containing the three keys in KREWES and randomly picked a team's position. Then we randomly picked a student's
position in that team. When we print KREWES[teams[r]][pos], it randomly chooses a key/team in KREWES, and prints
one of its values/students at random.
'''
>>>>>>> 05b1920ea5accbc8912b1411c7bd37e69a9a5173
