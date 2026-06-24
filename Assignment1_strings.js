function palindrome_check(){
    let str = "MADAM"
    let reversestr = str.split("")
    let stringPalindrom = ""
    
    for(let i = reversestr.length - 1; i>=0; i--)
        stringPalindrom=stringPalindrom+ reversestr[i]
    
console.log(`String = ${str}`);


if (str === stringPalindrom)
    console.log("String is palindrome")
else
    console.log("String is not a palindrome")
}

palindrome_check()