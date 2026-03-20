import { capitalize, reverseString, calculator, caesarCipher, shiftAlphabet, createCipherMap, isCapitalized, analayzeArray, collectSummaries, flattenArray } from "../main.js";

describe("Capitalizations", () => {
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

describe("Calculator", () => {
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

describe("Array Analization", () => {
    test("analyzeArray", () => {
        expect(analayzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
        expect(analayzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
        expect(analayzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
        expect(analayzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
    });

    test("analyzeArray 2", () => {
        expect(analayzeArray([3, 1, 2, 5, 4])).toHaveProperty("average", 3);
        expect(analayzeArray([3, 1, 2, 5, 4])).toHaveProperty("min", 1);
        expect(analayzeArray([3, 1, 2, 5, 4])).toHaveProperty("max", 5);
        expect(analayzeArray([3, 1, 2, 5, 4])).toHaveProperty("length", 5);
    });
});

const knowledgeBase = {
    title: "Company Knowledge Base",
    summary: "Top-level overview of all company operations.",
    departments: [
        {
            name: "Engineering",
            summary: "Builds and maintains all software products.",
            teams: [
                {
                    name: "Frontend",
                    summary: "Handles all UI and client-side code.",
                    members: [
                        {
                            name: "Alice",
                            summary: "Specializes in React and accessibility.",
                            projects: [
                                { title: "Dashboard Redesign", summary: "Revamped the main dashboard for better UX." },
                                { title: "Component Library", summary: "Built reusable UI components used across products." }
                            ]
                        },
                        {
                            name: "Bob",
                            summary: "Focuses on performance optimization.",
                            projects: [
                                { title: "Lazy Loading", summary: "Reduced initial load time by 40%." }
                            ]
                        }
                    ]
                },
                {
                    name: "Backend",
                    summary: "Manages APIs, databases, and server infrastructure.",
                    members: [
                        {
                            name: "Carol",
                            summary: "Expert in distributed systems.",
                            projects: [
                                { title: "Auth Service", summary: "Built the company-wide authentication microservice." }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Marketing",
            summary: "Drives growth and brand awareness.",
            teams: [
                {
                    name: "Content",
                    summary: "Produces blog posts, videos, and social media.",
                    members: [
                        {
                            name: "Dan",
                            summary: "Writes long-form technical content.",
                            projects: [
                                { title: "Dev Blog", summary: "Launched the engineering blog with 10k monthly readers." }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

describe("recursions", () => {
    test("collected summaries has the correct count", () => {
        const result = collectSummaries(knowledgeBase);
        expect(result.length).toBe(15);
    });

    test("flatten array", () => {
        const data = [1, [2, [3, [4, [5]]]]];
        expect(flattenArray(data, 0)).toStrictEqual([1, [2, [3, [4, [5]]]]]);
        expect(flattenArray(data, 1)).toStrictEqual([1, 2, [3, [4, [5]]]]);
    });
});

