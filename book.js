import  Mongoose  from "mongoose";

let bookSchema = Mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number
    },
    genre: {
        type: String
    },
    createdAt: {
        type: Number,
        default: new Date(),
    }
})
let bookInfo = Mongoose.model("BookCollection", bookSchema);

export default bookInfo;