import socketIO from 'socket.io-client'
import sailsIO from 'sails.io.js'
import Promise from 'bluebird'


class Socket {
  constructor() {
    this.io = sailsIO(socketIO)

    // io.sails.url = 'http://ottto.local'
    // io.sails.url = 'http://localhost:1337'
    this.io.sails.url = 'http://192.168.1.2:1337'
    this.io.sails.reconnection = true
    this.io.sails.useCORSRouteToGetCookie = false
  }

  promisified(method) {
    return (url, data) => {
      return new Promise( (resolve, reject) => {
        if(data === undefined) {
          this.io.socket[method](url, resolve, reject)
        } else {
          this.io.socket[method](url, data, resolve, reject)
        }
      })
    }
  }

  get(url) {
    return this.promisified('get')(url)
  }

  put(url, data) {
    return this.promisified('put')(url, data)
  }

  post(url, data) {
    return this.promisified('post')(url, data)
  }

  delete(url) {
    return this.promisified('delete')(url)
  }

  on(name, callback) {
    this.io.socket.on(name, callback)
  }

  off(name, callback) {
    this.io.socket.off(name, callback)
  }

}

export default new Socket()
