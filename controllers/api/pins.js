const Pin = require('../../models/pin')


module.exports = {
    create,
    show
}

//create new pin
async function create(req, res) { 
    console.log(req.body, 'REQ BODY')
    const newPin = new Pin(req.body);
    try {
        //await saving if sucessfull => return json
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        // console.log(err)
        res.status(500).json(err)
    }
}

async function show(req, res) {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err)
    }
}