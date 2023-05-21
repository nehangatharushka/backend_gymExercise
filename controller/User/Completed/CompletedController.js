import CompletedSchema from '../../../model/Completed/Completed.js'

export const Insertcompleted = (req, res) => {

    const completedSchema = new CompletedSchema({
        userName : req.body.userName ,
        name :  req.body.name ,
    })

    completedSchema.save().then(result => {
        res.status(200).send(`${result}`)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })
}

export const GetCompleted = (req, res) => {

    const user = {
        userName : req.body.userName ,
    }

    CompletedSchema.find(user).then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })
}