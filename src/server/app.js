const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb",
    port:"3307",
});

connection.connect((err) => {
    if(err) {
        console.error('Error on database ', err);
        return;
    }
    console.log('Connected to the database');
});

app.post('/SignUp', (req,res) => {

    const { user_id, email , password} = req.body; //değerleri alır

    const query = "INSERT INTO user (user_id, email, password) VALUE (?,?,?)"; //kullanıcı kaydı oluşturur.
    
    connection.query(query, [user_id, email, password], (err,result) => { //veritabanına gönderir.

        if(err){
            console.error("Error on database ", err);
            res.status(500).send({error: "Error when registering"});
            return;
        }
        res.status(200).send({message: "Registration is successful!"});

    })
    
});
//SIGN IN 

app.post('/login', (req,res) => {

    const {email, password} = req.body;

    const query = "SELECT * FROM user WHERE email=? AND password=?";
    connection.query(query, [email, password], async (err, result) => {
        if(err){
            console.error("Error while controlling the information. ", err);
            res.status(500).send({error: 'Error while controlling the information'});
            return;
        }
        if(result.length > 0) {
          const row = result[0];  // İlk satırı alın
          const userId = row.user_id; // user_id değerini alın

          res.status(200).send({user_id: userId, email: email, password: password});
        }
        
    })
});

//PERSONAL INFO 

app.post('/personalinfo', (req, res) => {

  
    const {
      user_id,
      email,
      phone,
      name,
      lastName,
      bDate,
      gender,
      nationality,
      secondNationality,
      IDNumber,
      disability,
      
    } = req.body;
    
    
    const controlQuery = "SELECT * FROM personal_info WHERE user_id = ?";
    connection.query(controlQuery, [user_id], (err, results) => {

      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred in the database connection. ");
      }
  
      if (results.length > 0) {
        return res.status(400).send("A record with the same ID number already exists.");
      }else{

        const insertQuery = "INSERT INTO personal_info (user_id, email, phone, name, lastName, bDate, gender, nationality, secondNationality, IDNumber , disability) VALUE (?,?,?,?,?,?,?,?,?,?,?)";
          connection.query(insertQuery, [user_id, email, phone, name, lastName, bDate, gender, nationality, secondNationality, IDNumber, disability ], (err,result) => {

            if(err){
              res.status(500).send({error: "Veritabanina ekleme yapilirken hata olustu."});
              return;
            }

            res.status(200).send({message: "Registration is successful!"})

      
          });
      }
    });

  });

  //EDUCATION INFO

app.post('/form/educationinfo', (req, res) => {
    const {
      university,
      department,
      graduation,
      gDate,
      GPA,
      
    } = req.body;
  
    const controlQuery = "SELECT * FROM education_info WHERE user_id = ?";
    connection.query(controlQuery, [user_id], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred in the database connection.");
      }
  
      if (results.length > 0) {
        return res.status(400).send("A record with the same ID number already exists.");
      }
  
      const insertQuery =
        "INSERT INTO education_info (edu_id,user_id,university,department,graduation,gDate,GPA VALUES ( ?,?,?, ?, ?, ?, ?)";
      connection.query(
        insertQuery,
        [
          university,
          department,
          graduation,
          gDate,
          GPA,
          
        ],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).send("An error occurred in the database connection.");
          }
          
          console.log(results);
          return res.status(200).send("The application has been successfully received.");
        }
      );
    });
  });

// CONTACT INFO 


app.post('/form/contactinfo', (req, res) => {
    const {
      country,
      city,
      district,
      neighborhood,
      street,
      zipCode,
      
    } = req.body;
  
    const controlQuery = "SELECT * FROM contact_info WHERE user_id = ?";
    connection.query(controlQuery, [user_id], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred in the database connection.");
      }
  
      if (results.length > 0) {
        return res.status(400).send("A record with the same ID number already exists.");
      }
  
      const insertQuery =
        "INSERT INTO education_info (contact_id,user_id,country,city,district,neighborhood,street,zipCode VALUES ( ?,?,?,?, ?, ?, ?, ?)";
      connection.query(
        insertQuery,
        [
          country,
          city,
          district,
          neighborhood,
          street,
          zipCode,
        ],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).send("An error occurred in the database connection.");
          }
          
          console.log(results);
          return res.status(200).send("The application has been successfully received.");
        }
      );
    });
  });


// DOCUMENT INFO 


app.post('/form/documenttinfo', (req, res) => {
    const {
      CV_document,
      Letter_document,
      Passp_document,
      Residence_document,
      Diploma_document,
      Certificate_document,  
    } = req.body;
  
    const controlQuery = "SELECT * FROM document_info WHERE user_id = ?";
    connection.query(controlQuery, [user_id], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred in the database connection.");
      }
  
      if (results.length > 0) {
        return res.status(400).send("A record with the same ID number already exists.");
      }
  
      const insertQuery =
        "INSERT INTO education_info (contact_id,user_id,country,city,district,neighborhood,street,zipCode VALUES ( ?,?,?,?, ?, ?, ?, ?)";
      connection.query(
        insertQuery,
        [
          CV_document,
          Letter_document,
          Passp_document,
          Residence_document,
          Diploma_document,
          Certificate_document,
        ],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).send("An error occurred in the database connection.");
          }
          
          console.log(results);
          return res.status(200).send("The application has been successfully received.");
        }
      );
    });
  });


// app.post('/signout', (req,res) => {

//     const {id} = req.body;

//     const query = "UPDATE user SET isLogin = 0 WHERE id_num=?";

//     connection.query(query, [id], (err,result) => {
//         if(err){
//             console.error("Error at isLogin update.", err);
//             res.status(500).send({error: 'Error at isLogin update.'});
//             return;
//         }
        
//         res.status(200).send({message: 'User logout is updated.'});
//     });

// });



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT} `);
});
