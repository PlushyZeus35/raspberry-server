const {getStatus} = require('../helpers/system');
const services = ['apache2', 'qbittorrent', 'mariadb', 'pihole-FTL'];


exports.getServiceStatus = async function(){
    let serviceStatusArr = [];
    let promises = [];
    for(let service of services){
        let serviceStatus = getStatus(service);
        promises.push(serviceStatus);
    }
    return Promise.all(promises).then(responses => {
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