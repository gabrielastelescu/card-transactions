<template>
  <div class="column">
    <div class="card" :class="{ selected: isSelectedCard(id) }">
      <h3>{{ description }}</h3>
      <h3>{{ id }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store/index";
export default defineComponent({
  props: {
    id: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
  },
  setup() {
    const getters = store.getters;
    const isSelectedCard = (id: string) => getters.selectedCardId() === id;
    return {
      isSelectedCard,
      store,
    };
  },
});
</script>
<style>
.column {
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 800px) {
  .column {
    height: 100%;
    width: 100%;
    display: block;
    margin: 20px 0;
  }
  .card {
    font-size: 18px;
  }
}

.card {
  height: 150%;
  padding: 16px;
  text-align: left;
  background-color: v-bind(color);
  border-radius: 15px;
  font-size: 24px;
}

.selected {
  border: 3px solid black;
}
</style>
