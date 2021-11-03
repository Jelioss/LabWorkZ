#include <iostream>
#include <math.h>
using namespace std;
int main() {
    setlocale(LC_ALL, "Russian");
    double z, q, x = 0.9, y = 2, t = 6.96 * pow(10, -5), i=2;
     do{
         cout << "" << i;
         i = i + 0.2;
     } while (i < 3);
     z = t * pow(y, 2) - sqrt(i + x) * tan(y);
     q = sqrt(pow(z, 2) + 5 * z) * log(y);
     cout << "q=" << q << "\n";
     cout << "z=" << z << endl;

    system("pause");
    return 0;
}

