#include <iostream>
#include <algorithm>

using namespace std;

main()
{
  int number;
  int arr[1000] = {};
  int max = 0;
  double sum = 0, result = 0;

  cin >> number;

  for (int i = 0; i < number; i++)
  {
    cin >> arr[i];
    sum += arr[i];
  }

  max = *max_element(arr, arr + number);

  result = (sum / max * 100) / number;

  cout << fixed;
  cout.precision(6);
  cout << result;

  return 0;
}
