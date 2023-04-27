const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');
const bodyParser=require("body-parser");



const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"password",
database:"btp_data",
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended
  :true}));

// connect to MySQL database
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ', err);
      return;
    }
    console.log('Connected to MySQL database...');
  });

  app.listen(8081,()=>{
    console.log("Availabe at 8081")
});


// use bodyParser to parse JSON data from POST requests
app.use(bodyParser.json());

// create POST endpoint to insert data into MySQL table
app.post('/post', (req, res) => {
  req.body.forEach(element => {
    const idcoal_mines=element.idcoal_mines
  const Temperature=element.Temperature;
  const Heartbeat=element.Heartbeat;
  const Humidity=element.Humidity;
  const Concentration=element.Concentration;
  const query = `INSERT INTO coal_mines (idcoal_mines, Temperature, Heartbeat, Humidity, Concentration) VALUES ('${idcoal_mines}', '${Temperature}','${Heartbeat}', '${Humidity}', '${Concentration}')`;
  db.query(query, (err, result) => {
    if (err) {
      return res.send(err)
    }
    
  });
  }); 
    
  console.log('Data inserted into MySQL table...');
  res.send('Data inserted into MySQL table...');
  
});


app.get('/api/insert',(req,res)=>{
    const sqlGet="SELECT * FROM coal_mines";
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    })
});

