def run_tests():
    sol = Solution()
    try:
        result1 = sol.twoSum([2, 7, 11, 15], 9)
        print("Test 1:", result1)
        if result1 not in ([0, 1], [1, 0]):
            print("Wrong answer with the following input: [2, 7, 11, 15], 9\nExpected [0, 1] or [1, 0] but received", result1)
            return

        result2 = sol.twoSum([3, 2, 4], 6)
        print("Test 2:", result2)
        if result2 not in ([1, 2], [2, 1]):
            print("Wrong answer with the following input: [3, 2, 4], 6\nExpected [1, 2] or [2, 1] but received", result2)
            return

        result3 = sol.twoSum([3, 3], 6)
        print("Test 3:", result3)
        if result3 not in ([0, 1], [1, 0]):
            print("Wrong answer with the following input: [3, 3], 6\nExpected [0, 1] or [1, 0] but received", result3)
            return

        print("HASHHERE")
    except Exception as e:
        print("ERROR:", e)

if __name__ == "__main__":
    run_tests()
