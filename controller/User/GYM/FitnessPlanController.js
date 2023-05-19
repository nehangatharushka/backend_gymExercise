import FitnessPlanSchema from "../../../model/GYM/FitnessPlan.js";

export const FitnessPlanList = (req, res) => {
    // const fitnessPlan = {
    //     departureAirport : req.body.departureAirport,
    //     departureTime : { $gte: new Date(req.body.departureTime) , $lte: new Date(req.body.arrivalTime) },
    //     arrivalAirport :  req.body.arrivalAirport,
    //     arrivalTime : { $gte: new Date(req.body.departureTime), $lte: new Date(req.body.arrivalTime) },
    //     "seats.cabinClass":  req.body.cabinClass,
    // }

    FitnessPlanSchema.find().then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.send(err)
    })

}


export const FitnessPlanListInsert = (req, res) => {
    const fitnessPlan = new FitnessPlanSchema({
        des : req.body.des,
        nutrition : req.body.nutrition ,
        exercise :  req.body.exercise 
    })

    fitnessPlan.save().then(result => {
        res.status(200).send(`${result} is successfully added !!!`)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })

}