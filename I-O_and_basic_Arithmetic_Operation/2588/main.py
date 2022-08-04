# numA, numB = map(int, input().split())
numA = int(input())
numB = int(input())

print(numA * (numB%10))
print(numA * ((numB%100)//10))
print(numA * (numB//100))
print(numA * numB)