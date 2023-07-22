//import cart collection
const carts=require('../model/cartSchema')

//add to cart 

exports.addtocart=async(req,res)=>{
  //get product details from request

const {id,title,price,image,quantity} = req.body

try{
  //check if product is already in cart then update the quantity and price
const product = await carts.findOne({id})
if(product){
  //if prduct is already in the cart, increment the quantity

  product.quantity+=1

  //update grand total

  product.grandTotal=product.price*product.quantity

  //save the changes into the db
  product.save()
  //send response back to the client
  res.status(200).json("item updated......")
}
else{
    //else product is not in the cart, add to cart

    const newProduct = new carts({
      id,title,price,image,quantity,grandTotal:price
    })


    //save new prodct
    await newProduct.save()

    //response send back to the client

    res.status(200).json("item added to the cart")
}

}
catch(error){
  res.status(401).json(error)

}
}

//get cart item

exports.getcart=async(req,res)=>{
  try{
const allcartitems = await carts.find()

//response
res.status(200).json(allcartitems)

  }

  catch(error){
    res.status(404).json(error)

  }
}

//cart delete

exports.delete = async(req,res)=>{
  //remove cart items
  //get product id from parameter

  const{id} = req.params
  try{
  const removecartitems = await carts.deleteOne({id})

  if(removecartitems.deletecount!=0){
    //get all cart items after removing  particular cart item
    const allcartitems = await carts.find()
    res.status(200).json(allcartitems)
  }
  }
  catch(error){
 res.status(401).json(error)
  }
}

//increment cart items

exports.incrementCartItems=async(req,res)=>{
// get prodcut id from request

const{id}=req.params
try{
//check if product is present in the cart
const product=await carts.findOne({id})
if(product){
//update the quantity at grand total
product.quantity+=1
product.grandTotal=product.quantity*product.price
//save changes to db

await product.save()
//updated details send back to the client
const allcartitems = await carts.find()

//response
res.status(200).json(allcartitems)
}
else{
  res.status(404).json("product not found")
}
}

catch(error){
  res.status(404).json(error)
}
}


//decrement cart items

exports.decrementCartItems=async(req,res)=>{
  //get product id from request
  const {id}=req.params
  try{
        //check if the product is present in the cart
        const product=await carts.findOne({id})
        if (product) {
          //update the quantity and grand total
          product.quantity-=1
        if (product.quantity ==0) {
          const removecartitems=await carts.deleteOne({id})
          const allcartItems=await carts.find()
          res.status(200).json(allcartItems)

          
        }
          else{
            product.grandTotal=product.quantity*product.price
            //save changes to the db
            await product.save()
            //upadate details sendback to the client
            const allcartItems=await carts.find()
            //response sendback to the client
            res.status(200).json(allcartItems)
          }
          
        }
        else{
          res.status(404).json("product not found")
        }
  }
  
  catch(error){
    res.status(400).json(error)
    }

  }