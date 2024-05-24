const express = require('express');
const app = express();

const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
// const Person = require('./models/Person')
// const MenuItem = require('./models/MenuItem');

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello world");
});

// app.post('/person', async(req, res)=>{
//    try {
//     const data = req.body;
    
//     const newPerson = new Person(data)
    
//     //below one is very haard that is why we pass data in Person(data)
//     // newPerson.name = data.name;
//     // newPerson.age = data.age;
//     // newPerson.mobile = data.mobile;
//     // newPerson.email = data.email;
//     // newPerson.salary = data.salary;

//     const response = await newPerson.save()
//     console.log("Data saved");
//     res.status(200).json(response)
//    } catch (error) {
//         console.log(error);
//         res.status(500).json({error: 'Internaml server Error'})
//    }
// })

// app.get('/person', async(req, res)=>{
//     try {
//         const data = await Person.find();
//         console.log("Data fetched ");
//         res.status(200).json(data)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: 'Internaml server Error'})
//     }
// })

// app.post('/menu', async(req, res)=>{
//     try {
//         const menudata = req.body;

//         const newMenuItem = new MenuItem(menudata);

//         const resMenu = await newMenuItem.save();
//         console.log("New Menu Data saved");
//         res.status(200).json(resMenu)

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: 'Internaml server Error'})
//     }
// })

// app.get('/menu', async(req, res)=>{
//     try {
//         const data = await MenuItem.find();
//         console.log("menu data fetched");
//         res.status(200).json(data)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({error: 'Internal Server Error'})
//     }
// })
 

// app.get('/person/:workType', async(req, res)=>{
//     try {
//         const workType = req.params.workType;
//     if( workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
//         const response = await Person.find({work: workType});
//         console.log('responsed fetched');
//         res.status(200).json(response);
//     }else{
//         res.status(404).json({error: 'Invalid Work Type'})
//     }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({err: 'Internal Server Error'})
//     }
// })


// app.get('/books', (req, res)=>{
//     res.send("Showing all books");
// });

// app.get('/course', (req, res)=>{
//     var course1 = {
//         name: "Javascript",
//         price: 250,
//     }
//     res.send(course1);
// });


// app.post('/items', (req, res)=>{
//     res.send("data seved");
    
// })

//Import the router files
const personRoutes = require('./routes/personRoutes');
const  menuRoutes = require('./routes/menuRoutes')

//Use the routes
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

//Server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log("Listening on Port 3000")
});

