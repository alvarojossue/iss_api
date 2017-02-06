var app = new Vue({
  el: '#app',
  data: {
    headline: 'Is the ISS near me?',
    latitude: '',
    longitude: '',
    distance: ''
  },
  methods: {
  	getDistance: function(){
  		const app = this;
  		app.distance = "Calculating..."

  		axios.post('/api/distance', {
  			latitude: app.latitude,
  			longitude: app.longitude
  		})
  		.then(function(response) {
  			app.distance = `The International Space Station is ${response.data.distance} miles away!`
  		})
  		.catch(function(error) {
  			console.log(error)
  		});
  	}
  }
})