import http from "../http-common";

class AttractionsDataService {
  getAll() {
    return http.get("/attractions");
  }
}

export default new AttractionsDataService();