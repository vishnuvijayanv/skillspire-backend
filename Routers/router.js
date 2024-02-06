//import express module

const express = require('express')

const userController = require('../controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
const jobController = require ('../controllers/jobController')

const applyController = require('../controllers/applyController')
//create an object for router class inside express module

const router = new express.Router()


//set up path to resolve
//register

router.post('/user/register',userController.register)

//login

router.post('/user/login',userController.login)
//user profile update
router.put('/user/update/:userId',jwtMiddleware,multerConfig.single('profile'),userController.profileUpdate)

//add jobs

router.post('/jobs/addjobs',jwtMiddleware,multerConfig.single('image'),jobController.addJobs)

//view jobs
router.get('/jobs/myjobs',jwtMiddleware,jobController.getAllProjects)


//employer update

router.put('/user/empupdate/:userId',jwtMiddleware,multerConfig.single('profile'),userController.empUpdate)

//job update

router.put('/jobs/jobupdate/:id',jwtMiddleware,multerConfig.single('image'),jobController.updateJob)

//delete job

router.delete('/jobs/remove/:id',jwtMiddleware,jobController.deleteJob)


router.get('/jobs/alljobs',jobController.getAllJobs)


//get a single job details

router.get('/jobs/details/:id',jwtMiddleware,jobController.getAJob)


//add applied jobs

router.post('/applications/add',jwtMiddleware,applyController.appliedJobs)

//get all request


router.get('/applications/requests',jwtMiddleware,applyController.getAllRequest)

//get user specific request
router.get('/applications/request',jwtMiddleware,applyController.getUserRequest)

//status update 
router.put('/jobs/jobstatusupdate/:id',jwtMiddleware,applyController.statusUpdate)

//emplyer details

router.get('/employer/details/:id',jwtMiddleware,userController.empData)

//export router 

module.exports = router


