var express = require('express');
const { getUptime, getTemperature, getStorage } = require('../helpers/system');
var router = express.Router();

router.get('/uptime', async (req, res) => {
    console.log("uptime")
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

module.exports = router;