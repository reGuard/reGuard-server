
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./util/mongo')


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/tracker', async (req, res) => {
  try{
    const _ = await db.addParms(JSON.parse(Object.keys(req.body)[0]))
      
    res.send({
      code: 1,
      data: {
        id: _
      },
      msg: 'success'
    })
  }catch(e)
  {
    res.send({
      code: 0,
      data: {},
      msg: e
    })
  }
})

app.get('/tracker', async (req, res) => {
  if(req.query.uuid === 'admin') {
    req.query = {};
  }
  try{
    const _ =  await db.getParms(req.query)
    res.send({
      code: 1,
      data: _,
      msg: 'success'
    })
  }catch(e)
  {
    res.send({
      code: 0,
      data: [],
      msg: e
    })
  }
  
})

app.delete('/tracker', async (req, res) => {
  try{
    const _ = await db.removeData(req.body)
    res.send({
      code: 1,
      data: {
        deleteCount: _
      },
      msg: 'success'
    })
  }catch(e)
  {
    res.send({
      code: 0,
      data: {},
      msg: e
    })
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})