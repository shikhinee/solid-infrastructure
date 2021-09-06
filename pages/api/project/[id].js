import dbConnect from "../../../utils/database";
import Project from '../../../models/project'
import { Users } from "@styled-icons/entypo";


dbConnect()

function getDate() {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
}

export default async (req, res) => {

    const {
        query: { id },
        method
    } = req;


    switch (method) {

        case 'GET':
            try {
                const project = await Project.find({ _id: id });

                res.status(200).json({ success: true, data: project })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'PUT':
            try {

                const { projectName , companyName , lead , users , deadline , isOn , isComplete } = req.body;

                var newQuery = {
                    $set: 
                        { 

                        },          
                    $push: {

                    }         
                }

                if (projectName) {
                    newQuery.$set.projectName = projectName
                }
                if (companyName) {
                    newQuery.$set.companyName = companyName
                }
                if (lead) {
                    newQuery.$set.lead = lead
                }

                if (isComplete) {
                    newQuery.$set.isComplete = isComplete
                    newQuery.$set.dateCompleted = getDate();                 
                }
                if (users) {
                    newQuery.$push.users = users
                }
                if (deadline) {
                    newQuery.$set.deadline = deadline
                }
                if (isOn) {
                    newQuery.$set.isOn = true
                } else if (isOn == false) newQuery.$set.isOn = false;

                await Project.updateOne(
                    { _id: id },
                    newQuery                    
                )

                res.status(200).json({ success: true, message: "Amjilltai shinchillee" });

            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}