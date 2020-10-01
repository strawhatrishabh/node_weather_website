const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=c57dac95c3df145905239ad48eb5a476&query=40.714,-74.006'
const weatherBaseUrl = 'http://api.weatherstack.com/'
const weatherApiKey = 'c57dac95c3df145905239ad48eb5a476'
var position = {
    latitude: 40.714,
    longitude: -74.006
}

const forecast = (latitude, longitude, callback) => {
    const weatherUrl = weatherBaseUrl + 'current?access_key=' + weatherApiKey + '&query=' + latitude + ',' + longitude + '&units=m';

    request({url: weatherUrl, json: true}, (error, response) => {
        if(error) {
            callback('Check Internet Connection', undefined)
        } else if(response.body.success === false) {
            callback('Location not found', undefined)
        } else {
            callback(null, response.body.current)
        }
    })
}

module.exports = forecast