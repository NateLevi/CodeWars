def get_middle(s):
    length = len(s)
    if length % 2 == 0:
        mid = length // 2
        return s[mid - 1] + s[mid]
    else:
        mid = length // 2
        return s[mid]
