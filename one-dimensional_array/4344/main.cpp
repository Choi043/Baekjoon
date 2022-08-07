#include <iostream>

using namespace std;

main()
{
  int number;

  cin >> number;

  for (int i = 0; i < number; i++)
  {
    int score[1000] = {};
    double student, result = 0, avg = 0, sum = 0, cnt = 0;
    cin >> student;
    for (int j = 0; j < student; j++)
    {
      cin >> score[j];
      sum += score[j];
    }
    avg = sum / student;

    for (int j = 0; j < student; j++)
    {
      if (score[j] > avg)
      {
        cnt++;
      }
    }

    cout << fixed;
    cout.precision(3);
    cout << (cnt / student) * 100 << '%' << '\n';
  }

  return 0;
}