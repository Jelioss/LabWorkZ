#include <iostream>
#include <math.h>
using namespace std;
int main() {
    setlocale(LC_ALL, "Russian");
    double z, i, q, x = 0.9, y = 2, t = 6.96 * pow(10, -5);
       for (int i = 0; i <4; i++) 
{       
        cout << "Введите i 3 раза: \n";
        cin >> i;
        z = t * pow(y, 2) - sqrt(i + x) * tan(y);
        q = sqrt(pow(z, 2) + 5 * z) * log(y);
        cout << "q=" << q << "\n";
        cout << "z=" << z << endl;
}
    system("pause");
    return 0;
}