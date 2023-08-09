const {getServiceStatus} = require('../helpers/system');
const services = ['apache2', 'qbittorrent', 'mariadb', 'pihole-FTL'];


exports.getServiceStatus = function(){
    let serviceStatusArr = [];
    let promises = [];
    for(let service of services){
        let serviceStatus = getServiceStatus(service);
        promises.push(serviceStatus);
    }
    Promise.all(promises).then(responses => {
        for(let response of responses){
            serviceStatusArr.push({
                service: response.command.split(' ')[response.command.split(' ').length-1],
                status: response.stdout,
                command: response.command
            })
        }
        return serviceStatusArr;
    })
}