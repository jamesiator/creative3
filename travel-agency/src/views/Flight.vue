<template>
<div>
  <div class="back">
    <router-link to="/">
      <h3>&lt; Back to Flights</h3>
    </router-link>
  </div>
  <div v-if="noCurrentFlight">
    <p>We're sorry, the flight information cannot be displayed</p>
  </div>
  <div v-else class="info">
    <CurrentFlight :flight="currentFlight"/>
  </div>
</div>
</template>

<script>
import CurrentFlight from "../components/CurrentFlight.vue"
export default {
  name: 'Flight',
  components: {
    CurrentFlight
  },
  data() {
    return {
      flightID: this.$root.$data.currentFlight,
    }
  },
  computed: {
    currentFlight() {
      return this.$root.$data.flights.find(flight => this.flightID === flight.id);
    },
    noCurrentFlight() {
      if (this.$root.$data.currentFlight === "")
        return true;
      return false;
    }
  },
  methods: {
    bookFlight(flight) {
      this.$root.$data.bookings.push(flight);
    }
  }
}
</script>

<style scoped>
  .back {
    width: 150px;
  }

  .back a {
    color: #003b99;
    text-decoration: none;
  }

  .back a:hover {
    color: #005ced;
  }

  h3 {
    font-weight: lighter;
  }

  .info {
    text-align: center;
  }
</style>
