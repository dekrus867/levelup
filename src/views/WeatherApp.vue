<template>
   <v-app>
        <div id='app' :class='typeof weather.current != "undefined" && weather.current.temperature > 16 ? "warm" : ""'>
          <main>
            <div class='search-box'>
              <input
                type='text'
                class='search-bar'
                placeholder='Enter city name'
                v-model='query'
                @keypress='fetchWeather'
              />
            </div>
            <br>
            <div class="weather-wrap" v-if='typeof weather.current != "undefined"'>
              <div class="location-box">
                <div class="location">{{ weather.location.name }}, {{ weather.location.country }}</div>
                <div class="date">{{dataBuilder()}}</div>
              </div>

              <div class="weather-box">
                <div class="temp">{{weather.current.temperature}}°C</div>
                <div class="weather">{{weather.current.weather_descriptions[0]}}</div>
                <div class="humidity">{{weather.current.humidity}}%</div>
                <div class="wind-speed">{{weather.current.wind_speed}}m/s</div>
              </div>
            </div>
          </main>
        </div>
  </v-app>
</template>
<script src="../weather.js"></script>
<style src="../weather.css"></style>
