import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        int l = a.length();
        char[] split = a.toCharArray();
        for(int i = 0; i < l; i++) {
            if(split[i] <= 'z' && split[i] >= 'a')
                split[i] -= 32;
            else
                split[i] +=32;
        }
        System.out.print(split);
    }
}