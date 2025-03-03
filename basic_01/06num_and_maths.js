import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Random;

public class MathOperations {
    public static void main(String[] args) {
        // Basic Arithmetic Operations
        int a = 10, b = 5;
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));

        // Math Class Methods
        System.out.println("Power (2^3): " + Math.pow(2, 3));
        System.out.println("Square root of 16: " + Math.sqrt(16));
        System.out.println("Absolute value of -10: " + Math.abs(-10));
        System.out.println("Round 3.6: " + Math.round(3.6));
        System.out.println("Floor 3.9: " + Math.floor(3.9));
        System.out.println("Ceil 3.1: " + Math.ceil(3.1));
        System.out.println("Max(10, 20): " + Math.max(10, 20));
        System.out.println("Min(10, 20): " + Math.min(10, 20));

        // Trigonometric Functions
        System.out.println("Sin(90°): " + Math.sin(Math.PI / 2));
        System.out.println("Cos(0°): " + Math.cos(0));
        System.out.println("Tan(45°): " + Math.tan(Math.PI / 4));

        // Random Number Generation
        System.out.println("Random (0.0 to 1.0): " + Math.random());
        int randomNum = (int) (Math.random() * 100);
        System.out.println("Random number (0 to 99): " + randomNum);

        // Using Random class
        Random rand = new Random();
        System.out.println("Random int (0 to 99): " + rand.nextInt(100));
        System.out.println("Random double (0.0 to 1.0): " + rand.nextDouble());

        // Working with BigInteger
        BigInteger bigNum1 = new BigInteger("12345678901234567890");
        BigInteger bigNum2 = new BigInteger("98765432109876543210");
        System.out.println("BigInteger Addition: " + bigNum1.add(bigNum2));

        // Working with BigDecimal
        BigDecimal decimal1 = new BigDecimal("10.5");
        BigDecimal decimal2 = new BigDecimal("2.3");
        System.out.println("BigDecimal Addition: " + decimal1.add(decimal2));
    }
}
