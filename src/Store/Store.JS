import { createStore } from "vuex";
import EventService from "../services/EventService";
export const store = createStore({
  state() {
    return {
      selectedCategories: [],
      selectedLocations: [],
      RestaurantList: [],
      rate: 3,
    };
  },
  getters: {
    GetID(state) {
      return state.selectedLocations;
    },
  },
  actions: {
    DataNeeded({ state }) {
      return EventService.Test().then((response) => {
        let x = response.data.restaurants;
        state.RestaurantList = [];
        for (let i = 0; i < x.length; i++) {
          state.RestaurantList.push({
            name: x[i].restaurant.name,
            img: x[i].restaurant.featured_image,
            add: x[i].restaurant.location,
            Number: x[i].restaurant.phone_numbers,
            OpenHours: x[i].restaurant.timings,
          });
        }

        console.log(x);
      });
    },
  },
  // Getter to get ID
  // actions: {
  //   Data() {
  //     EventService.Test(){
  //     }
  //   },
  // },
});

export default store;
