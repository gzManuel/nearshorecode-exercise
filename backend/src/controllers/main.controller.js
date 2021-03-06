//Database
const User = require('../models/user');

const information = (req, res) => {
    //If theres no email in the payload
    if (!req.body.email) return res.status(400).json({ message: "Bad request" });

    User.findById(req.body.email).exec((err, user) => {
        if (err) return res.status(500).json({ message: "Something went wrong" });
        
        if (!user) return res.status(200).json({});

        return res.status(200).json({ amount: user.amount });

    });
}

const loan = (req, res) => {
    // If theres no email, or amount in the payload, also if the amount is negative;
    if (!req.body.email || !req.body.amount || req.body.amount < 0) return res.status(400).json({ message: "Bad request" });

    User.findById(req.body.email).exec((err, user) => {
        if (err) return res.status(500).json({ message: "Something went wrong" });

        //User not found
        if (!user) return res.status(404).json({ message: "There's no user" });

        if (user.newUser) {
            // In new users: user amount plus payload amount shoudn't be mayor than 50
            if ((user.amount + req.body.amount) > 50) {
                // bill exceeded
                return res.status(422).json({ error: '101', message: 'Bill exceeded' });
            }
            // Updating the amount
            User.findByIdAndUpdate(user._id, { amount: req.body.amount + user.amount }, { new: true }, (err, userUpdated) => {
                if (err) return res.status(500).json({ message: "Something went wrong" });

                return res.status(200).json({ status: "succeed", userUpdated });
            });

        } else {
            const newAmount = user.amount + req.body.amount;
            // In old users: user amount plus payload amount shoudn't be mayor than 1000
            
            if ((newAmount) > 1000) {
                // amount exceeded
                return res.status(422).json({ error: '100', message: 'Amount exceeded' });
            }
            // Updating the amount
            User.findByIdAndUpdate(user._id, { amount: newAmount}, { new: true }, (err, userUpdated) => {
                if (err) return res.status(500).json({ message: "Something went wrong" });

                return res.status(200).json({ status: "succeed", userUpdated });
            });
        }
    });
}

const payments = (req, res) => {
    if (!req.body.email || !req.body.amount || req.body.amount < 0) return res.status(400).json({ message: "Bad request" });
    User.findById(req.body.email).exec((err, user) => {
        if (err) return res.status(500).json({ message: "Something went wrong" });
        // User not found
        if (!user) return res.status(404).json({ message: "There's no user" });

        //if user is new
        if (user.newUser) {
            return res.status(422).json({ error:'101', message: "No debt" })
        } else {
            const newAmount = user.amount - req.body.amount;
            // If new amount is less than 0
            if (newAmount < 0) {
                return res.status(422).json({ error: '100', message: 'Amount exceeded debs' });
            } else {
                // Updating ammount
                User.findByIdAndUpdate(user._id, { amount: newAmount }, { new: true }, (err, userUpdated) => {
                    if (err) return res.status(500).json({ message: "Something went wrong" });
                    return res.status(200).json({ status: "succeed", userUpdated });
                });
            }
        }
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
exports.loan = loan;
exports.payments = payments;
// exports.postUser = postUser;