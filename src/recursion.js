import { ar } from "date-fns/locale";

const factorial = (n) => {
    if (0 > n || typeof n === "string" || typeof n === "object" || !Number.isInteger(n)) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

const contains = (obj, target) => {
    for (const value of Object.values(obj)) {
        if (value === target) return true;

        if (Array.isArray(value)) {
            for (const e of value) {
                if (e === target) return true;
                if (typeof e === "object" && e !== null && contains(e, target)) return true;
            }
        }

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            if (contains(value, target)) return true;
        }

        if (Number.isNaN(value) && Number.isNaN(target)) return true;
    }

    return false;
};

const totalIntegers = (arr) => {
    let total = 0;

    if (!Array.isArray(arr) && typeof arr === "object") {
        for (const value of Object.values(arr)) {
            if (typeof value === "string") continue;
            if (Number.isInteger(value)) total++;
            else total += totalIntegers(value);
        }
    } else if (Array.isArray(arr)) {
        for (const e of arr) {
            if (typeof e === "string") continue;
            if (Number.isInteger(e)) total++;
            else if (typeof e === "object" && e !== null) total += totalIntegers(e);
        }
    } else if (
        typeof arr === "string" ||
        typeof arr === "function" ||
        Number.isInteger(arr) ||
        Number.isNaN(arr)
    ) return undefined;

    return total;
};

const permutations = (arr) => {

    const result = [];

    if (arr.length === 0) {
        result.push([]);
        return result;
    }
    if (arr.length === 1) {
        result.push(arr);
        return result;
    }

    for (const e of arr) {
        const rest = arr.filter(el => el !== e);
        const subPerms = permutations(rest);
        result.push(...subPerms.map(sp => [e, ...sp]));
    }

    return result;

};


export {
    factorial,
    contains,
    totalIntegers,
    permutations
};