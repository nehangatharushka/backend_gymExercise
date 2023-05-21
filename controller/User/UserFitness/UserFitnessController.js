import UserFitnessPlanSchema from "../../../model/UserFitness/UserFitnessPlan.js";

export const suggestFitnessPlan = (req, res) => {

    try {
        const { userName } = req.body;
        const user = {
            userName : userName,
        }

        // const userCheck =  UserFitnessPlanSchema.findOne(user);
        // console.log(userCheck);
        // if (!userCheck) {
        //     return res.status(404).send('Calculate Your BMI First');
        // }

        console.log(user)
        UserFitnessPlanSchema.findOne(user).then(result => {
            if(result === null)
            {
                res.status(404).send('Calculate Your BMI First');
            }
            else
            {
            console.log(result)
            res.status(200).send(result)
            }
        }).catch(error => {
            res.status(500).send(`Error ${error}`)
        })

      } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      }


}