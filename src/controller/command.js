import mongoose from 'mongoose'
import { Router } from 'express'
import Command from '../model/command'

export default({config,db}) => {
    let api = Router()

    //CRUD 
    
    // '/v1/command/add'send command to device - Create
    api.post('add', (req, res) => {
        let newCommand = new Command()
        
    })
}