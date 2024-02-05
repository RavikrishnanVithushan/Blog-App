import mongoose from "mongoose";

const postSchema = new mongoose.Schema ({
    userId:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        unique:true,
        required:true,
    },
    image:{
        type:String,
        default:'https://entail-assets.com/mayple/62a1ff71f520bb785087f5b4_topmarketingblogs1_19f178343592408234a94f70c4bb9ad2_2000-1699776190264.jpg',


    },
    category:{
        type:String,
        default:'uncategorized'
    },
    slug:{
        type:String,
        required:true,
        unigue:true,
    },

},{timestamps:true});

const Post = mongoose.model('Post',postSchema);

export default Post;