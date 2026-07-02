public class MyService {
    private final ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }

    public String fetchDataForUser(String username) {
        return externalApi.getDataForUser(username);
    }

    public void performUpdate(String recordId, String status) {
        externalApi.updateRecord(recordId, status);
    }

    public void processSequence() {
        externalApi.getData();
        externalApi.updateRecord("seq_1", "Processed");
    }
}
