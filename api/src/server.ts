import { match } from 'assert';
import express from 'express';
import { getClub, getResultado } from './database';

export default function(){
    const app = express()

    app.get("/resultados/:equipo1/:equipo2",(req, res)=>{
        try{
            let team1 = getClub(req.params.equipo1);
            let team2 = getClub(req.params.equipo2);
            res.json({
                team1, team2
            })
        } catch(e){
            res.send(400).json({
                error:e
            })
        }


    });
    return app
}