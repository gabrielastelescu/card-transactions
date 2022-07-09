<template>
  <div class="transaction">
    <div class="col1">{{ description }}</div>
    <div class="col2">{{ amount }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";
import store from "../store/index";
export default defineComponent({
  props: {
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    color: { type: String, required: true },
  },
  setup() {
    const bgColor = computed(() => store.state.bgColor);

    return {
      bgColor,
      store,
    };
  },
});
</script>
<style>
.transaction {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: v-bind(bgColor);
  margin: 15px 0;
  padding: 30px;
}

.col1 {
  float: left;
}

.col2 {
  float: right;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
