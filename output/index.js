"use strict";
function getSuccessiveNumbers(num) {
    const result = [];
    for (let i = 1; i < num / 2; ++i) {
        const { isSuccessive, strOutput } = isSuccessiveNumber(i);
        if (isSuccessive)
            result.push(strOutput);
    }
    return result;
    function isSuccessiveNumber(index) {
        let str = String(index);
        let sum = index;
        for (let current = index + 1; sum <= num; ++current) {
            sum += current;
            str = str.concat('+', String(current));
            if (sum === num)
                return { isSuccessive: true, strOutput: str };
        }
        return { isSuccessive: false, strOutput: str };
    }
}
console.log(getSuccessiveNumbers(55));
module.exports = getSuccessiveNumbers;
//# sourceMappingURL=index.js.map