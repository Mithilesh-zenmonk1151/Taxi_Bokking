// const { authenticateUser } = require('../middleware/auth');

const router = require('express').Router();

router.use('/auth', require('./user.route'));
router.use('/car', require('./car.route'));



module.exports = router;