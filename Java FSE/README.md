# Java FSE Deepskilling Hands-On Exercises

This repository contains hands-on exercises completed as part of the Java Full Stack Engineering (FSE) Deepskilling program.

## Repository Structure

The repository is organized by weeks:

```text
JAVA-FSE-Hands-on/
├── Week 1/          # Core Java, Design Patterns, PL/SQL, Unit Testing & Logging
├── Week 2/          # Spring Data JPA with Spring Boot & Hibernate
├── Week 3/          # Spring REST Services & XML Bean Configuration
└── Week 4/          # JWT Security & Distributed Microservices with API Gateway
```

---

## Weekly Contents

### 📅 Week 1: Core Technologies & Testing
* **Algorithms & Data Structures**: Key algorithmic implementations (e.g., Search Algorithms, Financial Forecasting).
* **Design Principles & Patterns**: Singleton pattern implementation, Factory Method pattern.
* **PL/SQL Programming**: Control structures and stored procedures.
* **Unit Testing (JUnit 5 & Mockito)**: Test automation, assertions, test fixtures, stubbing/mocking, and interaction verification.
* **Logging (SLF4J)**: Standard logging practices across error levels.

### 📅 Week 2: Data Persistence
* **Spring Data JPA & Hibernate**: 
  * Spring Data JPA Quick Examples.
  * O/R mapping configurations.
  * Hibernate Query Language (HQL) and Native SQL Queries.
  * Database operations for Country entity management.

### 📅 Week 3: Spring Boot REST Web Services
* **XML Bean Loader**: Loading Spring configurations and SimpleDateFormat / Country beans from XML (`date-format.xml` and `country.xml`).
* **Country REST API**: Hello REST API, full country list, and retrieving country details dynamically by country code.
* **Error Handling & Unit Testing**: Global Exception Handler using `@ControllerAdvice` and web tier verification using `MockMvc` and JUnit tests.
* **Service Layer Integration**: Initializing mock Department, Employee, and Skill data via `employee.xml` configuration.

### 📅 Week 4: JWT Security & Microservices with API Gateway
* **JWT Security (`5. JWT-handson`)**:
  * `/authenticate` endpoint validating credentials via HTTP Basic Authentication.
  * Custom Base64 credential decoder.
  * Cryptographically signed JWT tokens generated via `SignatureAlgorithm.HS256`.
  * Custom `JwtAuthorizationFilter` registering requests in context by extracting subjects from the bearer token.
* **Microservices with API Gateway (`2. Microservices with API gateway`)**:
  * **Eureka Discovery Server**: Central service registration desk running on port `8761`.
  * **Account Service**: Port `8080`, provides accounts information.
  * **Loan Service**: Port `8081`, provides loan details.
  * **API Gateway**: Running on port `9090` routing calls dynamically through Eureka registry.
  * **Global LogFilter**: Intercepts requests and writes standard console log traces (`Start` and `End`) for routed operations.

---

## Technical Stack
* **Java Version**: 17
* **Framework**: Spring Boot 3.2.x, Spring Cloud 2023.0.x
* **Build System**: Maven (wrapped with `mvnw`)
* **Security**: Spring Security 6 & JSON Web Token (`jjwt`)
* **Service Registry**: Spring Cloud Netflix Eureka
* **API Routing**: Spring Cloud Gateway
