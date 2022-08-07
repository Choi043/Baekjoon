#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

main()
{
  int arr[42] = {
      0,
  };
  int sum = 0;

  for (int i = 0; i < 10; i++)
  {
    int number;
    cin >> number;

    if (arr[number % 42] == 0)
    {
      arr[number % 42]++;
    }
  }

  sum = accumulate(begin(arr), end(arr), 0);

  cout << sum << '\n';

  return 0;
}