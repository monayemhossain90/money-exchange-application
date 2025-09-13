const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "name is required"],
            min: 2,
            max: 50,
            unique: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
            min: 5,
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"]
        }
    },
    { timestamps: true, versionKey:false},
);



const UserModel=mongoose.model('users',UserSchema);
module.exports=UserModel

