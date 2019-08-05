
document.addEventListener('DOMContentLoaded', () => {
    let lat;
    let long;
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position =>{
                lat = position.coords.latitude;
                long = position.coords.longitude;

                let link = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c28e1eece4f3abff4713c89c6373e3c1/${lat},${long}`;
                const api = new API()
                api.getStatus(link);
            });
        }
})
