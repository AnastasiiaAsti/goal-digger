const express = require('express');
const router = express.Router();
const pinsCtrl = require('../../controllers/api/pins');

router.post('/', pinsCtrl.create);
router.get('/', pinsCtrl.show);

module.exports = router