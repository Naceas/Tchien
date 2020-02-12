import * as express from "express";
import { Router } from 'express';
import * as bodyParser from "body-parser";
import { SocketCollection } from './SocketCollection';

const app: express.Application = express();
const http = require('http').createServer(app);
const port: number = 8080;
const io = require('socket.io')(http);

const router: Router = express.Router();
app.use('/', router);

http.listen(port, () => {});

// -----------------------------------

router.get("/", (req, res) => {
	res.send('200 OK');
});

var collection = new SocketCollection();
io.on('connection', (socket: any) => {
	console.log('Connected');
	

	collection.add(socket);

	socket.on('message', (data: Object) => {	
		collection.emit('message', data, socket);
	});
});