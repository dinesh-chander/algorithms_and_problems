class Solution:
    def numSquares(self, n: int) -> int:
        import math

        dict = {}
        squares = []
        j = int(math.sqrt(n))

        while 0 < j:
            squares.append(j * j)
            j -= 1

        def compute(val):
            if val <= 0:
                return 0
            if val in dict:
                return dict[val]

            j = val

            for v in squares:
                if 0 <= val - v:
                    j = min(j, compute(val - v))

            dict[val] = j + 1 if j != val else val
            return dict[val]

        compute(n)
        return dict[n]


n = Solution()
print(n.numSquares(8328))
