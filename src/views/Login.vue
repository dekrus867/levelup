<template>
  <div id="login">
   <v-app>
     <main>
       <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="pt-1 blue darken-4">
                <v-toolbar-title class="white--text"><h4>Welcome</h4></v-toolbar-title>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form v-model="valid" ref="form">
                        <v-text-field
                          label="Enter your e-mail address"
                          v-model="email"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Enter your password"
                          v-model="password"
                          min="8"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'"
                          :rules="passwordRules"
                          counter
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn v-on:click="submit()" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Login</v-btn>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
     </main>
   </v-app>
 </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
// import router from '../router'

export default Vue.extend({
  name: 'login',
  vuetify: new Vuetify(),
  data () {
    return {
      valid: false,
      e1: true,
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate() && this.password === 'LevelUpAdmin') {
        this.$emit('authenticated', true)
        this.$router.replace({ name: 'WeatherApp' })
      } else {
        window.alert('Password is incorrect! Try again!')
      }
    },
    clear () {
      this.$refs.form.reset()
    }
    /* login: function () {
      const email = this.email
      const password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/weather'))
        .catch(err => console.log(err))
    } */
  }
})
</script>
