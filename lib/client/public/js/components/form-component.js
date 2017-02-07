Vue.component('form-component', {
	data: function () {
		return {
			headline: 'Is the ISS near me?',
			latitude: 'Calculating your latitude...',
	    longitude: 'Calculating your longitude...',
	    distance: ''
	  }
	},
  mounted: function(){
    this.getMyLocation();
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
  	},
    getMyLocation: function(){
      const app = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        app.latitude = String(position.coords.latitude);
        app.longitude = String(position.coords.longitude);
      });
    }
  },
	template: '<div><div id="form"><h1 v-cloak>{{headline}}</h1><label for="latitude">Latitude:</label><input type="text" name="latitude" placeholder="Latitude" v-model="latitude"><label for="longitude">Longitude:</label><input type="text" name="longitude" placeholder="Longitude" v-model="longitude"><button @click="getDistance">Submit</button></div><div class="results"><p>{{distance}}</p></div></div>'
});