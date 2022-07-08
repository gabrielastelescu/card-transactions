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
  width: 45%;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 150%;
  padding: 16px;
  text-align: left;
  background-color: #ebebeb;
  border-radius: 15px;
}

.selected {
  background-color: #cdeafd;
}
</style>
