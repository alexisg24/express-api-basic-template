const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usersPath = '/api/users';
        //Middlewares
        this.middlewares()
        //App routers
        this.routes();
    }
    middlewares(){
        //cors
        this.app.use(cors())

        //Body read and parser
        this.app.use(express.json())

        //Dirname
        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use(this.usersPath, require('../routes/user.routes'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server started in: http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;