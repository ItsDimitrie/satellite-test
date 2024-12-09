<template>
  <div>
    <SatelliteStats :stats="stats" />
    <OrbitVisualizer />
    <TelemetryLogs :logs="logs" />
  </div>
</template>

<script>
import SatelliteStats from './components/SatelliteStats.vue';
import OrbitVisualizer from './components/OrbitVisualizer.vue';
import TelemetryLogs from './components/TelemetryLogs.vue';
import { getSatelliteData } from './services/api.js';

export default {
  data() {
    return {
      stats: {},
      logs: [],
    };
  },
  async mounted() {
    const data = await getSatelliteData('satelliteId');
    this.stats = data;
    this.logs = [{ id: 1, time: '12:00', parameter: 'Temperature', value: '20°C' }];
  },
};
</script>

