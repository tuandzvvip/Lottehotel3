const {User} = require("../model/User");
const bcrypt = require("bcrypt");
const userController = {
     //REGISTER
     adduser: async(req,res) =>{
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass,
                region: req.body.region,
                fullname: req.body.fullname,
                birthday: req.body.birthday,
                Contact: req.body.Contact,
            });
            const user = await newUser.save();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
     },
     //LOGIN
     getuser: async(req,res) =>{
        try{
            const user = await User.findOne({ username: req.body.username});
            if (!user) return res.status(400).json("Wrong credentials!");
    
            const validated = await bcrypt.compare(req.body.password, user.password);
            if (!validated) return res.status(401).json("Wrong credentials!");
    
            const { password, ...others } = user._doc;
            return res.status(200).json(others);
        } catch(err){
            return res.status(500).json(err);
        }
    }
    

}

module.exports = userController;