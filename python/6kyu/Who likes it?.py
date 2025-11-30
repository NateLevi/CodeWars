def likes(names):
    name = len(names)
    if name == 1:
        return f"{names[0]} likes this"
    elif name == 2:
        return f"{names[0]} and {names[1]} like this"
    elif name == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    elif name > 3:
        return f"{names[0]}, {names[1]} and {name - 2} others like this"
    else:
        return "no one likes this"
