import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    // Exercise 1: Mocking and Stubbing
    @Test
    public void testExternalApi() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        
        assertEquals("Mock Data", result);
    }

    // Exercise 2: Verifying Interactions
    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        
        service.fetchData();
        
        verify(mockApi).getData();
    }

    // Exercise 3: Argument Matching
    @Test
    public void testArgumentMatching() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getDataForUser(anyString())).thenReturn("Mock User Data");
        
        MyService service = new MyService(mockApi);
        String result = service.fetchDataForUser("john_doe");
        
        assertEquals("Mock User Data", result);
        verify(mockApi).getDataForUser(eq("john_doe"));
    }

    // Exercise 4: Handling Void Methods
    @Test
    public void testVoidMethod() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        doNothing().when(mockApi).updateRecord(anyString(), anyString());
        
        MyService service = new MyService(mockApi);
        service.performUpdate("123", "Completed");
        
        verify(mockApi).updateRecord("123", "Completed");
    }

    // Exercise 5: Mocking and Stubbing with Multiple Returns
    @Test
    public void testMultipleReturns() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData())
            .thenReturn("First Call")
            .thenReturn("Second Call");
            
        MyService service = new MyService(mockApi);
        
        assertEquals("First Call", service.fetchData());
        assertEquals("Second Call", service.fetchData());
    }

    // Exercise 6: Verifying Interaction Order
    @Test
    public void testVerifyInteractionOrder() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        
        service.processSequence();
        
        org.mockito.InOrder inOrder = inOrder(mockApi);
        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).updateRecord("seq_1", "Processed");
    }

    // Exercise 7: Handling Void Methods with Exceptions
    @Test
    public void testVoidMethodWithException() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        doThrow(new RuntimeException("Database Error")).when(mockApi).updateRecord(anyString(), anyString());
        
        MyService service = new MyService(mockApi);
        
        assertThrows(RuntimeException.class, () -> {
            service.performUpdate("123", "Failed");
        });
        
        verify(mockApi).updateRecord("123", "Failed");
    }
}
