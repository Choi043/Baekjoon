#include <iostream>
#include <string>

using namespace std;

main()
{
  int number;

  cin >> number;

  for (int i = 0; i < number; i++)
  {
    string str;
    cin >> str;
    int cnt = 0, sum = 0;

    for (int j = 0; j < str.length(); j++)
    {
      if (str[j] == 'O')
      {
        cnt++;
        sum += cnt;
      }
      else
      {
        cnt = 0;
      }
    }
    cout << sum << '\n';
  }

  return 0;
}