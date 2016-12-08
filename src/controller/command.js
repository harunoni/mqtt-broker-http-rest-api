import mongoose from 'mongoose'
import { Router } from 'express'
import Command from '../model/command'
import http from 'http'

export default({config,db}) => {


    let api = Router()

    api.use()



    //CRUD 
    
    // '/v1/command/add'send command to device - Create
    api.post('/add', (req, res) => {
        let newCommand = new Command()
        newCommand.n = req.body.n
        console.log(req.body)
        newCommand.d = req.body.d
        newCommand.c = req.body.c

        // Send request to HTTP server

        // Save command to mongodb
        newCommand.save(err => {
            if (err) {
                req.send(err)
            }
            res.json({message: 'Command saved sucessfully'})
        })
    })

    return api
}