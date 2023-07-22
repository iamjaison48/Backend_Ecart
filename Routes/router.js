// To define rotes for the client request

// Import expres
const express = require('express');

//import productController
const productController = require('../Controllers/productController')

// import wishlist

const wishlistController =  require('../Controllers/wishlistController');

//import carController
// import cartcontroller 
const cartController = require('../Controllers/cartController')

//using express create an object for router class inorder to setup path
const router = new express.Router();

//resolve various client request 

//api call

//1 get all products
router.get('/products/allProducts',productController.getallproducts)

//2 view particular product details 

router.get('/products/viewProducts/:id',productController.viewproducts)

//3 add to  wishlist
router.post('/products/addtowishlist',wishlistController.addtowishlist)

//4 get wishlist details

router.get('/products/getwishlist',wishlistController.getwishlist)

//5delete
router.delete('/products/deletewishlist/:id',wishlistController.deletewishlist)

//6cart

router.post('/products/addtocart',cartController.addtocart)

//7get cart products

router.get('/products/getcart',cartController.getcart)

//delete cart 
router.delete('/products/deletecart/:id',cartController.delete)

//increment cart count

router.get('/products/increment/:id',cartController.incrementCartItems)

//decrement
router.get('/products/decrement/:id',cartController.decrementCartItems)


//export router
module.exports = router

