var express = require('express');
var router = express.Router();      //creates a new router object


var userController = require('./controllers/userController');




 router.get('/', userController.home_guest);
 router.post('/details',userController.save_details)
 router.get('/view-details',userController.view_details)
 router.get('/update-details',userController.update_details);
 router.post('/update-customer',userController.update_customer);
 router.get('/delete-details',userController.delete_details);
 router.post('/delete_details',userController.delete_customer);

 router.post('/bookings',userController.book_order);
 router.get('/view-bookings',userController.view_bookings);
 router.get('/update-bookings',userController.update_bookings);
 router.post('/update-order',userController.update_order);
 router.get('/delete-bookings',userController.delete_bookings);
 router.post('/delete_orders',userController.delete_orders);
 

module.exports = router;