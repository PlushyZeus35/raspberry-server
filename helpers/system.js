const { exec } = require('child_process');

exports.getUptime = async function (){
    const uptimeCommand = 'uptime -p';
    exec(uptimeCommand, (error, stdout, stderr) => {
        if(error){
            return '';
        }
        return stdout.trim();
    });
}

 exports.getTemperature = async function(){
    const temperatureCommand = 'cat /sys/class/thermal/thermal_zone0/temp';
    exec(temperatureCommand, (error, stdout, stderr) => {
        if(error){
            return '';
        }
        return stdout.trim();
    });
}

 exports.getStorage = async function(){
    const storageCommand = 'df -h --total | tail -1 | awk \'{print $4, $5}’';
    exec(storageCommand, (error, stdout, stderr) => {
        if(error){
            return '';
        }
        return stdout.trim();
    });
}