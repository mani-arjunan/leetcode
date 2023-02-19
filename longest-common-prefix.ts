const longestCommonPrefix = (strs: string[]): string => {
    let str = strs[0];
    let resultStr = ""

    for(let i = 0;i < strs.length; i++) {
        let k = 0;
        for(let j = 0;j<strs[i].length;j++) {
            if(strs[i][j] === str[k++]) {
                resultStr += strs[i][j]
            } else {
                if(resultStr === "") {
                    return ""
                }
                break;
            }
        }
        str = resultStr;
    }

    return resultStr.length === 0 ? str : resultStr
}

