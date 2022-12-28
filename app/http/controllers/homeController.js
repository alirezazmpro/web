const controller = require("./controller");


module.exports=new class homeController extends controller {

  index(req,res){
    res.render('home/index');
  }
}