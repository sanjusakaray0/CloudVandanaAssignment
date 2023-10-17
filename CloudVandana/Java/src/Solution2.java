import java.util.Scanner;

public class Solution2 {
	public static int valueOf(char ch) {
		switch (ch) {
		case 'I':
			return 1;
		case 'V':
			return 5;
		case 'X':
			return 10;
		case 'L':
			return 50;
		case 'C':
			return 100;
		case 'D':
			return 500;
		case 'M':
			return 1000;
		}
		return 0;
	}

	public static int toInteger(String s) {
		if (s.length() == 1)
			return valueOf(s.charAt(0));
		int num = 0;
		int c = valueOf(s.charAt(0));
		int next = 0;
		for (int i = 1; i < s.length(); i++) {
			next = valueOf(s.charAt(i));
			if (c >= next) {
				num += c;
			} else {
				num -= c;
			}
			c = next;
		}
		num += next;
		return num;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String romanNum = scan.next().toUpperCase();
		System.out.println(toInteger(romanNum));
		scan.close();
	}
}
