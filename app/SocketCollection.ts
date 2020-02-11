export class SocketCollection {
	private list;

	constructor() {
		this.list = [];
	}

	public add(socket) {
		this.list.push(socket);

		var self = this;
		socket.on('disconnect', function () {
			self.remove(socket);
		});
	}

	public remove(socket) {
		var i = this.list.indexOf(socket);
		if (i != -1) {
			this.list.splice(i, 1);
		}
	}

	public emit(name, data, except) {
		var i = this.list.length;
		while (i--) {
			if (this.list[i] != except) {
				this.list[i].emit(name, data)
			}
		}
	}
}