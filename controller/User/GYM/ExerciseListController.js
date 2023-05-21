import ExerciseListSchema from '../../../model/GYM/ExerciseList.js'

export const getList = (req,res) => {

    ExerciseListSchema.find().then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.send(err)
    })
}

export const insert = (req,res) => {

    var exercise = new ExerciseListSchema({
        name :req.body.name,
        image : req.body.name
    })

    exercise.save().then(result => {
        res.status(200).send(`${result} is successfully added !!!`)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })
}

export const OneExercise = (req,res) => {

    var exercise = {
        name :req.body.name,
    }
    
    console.log(exercise)

    ExerciseListSchema.findOne(exercise).then(result => {
        console.log(result)
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })

}