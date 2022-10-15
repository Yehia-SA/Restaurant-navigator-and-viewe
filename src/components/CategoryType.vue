<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <h2><span class="badge text-bg-primary">Categories</span></h2>
        <div v-for="item in Category" :key="item.Category_id">
          <input
            type="checkbox"
            :name="item.Category_name"
            :value="item.Category_id"
            v-model="$store.state.selectedCategories"
            :id="item.Category_name"
          />
          <label :for="item.Category_name">{{ item.Category_name }}</label>
        </div>
      </div>
      <div class="getCusisines col-6">
        <h2><span class="badge text-bg-danger">Cuisines</span></h2>
        <div class="d-flex flex-wrap">
          <div class="CUISINES" v-for="item in cuisines" :key="item.cuisine_id">
            <input
              type="checkbox"
              :name="item.cuisine_name"
              :value="item.cuisine_id"
              v-model="$store.state.selectedLocations"
              :id="item.cuisine_name"
            />

            <label :for="item.cuisine_name">{{ item.cuisine_name }}</label>
          </div>
        </div>
      </div>
      <div class="range d-felx col-4">
        <input
          v-model="$store.state.rate"
          type="range"
          class="form-range"
          min="0"
          max="5"
          id="customRange2"
        />
        <label for="customRange2" class="form-label"
          >RATING is : {{ $store.state.rate }}</label
        >
        <h2>{{ $store.state.selectedLocations }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import EventService from "../services/EventService";
export default {
  name: "CategoryType",

  data() {
    return {
      Category: [],
      cuisines: [],
       value: "",
    };
  },
  created() {
    EventService.GetCategory().then((response) => {
      let x = response.data.categories;
      for (let i = 0; i < x.length; i++) {
        this.Category.push({
          Category_name: x[i].categories.name,
          Category_id: x[i].categories.id,
        });
      }
    });

    EventService.GetCusinis().then((response) => {
      let x = response.data.cuisines;
      for (let i = 0; i < x.length; i++) {
        this.cuisines.push({
          cuisine_name: x[i].cuisine.cuisine_name,
          cuisine_id: x[i].cuisine.cuisine_id,
        });
      }
    });
  },
};
</script>
<style scoped>
.restaurants {
  color: white;
}
.restaurants a {
  padding: 8px 4px 8px 32px;
  margin-top: 20px;
  text-decoration: none;
  color: white;
}
.restaurants a:hover {
  color: #8d99ae;
}

.Section {
  background-color: #2b2d42;
}
.CUISINES {
  flex-basis: 25%;
}
</style>
