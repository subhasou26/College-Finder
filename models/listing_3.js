const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    Sr_No:{
        type:Number,
        required:true,
    },
    Round:{
        type:String,
        required:true,
    },
    Institute:{
        type:String,
        required:true,
    },
    Program:{
        type:String,
        required:true,
    },
    Stream:{
        type:String,
        required:true,
    },
    Seat_Type:{
        type:String,
        required:true,
    },
    Quota:{
        type:String,
        required:true,
    },
    Category:{
        type:String,
        required:true,
    },
    Opening_Rank:{
        type:Number,
        required:true,
    },
    Closing_Rank:{
        type:Number,
        required:true,
    },
});

const Listing_3=mongoose.model("Listing_3",listingSchema);
module.exports=Listing_3;