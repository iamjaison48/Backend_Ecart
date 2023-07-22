
//import wishlist collection
const wishlists=require('../model/wishlistSchema')





//logic for wishlist

//add  products to wishlist

exports.addtowishlist=async(req,res)=>{
  //get specific  product details from the request

  // req.body={
  //   "id":"123",
  //   "" : "",
  //   "" : ""

  // }

  // js destructuring
  const {id,title,price,image} = req.body

  //logic for wishlist

  try{
const item = await wishlists.findOne({id})
if(item){
  res.status(401).json("item already in wishlist")
}
else{
  //product is added to wishlist

  const newProduct = await wishlists({id,title,price,image})
  //to store in db
  await newProduct.save()
  res.status(200).json('item added to wishlist')
}
  }
  catch(error){
    res.status(404).json(error)
  }
}


//get wishlist prod from db


exports.getwishlist=async(req,res)=>{
  try{
//logic
// get all pro fro wishlists

const allwishlist = await wishlists.find()
res.status(200).json(allwishlist)//res sendback to client

  }
catch(error){
res.status(404).json(error)
}
}



// delete wishlist products drom db

exports.deletewishlist = async(req,res)=>{

  const{id}= req.params
  try{
    //logic 

    //delete wish prod
    const removewishlist = await wishlists.deleteOne({id})
    if(removewishlist){
      //get all wishlist products after removing particular product
      const remainingwishlist = await wishlists.find()
      res.status(200).json(remainingwishlist)//response
    }
  }
  catch(error){
    res.status(404).json(error)//error response
  }
}
