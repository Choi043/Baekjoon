list = []

for i in range(9):
    list.append(int(input()))
    
maxNum = max(list)
chkNum = list.index(maxNum)+1

print(maxNum)
print(chkNum)