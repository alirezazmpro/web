

const mongoStore=require('connect-mongo');


module.exports={
  secret:process.env.SESSION_SECRETKEY,
  resave:true,
  saveUninitialized:true,
  cookie:{maxAge:1000*60*60*5},
  store: mongoStore.create({
    mongoUrl:process.env.DATABASE_URL
  })
}