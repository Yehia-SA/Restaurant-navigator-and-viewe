import axios from "axios";
import { store } from "../Store/Store.JS";

const apiClient = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    "user-key": "193d0d573f12dff31081e2530e7d4df8",
  },
});

export default {
  GetCategory() {
    return apiClient.get("/categories");
  },
  GetCusinis() {
    return apiClient.get(
      "/cuisines?lat=-77596659.4184915&lon=-77596659.4184915&city_id=ipsum sunt labore ex"
    );
  },
  Test() {
    return apiClient.get(
      "/search?cuisines=" +
        store.state.selectedLocations +
        "&category=" +
        store.state.selectedCategories
    );
  },
  GetRestaurant() {
    return apiClient.get(
      "/search?start=0&count=100&category=&priceRange[]=1&priceRange[]=4&ratingRange[]=0&ratingRange[]=5"
    );
  },
};
