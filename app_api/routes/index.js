const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

/* GET trips lists */
router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;
