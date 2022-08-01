#include<iostream>

using namespace std;

main() {
  int starNum;

  cin >> starNum;

  for(int i=1; i <= starNum; i++) {
    for(int j=0; j <i; j++) {
      cout << '*';
    }
    cout << '\n';
  }
}