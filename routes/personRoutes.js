const express = require('express')
const router = express.Router();
const Person = require('../models/Person')

router.post('/', async(req, res)=>{
    try {
     const data = req.body;
     
     const newPerson = new Person(data)
     
     const response = await newPerson.save()
     console.log("Data saved");
     res.status(200).json(response)
    } catch (error) {
         console.log(error);
         res.status(500).json({error: 'Internaml server Error'})
    }
 })

 router.get('/', async(req, res)=>{
     try {
         const data = await Person.find();
         console.log("Data fetched ");
         res.status(200).json(data)
     } catch (error) {
         console.log(error);
         res.status(500).json({error: 'Internaml server Error'})
     }
 })

 router.get('/:workType', async(req, res)=>{
     try {
         const workType = req.params.workType;
     if( workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
         const response = await Person.find({work: workType});
         console.log('responsed fetched');
         res.status(200).json(response);
     }else{
         res.status(404).json({error: 'Invalid Work Type'})
     }
     } catch (err) {
         console.log(err);
         res.status(500).json({err: 'Internal Server Error'})
     }
 });

 router.put('/:id', async(req, res)=>{
     try {
          const personId = req.params.id;
          const updatedPersonData = req.body;

          const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
               new: true,  //return the updated document
               runValidators: true  //run mongoose validation
          });

          if(!response){
               console.log('Person not found');
               return res.status(404).json({error: 'Person not Found'})
          }

          console.log('data Updated');
          res.status(200).json(response)
     } catch (err) {
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'})
          
     }
 })
 
 router.delete('/:id', async(req, res)=>{
     try {
          const personId = req.params.id;4

          const deletedPerson = await Person.findByIdAndDelete(personId);

          if(!deletedPerson){
               return res.status(404).json({error: 'person not found'})
          }

          res.json({message: 'Person deleted Successfully'})
     } catch (error) {
          console.error('Error deleting Person: ', error);
          res.status(500).json({error: 'Internal Server error'})
     }
 })

 module.exports = router;