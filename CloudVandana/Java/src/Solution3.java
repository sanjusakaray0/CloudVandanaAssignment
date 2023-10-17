import java.util.Scanner;

public class Solution3 {
	public static boolean isPangram(String s) {
		for (char ch = 'a'; ch < 'z'; ch++) {
			if (!s.contains(String.valueOf(ch))) {
				return false;
			}
		}
		return true;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String s = scan.nextLine();
		if (isPangram(s)) {
			System.out.println("Pangram");
		} else {
			System.out.println("Not Pangram");
		}
		scan.close();
	}
}
