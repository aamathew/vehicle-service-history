const Vehicle = require('../../models/vehicle');
const mongoose = require('mongoose');


//get vehicles
const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({}).sort({createdAt: -1})

  res.status(200).json(vehicles)
}


async function getVehicle(req, res) {
    try {
      const vehicle = await Vehicle.findById(req.params.id);
      if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }
      res.json(vehicle);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
      res.status(500).json({ error: 'Server error' });
    }
}

//create vehicle
const createVehicle = async (req, res) => {
  console.log('hi');

  const {text} = req.body
  // add doc to db
  try {
    const bug = await Vehicle.create(text)
    res.status(200).json(vehicle)  
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//delete vehicle
const deleteVehicle = async (req, res) => {
  const { id } = req. params
  const vehicle = await Vehicle.findOneAndDelete({_id: id})

  if (!vehicle) {
    return res.status(404).json({error: 'No vehicle'})
  }

  res.status(200).json(vehicle)
}

//update vehicle
const updateVehicle = async (req, res) => {
  const vehicle = await Vehicle.findOneAndUpdate({_id: req.params.id}, 
    req.body
  )

  if (!vehicle) {
    return res.status(404).json({error: 'No vehicle'})
  }

  res.status(200).json(vehicle)
}

module.exports = {
  createVehicle,
  getVehicles,
  getVehicle,
  deleteVehicle,
  updateVehicle
}