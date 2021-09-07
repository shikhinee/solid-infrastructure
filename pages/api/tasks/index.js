import dbConnect from "../../../utils/database";
// import Project from '../../../models/project'
// import User from '../../../models/users'
import Task from '../../../models/task'
import User from '../../../models/users'


dbConnect()

function getDate() {
    const today = new Date();
    return new Date(today).toISOString().substring(0, 10);
}

export default async(req, res) => {

    const { method } = req


    switch (method) {

        case 'GET':

            const tasks = await Task.find({})
            res.status(200).json({ success: true , data: tasks })   

        case 'POST':

            const { projectID , userID , content } = req.body;

            console.log(projectID);

            

            const userInfo = await User.findOne({ _id: userID});


            const newTask = {
                projectID ,
                userID ,
                content ,
                username: userInfo.username,
                fullname: userInfo.fullname,
                Date: getDate()
            }


            await Task.create(newTask)
            res.status(201).json({ success: true, data: newTask })

            

        default:
            res.status(400).json({ success: false })
            break;
        }
}