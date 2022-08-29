const express = require('express')
const BlockController = require('../controllers/BlockController')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')

const CurdController = require('../controllers/CurdController')
const ContactController = require('../controllers/admin/ContactController')
const UserController = require('../controllers/user/UserController')
const auth = require('../middleware/auth')
const router = express.Router()    // METHOD CREATE 

//about middleware
// const aboutmiddleware = require('../middleware/aboutmiddleware')
//image middleware
const image_middleware = require('../middleware/image_middleware')

// router.get('/',FrontController.home)   // ROUTE CREATE

// BLOCK CONTROLLER ROUTE
router.get('/',BlockController.home)   
// router.get('/about',aboutmiddleware, BlockController.about)
router.get('/about',BlockController.about)    
router.get('/contact',BlockController.contact) 
router.get('/login',BlockController.login)    
router.get('/blog',BlockController.blog) 
router.get('/detail/:id',BlockController.detail)
router.get('/detail/display',BlockController.DisplayCategory) 

// ADMIN CONTROLLER ROUTE
router.get('/admin/dashboard',auth,AdminController.dashboard)

//admin BlogController
router.get('/admin/createblog',auth,BlogController.createblog)
router.post('/bloginsert',image_middleware,BlogController.bloginsert)
router.get('/admin/displayblog',auth,BlogController.displayblog)
router.get('/admin/viewblog/:id',auth,BlogController.viewblog)
router.get('/admin/editblog/:id',auth,BlogController.editblog)
router.post('/admin/blogupdate/:id',auth,image_middleware,BlogController.Updateblog)
router.get('/admin/deleteblog/:id',auth,BlogController.deleteblog)


//admin CategoryController
router.get('/admin/createcategory',auth,CategoryController.createcategory)
router.get('/admin/categorydisplay',auth,CategoryController.categorydisplay)
router.post('/admin/categoryinsert',CategoryController.categoryinsert)
router.get('/admin/viewcategory/:id',auth,CategoryController.viewcategory)
router.get('/admin/editcategory/:id',auth,CategoryController.editcategory)
router.post('/admin/categoryupdate/:id',auth,CategoryController.categoryupdate)
router.get('/admin/deletecategory/:id',auth,CategoryController.deletecategory)

//admin ContactController
router.post('/admin/contactinsert',auth,ContactController.contactinsert)
router.get('/admin/contactdisplay',auth,ContactController.contactdisplay)
router.get('/admin/viewcontact/:id',auth,ContactController.viewcontact)
router.get('/admin/editcontact/:id',auth,ContactController.editcontact)
router.post('/admin/contactupdate/:id',auth,ContactController.contactupdate)
router.get('/admin/deletecontact/:id',auth,ContactController.deletecontact)

// router.get('/insertdata',BlogController.InsertData)


// router.get('/about', (req,res) =>{
//     res.send('ABOUT PAGE')
// })


//CurdController
router.get('/curd/create',CurdController.Createform)
router.post('/curd/insert',CurdController.InsertData)
router.get('/curd/display',CurdController.displaydata)
router.get('/curd/view/:id',CurdController.curdview)
router.get('/curd/edit/:id',CurdController.editcurd)
router.post('/curd/update/:id',CurdController.updatecurd)
router.get('/curd/delete/:id',CurdController.deletecurd)

// usercontroller
router.get('/register',UserController.register)
router.post('/registerinsert',UserController.registerinsert)
router.post('/verifylogin',UserController.verifylogin)
router.get('/logout',UserController.logout)

module.exports = router;