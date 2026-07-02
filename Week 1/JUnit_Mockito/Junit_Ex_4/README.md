# Spring Boot Testing Hands-On Exercises (Exercise 4)

This folder contains the complete, compilable implementation of Spring Boot testing exercises 1 through 9.

## Exercises Covered

### Exercise 1: Basic Unit Test for a Service Method
* **Scenario:** Unit test a calculator service method that adds two numbers.
* **Implementation:** Tested in `testAdd` in [CalculatorServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/CalculatorServiceTest.java).

### Exercise 2: Mocking a Repository in a Service Test
* **Scenario:** Test a service that uses a repository to fetch data, mocking the database calls.
* **Implementation:** Tested in `testGetUserById_Success` in [UserServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserServiceTest.java) using `@Mock` and `@InjectMocks`.

### Exercise 3: Testing a REST Controller with MockMvc
* **Scenario:** Test a controller's `GET` endpoint returning a user.
* **Implementation:** Tested in `testGetUser_Success` in [UserControllerTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserControllerTest.java) using `@WebMvcTest` and `MockMvc`.

### Exercise 4: Integration Test with Spring Boot
* **Scenario:** Write an integration test mapping the entire flow from Controller endpoints to the Database level.
* **Implementation:** Tested in [UserIntegrationTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserIntegrationTest.java) using `@SpringBootTest` and `@AutoConfigureMockMvc`.

### Exercise 5: Test Controller POST Endpoint
* **Scenario:** Test a `POST` endpoint creating a new user.
* **Implementation:** Tested in `testCreateUser` in [UserControllerTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserControllerTest.java) checking json request body deserialization and expected mock response serialization.

### Exercise 6: Test Service Exception Handling
* **Scenario:** Test how a service handles a missing user.
* **Implementation:** Tested in `testGetUserById_NotFound_ThrowsException` in [UserServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserServiceTest.java) asserting `NoSuchElementException` when repository returns an empty `Optional`.

### Exercise 7: Test Custom Repository Query
* **Scenario:** Add and test a custom query method in the JPA Repository.
* **Implementation:** Tested in [UserRepositoryTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserRepositoryTest.java) using `@DataJpaTest` to verify the repository find query on an embedded H2 database.

### Exercise 8: Test Controller Exception Handling
* **Scenario:** Implement and verify `@ControllerAdvice` for handling exceptions globally.
* **Implementation:** Tested in `testGetUser_NotFound_ControllerAdvice` in [UserControllerTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserControllerTest.java) which asserts a `404 Not Found` response with body `"User not found"` when the controller throws `NoSuchElementException`.

### Exercise 9: Parameterized Test with JUnit
* **Scenario:** Use `@ParameterizedTest` to test a method with multiple input combinations.
* **Implementation:** Tested in `testAddParameterized` in [CalculatorServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/CalculatorServiceTest.java) using `@CsvSource`.

---

## File Structure

### Application Code
* [User.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/User.java): The User Entity class mapping to database.
* [UserRepository.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserRepository.java): The UserRepository interface extending JpaRepository.
* [UserService.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserService.java): Service implementing fetch and save logic.
* [CalculatorService.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/CalculatorService.java): Simple math addition service.
* [UserController.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserController.java): REST API controllers.
* [GlobalExceptionHandler.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/GlobalExceptionHandler.java): Global controller advice mapping exceptions to error messages.
* [JunitEx4Application.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/JunitEx4Application.java): Main Spring Boot loader.
* [pom.xml](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/pom.xml): Maven configuration file.

### Test Code
* [CalculatorServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/CalculatorServiceTest.java): Contains basic additions tests (Exercise 1) & parameterized tests (Exercise 9).
* [UserServiceTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserServiceTest.java): Contains unit tests for service with mocked repository.
* [UserControllerTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserControllerTest.java): MockMvc tests for GET, POST controller endpoints & ControllerAdvice exception mappings.
* [UserRepositoryTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserRepositoryTest.java): Tests for JPA database integration of query methods.
* [UserIntegrationTest.java](file:///c:/Users/mukhe/OneDrive/Desktop/Java%20FSE/Week%201/JUnit_Mockito/Junit_Ex_4/UserIntegrationTest.java): Integration test that covers the full web flow through the mock servlet container to the JPA repository.
