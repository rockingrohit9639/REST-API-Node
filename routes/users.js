var express = require('express');
var router = express.Router();

var users; // will store all users

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// delete order
router.route('/delete/:id').delete((req,res) => {
  users.foreach((user,idx) =>{ // loop over all orders and find order with given id
    if(user.id == req.params.id){
      users.remove(order[idx]);
      res.json("Order deleted!")
    }
  });
})


module.exports = router;
