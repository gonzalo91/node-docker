const User = require('../models/user')
// const bcrypt = require('bcryptjs')

const bcrypt = require('bcryptjs')

exports.signUp = async ( req, res) => {
    const {username, password} = req.body;

    
    try {
        
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({
            username,
            password: hashedPassword,
        })        

        res.status(201).json({
            status: 'success',
            data: {
                user : newUser
            }
        })
    } catch (error) {
        res.status(427).json({
            status: 'failed',
            'error': error.message
        })
    }

}

exports.login = async ( req, res) => {
    const {username, password} = req.body;

    
    try {
        const user = await User.findOne({ username })

        if(!user){
            return res.status(404).json({
                status: 'success',
                message: "user not found"                 
            
            })
        }
        
        const isCorrect = await bcrypt.compare(password, user.password);

        if(!isCorrect)
            return res.status(404).json({
                status: 'success',
                message: "user not found"                 
            
            })

        res.status(200).json({
            status: 'success',
        })

        
    } catch (error) {
        res.status(427).json({
            status: 'failed',
            'error': error.message
        })
    }

}