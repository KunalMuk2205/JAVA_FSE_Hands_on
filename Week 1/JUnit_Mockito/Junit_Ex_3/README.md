# JUnit & Mockito Hands-On Exercises (Exercise 3)

This folder contains the implementation of the Mockito exercises 1 through 7.

## Exercises Covered

### Exercise 1: Mocking and Stubbing
* **Scenario:** Test a service that depends on an external API using a mock object.
* **Implementation:** `testExternalApi` in [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java) creates a mock for `ExternalApi` and stubs `getData()` to return `"Mock Data"`.

### Exercise 2: Verifying Interactions
* **Scenario:** Ensure that a method is called.
* **Implementation:** `testVerifyInteraction` in [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java) uses Mockito's `verify()` to assert that `getData()` was invoked.

### Exercise 3: Argument Matching
* **Scenario:** Verify that a method is called with specific arguments.
* **Implementation:** `testArgumentMatching` in [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java) uses `anyString()` for stubbing and `eq("john_doe")` for verification.

### Exercise 4: Handling Void Methods
* **Scenario:** Test a void method that performs some action.
* **Implementation:** `testVoidMethod` in [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java) stubs a void method using `doNothing().when(...)` and verifies that it was called with the exact parameters.

### Exercise 5: Mocking and Stubbing with Multiple Returns
* **Scenario:** Test a service that depends on an external API with multiple return values.
* **Implementation:** `testMultipleReturns` in [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java) stubs `getData()` to return different values on consecutive calls (`"First Call"`, then `"Second Call"`) using chaining `thenReturn().thenReturn()`.

### Exercise 6: Verifying Interaction Order
* **Scenario:** Ensure that methods are called in a specific order.
* **Implementation:** `testVerifyInteractionOrder` in [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java) uses Mockito's `InOrder` to verify that `getData()` was called before `updateRecord()`.

### Exercise 7: Handling Void Methods with Exceptions
* **Scenario:** Test a void method that throws an exception.
* **Implementation:** `testVoidMethodWithException` in [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java) stubs a void method using `doThrow(new RuntimeException(...)).when(...)` and asserts that the service correctly bubbles up or handles the exception.

---

## File Structure

* [ExternalApi.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/ExternalApi.java): Interface representing the external API dependency.
* [MyService.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyService.java): The service under test which consumes `ExternalApi`.
* [MyServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/MyServiceTest.java): JUnit 5 test class covering Exercises 1–7.
* [pom.xml](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit%20Ex%203/pom.xml): Maven configuration file setting up the compiler, JUnit 5, and Mockito.
