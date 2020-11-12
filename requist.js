// get the API Key and save it

const key = '113e7608066a54df3f74dc48b3db620b';

// const basedURL = "http://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=113e7608066a54df3f74dc48b3db620b";

// // fetch the API // this the way to test the API

// fetch(basedURL).then(function(data) {
//     console.log("response", data.json());
// }).catch(function(error) {
//     console.log(error);
// });

// make the API Dynamic //// Async and Await works to let query have time before it works

const RequistCity = async function(city) {
    const basedURL = "https://api.openweathermap.org/data/2.5/weather";
    // get the city when the user put the name
    const Query = `?q=${city}&appid=${key}`
        //make fetch Call to get Information
    const Response = await fetch(basedURL + Query);

    // Call promise data
    const data = Response.json();
    return data

}
