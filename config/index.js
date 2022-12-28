
const database=require('./database');
const layout=require('./layout');
const session=require('./session');

module.exports= {

  cookie_secretkey:process.env.COOKIE_SECRETKEY,
  port:process.env.PORT,
  database,
  layout,
  session
}