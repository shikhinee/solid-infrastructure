import dbConnect from "../../../utils/database";
// import Project from '../../../models/project'
// import User from '../../../models/users'
import Task from '../../../models/task'

dbConnect()

export default async(req, res) => {

    const { method } = req


    switch (method) {

        case 'GET':

            const tasks = await Task.find({})
            res.status(200).json({ success: true , data: tasks })   
            

        default:
            res.status(400).json({ success: false })
            break;
        }
}