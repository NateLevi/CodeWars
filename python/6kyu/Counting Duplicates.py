def duplicate_count(text):
    dict = {}
    count = 0
    for char in text:
        char = char.lower()
        if char not in dict: 
            dict[char] = 0
        dict[char] += 1
    
    for key in dict:
        if dict[key] > 1:
            count += 1
    return count
  # .lower is the lowercase python method
