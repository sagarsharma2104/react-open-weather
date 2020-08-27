const request = require('request-promise-native');

const OpenWeather = function (APIKey, city, uri) {
    if (APIKey === null || APIKey === undefined) {
        return 'Please provide API KEY'
    }

    if (city === null || city === undefined) {
        return 'Please provide City'
    }

    const options = {
        method: 'GET'
        , uri: uri,
        qs: {
            q: city,
            appid: APIKey
        }
        , json: true
    }

    return request(options).then(response => {
        console.log(response)
        return response;
    }).catch(function (err) {
            console.log('err : ', err);
            return err;
        });
}

module.exports = OpenWeather;  