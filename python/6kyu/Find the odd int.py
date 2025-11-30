def find_it(seq):
    nums = {}
    for num in seq:
        nums[num] = nums.get(num, 0) + 1
    for number in nums:
        if nums[number] % 2 != 0:
            return number
