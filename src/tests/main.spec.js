import { capitalize, reverseString, calculator, caesarCipher, shiftAlphabet, createCipherMap, isCapitalized } from "../main.js";

describe("Capitalize Suite", () => {
    test("Capitalize one word", () => {
        expect(capitalize("hello")).toBe("Hello");
    });
    test("Capitalize multiple words", () => {
        expect(capitalize("hello world")).toBe("Hello World");
    });
});

describe("Reverse String", () => {
    test("reverse one word", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("reverse empty string", () => {
        expect(reverseString("")).toBeFalsy();
    });

});

describe("Calculator Tests", () => {
    test("add", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test("subtract", () => {
        expect(calculator.subtract(1, 1)).toBe(0);
    });

    test("divide", () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test("multiply", () => {
        expect(calculator.multiply(100, 43)).toBe(4300);
    });

});

describe("Caesar Cipher Tests", () => {
    test("normal cipher", () => {
        expect(caesarCipher("abc", 3)).toBe("def");
        expect(caesarCipher("hello", 3)).toBe("khoor");
    });

    test("is capitalized", () => {
        expect(isCapitalized("h")).toBeFalsy();
        expect(isCapitalized("H")).toBeTruthy();
    });

    test("preserve capitalization", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    test("preserve characters", () => {
        expect(caesarCipher("HeLLo!", 3)).toBe("KhOOr!");
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test("cipher map", () => {
        expect(createCipherMap("xyz", "abc")).toHaveProperty("x", "a");
    });

    test("shift alphabet", () => {
        expect(shiftAlphabet("abcdefghijklmnopqrstuvwxyz", 3)).toBe("defghijklmnopqrstuvwxyzabc");
        expect(shiftAlphabet("abcdefghijklmnopqrstuvwxyz", 26)).toBe("abcdefghijklmnopqrstuvwxyz");
    });

});