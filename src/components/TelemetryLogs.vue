<template>
  <table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Parameter</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="log in logs" :key="log.id">
        <td>{{ log.time }}</td>
        <td>{{ log.parameter }}</td>
        <td>{{ log.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['logs'],
};
</script>

<style>
table { /* Add styling */ }
</style>

