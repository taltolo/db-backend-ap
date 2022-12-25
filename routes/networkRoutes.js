const express = require('express');
const router = express.Router();
const networkController = require('../controllers/networkController');
const { validateNetwork } = require('../middleware/validate-network');
const { networkVlidat } = require('../utils/validateInput');

router.get('/', networkController.getAllNetworks);

router.get('/:networkId', networkController.getOneNetwork);

router.post(
  '/',
  networkVlidat,
  validateNetwork,
  networkController.createNewNetwork
);

router.patch('/:networkId', networkController.updateOneNetwork);

router.delete('/:networkId', networkController.deleteOneNetwork);

module.exports = router;
