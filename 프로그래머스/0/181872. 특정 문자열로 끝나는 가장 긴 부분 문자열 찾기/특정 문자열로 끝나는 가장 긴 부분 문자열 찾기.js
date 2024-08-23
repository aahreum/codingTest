const solution = (myString, pat) => {
    if (myString.length === pat.length) {
        return myString
    }
    return myString.substring(0, myString.lastIndexOf(pat)) + pat;
}