const Pin = require('../../models/pin')


module.exports = {
    create
}

//create new pin
async function create(req, res) { 
    const newPin = new Pin(req.body);
    try {
        //await saving if sucessfull => return json
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err)
    }
}