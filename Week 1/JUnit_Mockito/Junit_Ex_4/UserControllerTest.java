import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import java.util.NoSuchElementException;

@WebMvcTest(controllers = {UserController.class, GlobalExceptionHandler.class})
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Autowired
    private ObjectMapper objectMapper;

    // Exercise 3: Testing a REST Controller with MockMvc (GET Endpoint)
    @Test
    public void testGetUser_Success() throws Exception {
        User user = new User(1L, "Bob");
        when(userService.getUserById(1L)).thenReturn(user);

        mockMvc.perform(get("/users/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Bob"));

        verify(userService).getUserById(1L);
    }

    // Exercise 5: Test Controller POST Endpoint
    @Test
    public void testCreateUser() throws Exception {
        User userToCreate = new User(null, "Charlie");
        User savedUser = new User(2L, "Charlie");
        when(userService.saveUser(any(User.class))).thenReturn(savedUser);

        mockMvc.perform(post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(userToCreate)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(2))
                .andExpect(jsonPath("$.name").value("Charlie"));

        verify(userService).saveUser(any(User.class));
    }

    // Exercise 8: Test Controller Exception Handling
    @Test
    public void testGetUser_NotFound_ControllerAdvice() throws Exception {
        when(userService.getUserById(99L)).thenThrow(new NoSuchElementException("User not found"));

        mockMvc.perform(get("/users/99"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("User not found"));

        verify(userService).getUserById(99L);
    }
}
