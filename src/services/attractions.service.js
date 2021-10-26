import http from "../http-common";

class AttractionsDataService {
  getAll() {
    return http.get("/api/attractions");
  }
}

export default new AttractionsDataService();