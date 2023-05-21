import UserExerciseSchema from "../../../model/UserExercise/UserExercise.js";
import UserSchema from "../../../model/User/User.js";

export const UserExreciseInsert = (req, res) => {

    const userExercise = new UserExerciseSchema({

        userName : req.body.userName ,
        name :  req.body.name ,
        image :  req.body.image ,
        reps :  req.body.reps ,
        set :  req.body.set ,
        time :  req.body.time ,
        url:  req.body.url ,
        weight : req.body.weight,
        type:req.body.type,
        date :req.body.date,

    })

    userExercise.save().then(result => {
        res.status(200).send(`${result} is successfully added !!!`)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })
}


// export const getUserExerciseList = (req, res) => {

//     const { userName } = req.body;

//     const user = {
//         userName : userName
//     }
    
//     UserSchema.find(user).then(result => {
//         processData(result);
//     }).catch(err => {
//         res.send(err)
//     })

//     function processData(result) {
//         console.log("process");
//     const selectedDates = result[0].selectedDate; // Retrieve the selectedDate from the result
//     console.log(selectedDates);
//     const query = {
//       userName : result[0].userName,
//       $or: selectedDates.map(date => ({ date }))
//     };
//     console.log(query);

//     UserExerciseSchema.query(user).then(result => {
//         console.log("gym");
//         console.log(result);
//         res.status(200).send(result)
//     }).catch(err => {
//         res.send(err)
//     })
//   }

// }

export const getUserExerciseList = (req, res) => {
    const { userName } = req.body;
  
    const user = {
      userName: userName
    };
  
    UserSchema.find(user)
      .then(result => {
        processData(result);
      })
      .catch(err => {
        res.send(err);
      });
  
    function processData(result) {
      console.log("process");
      const selectedDates = result[0].selectedDate; // Retrieve the selectedDate from the result
      console.log(selectedDates);
      const query = {
        userName: result[0].userName,
        $or: selectedDates.map(date => ({ date }))
      };
      console.log(query);
  
      UserExerciseSchema.find(query)
        .then(result => {
          console.log(result);
          res.status(200).send(result);
        })
        .catch(err => {
          res.send(err);
        });
    }
  }
  

    // const Currentuser = {
    //     userName : userName,
    //     $or: [
    //         { date: "Monday" },
    //         { date: "Friday" }
    //       ]
    // }

    // UserExerciseSchema.find(user).then(result => {
    //     res.status(200).send(result)
    // }).catch(err => {
    //     res.send(err)
    // })

export const dateChange = (req, res) => {

    // const { userName , name , image , reps , set , time , url , weight , type , date } = req.body;

    // const user = {
    //     _id : req.body._id , 
    //     userName : req.body.userName ,
    //     name :  req.body.name ,
    //     image :  req.body.image ,
    //     reps :  req.body.reps ,
    //     set :  req.body.set ,
    //     time :  req.body.time ,
    //     url:  req.body.url ,
    //     weight : req.body.weight,
    //     type:req.body.type,
    //     date :req.body.date,
    // }


    const { userName , name  } = req.body;

    const user = new UserExerciseSchema ({
        userName : userName ,
        name :  name ,
    })
    var getUser = new UserExerciseSchema ;
    UserExerciseSchema.findOne(user).then(result => {
        getUser = result
    }).catch(err => {
        res.send(err)
    })
    console.log(getUser)
    //console.log(user)
    // UserExerciseSchema.updateOne( req.body._id  , req.body.date).then(result => {
    //     res.status(200).send(result)
    // }).catch(err => {
    //     res.send(err)
    // })
    // var myquery = { date: "Sunday" };
    // var newvalues = { $set: {name: req.body.userName, date: req.body.date } };
    // UserExerciseSchema.updateOne(myquery, newvalues, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    // });
} 