#include<iostream>

using namespace std;

main() {
  int newNumA, newNumB, number;
  int chnNumber = 0, newNumber = 0, count = 1;

  cin >> number;

  chnNumber = number;
  while(number) {
    newNumA = (chnNumber%10)*10;
    newNumB = chnNumber/10 + chnNumber%10;
    if(newNumB >= 10) newNumB = newNumB%10;
    newNumber = newNumA + newNumB;
    if(newNumber == number) break;
    else chnNumber = newNumber;
    count++;
  }
  
  cout << count;

  return 0;
}