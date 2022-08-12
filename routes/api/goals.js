const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals')

router.get('/index', goalsCtrl.index);
router.post('/create', goalsCtrl.create);
router.delete('/delete/:id', goalsCtrl.delete)


module.exports = router;
