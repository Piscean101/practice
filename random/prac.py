test_array = list(range(1, 50, 7)) + list(range(3, 25, 2)) + list(range(15, 100, 13))
# print(sorted(test_array))
# print(test_array[4+1:])
import math
import random

total = 0

for i in test_array:
    total += i
# print(total)

# print(test_array.pop(0))
# print(test_array)

name = "Deondre the goat"

# def country(swtich = random.randint(0,5)):
#     if switch == 
    

# def code(str):
#     code = [random.randint(0,5) if i != " "  else '#' for i in str]
#     return code

empty_list = [[] for i in range(100)]
code_library = {#key:value for key,value in zip(list(range(10)), empty_list)
}

def coder():
    index = random.choice(range(21))
    code = [random.randint(0,5) for i in range(5)]
    if code_library.get(index):
        print("Index", index, "already exists in the database let's try again..")
        return coder()
    else: 
        code_library[index] = code, print("Adding code:", code, "to key of ->", index)
    return print(code_library)

for i in range(7):
    coder()

some_list = [random.randint(0, 10) for i in range(12)]
# print(some_list)
some_other_list = [random.randint(0,10) for i in range(15)]
# print(some_other_list)
too_dee_list = zip(some_list, some_other_list)

# print(list(too_dee_list))
