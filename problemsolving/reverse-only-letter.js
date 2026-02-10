var reverseOnlyLetters = function (s) {
    const regex = /[a-zA-Z]/;
    let i = 0;
    let j = s.length - 1;

    while (i < j && j > i) {
        if (regex.test(s[i]) && regex.test(s[j])) {
            const charArray = s.split(""); // swaping in string
            [charArray[i], charArray[j]] = [charArray[j], charArray[i]]
            s = charArray.join("");
            i++;
            j--;
        } else if (!regex.test(s[i])) {
            i++;
        } else j--;
    }

    return s;
};

reverseOnlyLetters("a-bC-dEf-ghIj");

/*

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

*/
