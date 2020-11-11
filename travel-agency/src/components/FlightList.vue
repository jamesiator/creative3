<template>
<div class="wrapper">
  <div class="flights">
    <div class="flight" v-for="flight in flights" :key="flight.id">
      <div class="listing">
        <div class="info">
          <h2>{{flight.destination_city}}</h2>
          <h5>{{flight.destination_country}}</h5>
        </div>
        <div class="image">
          <img src="/images/listing.png">
        </div>
      </div>
      <div class="price">
        <h2>${{flight.ticket_price}}</h2>
        <router-link to="/flight">
          <h3 @click="setFlight(flight.id)">View &gt;</h3>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FlightList',
  props: {
    flights: Array
  },
  methods: {
    setFlight(flightID) {
      this.$root.$data.currentFlight = flightID;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flights {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.flight {
  margin: 20px 5px;
  background: #f2f7ff;
  border-radius: 5px;
  width: 100%;
}

.flight .image {
  justify-content: center;
  width: 100px;
}

.flight img {
  width: 100%;
}

.listing {
  display: flex;
  justify-content: space-between;
  background: #498af2;
  border-radius: 5px;
  padding: 10px 30px;
}

.listing div {
  margin: 0 4px;

}

.listing h2 {
  font-weight: lighter;
  margin: auto 0;
}

.listing h5 {
  margin: 0px;
}

.price {
  display: flex;
  justify-content: space-around;
}

.price h2 {
  margin-top: 10px;
}

.price a {
  color: #003b99;
  text-decoration: none;
}

.price a:hover {
  color: #005ced;
}

.price h3 {
  font-weight: lighter;
}

@media screen and (min-width: 500px) {
  .flight {
    width: 45%;
  }
}

@media screen and (min-width: 1000px) {
  .flight {
    width: 33%;
  }
}
</style>
