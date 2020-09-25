<template>
  <v-app id="app">
    <div id="title">Build Reporter</div>
    <div id="container">
      <DataTable />
    </div>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable.vue'

export default {
  name: 'App',
  components: {
    DataTable
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
html {
  --scrollbarBG: #202129;
  --thumbBG: #f3c940;
}

body {
  background-color: #000000;
  margin: 0;
}

#title {
  color:  #f3c940;
  font-size: 2em;
  font-family: 'Rajdhani', sans-serif;
  text-align: left;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fffcd1;
  background-color: #202129;
}

#container {
  height: 100%;
  margin: 0px 80px 80px 80px;
  border: 2px solid #f3c940;
}

.widget {
  text-align: left;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2em;
  padding: 10px;
  border: 1px solid #f3c940;
}

/*Customize Scrollbar*/
body::-webkit-scrollbar {
  width: 8px;
}

body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
</style>