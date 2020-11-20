export default {
  name: 'App',
  data () {
    return {
      AccessKey: '92990e232f0896f1972adc645f59c7ae',
      UrlBase: 'http://api.weatherstack.com/current',
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather (event) {
      if (event.key === 'Enter') {
        fetch(
          `${this.UrlBase}?access_key=${this.AccessKey}&query=${this.query}&units=m`
        )
          .then(response => response.json())
          .then(this.setResults)
      }
    },
    setResults (results) {
      this.weather = results
    },
    dataBuilder () {
      const d = new Date()
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const day = days[d.getDay()]
      const date = d.getDate()
      const month = months[d.getMonth()]
      const year = d.getFullYear()
      return `${day}, ${date}.${month} ${year}`
    }
  }
}
