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
        Protein : req.body.Protein,
        Fat : req.body.Fat ,
        Carbohydrates :  req.body.Carbohydrates ,
        type : req.body.type ,
    })

    fitnessPlan.save().then(result => {
        res.status(200).send(`${result} is successfully added !!!`)
    }).catch(error => {
        res.status(500).send(`Error ${error}!!!`)
    })

}

export const getFitnessPlan = (req, res) => {

    try {
        const { type } = req.body;
        const userType = {
            type : type,
        }

        FitnessPlanSchema.findOne(userType).then(result => {
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

