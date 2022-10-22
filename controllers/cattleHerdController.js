// DEPENDENCIES
const { Op } = require('sequelize')
const express = require ('express')
const cattleHerds = require('express').Router()
const cattleHerdList = require('../models/cattleHerds')
// const db = require('../sql_models/sql_index')
// const CattleHerd = require('../sql_models/sql_cattleHerd.js')
const methodOverride = require('method-override')


// MIDDLEWARE
cattleHerds.use(methodOverride('_method'))

// CATTLE HERDS INDEX PAGE
cattleHerds.get('/', async (req, res) => {
  res.render('./cattleHerds/herdList', { cattleHerdList })
})

// CREATE NEW CATTLE HERD
cattleHerds.post('/new', async (req, res) => {
  cattleHerdList.push(req.body)
  res.redirect('./')
})

// NEW CATTLE HERD FORM PAGE
cattleHerds.get('/new', (req, res) => {
  res.render('./cattleHerds/new')
})

// CATTLE HERD SHOW PAGE
cattleHerds.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  console.log(id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if(!cattleHerdList[id]) {
      res.render('error404')
    }
    else {
      res.render('./cattleHerds/show', { cattleHerdList: cattleHerdList[id], id})
    }
})

// CATTLE HERD UPDATE PAGE
cattleHerds.put('/:id', (req, res) => {
  res.send('PUT ./cattleHerds/herdList/:id stub')
})

// CATTLE HERDS DELETE PAGE
cattleHerds.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if(!cattleHerdList[id]) {
    res.render('error404')
  }
  else {
    cattleHerdList.splice(id, 1)
    res.redirect('./')
  }
})

// CATTLE HERD UPDATE FORM PAGE
cattleHerds.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if(!cattleHerdList[id]) {
    res.render('error404')
  }
  else {
    res.render('./cattleHerds/herdList/:id/edit', { cattleHerdList: cattleHerdList[id]})
  }

})

// EXPORT
module.exports = cattleHerds;











  // try {
  //   const foundCattleHerds = await db.CattleHerd.findAll()
  //   res.status(200).json(foundCattleHerds)
  //   // res.render('./cattleHerds/herdList')
  // }
  // catch (error) {
  //   res.status(500).json(error)
  // }




// CREATE A HERD
// cattleHerds.get('/new', async (req, res) => {
//     res.render('./cattleHerds/new')
    // try {
    //     const newHerd = await db.CattleHerd.create(req.body)
    //     res.status(200).json({
    //         message: 'Successfully created a new herd.',
    //         data: newHerd
    //     })
    // } catch(err) {
    //     res.status(500).json(err)
    // }
// })




// db.CattleHerd.find(`SELECT * FROM public."cattleHerds"`)
// .then((cattleHerd) => {
//   res.render('cattleHerds/herdList', { cattleHerd })
// })
// .catch(err => {
//   console.log(err)
//   res.render('error404')
// })
// })


// FIND ONE HERD (SHOW ROUTE)
// herds.get('/:name', async (req, res) => {
//     try {
//         const foundHerd = await Herd.findOne({
            // where: { name: req.params.name },
            // include: [
            //     {
            //         model: MeetGreet,
            //         as: "meet_greets",
            //         include: { 
            //             model: Event, 
            //             as: "event",
            //             where: { name: {[Op.like]: `${req.query.event ? req.query.event : ''}%`}}
            //     }   
            //     },
            //     {
            //         model: SetTime,
            //         as: "set_times",
            //         include: { 
            //             model: Event, 
            //             as: "event",
            //             where: { name: {[Op.like]: `${req.query.event ? req.query.event : ''}%`}}
            //     }   
            //     }
            // ]
//         })
//         res.status(200).json(foundHerd)
//     } 
//     catch (error) {
//         res.status(500).json(error)
//     }
// })



// UPDATE A HERD
// herds.put('/:id', async (req, res) => {
//     try {
//         const updatedHerds = await Herd.update(req.body,{
            // where: {
            // band_id: req.params.id
            // }
//         })
//         res.status(200).json({
//             message: `Successfully updated ${updatedHerds} herd(s).`
//         })
//     } 
//     catch(err) {
//         res.status(500).json(err)
//     }
// })

// DELETE A BAND
// herds.delete('/:id', async (req, res) => {
//     try {
//         const deletedHerds = await Herd.destroy({
            // where: {
            //     band_id: req.params.id
            // }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deletedHerds} Herd(s).`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })