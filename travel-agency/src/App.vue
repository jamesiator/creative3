<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Pacifico&display=swap" rel="stylesheet">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <h1>Come Fly with Us!</h1>
        </router-link>
      </div>
      <div id="side">
        <router-link to="/bookings">
          <div class="menu-item">
            <img src="/images/bookings.png">
            <h4>Bookings: {{bookings}}</h4>
          </div>
        </router-link>
      </div>
    </div>
    <router-view/>
    <hr>
    <footer>
      <p>'Bookings' icon by GDJ on Pixabay</p>
      <p>White airplane icon by OpenClipart-Vectors on Pixabay</p>
      <p>Location pin icon from DoomSlayer on Pixabay</p>
      <a href="https://github.com/jamesiator/creative3"><h2>~GitHub Repository~</h2></a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    bookings() {
      return this.$root.$data.bookings.length;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Open Sans';
}

h1, h2, h3, h4 {
  font-family: 'Pacifico';
}

body {
  margin: 20px 20px;
  background: #a8e8ff;
}

#menu {
  display: block;
  margin-bottom: 50px;
}

#menu a {
  color: #003b99;
  text-decoration: none;
}

#menu a:hover {
  color: #005ced;
}

#menu div {
  //border: 1px solid red;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  text-align: center;
}

#side {
  justify-content: center;
  text-align: center;
}

#side img {
  width: 100px;
}

#side h4 {
  margin-top: 0;
}

footer {
  font-size: .8em;
  text-align: center;
}

footer p {
  margin: 0;
}

footer a {
  color: #003b99;
  text-decoration: none;
}

footer a:hover {
  color: #005ced;
}

@media screen and (min-width: 500px) {
  #brand {
    width: 500px;
    font-size: 1.4em;
    margin: auto;
  }
}

@media screen and (min-width: 1000px) {
  body {
    margin: 50px 100px;
  }
  #menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
    grid-template-areas: "none brand side";
    margin-bottom: 50px;
  }
  #side {
    grid-area: side;
    display: flex;
    justify-content: flex-end;
    text-align: center;
  }
  .menu-item {
    display: flex;
    flex-direction: column;
  }
}
</style>
