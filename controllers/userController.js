var user_doc = require('../models/User');
var booking_doc=require('../models/bookings');
module.exports.home_guest = (req, res) => {
    res.render('home-guest');
};


module.exports.save_details = (req, res) => {

    //console.log(req);

    const { customer_id, fullname, email, phone } = req.body;

    const newUser = new user_doc({

        customer_id: customer_id,
        fullname: fullname,
        email: email,
        phone: phone,
    });

    newUser.save().then(
        result => {
          //  console.log(newUser);
            res.render('home-guest');
        }
    )
}

module.exports.view_details = (req, res) => {
 
   user_doc.find().then(result=>{
   // console.log(result);
   res.render('view-details',{details:result});

   });
  
}


module.exports.update_details = (req, res) => {
 
    user_doc.find().then(result=>{
    // console.log(result);
    res.render('update-details',{details:result});
 
    }).catch(err=>console.log(err))
   
    
 
 }

 module.exports.update_customer = async (req, res) => {
 
     // console.log(req);
    try{
          const customer=req.body;
         const id = req.body._id;

        
        const result= await user_doc.findByIdAndUpdate({_id:id},{
          $set:{
            customer_id: customer.customer_id,
            fullname: customer.name,
            email: customer.email,
            phone: customer.phone,
          }      
          },{
            new:true,
            useFindAndModify:false
          })
           
        
          
          res.render('home-guest');
        // console.log(result);
    }
    catch(err){
     console.log(err);
    }
 
 }


 
module.exports.delete_details = (req, res) => {
 
   user_doc.find().then(result=>{
    //console.log(result);
    res.render('delete-details',{details:result});
 
    }).catch(err=>console.log(err))
   
    
 
 }

 module.exports.delete_customer = (req, res) => {
 
    user_doc.deleteOne({_id:req.body._id}).then( result=>{  res.render('home-guest');}
      
    ).catch(err=>{
        console.log(err);
    })

  }

 


  
module.exports.book_order = (req, res) => {

   
    // user_doc.findOne({email: "amitdubey9792@gmail.com"}).then(function(result){
    //     if(result !== null)
    //      console.log("detected");
    //     else
    //      console.log("Not found")})
     
     

    //console.log(req);
    const createdtime =new Date;
    const { location, drone, email, bookingdate } = req.body;
    
    const newbook = new booking_doc({

    shotlocation_id: location,
    drone_shot_id: drone,
    email:email,
    bookingdate:bookingdate,
    created_time:createdtime
    
    });

    newbook.save().then(
        result => {
          //  console.log(newUser);
            res.render('home-guest');
        }
    )
}



module.exports.view_bookings = (req, res) => {
     
   // console.log(5);
    booking_doc.find().then(result=>{
      console.log(result);
    res.render('view-bookings',{details:result});
    });
    

 }
 

 module.exports.update_bookings = (req, res) => {
 
    booking_doc.find().then(result=>{
    // console.log(result);
    res.render('update-bookings',{details:result});
 
    }).catch(err=>console.log(err))
   
    
 
 }


 module.exports.update_order = async (req, res) => {
 
    // console.log(req);
   try{
         const booking=req.body;
        const id = req.body._id;

        const createdtimed =new Date;
       const result= await booking_doc.findByIdAndUpdate({_id:id},{
         $set:{
            shotlocation_id: booking.location,
            drone_shot_id: booking.drone,
            email:booking.email,
            bookingdate:booking.date,
            created_time:createdtimed
         }      
         },{
           new:true,
           useFindAndModify:false
         })
          
       
         
         res.render('home-guest');
       // console.log(result);
   }
   catch(err){
    console.log(err);
   }

}

module.exports.delete_bookings = (req, res) => {
 
    booking_doc.find().then(result=>{
     //console.log(result);
     res.render('delete-bookings',{details:result});
  
     }).catch(err=>console.log(err))
    
     
  
  }

  module.exports.delete_orders = (req, res) => {
 
    booking_doc.deleteOne({_id:req.body._id}).then( result=>{  res.render('home-guest');}
      
    ).catch(err=>{
        console.log(err);
    })

  }


 