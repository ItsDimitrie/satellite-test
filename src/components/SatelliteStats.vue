<template>
  <div class="stats">
    <h2>Satellite Stats</h2>
    <ul>
      <li>Altitude: {{ stats.altitude }} km</li>
      <li>Velocity: {{ stats.velocity }} km/s</li>
      <li>Status: {{ stats.status }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['stats'],
};
</script>

<style>
.stats { /* Add styling */ }
</style>

