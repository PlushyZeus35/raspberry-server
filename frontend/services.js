const API_ROOT = 'http://192.168.1.2:3000/system';
const APACHE = 'apache2';
const TORRENT = 'qbittorrent'
const MARIADB = 'mariadb';
const PIHOLE = 'pihole-FTL';
const ACTIVE = 'active';
init();

function init(){
    getServiceStatus();
}

function getServiceStatus(){
    axios.get(API_ROOT + '/status')
    .then(function (response) {
        console.log(response.data)
        for(let servStatus of response.data){
            if(servStatus.service == APACHE){
                displayApacheStatus(servStatus);
            }
            if(servStatus.service == TORRENT){
                displayTorrentStatus(servStatus);
            }
            if(servStatus.service == MARIADB){
                displayMariadbStatus(servStatus);
            }
            if(servStatus.service == PIHOLE){
                displayPiholeStatus(servStatus);
            }
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

function displayApacheStatus(status){
    $("#apacheLoader")[0].classList.add('d-none');
    const apacheStatusContainer = $("#apacheStatus")[0];
    if(status.status==ACTIVE){
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-success');
        statusPill.innerHTML = 'Activo';

        const buttonAccess = document.createElement('a');
        buttonAccess.href = '#';
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-primary');
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }else{
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-danger');
        statusPill.innerHTML = 'Inactivo';

        const buttonAccess = document.createElement('button');
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-outline-primary');
        buttonAccess.disabled = true;
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }
    
}

function displayTorrentStatus(status){
    $("#torrentLoader")[0].classList.add('d-none');
    const apacheStatusContainer = $("#torrentStatus")[0];
    if(status.status==ACTIVE){
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-success');
        statusPill.innerHTML = 'Activo';

        const buttonAccess = document.createElement('a');
        buttonAccess.href = 'http://192.168.1.2:8080';
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-primary');
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }else{
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-danger');
        statusPill.innerHTML = 'Inactivo';

        const buttonAccess = document.createElement('button');
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-outline-primary');
        buttonAccess.disabled = true;
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }
}

function displayMariadbStatus(status){
    $("#mariadbLoader")[0].classList.add('d-none');
    const apacheStatusContainer = $("#mariadbStatus")[0];
    if(status.status==ACTIVE){
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-success');
        statusPill.innerHTML = 'Activo';

        const buttonAccess = document.createElement('a');
        buttonAccess.href = '/phpmyadmin';
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-primary');
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }else{
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-danger');
        statusPill.innerHTML = 'Inactivo';

        const buttonAccess = document.createElement('button');
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-outline-primary');
        buttonAccess.disabled = true;
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }
}

function displayPiholeStatus(status){
    $("#piholeLoader")[0].classList.add('d-none');
    const apacheStatusContainer = $("#piholeStatus")[0];
    if(status.status==ACTIVE){
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-success');
        statusPill.innerHTML = 'Activo';

        const buttonAccess = document.createElement('a');
        buttonAccess.href = '/admin';
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-primary');
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }else{
        const statusPill = document.createElement('span');
        statusPill.classList.add('badge');
        statusPill.classList.add('rounded-pill');
        statusPill.classList.add('text-bg-danger');
        statusPill.innerHTML = 'Inactivo';

        const buttonAccess = document.createElement('button');
        buttonAccess.classList.add('btn');
        buttonAccess.classList.add('btn-outline-primary');
        buttonAccess.disabled = true;
        buttonAccess.innerHTML = 'Acceder';
        apacheStatusContainer.appendChild(statusPill);
        apacheStatusContainer.appendChild(buttonAccess);
        apacheStatusContainer.classList.toggle('d-none')
    }
}