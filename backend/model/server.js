import express from 'express';
import cors from 'cors';
import conectarDB from '../config/config.js';
import ciclistasRouter from '../routes/ciclistas.routes.js';


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //Paths
        this.ciclistaPath = "/api/ciclistas";
        this.conectar();
        this.middlewares();
        this.routes();
    }

    async conectar(){
        await conectarDB();
    }   

    middlewares(){
        // Public direction
        this.app.use(express.static('public'));
        // Cors
        this.app.use(cors());
        // Express json
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.ciclistaPath, ciclistasRouter);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNING ON PORT ${this.port}`);
        });
    }
}

export default Server;