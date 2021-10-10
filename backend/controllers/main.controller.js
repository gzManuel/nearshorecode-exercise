//Database
const User = require('../models/user');

const information = (req, res) => {
    //If theres no email in the payload
    if (!req.body.email) return res.status(400) .json({message:"Bad request"});

    User.findById(req.body.email).exec((err, user) => {
        if (!user) return res.status(200).json({});

        if(err) return res.status(500).json({message:"Something went wrong"});

        return res.status(200).json({ amount: user.amount });

    });
}

// const postUser = (req,res)=>{

//     const user = new User(req.body);

//     user.save((err,userSaved)=>{
//         if(err) return res.status(500).json({status:'error',err});
//         return res.status(200).json({status:'success',data: userSaved});
//     })
// }

exports.information = information;
// exports.postUser = postUser;