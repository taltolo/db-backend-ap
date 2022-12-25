const networkService = require('../services/networkService');

const getAllNetworks = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const allNetworks = await networkService.getAllNetworks();
  res.send({ status: 'OK', data: allNetworks });
};

const getOneNetwork = (req, res) => {
  const {
    params: { networkId },
  } = req;
  if (!networkId) {
    return;
  }
  networkService.getOneNetwork(networkId).then((networkToreturn) => {
    if (networkToreturn) {
      res.send({ status: 'OK', data: networkToreturn });
    } else {
      res.json({ message: networkToreturn });
    }
  });
};

const createNewNetwork = async (req, res) => {
  let newNetwork = req.body;
  const result = await networkService.createNewNetwork(newNetwork);
  if (result) res.status(200).json(result);
  else {
    res.json(result);
  }
};

const updateOneNetwork = (req, res) => {
  const {
    body,
    params: { networkId },
  } = req;
  if (!networkId) {
    return;
  }
  networkService.updateOneNetwork(networkId, body).then((updateNetwork) => {
    if (updateNetwork) res.status(200).json(updateNetwork);
    else {
      res.json(updateNetwork);
    }
  });
};

const deleteOneNetwork = (req, res) => {
  const {
    params: { networkId },
  } = req;
  if (!networkId) {
    return;
  }
  networkService.deleteOneNetwork(networkId).then((isDeleted) => {
    console.log(isDeleted);
    if (isDeleted) res.status(200).json({ message: 'Deleted successfully' });
    else {
      res.json(isDeleted);
    }
  });
};

module.exports = {
  getAllNetworks,
  getOneNetwork,
  createNewNetwork,
  updateOneNetwork,
  deleteOneNetwork,
};
