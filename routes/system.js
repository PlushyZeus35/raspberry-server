var express = require('express');
const { getUptime, getTemperature, getStorage } = require('../helpers/system');
const {getServiceStatus} = require('../helpers/serviceController');
var router = express.Router();

router.get('/uptime', async (req, res) => {
    const uptime = await getUptime();
    res.json({uptime: uptime})
})

router.get('/temperature', async (req, res) => {
    const temperature = await getTemperature();
    res.json({temperature: temperature})
})

router.get('/storage', async (req, res) => {
    const storage = await getStorage();
    res.json({storage: storage})
})

router.get('/status', async(req, res) => {
    const serviceStatus = await getServiceStatus();
    res.json(serviceStatus);
})

module.exports = router;