// Date conversions from unix timestamp to local time

// function setTimeFormat(timestamp) {
//     var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
//         yyyy = d.getFullYear(),
//         mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
//         dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
//         hh = d.getHours(),
//         h = hh,
//         min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
//         ampm = 'AM',
//         time;

//     if (hh > 12) {
//         h = hh - 12;
//         ampm = 'PM';
//     } else if (hh === 12) {
//         h = 12;
//         ampm = 'PM';
//     } else if (hh == 0) {
//         h = 12;
//     }

//     // ie: 2013-02-18, 8:35 AM	
//     // yyyy + '-' + mm + '-' + dd + ', ' +

//     time = h + ':' + min + ' ' + ampm;

//     return time;
// }

// const unixSunriseTime = document.getElementById("t1").innerHTML;
// const unixSunsetTime = document.getElementById("t2").innerHTML;

// document.getElementById("t1").innerHTML = setTimeFormat(unixSunriseTime);
// document.getElementById("t2").innerHTML = setTimeFormat(unixSunsetTime);




// UpperCasing of first Word of string

const toTitleCase = (phrase) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const str = document.getElementById("desc").innerHTML;
document.getElementById("desc").innerHTML = toTitleCase(str);



// var latitude, longitude;

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.watchPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
// }

// module.exports = { latitude, longitude };