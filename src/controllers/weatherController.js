let axios = require("axios");

let weather = async function (req, res) {
    let cities = req.query.cities;
    let appid = req.query.appid;
    let option = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${appid}`
    }
    let allCitiesofWeather = await axios(option)

    console.log(allCitiesofWeather)
    let data = allCitiesofWeather.data
    res.status(200).send({ msg: data, status: true })
}

let allWeather = async function (req, res) {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
    let cityObj = []
    for (let i = 0; i < cities.length; i++) {
        let obj = { city: cities[i] }
        // console.log(obj)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e46717f19d52e22b2af0c61a00ff50bf`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        obj.temp = result.data.main.temp
        cityObj.push(obj)
    }
    let sorted = cityObj.sort(function (a, b) {
        return b.temp - a.temp

    })
    console.log(sorted)
    res.status(200).send({ msg: sorted, status: true })


}

module.exports.weather = weather
module.exports.allWeather = allWeather