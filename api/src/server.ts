import express from 'express';

export default function(){
    const app = express()

    app.get("/resultados/:equipo1/:equipo2",(req, res)=>{
        res.send(`resultados del ${req.params.equipo1} vs ${req.params.equipo2}`);
    });
    return app
}