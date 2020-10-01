const request = require('request')

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chandigarh.json?access_token=pk.eyJ1IjoicmlzaGFiaGdveWFsMTgiLCJhIjoiY2tlYjhobnd1MDZldDJzbGVycWw4M2VmaSJ9.RbyAlSp9bU7fKFQSzAFxsA&limit=1'
const geocodeBaseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
var cityName = 'chandigarh'
const geocodeApiKey = 'pk.eyJ1IjoicmlzaGFiaGdveWFsMTgiLCJhIjoiY2tlYjhobnd1MDZldDJzbGVycWw4M2VmaSJ9.RbyAlSp9bU7fKFQSzAFxsA'
var limit = '1'

const geocode = (address, callback) => {
    const geocodeUrl = geocodeBaseUrl + encodeURIComponent(address) + '.json?access_token=' + geocodeApiKey + '&limit=' + limit;

    request({url: geocodeUrl, json: true}, (error, response) => {
        if(error) {
            callback('Not connected to Internet', undefined)
        } else if (response.body.features.length == 0) {
            callback('Location not found', undefined)
        } else {
            callback(null, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location:  response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;