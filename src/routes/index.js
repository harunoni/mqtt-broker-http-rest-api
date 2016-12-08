import express from 'express'
import config from '../config'
import middleware from '../middleware'
import initializedDb from '../db'
import command from '../controller/command'

let router = express()

// connect to Db
initializedDb(db => {
    // internal middleware
    router.use(middleware({config,db}))
    // api routes v1 (/v1)
    router.use('/command', command({config, db}))

})

export default router