var app = new Vue({
  el: '#app',
  data: {
    headline: 'Is the ISS near me?',
    latitude: '26.201571',
    longitude: '-80.293123',
    distance: '',
    isslogo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/ISS_emblem.png'
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
  			roundedDistance = Math.round(response.data.distance).toLocaleString('en');
  			app.distance = `The International Space Station is ${roundedDistance} miles away from you!`;
  		})
  		.catch(function(error) {
  			console.log(error)
  		});
  	}
  }
})