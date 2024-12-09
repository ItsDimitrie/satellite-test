<template>
  <div id="cesium-container"></div>
</template>

<script>
import { Viewer } from "cesium";

export default {
  mounted() {
    const viewer = new Viewer("cesium-container");
    // Example: Add a satellite entity
    viewer.entities.add({
      name: "Satellite",
      position: Cesium.Cartesian3.fromDegrees(-75.0, 40.0, 700000),
      point: { pixelSize: 10 },
    });
  },
};
</script>

<style>
#cesium-container { width: 100%; height: 500px; }
</style>

