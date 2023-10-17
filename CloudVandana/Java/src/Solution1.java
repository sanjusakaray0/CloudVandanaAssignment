import java.util.Random;

public class Solution1 {
public static void main(String[] args) {
	int a[]={1,2,3,4,5,6,7};
	Random rand = new Random();
	for (int i = 0; i < a.length; i++) {
		int index=rand.nextInt(a.length);
		int temp=a[index];
		a[index]=a[i];
		a[i]=temp;
	}
	for (int i : a) {
		System.out.print(i+" ");
	}
}
}
