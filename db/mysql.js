const mysql = require('mysql')

let db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'weather'
})

db.connect((err)=> {
	if (err) {
		throw(err)
	} else {
		console.log('db weather connected')
	}
})

module.exports = {
	db : db
}