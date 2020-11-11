<template>
<div>
  <div class="wrapper">
    <div>
      <h2>Search by country:</h2>
    </div>
    <div class="search">
      <form class="pure-form">
        <input v-model="searchText">
      </form>
    </div>
  </div>
  <br>
  <FlightList :flights="flights"/>
</div>
</template>

<script>
import FlightList from "../components/FlightList.vue"
export default {
  name: 'Home',
  components: {
    FlightList
  },
  data() {
    return {
      searchText: '',
    };
  },
  computed: {
    flights() {
      return this.$root.$data.flights.filter(flight => flight.destination_country.toLowerCase().search(this.searchText) >= 0);
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: block;
    text-align: center;
    align-items: center;
  }

  h2 {
    font-weight: lighter;
    margin-bottom: 5px;
  }

  .search {
    border-radius: 4px;
    width: 80%;
    margin: auto;
  }

  form {
    width: 100%;
  }

  input {
    font-size: 20px;
    box-shadow: none !important;
    width: 100%;
    height: 40px;
  }

  @media screen and (min-width: 1000px) {
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h2 {
      margin: 0 5px;
    }
    .wrapper div {
        margin: 0 5px;
    }
    .search {
      width: 50%;
    }
    form {
      display: table;
    }
    input {
      display: table-cell;
    }
  }
</style>
