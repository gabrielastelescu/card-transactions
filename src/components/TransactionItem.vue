<template>
  <div class="transaction">
    <div class="col1">{{ description }}</div>
    <div class="col2">{{ amount }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    description: { type: String, required: true },
    amount: { type: Number, required: true },
  },
});
</script>
<style>
.transaction {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: #ebebeb;
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
