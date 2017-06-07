
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import {router} from './routes'
const app = new Koa()
const port: number = 8080
app.use(bodyParser())
app.use(router.routes())
app.listen(port, ()=> {
    console.log(`>>| Listen on ${port}`)
})
