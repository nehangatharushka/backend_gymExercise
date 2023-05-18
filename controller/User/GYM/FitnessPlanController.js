import FitnessPlan from "../../../model/GYM/FitnessPlan";

export const FitnessPlanList = (req, res) => {
    const fitnessPlan = {
        departureAirport : req.body.departureAirport,
        departureTime : { $gte: new Date(req.body.departureTime) , $lte: new Date(req.body.arrivalTime) },
        arrivalAirport :  req.body.arrivalAirport,
        arrivalTime : { $gte: new Date(req.body.departureTime), $lte: new Date(req.body.arrivalTime) },
        "seats.cabinClass":  req.body.cabinClass,
    }

    FitnessPlan.find(fitnessPlan).then(result => {
        res.status(200).send(result)
    }).catch(err => {
        res.send(err)
    })

}