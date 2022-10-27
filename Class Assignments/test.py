# Mean '
# list = [1,2,3,4,5,6,7]
# def mean_func():
#     result = sum(list) / len(list)
#     print(result)

# mean_func()

# Median 
# def median_func():
#     list = [1,2,3,4,5,6,7,8]
#     x = len(list)
#     list.sort()
#     if x % 2 == 0:
#         m1 = list[x//2]
#         m2 = list[x//2 - 1]
#         median = (m1 + m2)/2
#     else:
#         median = list[x//2]
#     print(f"The median is {median}")

# median_func()

# Mode
def mode_func(list):
    dict = {}
    for i in list:
        if not i in dict:
            dict[i] = 1 
        else:
            dict[i] += 1
    print(f"Mode value is: ", [a for a, b in dict.items() if b == max(dict.values())] )   


mode_func([1,2,3,4,5,6,7,8,3,2,2])

# Range : To find range, we take maximum value subtract with minimum value 
# def range_func(list):
#     max_val = max(list)
#     min_val = min(list)
#     range_val = max_val - min_val 
#     return print(range_val)

# range_func([1,2,3,4,5,6,7,8])

# Find variance 
# def find_variance(list):
#     x = len(list)
#     mean_val = sum(list) / x 
#     res = sum((i - mean_val)**2 for i in list) / x
#     print(res)
    
# find_variance([1,2,3,4,5,6,7,8,3,2,2])

# Find standard deviation 
import math
def standard_devia(list):
    x = len(list)
    mean_val = sum(list) / x 
    res = sum((i - mean_val)**2 for i in list) / x
    std_dev = math.sqrt(res)
    print(std_dev)

standard_devia([1,2,3,4,5,6,7,8])
