const express=require('express');
const app=express();
const http=require('http');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const  cookieParser=require('cookie-parser');
const session=require('express-session');
const flash=require('connect-flash');
module.exports=class Application {

  constructor(){
    this.setExpress();
    this.setMongoose();
    this.setConfig();
    this.setRoutes();
  }
  setExpress(){
    const server=http.createServer(app);
    server.listen(config.port,()=>console.log(`Server Running at port ${config.port}`));
  }

  setMongoose(){
    mongoose.set('strictQuery',false);
    mongoose.connect(config.database.url)
    .then(()=>console.log('Connected to db!'))
    .catch(()=>console.log('Error Connected to db!'));
  }
  setConfig(){

    app.use(express.static(config.layout.public_dir));
    app.set('view engine', config.layout.view_engine);
    app.set('views' , config.layout.view_dir);
    app.use(config.layout.ejs.expressLayouts);
    app.set("layout extractScripts", config.layout.ejs.extractScripts);
    app.set("layout extractStyles", config.layout.ejs.extractStyles);
    app.set("layout" , config.layout.ejs.master);


    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(cookieParser(config.cookie_secretkey));
    app.use(session({...config.session}));
    app.use(flash());
  }
  setRoutes(){
    app.use(require('app/routes/api'));
    app.use(require('app/routes/web'));

  }
}