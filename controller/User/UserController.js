import UserSchema from "../../model/User/User.js";
import UserFitnessPlanSchema from "../../model/UserFitness/UserFitnessPlan.js";
import bcrypt from "bcrypt";

const requiredFields = [
   "fullName",
   "userName",
   "email",
   "password"
]

const requiredFieldsLogin = [
    "userName",
    "password"
 ]

 const requiredFieldsUpdateInfo = [
    "userName",
    "fullName",
    "email",
    "height",
    "weight",
    "age",
    "fitnessGoal"
 ]

export const GetUser = (req,res) => {
    try {
        const { _id } = req.body;
        const user = {
            _id : _id,
        }
        console.log(user)
        UserSchema.findOne(user).then(result => {
            console.log(result)
            res.status(200).send(result)
        }).catch(error => {
            res.status(500).send(`Error ${error}`)
        })

      } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      }
}

export const RegisterUser = (req , res) => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    console.log(missingFields);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }
    // else{

    //     const { name, email, password } = req.body;

    //     const existingUser =  UserSchema.findOne({ email });
    //     //console.log(existingUser)
    //     if (existingUser) {
    //       return res.send(`Already exists in Database !`)
    //     }
        else
        {
            const user = new UserSchema({
                fullName : req.body.fullName ,
                userName : req.body.userName ,
                email : req.body.email,
                password : req.body.password,
            });

            user.save().then(result => {
                res.status(200).send(`${result} is successfully Added !!!`)
            }).catch(error => {
                res.send(`${error}`)
            })
        }
    // }
}

export const LoginUser = (req , res) => {
    const missingFields = requiredFieldsLogin.filter((field) => !req.body[field]);
    console.log(missingFields);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }
    // else{
    //         const { userName, password } = req.body;
    //         const user =  UserSchema.find({ userName });
    //         console.log(user);
    //         if (!user) {
    //           return res.status(404).send('User not found');
    //         }
    //           // Check if the password is correct
    //         // bcrypt.compare(password, user.password, (err, isMatch) => {
    //         // if (err || !isMatch) {
    //         // return res.status(401).json({ error: 'Incorrect email or password' });
    //         // }
        
    //         res.status(200).send(JSON.stringify(user));
    //     // });
    // }
    try {
        const { userName, password } = req.body;
        const user = {
            userName : userName,
            password : password,
        }
        console.log(user)
        UserSchema.findOne(user).then(result => {
            console.log(result)
            res.status(200).send(result)
        }).catch(error => {
            res.status(500).send(`Error ${error}`)
        })

      } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      }
}

export const SaveFitnessPlan = (req , res) => {

try {
    const userFitness = new UserFitnessPlanSchema({
        userName : req.body.userName ,
        type : req.body.type
    });

    userFitness.save().then(result => {
        res.status(200).send(`${result} is successfully Added !!!`)
    }).catch(error => {
        res.send(`${error}`)
    })

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }

} 

export const SaveUserInfo = (req,res) => {
    const missingFields = requiredFieldsUpdateInfo.filter((field) => !req.body[field]);
    console.log(missingFields);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }
    else
    {
        const filter = {
            _id : req.body._id
        }

        const user = {
            _id:req.body._id,
            fullName : req.body.fullName ,
            userName : req.body.userName ,
            email : req.body.email,
            height : req.body.height,
            weight:req.body.weight,
            age:req.body.age,
            fitnessGoal:req.body.fitnessGoal,
        }

        // Save the updated user
        UserSchema.findByIdAndUpdate(filter,user).then(result => {
            res.status(200).send(result)
        }).catch(error => {
            res.send(`${error} Error !!!`)
        })
    }
}

export const SaveDateTime = (req,res) => {

    const missingFields = requiredFieldsUpdateInfo.filter((field) => !req.body[field]);
    console.log(missingFields);
    if (missingFields.length) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
        });
        return;
    }
    else
    {
        const filter = {
            _id : req.body._id
        }

        const user = {
            _id:req.body._id,
            fullName : req.body.fullName ,
            userName : req.body.userName ,
            email : req.body.email,
            height : req.body.height,
            weight:req.body.weight,
            age:req.body.age,
            fitnessGoal:req.body.fitnessGoal,
            selectedDate : req.body.days ,
            time:req.body.time
        }
        console.log(user)
        // Save the updated user
        UserSchema.findByIdAndUpdate(filter,user).then(result => {
            res.status(200).send(result)
        }).catch(error => {
            res.send(`${error} Error !!!`)
        })
    }
}