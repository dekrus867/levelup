<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-toolbar-title>Vuetify WeatherApp</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn @click='onLogin' text to='/login'>Login</v-btn>
            <v-btn text to='/'>Home</v-btn>
    </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  name: 'App',

  components: {
  },
  data: () => ({
    authenticated: false
  }),
  methods: {
    async onLogin () {
      const res = await axios.post('http://localhost:5100/login', {
        data: 23
      })
      const data = res.data
      console.log(data)
    }
  }
})
</script>
