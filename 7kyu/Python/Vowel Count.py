# --- Codewars Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/python
# --- Title: Vowel Count
# --- Kyu: 7 kyu
# --- Date Solved: 9/24/25

# --- My Solution:
def get_count(sentence):
    total = 0
    arr = ['a','e','i','o','u']
    
    for letter in sentence:
        for vowel in arr:
            if letter == vowel:
                total += 1
    return total

"""
--- Reflection & Struggle ---

Primary Struggle Tag: syntax of for loop, adding : after for and if, setting variables with just variable = 0
Specific Note: used gpt to help with python syntax
Key Learning/Reinforcement: adding :, 
"""

# --- Alternative Solution Link: 
