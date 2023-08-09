const { exec } = require('child_process');

exports.getUptime = async function (){
    const uptimeCommand = 'uptime -p';
    return executeCommand(uptimeCommand);
}

 exports.getTemperature = async function(){
    const temperatureCommand = 'cat /sys/class/thermal/thermal_zone0/temp';
    return executeCommand(temperatureCommand);
}

 exports.getStorage = async function(){
    const storageCommand = 'df -h --total | tail -1 | awk \'{print $4, $5}’';
    return executeCommand(storageCommand);
}

function executeCommand(command){
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
                if(error){
                        console.log('error ' + error);
                        reject(error);
                        return;
                }
                console.log(stdout);
                resolve({stdout: stdout.trim(),stderr});
        });
});
}