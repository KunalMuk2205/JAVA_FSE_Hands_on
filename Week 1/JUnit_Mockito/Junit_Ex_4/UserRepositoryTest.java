import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import java.util.List;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    // Exercise 7: Test Custom Repository Query
    @Test
    public void testFindByName() {
        User user1 = new User(null, "Diana");
        User user2 = new User(null, "Diana");
        User user3 = new User(null, "Ethan");
        
        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);

        List<User> results = userRepository.findByName("Diana");

        assertEquals(2, results.size());
        assertTrue(results.stream().allMatch(u -> u.getName().equals("Diana")));
    }
}
