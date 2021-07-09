const Post = require("../models/posts");

exports.getAllPosts = async (req, res, next) => {

    try{
        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data:{
                posts
            }
        })
    }catch(e){
        res.status(500).json({
                status: "fail"
        })
    }

}

exports.storePost = async (req, res, next) => {    

    try{
        const post = await Post.create(req.body)

        res.status(201).json({
            status: 'success',
            post
        })

    }catch(e){
        res.status(407).json({
            status: 'failed'
        })
    }

}