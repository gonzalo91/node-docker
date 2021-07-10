const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT, SESSION_SECRET } = require('./config/config');
const postRouter = require('./routes/postRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();

let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT,
})

app.enable("trust proxy")

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie:{
        saveUninitialized: false,
        resave: false,
        secure: false,
        maxAge: 3000000,
        httpOnly: true,
    }    
  })
)

const port = process.env.PORT || 3000;

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose.connect(mongoURL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true, 
})
.then(() =>{
    console.log('Succesfully connected to the DB')
}, err => {
    console.error('Failed while trying to connected to the DB', err)
})


app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h2>Hello world !</h2>')
})

app.use("/api/posts", postRouter)
app.use("/api/auth", userRouter)

app.listen(port, ()=>{
    console.log('listening on port: ' + port)
})
