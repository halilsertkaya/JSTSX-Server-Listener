import express,{Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';




export class Server{
    private app:any;

    constructor(){
        this.app = Express();
        this.configuration()
    }

    configuration(){
        this.app.set('port', 5000);
    }
    listen(){
       this.app.listen(this.app.get('port'), () => {
       console.log(`Server kuruldu. ${this.app.get('port')}`);
       })
    }

}