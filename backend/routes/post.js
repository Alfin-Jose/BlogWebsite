const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt= require('bcrypt')
const post=require('../models/Post')
const Comment=require('../models/Comments')

const verifyToken=require('../verifyToken')

//create
router.post("/create",verifyToken,async(req,res)=>{
    try{
        const newPost=new post(req.body)
        const savePost=await newPost.save()
        res.status(200).json(savedPost)

    }
    catch(err){
        res.status(500).json(err)
    }
})
//update
router.put("/:id",verifyToken,async(req,res)=>{
    try{
        const updatedPost=await
         Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
         res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({postId:req.params.id})
        res.status(200).json("post deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})


//getpostdetails
router.get("/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//getpost
router.get("/",async(req,res)=>{
    try{
    const searchFilter={
        title:{$regex:express.query.search,$options:"i"}
    }
        const posts=await Post.find(express.query.search?

        searchFilter:null)
        res.status(200).json(posts)
    
    }
    catch(err){
        res.status(500).json(err)
    }
})
//get user post
router.get("/user/UserId",async(req,res)=>{
try{
        const posts=await Post.find({userid:req.params.userId})

res.status(200).json(posts)
}
catch(err)
{
    res.status(500).json(err)
}
})
module.exports=router
