const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

const selectAll = 'SELECT * from skateparks';

const connection = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'skatepark-database'
});

connection.connect(err => {
	if(err){
		return err;
	}
});

app.use(cors());

app.get('/', (req, res) => {
	res.send('Go to /parks to see skateparks')
});

app.get('/parks', (req, res) => {
	connection.query(selectAll, (err, results) => {
		if(err) {
			return res.send(err)
		} else {
			return res.json({
				data: results
			})
		}
	});
});

//For testing purposes:
// app.get('/parks/add', (req, res) => {
// 	const { name, address } = req.query;
// 	const insertPark = `INSERT INTO skateparks (name, address) VALUES ('${name}', '${address}')`;
// 	connection.query(insertPark, (err, results) => {
// 		if(err){
// 			return res.send(err)
// 		}
// 		else {
// 			return res.send('Successfully added skatepark.')
// 		}
// 	});
// });

app.listen(port, host, () =>
console.log(`${host} is listening at port ${port}`)
);
