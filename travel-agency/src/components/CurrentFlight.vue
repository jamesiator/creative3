<template>
  <div class="info">
    <h3 class="id">Flight {{flight.id}}</h3>
    <h1>{{flight.destination_city}}, {{flight.destination_country}}</h1>
    <p>Departing from {{flight.origin_city}}, {{flight.origin_country}}</p>
    <p v-if="freeCheckedBag">1 free checked bag</p>
    <p v-else>Price for checked bag: ${{flight.check_bag_price}}</p>
    <br>
    <h1>${{flight.ticket_price}}</h1>
    <div class="book">
      <button @click="bookFlight">Book Flight</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentFlight',
  props: {
    flight: Object
  },
  data() {
    return {
      flightInfo: this.flight
    }
  },
  methods: {
    bookFlight() {
      this.$root.$data.bookings.push(this.flight);
    }
  },
  computed: {
    freeCheckedBag() {
      return this.flight.check_bag_free;
    }
  }
}
</script>

<style scoped>
  .info {
    background: white;
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 10px;
  }

  .info h1 {
    font-size: 1.5em;
    font-weight: lighter;
  }

  .id {
    color: #003b99;
    text-align: left;
    font-weight: lighter;
    margin-top: 0;
  }

  button {
    background: #003b99;
    border: none;
    border-radius: 5px;
    padding: 2px 20px;
    color: white;
    font-family: 'Pacifico';
    font-size: 1.5em;
    align-self: left;
  }
  @media screen and (min-width: 500px) {
    .info h1 {
      font-size: 2.6em;
      font-weight: lighter;
    }
    button {
      width: 50%
    }
  }
</style>
