class Solution:
    def romanToInt(self,s: str) -> int:
        roman_dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        total = 0
        prev_val = 0
        for i in range(len(s)-1, -1, -1):
            current_val = roman_dict[s[i]]
            if current_val < prev_val:
                total -= current_val
            else:
                total += current_val
            prev_val = current_val
        return total

        