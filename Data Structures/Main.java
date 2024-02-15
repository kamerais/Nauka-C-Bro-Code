import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {

        Stack<String> stack = new Stack<String>();
        Scanner scanner = new Scanner(System.in);
        // System.out.println(stack.empty());
        /*
         * stack.push("Minecraft");
         * stack.push("The Legend of Zelda");
         * stack.push("COD: MW 2");
         * System.out.println(stack);
         */
        System.out.println("What your name?");
        String name = scanner.nextLine();
        System.out.println("Hello " + name);
        System.out.println("How old are you?");
        int age = scanner.nextInt();
        System.out.println("You are " + age + " years old");
    }
}
