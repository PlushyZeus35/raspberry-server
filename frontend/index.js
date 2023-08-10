const API_ROOT = 'http://192.168.1.2:3000/system';

init();

function init(){
    getUptime();
    getTemperature();
    getStorage();
}

function getUptime(){
    axios.get(API_ROOT + '/uptime')
    .then(function (response) {
        let uptime = response.data.uptime.stdout;

        const uptimeDataContainer = $("#uptimeData")[0];
        uptimeDataContainer.innerHTML = '';
        
        const infoContainer = document.createElement('div');
        const uptimeTitle = document.createElement('h6');
        uptimeTitle.classList.add('mb-0');
        uptimeTitle.innerHTML = 'Uptime';
        const uptimeValue = document.createElement('p');
        uptimeValue.classList.add('mb-0');
        uptimeValue.classList.add('opacity-75');
        uptimeValue.innerHTML = uptime;
        infoContainer.appendChild(uptimeTitle);
        infoContainer.appendChild(uptimeValue);
        uptimeDataContainer.appendChild(infoContainer);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

function getTemperature(){
    axios.get(API_ROOT + '/temperature')
    .then(function (response) {
        let temperature = (response.data.temperature.stdout/1000).toFixed(1);
        
        const temperatureDataContainer = $("#temperatureData")[0];
        temperatureDataContainer.innerHTML = '';
        
        const infoContainer = document.createElement('div');
        const temperatureTitle = document.createElement('h6');
        temperatureTitle.classList.add('mb-0');
        temperatureTitle.innerHTML = 'Temperature';
        const temperatureValue = document.createElement('p');
        temperatureValue.classList.add('mb-0');
        temperatureValue.classList.add('opacity-75');
        temperatureValue.innerHTML = temperature + ' ºC';
        infoContainer.appendChild(temperatureTitle);
        infoContainer.appendChild(temperatureValue);
        temperatureDataContainer.appendChild(infoContainer);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

function getStorage(){
    axios.get(API_ROOT + '/storage')
    .then(function (response) {
        let storage = response.data.storage.stdout;
        
        const storageDataContainer = $("#storageData")[0];
        storageDataContainer.innerHTML = '';
        
        const infoContainer = document.createElement('div');
        const storageTitle = document.createElement('h6');
        storageTitle.classList.add('mb-0');
        storageTitle.innerHTML = 'Storage';
        const storageValue = document.createElement('p');
        storageValue.classList.add('mb-0');
        storageValue.classList.add('opacity-75');
        storageValue.innerHTML = storage;
        infoContainer.appendChild(storageTitle);
        infoContainer.appendChild(storageValue);
        storageDataContainer.appendChild(infoContainer);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}