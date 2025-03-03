import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.NumberFormat;
import java.util.Locale;
import java.util.Random;

public class JavaMathExamples {
    public static void main(String[] args) {
        // Integer & Floating-Point Limits
        System.out.println("Integer Max: " + Integer.MAX_VALUE); // 2147483647
        System.out.println("Integer Min: " + Integer.MIN_VALUE); // -2147483648
        System.out.println("Double Max: " + Double.MAX_VALUE); // 1.7976931348623157E308
        System.out.println("Double Min: " + Double.MIN_VALUE); // 4.9E-324
        System.out.println("Long Max: " + Long.MAX_VALUE); // 9223372036854775807
        System.out.println("Long Min: " + Long.MIN_VALUE); // -9223372036854775808

        // Basic Arithmetic
        int a = 10, b = 3;
        double c = 10.56789;
        System.out.println("Addition: " + (a + b)); // 13
        System.out.println("Subtraction: " + (a - b)); // 7
        System.out.println("Multiplication: " + (a * b)); // 30
        System.out.println("Division: " + (a / (double) b)); // 3.3333333333333335
        System.out.println("Modulus: " + (a % b)); // 1

        // Math Class Methods
        System.out.println("Power (2^3): " + Math.pow(2, 3)); // 8.0
        System.out.println("Square root of 25: " + Math.sqrt(25)); // 5.0
        System.out.println("Absolute value of -15: " + Math.abs(-15)); // 15
        System.out.println("Round 3.567: " + Math.round(3.567)); // 4
        System.out.println("Floor 3.9: " + Math.floor(3.9)); // 3.0
        System.out.println("Ceil 3.1: " + Math.ceil(3.1)); // 4.0
        System.out.println("Max(15, 25): " + Math.max(15, 25)); // 25
        System.out.println("Min(15, 25): " + Math.min(15, 25)); // 15

        // Trigonometric Functions
        System.out.println("Sin(90°): " + Math.sin(Math.PI / 2)); // 1.0
        System.out.println("Cos(0°): " + Math.cos(0)); // 1.0
        System.out.println("Tan(45°): " + Math.tan(Math.PI / 4)); // 1.0

        // Random Number Generation
        Random rand = new Random();
        System.out.println("Random number (0 to 99): " + rand.nextInt(100)); // e.g., 45
        System.out.println("Random double (0.0 to 1.0): " + rand.nextDouble()); // e.g., 0.785432

        // BigInteger - Large numbers
        BigInteger bigNum1 = new BigInteger("12345678901234567890");
        BigInteger bigNum2 = new BigInteger("98765432109876543210");
        System.out.println("BigInteger Sum: " + bigNum1.add(bigNum2)); // 111111111011111111100

        // BigDecimal - Precise decimal calculations
        BigDecimal decimal1 = new BigDecimal("10.56789");
        BigDecimal decimal2 = new BigDecimal("2.34567");
        BigDecimal sum = decimal1.add(decimal2);
        System.out.println("BigDecimal Sum: " + sum); // 12.91356

        // Precision Control (Equivalent to .toFixed() in JavaScript)
        BigDecimal fixedDecimal = decimal1.setScale(2, BigDecimal.ROUND_HALF_UP);
        System.out.println("Fixed (2 decimals): " + fixedDecimal); // 10.57

        // Convert Number to String
        System.out.println("Integer to String: " + Integer.toString(100)); // "100"
        System.out.println("Double to String: " + Double.toString(10.567)); // "10.567"

        // Convert to Locale-Specific String (India Format)
        NumberFormat indiaFormat = NumberFormat.getInstance(new Locale("en", "IN"));
        System.out.println("Localized (India) Number: " + indiaFormat.format(123456789.567)); // 12,34,56,789.567

        // Convert to Different String Representations
        BigInteger largeNumber = new BigInteger("987654321098765432109876543210");
        System.out.println("BigInteger to String: " + largeNumber.toString()); // "987654321098765432109876543210"
        System.out.println("BigInteger in Binary: " + largeNumber.toString(2)); // "110100101..."

        // Compare BigDecimal values
        System.out.println("Compare BigDecimal: " + decimal1.compareTo(decimal2)); // Returns 1, 0, -1

        // Convert int, double to Binary, Octal, Hexadecimal
        int num = 255;
        System.out.println("Binary: " + Integer.toBinaryString(num)); // "11111111"
        System.out.println("Octal: " + Integer.toOctalString(num)); // "377"
        System.out.println("Hexadecimal: " + Integer.toHexString(num)); // "ff"
    }
}
