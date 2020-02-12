import * as express from "express";
import { Router } from 'express';
import { SocketCollection } from './SocketCollection';
import * as fs from 'fs';

const app: express.Application = express();
const http = require('http').createServer(app);
const port: number = 8080;
const io = require('socket.io')(http);

var cors = require('cors');
app.use(cors());

const router: Router = express.Router();
app.use('/', router);

http.listen(port, () => { });

// -----------------------------------

var collection = new SocketCollection();
io.on('connection', (socket: any) => {
	console.log('Connected');

	collection.add(socket);

	socket.on('message', (data: Object) => {
		// filter(data);

		collection.emit('message', data, socket);
	});
});

/**
 * Remove insults in a message
 * @param text 
 */
function filter(text: any) {
	var list = fs.readFileSync(__dirname + '/insults', 'utf8');

	// WORK IN PROGRESS
	// TODO

	// text.forEach((el: String) => {
	// });
}
