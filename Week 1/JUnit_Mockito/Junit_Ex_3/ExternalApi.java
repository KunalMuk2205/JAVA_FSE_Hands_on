public interface ExternalApi {
    String getData();
    String getDataForUser(String username);
    void updateRecord(String recordId, String status);
}
