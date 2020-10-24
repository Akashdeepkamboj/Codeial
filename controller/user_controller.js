const User = require('../model/user');


module.exports.profile = function(req,res){
    return res.end('<h1> User Profile </h1>');
}

module.exports.signIn = (req,res)=>{
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    })
}

module.exports.signUp = (req,res) => {
    return res.render('user_signup',{
        title : "Codeial User Sign Up "
    })
}


//get signUP data 
module.exports.create = function (req,res){
    if( req.body.password != req.body.confirm_password ){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email},(err,user)=>{
        if(err){
            console.log('err in finding user in signing'); return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){ console.log('err in finding user in signing'); return;}
                return res.redirect('/users/SignIn')
            })
        }else{
            return res.redirect('back');
        }
        
    })
    
}
//Sign in and createn  Session
module.exports.createSession= function(req,res){
    //TODO Later
}