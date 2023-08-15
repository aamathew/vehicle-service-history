const express = require('express');
const router = express.Router();
const {
  createVehicle,
  getVehicles,
  getVehicle, 
  deleteVehicle,
  updateVehicle
} = require('../../controllers/api/vehicles');

//get all vehicles
router.get('/', getVehicles);

//get single vehicle
router.get('/:id', getVehicle);

// post a new vehicle
router.post('/', createVehicle);

// delete vehicle
router.delete('/:id', deleteVehicle);

// update vehicle
router.put('/:id', updateVehicle);


module.exports = router