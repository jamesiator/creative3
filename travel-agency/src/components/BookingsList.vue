<template>
<div class="wrapper">
  <div class="flights">
    <div class="flight" v-for="flight in bookings" :key="flight.id">
      <hr>
      <div class="item">
        <div>
          <div class="info">
            <img src="/images/pin-black.png">
          </div>
          <div class="info">
            <h2>{{flight.destination_city}}, {{flight.destination_country}}</h2>
          </div>
        </div>
        <div>
          <button class="auto" @click="removeItem(flight)"><h2>Cancel reservation</h2></button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookingsList',
  props: {
    bookings: Array
  },
  methods: {
    removeItem(product) {
      let index = this.$root.$data.bookings.indexOf(product);
      if (index > -1)
        this.$root.$data.bookings.splice(index,1);
    }
  }
}
</script>

<style scoped>
  .flight {
    text-align: center;
  }
  .item {
    display: block;
  }
  .info h2 {
    font-weight: lighter;
  }
  img {
    width: 50px;
    margin-right: 20px;
  }
  button {
    background: #a8e8ff;
    border: none;
    font-size: 1em;
    color: #003b99;
  }
  button h2 {
    font-weight: lighter;
  }
  button:hover {
    color: #005ced;
  }
  @media screen and (min-width: 700px) {
    .item {
      display: flex;
      justify-content: space-around;
    }
    .info {
      float: left;
    }
  }
</style>
