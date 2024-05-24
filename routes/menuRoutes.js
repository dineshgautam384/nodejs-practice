const express = require('express')
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.post('/', async(req, res)=>{
    try {
        const menudata = req.body;

        const newMenuItem = new MenuItem(menudata);

        const resMenu = await newMenuItem.save();
        console.log("New Menu Data saved");
        res.status(200).json(resMenu)

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internaml server Error'})
    }
})

router.get('/', async(req, res)=>{
    try {
        const data = await MenuItem.find();
        console.log("menu data fetched");
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/:tasteType', async(req, res)=>{
    try {
        const tasteType = req.params.tasteType;
        if( tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour' ){
            const respose = await MenuItem.find({taste: tasteType});
            console.log("Taste Response fetched");
            res.status(200).json(respose)
        }else{
            res.status(404).json({error: "Invali taste Type"});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({err: 'Internal server error'})
        
    }
} )

router.put('/:id', async(req, res)=>{
    try {
         const MenuItemId = req.params.id;
         const updatedMenuData = req.body;

         const response = await MenuItem.findByIdAndUpdate(MenuItemId, updatedMenuData, {
              new: true,  //return the updated document
              runValidators: true  //run mongoose validation
         });

         if(!response){
              console.log('Menu Item not found');
              return res.status(404).json({error: 'Menu Item not Found'})
         }

         console.log('Menu data Updated');
         res.status(200).json(response)
    } catch (err) {
         console.log(err);
         res.status(500).json({error: 'Internal Server Error'})
         
    }
})

router.delete('/:id', async(req, res)=>{
    try {
         const menuItemId = req.params.id;

         const deletedMenuItem = await MenuItem.findByIdAndDelete(menuItemId);

         if(!deletedMenuItem){
              return res.status(404).json({error: 'Menu item not found'})
         }

         res.status(200).json({message: 'Menu item deleted Successfully'})
    } catch (error) {
         console.error('Error deleting Menu Item: ', error);
         res.status(500).json({error: 'Internal Server error'})
    }
})

module.exports = router;