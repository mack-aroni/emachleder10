'''
Team Poseidon
Roster: Madelyn Mao, Ethan Machleder, Mary Shang
SoftDev
K05 -- Teamwork, But Better This Time
2020-09-27
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
    teams = ['orpheus', 'rex', 'endymion']
    ##picks one of the 3 random groups
    r = random.randint(0, 2)
    ##print(KREWES[teams[r]])
    #picks one of the group members
    n = len(KREWES[teams[r]])
    pos = random.randint(0,n-1)
    print(KREWES[teams[r]][pos])

pick()

'''
We all agreed that the question is asking to randomly choose a student from a random team. So we created a list
containing the three keys in KREWES and randomly picked a team's position. Then we randomly picked a student's
position in that team. When we print KREWES[teams[r]][pos], it randomly chooses a key/team in KREWES, and prints
one of its values/students at random.
'''
