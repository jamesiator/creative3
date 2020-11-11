<template>
<div class="wrapper">
  <div v-if="noBookings">
    <br>
    <h2 class="noFlights">~No booked flights~</h2>
  </div>
  <div v-else>
    <h1>Your Bookings</h1>
    <br>
    <BookingsList :bookings="allBookings"/>
  </div>
</div>
</template>

<script>
import BookingsList from "../components/BookingsList.vue"
export default {
  name: 'Bookings',
  components: {
    BookingsList
  },
  computed: {
    allBookings() {
      return this.$root.$data.bookings;
    },
    noBookings() {
      if (this.$root.$data.bookings.length === 0)
        return true;
      return false;
    }
  }
}
</script>

<style scoped>
  .wrapper {
    text-align: center;
  }
  h1 {
    font-weight: lighter;
  }
  .noFlights {
    font-weight: lighter;
  }
</style>
