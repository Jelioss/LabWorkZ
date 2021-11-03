#include <iostream>
void func9()
{
	setlocale(LC_CTYPE, "Russian");
	int k, a, b;
	printf("������� ����� k: ");
	scanf_s("%i", &k);
	a = k % 100;
	b = k % 10;
	if (a > 9 && 21 > a)
		printf("����� %i ������\n", k);
	else if (b > 4)
		printf("����� %i ������\n", k);
	else if (b > 1)
		printf("����� %i �����\n", k);
	else if (b == 1)
		printf("����� %i ����\n", k);
	else
		printf("����� %i ������\n", k);
}
void func12()
{
	setlocale(LC_CTYPE, "Russian");
	int type;
	double x, a, b, c;
	printf("������� ����� x: ");
	scanf_s("%lf", &x);
	printf("������ ������� �:\n1 - ����������; 2 - ������; 3 - �����������; 4 - �����������\n");
	scanf_s("%i", &type);
	switch (type)
	{
	case 1:
		a = x * 1000;
		printf("����� %lf ������\n", a);
		break;
	case 2:
		printf("����� %lf ������\n", x);
		break;
	case 3:
		b = x / 1000;
		printf("����� %lf ������\n", b);
		break;
	case 4:
		c = x / 100;
		printf("����� %lf ������\n", c);
		break;
	}
}
void func15()
{
	setlocale(LC_CTYPE, "Russian");
	int a, b, c, d, a_type, b_type, c_type, d_type;
	printf("������� ����� a, b, c, d:\n");
	scanf_s("%i", &a);
	scanf_s("%i", &b);
	scanf_s("%i", &c);
	scanf_s("%i", &d);
	a_type = a % 2;
	b_type = b % 2;
	c_type = c % 2;
	d_type = d % 2;
	if (a_type != 0 && b_type != 0 && c_type != 0 && d_type != 0)
		printf("������ ����� ���\n");
	if (a_type == 0 || b_type == 0 || c_type == 0 || d_type == 0)
		printf("������ �����:\n");
	if (a_type == 0)
		printf("%i\n", a);
	if (b_type == 0)
		printf("%i\n", b);
	if (c_type == 0)
		printf("%i\n", c);
	if (d_type == 0)
		printf("%i\n", d);
}
void func2()
{
	setlocale(LC_CTYPE, "Russian");
	int a, b, c;
	printf("������� ����� a, b, c,:\n");
	scanf_s("%i", &a);
	scanf_s("%i", &b);
	scanf_s("%i", &c);
	if (a != b && a != c && b != c)
		printf("���������� ����� ���");
	if (a == b && a == c && b == c)
	{
		printf("��� ����� ����������");
	}
	else
	{
		if (a == b || a == c || b == c)
			printf("���������� �����:\n");
		if (a == b)
			printf("%i � %i\n", a, b);
		if (a == c)
			printf("%i � %i\n", a, c);
		if (b == c)
			printf("%i � %i\n", b, c);
	}
}
int main()
{
	func9();
	func12();
	func15();
	func2();
	return 0;
	// {} ����� if else!
}