#include <iostream>

using namespace std;

main()
{
  int A, B, C, result;
  int arr[10] = {
      0,
  };

  cin >> A >> B >> C;

  result = A * B * C;

  int number = result;

  while (number > 0)
  {
    arr[number % 10]++;
    number = number / 10;
  }

  for(int i=0; i < 10; i++){
    cout << arr[i] << '\n';
  }

  return 0;
}