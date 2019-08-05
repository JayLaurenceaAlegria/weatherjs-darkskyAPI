class API {
    getStatus(link){
        fetch(link)
            .then(res => res.json())
                .then((weather)=>{
                    console.log(weather)
                    let timeZone = document.querySelector('.timezone');
                    let temp =  document.querySelector('.degree');
                    // let icon = document.querySelector('.icon');
                    let status = document.querySelector('.temperature-status');
            
                    timeZone.innerHTML = weather.timezone
                    temp.textContent = weather.currently.temperature;
                    status.innerHTML = weather.currently.summary;

                    let icon = weather.currently.icon;
                    let ICON = icon.replace(/-/g, "_").toUpperCase();
                    let skycons = new Skycons({"color": "white"});
                    skycons.set(document.getElementById("icon"), Skycons[ICON]);
                      skycons.play();
                      console.log(skycons)
                })
    }
}
