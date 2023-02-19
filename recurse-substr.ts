function recurseSubStr(s: string, start = 0, next = 1, path: Array<string> = []) {
    if(start === s.length || next === s.length) {
        return path;
    }
    
    path.push(s.substring(start, next));
    return recurseSubStr(s, start, next + 1, path)
}

const result = recurseSubStr('abc')


console.log(result)
