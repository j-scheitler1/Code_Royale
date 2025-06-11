import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.problem.create({
    data: {
      title: "Two Sum",
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
      difficulty: "Easy",
      testCases: {
        create: [
          { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
          { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
          { input: "nums = [3,3], target = 6", output: "[0,1]" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "Add Two Numbers",
      description: "You are given two non-empty linked lists representing two non-negative integers...",
      difficulty: "Medium",
      testCases: {
        create: [
          { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
          { input: "l1 = [0], l2 = [0]", output: "[0]" },
          { input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", output: "[8,9,9,9,0,0,0,1]" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "Longest Substring Without Repeating Characters",
      description: "Given a string `s`, find the length of the longest substring without repeating characters.",
      difficulty: "Medium",
      testCases: {
        create: [
          { input: "s = 'abcabcbb'", output: "3" },
          { input: "s = 'bbbbb'", output: "1" },
          { input: "s = 'pwwkew'", output: "3" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "Median of Two Sorted Arrays",
      description: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
      difficulty: "Hard",
      testCases: {
        create: [
          { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" },
          { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000" },
          { input: "nums1 = [], nums2 = [1]", output: "1.00000" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "Longest Palindromic Substring",
      description: "Given a string `s`, return the longest palindromic substring in `s`.",
      difficulty: "Medium",
      testCases: {
        create: [
          { input: "s = 'babad'", output: "'bab'" },
          { input: "s = 'cbbd'", output: "'bb'" },
          { input: "s = 'a'", output: "'a'" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "ZigZag Conversion",
      description: "Convert string `s` to a zigzag pattern on a given number of rows.",
      difficulty: "Medium",
      testCases: {
        create: [
          { input: "s = 'PAYPALISHIRING', numRows = 3", output: "'PAHNAPLSIIGYIR'" },
          { input: "s = 'PAYPALISHIRING', numRows = 4", output: "'PINALSIGYAHRPI'" },
          { input: "s = 'A', numRows = 1", output: "'A'" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "Reverse Integer",
      description: "Given a signed 32-bit integer `x`, return `x` with its digits reversed.",
      difficulty: "Easy",
      testCases: {
        create: [
          { input: "x = 123", output: "321" },
          { input: "x = -123", output: "-321" },
          { input: "x = 120", output: "21" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "String to Integer (atoi)",
      description: "Convert string `s` into a 32-bit signed integer like atoi.",
      difficulty: "Medium",
      testCases: {
        create: [
          { input: "s = '42'", output: "42" },
          { input: "s = '   -42'", output: "-42" },
          { input: "s = '4193 with words'", output: "4193" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "Palindrome Number",
      description: "Determine if integer `x` is a palindrome.",
      difficulty: "Easy",
      testCases: {
        create: [
          { input: "x = 121", output: "true" },
          { input: "x = -121", output: "false" },
          { input: "x = 10", output: "false" },
        ],
      },
    },
  });

  await prisma.problem.create({
    data: {
      title: "Regular Expression Matching",
      description: "Implement regular expression matching with support for '.' and '*'.",
      difficulty: "Hard",
      testCases: {
        create: [
          { input: "s = 'aa', p = 'a'", output: "false" },
          { input: "s = 'aa', p = 'a*'", output: "true" },
          { input: "s = 'ab', p = '.*'", output: "true" },
        ],
      },
    },
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
