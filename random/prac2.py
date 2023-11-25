import random
letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

scores = [random.randint(0,10) for i in letters]

letter_scores = {key:value for key,value in zip(letters,scores)}
# letter_scores = {key:value for key,value in zip(range(100), range(100))}
print(letter_scores)

def score(word):
    value = 0
    for i in word:
        value += letter_scores[i.upper()]
    print(word + "'s Score:", value)

score("Deondre")
print(letter_scores.pop("B"))