export class SocketCollection {
	private list: Array<any>;

	constructor() {
		this.list = [];
	}

	public add(socket: any) {
		this.list.push(socket);

		var self = this;
		socket.on('disconnect', function () {
			self.remove(socket);
		});
	}

	public remove(socket: any) {
		var i = this.list.indexOf(socket);
		if (i != -1) {
			this.list.splice(i, 1);
		}
	}

	public emit(name: string, data: Object, except: any) {
		var i = this.list.length;
		while (i--) {
			if (this.list[i] != except) {
				this.list[i].emit(name, data)
			}
		}
	}
}