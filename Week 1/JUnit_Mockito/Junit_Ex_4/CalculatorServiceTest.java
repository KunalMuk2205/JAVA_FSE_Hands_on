import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class CalculatorServiceTest {

    private final CalculatorService calculatorService = new CalculatorService();

    // Exercise 1: Basic Unit Test for a Service Method
    @Test
    public void testAdd() {
        int result = calculatorService.add(5, 3);
        assertEquals(8, result);
    }

    // Exercise 9: Parameterized Test with JUnit
    @ParameterizedTest
    @CsvSource({
        "1, 2, 3",
        "5, 5, 10",
        "-1, 1, 0",
        "10, -5, 5"
    })
    public void testAddParameterized(int a, int b, int expected) {
        assertEquals(expected, calculatorService.add(a, b));
    }
}
