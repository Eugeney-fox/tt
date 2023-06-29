class Userinfo {
    async battary(){
        return await navigator.getBattery();
    }

    async ip(){
        let res = await(await fetch('http://ip-api.com/json/?fields=61439'))
        let data = await res.json();
        return data;
    }

    async position(){
        const pos = await new Promise((resolve, reject)=>{
            navigator.geolocation.getCurrentPosition
            (resolve,reject)
        })
        return{
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
            altitude: pos.coords.altitude,
            heading: pos.coords.heading,
            speed: pos.coords.speed,
            timestamp: pos.timestamp,
        }
    }

    
}