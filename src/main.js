const capitalize = (str) => {
    if (str.includes(" ")) {
        const result = [];
        str.split(" ").forEach(word => {
            result.push(word[0].toUpperCase() + word.slice(1));
        });

        return result.join(" ");
    }

    const strArr = str.split("");
    return strArr[0].toUpperCase() + strArr.slice(1).join("");
};

const reverseString = (str) => {
    if (!str) return;
    return str.split("").reverse().join("");
};

const calculator = {
    add(addend1, addend2) {
        return addend1 + addend2;
    },

    subtract(min, sub) {
        return min - sub;
    },

    divide(dividend, divisor) {
        return dividend / divisor;
    },

    multiply(multiplicand, multiplier) {
        return multiplicand * multiplier;
    }


};

// helper functions
const createCipherMap = (alphabet, cipherText) => {
    const map = {};
    [...alphabet].forEach((c, i) => {
        map[c] = cipherText[i];
    });
    return map;
};

const encrypt = (str, map) => {
    return [...str].reduce((prev, curr) => {
        if (/[!,\s+$]/g.test(curr)) return prev + curr;

        if (isCapitalized(curr)) {
            const key = curr.toLowerCase();
            return prev + map[key].toUpperCase();
        }

        return prev + (map[curr] ? map[curr] : curr);
    }, "");
};

const shiftAlphabet = (alphabet, shift) => {
    return alphabet.split("").slice(shift).join("").toLowerCase() + alphabet.split("").slice(0, shift).join("").toLowerCase();
};

const isCapitalized = (char) => char === char.toUpperCase();

const caesarCipher = (str, shift) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const cipherMap = createCipherMap(alphabet, shiftAlphabet(alphabet, shift));

    return encrypt(str, cipherMap);
};


const analayzeArray = (arr) => {

    const length = arr.length;
    const average = arr.reduce((acc, curr) => acc + curr, 0) / length;
    const min = arr.reduce((acc, curr) => curr < acc ? curr : acc);
    const max = arr.reduce((acc, curr) => curr > acc ? curr : acc);

    return {
        average,
        min,
        max,
        length

    };
};


export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    createCipherMap,
    shiftAlphabet,
    isCapitalized,
    analayzeArray
};