// logic to resolve






// import products coolection
const products = require('../model/productSchema')


const wishlists = require('../model/wishlistSchema')




//get all products
exports.getallproducts = async (req,res)=>{
  //logic
try{
//get all products from products collection in mongodb
  const allProducts = await products.find()
  res.status(200).json(allProducts) //response send back to the client
}
catch(err){
  res.status(401).json(err) //error sending back to thr client
}

}


//view particular product details

exports.viewproducts = async(req,res)=>{

  //logic
  //get particular pro id
  const id=req.params.id

  //get details of particular product
  try{
const product = await products.findOne({id})
if(product){
  res.status(200).json(product)
}
else{
  res.status(401).json("product not found")
}
  }
  catch(err){
    res.status(401).json(err)//error sending b
  }
}

