import random
# main_arr = [random.randint(1,i + 1) for i in range(51)]
main_arr = [random.randint(0,9) for i in range (7)]
print(main_arr)
# print(sum(main_arr))


def fixed_slider(arr, n):
    #compute the initial sub array
    curr_arr = sum(arr[:n])
    result = [curr_arr]
    #loop through array for every ADDITIONAL number BEYOND (- n ie. not including) the initial sub array 
    # (+1 end for scope, +1 start as compensation)
    for i in range(1, len(arr) - n + 1):
        #remove the value of the chain head
        curr_arr = curr_arr - arr[i - 1]
        #add the value of the next node
        curr_arr = curr_arr + arr[i + n - 1]
        #curr_arr is already a sum, we are simply adding the new result of the next step
        result.append(curr_arr)
    print(result)

# fixed_slider(main_arr, 4)

def random_slider(arr, n):
    sample = random.sample(arr, n)
    print(sample)
    curr_arr = sum(sample)
    print(curr_arr)
    if curr_arr < 15:
        random_slider(arr, n)
# random_slider(main_arr, 4)

def half_n_half(arr):
    n = round(len(arr)/2)
    print(arr[:n], sum(arr[:n]))
    print(arr[n:], sum(arr[n:]))

# half_n_half(main_arr)

def fixed_slider2(arr, n):
    curr_arr = sum(arr[:n])
    result = [curr_arr]
    for i in range(1, len(arr) - n + 1):
        curr_arr = curr_arr - arr[i - 1]
        curr_arr = curr_arr + arr[i + n - 1]
        result.append(curr_arr)
    print(result)
fixed_slider2(main_arr, 3)