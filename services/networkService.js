const Networks = require('../models/Networks');

const getAllNetworks = () => {
  const allNetworks = Networks.find();
  return allNetworks;
};

const getOneNetwork = (networkId) => {
  return new Promise(async (resolve, reject) => {
    const network = await Networks.findById(networkId);
    resolve(network);
  });
};

const createNewNetwork = (newNetwork) => {
  let networkAdd = new Networks(newNetwork);
  try {
    networkAdd.save();
    return networkAdd;
  } catch (err) {
    return err;
  }
};

const updateOneNetwork = (networkId, update) => {
  return new Promise(async (resolve, reject) => {
    const networkForUpdate = Networks.findOneAndUpdate(networkId, update);
    resolve(networkForUpdate);
  });
};

const deleteOneNetwork = (networkId) => {
  return new Promise(async (resolve, reject) => {
    const networkForUpdate = Networks.findByIdAndDelete(networkId);
    resolve(networkForUpdate);
  });
};

module.exports = {
  getAllNetworks,
  getOneNetwork,
  createNewNetwork,
  updateOneNetwork,
  deleteOneNetwork,
};
