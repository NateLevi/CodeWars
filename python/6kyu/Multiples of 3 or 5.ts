def solution(number):
    arr = []
    for num in range(number):
        if num % 3 == 0 or num % 5 == 0:
            arr.append(num)
    return sum(arr)

//Learned that you can use modular in python just like js
