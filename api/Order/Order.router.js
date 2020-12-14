
const { Buy} = require ("./Order.controller");
const router4 = require ("express").Router();

router4.post("/Buy", Buy);
///:product_label
//routers
module.exports = router4; 