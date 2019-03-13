<template>
  <div>
    <heatmapjs-vue ref="ht2" 
      class="heatmapjs-container"
      :max="100" :min="0"
      :data="data"
      :click-drawable="clickDrawable"
      :move-drawable="moveDrawable"
      :draw-value="10"
      @change="handleChange"></heatmapjs-vue>
    <div class="btn-wrapper">
      <button @click="handleBtnClick">调用getData方法</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { HeatmapjsVue } from 'heatmapjs-vue';

@Component
export default class Heatmap extends Vue {
  public $refs!: {
    ht2: HeatmapjsVue,
  };

  private data: object[] = [{ x: 100, y: 50, value: 50}];
  private clickDrawable: boolean = true;
  private moveDrawable: boolean = true;

  private handleBtnClick(): void {
    const res = this.$refs.ht2.getData();
    console.log(res);
  }

  private handleChange(val: object[]) {
    this.data = val;
  }
}
</script>
<style scoped>
.heatmapjs-container {
  width: 100%;
  height: 300px;
  background-color: ghostwhite;
}
.btn-wrapper {
  padding: 10px 0 0 0;
  text-align: left;
}
</style>
