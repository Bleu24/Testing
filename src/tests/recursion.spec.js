import { factorial, contains, totalIntegers, permutations } from "../recursion.js";

describe("factorial", () => {
    test("4th factorial number is 24", () => {
        expect(factorial(4)).toBe(24);
    });
    test("6th factorial number is 720", () => {
        expect(factorial(6)).toBe(720);
    });
    test("10th factorial number is 3628800", () => {
        expect(factorial(10)).toBe(3628800);
    });
    test("15th factorial number is 1307674368000", () => {
        expect(factorial(15)).toBe(1307674368000);
    });
    test("18th factorial number is 6.402373705728e+15", () => {
        expect(factorial(18)).toBe(6.402373705728e15);
    });
    test("0th factorial number is 1", () => {
        expect(factorial(0)).toBe(1);
    });
    test("doesn't accept negatives", () => {
        expect(factorial(-25)).toBe(undefined);
    });
    test("doesn't accept floats", () => {
        expect(factorial(5.4)).toBe(undefined);
    });
    test("doesn't accept a number as a string", () => {
        expect(factorial("5")).toBe(undefined);
    });
    test("doesn't accept strings", () => {
        expect(factorial("foo")).toBe(undefined);
    });
    test("doesn't accept arrays", () => {
        expect(factorial([5])).toBe(undefined);
    });
});

describe("contains", () => {
    const meaningOfLifeArray = [42];
    const object = {
        data: {
            duplicate: "e",
            stuff: {
                thing: {
                    banana: NaN,
                    moreStuff: {
                        something: "foo",
                        answer: meaningOfLifeArray,
                    },
                },
            },
            info: {
                duplicate: "e",
                magicNumber: 44,
                empty: null,
            },
        },
    };

    test("true if the provided number is a value within the object", () => {
        expect(contains(object, 44)).toBe(true);
    });

    test("true if the provided string is a value within the object", () => {
        expect(contains(object, "foo")).toBe(true);
    });

    test("does not convert input string into a number when searching for a value within the object", () => {
        expect(contains(object, "44")).toBe(false);
    });

    test("false if the provided string is not a value within the object", () => {
        expect(contains(object, "bar")).toBe(false);
    });

    test("true if provided string is within the object, even if duplicated", () => {
        expect(contains(object, "e")).toBe(true);
    });

    test("true if the object contains the same object by reference", () => {
        expect(contains(object, meaningOfLifeArray)).toBe(true);
    });

    test("false if no matching object reference", () => {
        expect(contains(object, [42])).toBe(false);
    });

    test("true if NaN is a value within the object", () => {
        expect(contains(object, NaN)).toBe(true);
    });

    test("true if the provided value exists and is null", () => {
        expect(contains(object, null)).toBe(true);
    });
});

describe("totalIntegers", () => {
    test("Counts all integers in a simple array of only integers", () => {
        expect(totalIntegers([1, 2, 3])).toBe(3);
    });

    test("Ignores non-number values", () => {
        expect(totalIntegers([1, 2, "3", 4])).toBe(3);
    });

    test("Counts all integers in a plain object", () => {
        expect(totalIntegers({ a: 1, b: "2", c: 3 })).toBe(2);
    });

    test("Does not find any integers in nested empty arrays", () => {
        expect(totalIntegers([[], [], []])).toBe(0);
    });

    test("Counts integers in deeply nested arrays", () => {
        expect(totalIntegers([[[[[[[[[[[[[[4]]]]]], 246]]]]]]]])).toBe(2);
    });

    test("Counts negative integers", () => {
        expect(totalIntegers([5, 7, -7, [45, -1, -0], [4, 7, -4, -4, -4, [777777, -45674]], [-5477654]])).toBe(14);
    });

    test("Does not count non-integer numbers", () => {
        expect(totalIntegers([5, 7.7, 7, [45, 1, 0], [4.0, 7, [7.77777, 4567.4]], [5477.654]])).toBe(7);
    });

    test("Returns undefined for non-array/object arguments", () => {
        expect(totalIntegers("2")).toBe(undefined);
        expect(totalIntegers(() => { })).toBe(undefined);
        expect(totalIntegers(42)).toBe(undefined);
        expect(totalIntegers(NaN)).toBe(undefined);
    });

    test("Does not count NaN as an integer", () => {
        expect(totalIntegers([5, NaN, [NaN, NaN, 64], 4])).toBe(3);
    });

    test("Counts all integers even with deeply nested containing multiple types", () => {
        expect(totalIntegers([NaN, [[{}], 555], "444", [], 74.0, undefined, [[() => { }], [4], Infinity, [[[], -44.0], [null, "-4"], NaN[[]], 6]], () => { }, [[], [-Infinity, ["4"], [4.7, -46.7], NaN]]])).toBe(5);
    });

    test("Counts all integers when nested arrays and objects are mixed together", () => {
        expect(totalIntegers([4, 6, { a: 1, b: { a: [5, 10], b: 11 } }, 9])).toBe(7);
    });
});

describe("permutations", () => {
    test("1 possible permutation for a set containing 0 numbers", () => {
        expect(permutations([])).toEqual([[]]);
    });

    test("1 possible permutation for a set containing 1 number", () => {
        expect(permutations([1])).toEqual([[1]]);
    });

    test("2 possible permutations for a set containing 2 numbers", () => {
        expect(permutations([1, 2]).sort()).toEqual(
            [
                [1, 2],
                [2, 1],
            ].sort(),
        );
    });

    test("6 possible permutations for a set containing 3 numbers", () => {
        expect(permutations([1, 2, 3]).sort()).toEqual(
            [
                [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1],
            ].sort(),
        );
    });

    test("24 possible permutations for a set containing 4 numbers", () => {
        expect(permutations([1, 2, 3, 4]).sort()).toEqual(
            [
                [1, 2, 3, 4],
                [1, 2, 4, 3],
                [1, 3, 2, 4],
                [1, 3, 4, 2],
                [1, 4, 2, 3],
                [1, 4, 3, 2],
                [2, 1, 3, 4],
                [2, 1, 4, 3],
                [2, 3, 1, 4],
                [2, 3, 4, 1],
                [2, 4, 1, 3],
                [2, 4, 3, 1],
                [3, 1, 2, 4],
                [3, 1, 4, 2],
                [3, 2, 1, 4],
                [3, 2, 4, 1],
                [3, 4, 1, 2],
                [3, 4, 2, 1],
                [4, 1, 2, 3],
                [4, 1, 3, 2],
                [4, 2, 1, 3],
                [4, 2, 3, 1],
                [4, 3, 1, 2],
                [4, 3, 2, 1],
            ].sort(),
        );
    });
});