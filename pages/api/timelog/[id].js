import dbConnect from "../../../utils/database";
import User from '../../../models/users'

dbConnect()

function getDate() {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
}

function getTime() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    return time;
}

export default async(req, res) => {

    const {
        query: { id },
        method
    } = req;

    switch (method) {

        case 'GET':
            try {
                const reqUser = await User.findOne({ 
                        timeLog: { $elemMatch: { Date: getDate() } }, 
                        _id: id })

                if (reqUser) return res.status(200).json({ success: true, isRegistered: true, msg: "ta unuudr burtguulsen bn" })

                res.status(201).json({ success: true, isRegistered: false, msg: "make that button visible bro"})

            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false, isRegistered: false });
            }
            break;

        case 'POST':
            try {
                
                const reqUser = await User.findOne({ 
                    timeLog: { $elemMatch: { Date: getDate() } }, 
                    _id: id })

                if (reqUser) return res.status(200).json({ success: false, msg: "ta unuudr burtguulsen bn" })

                const newTimeLog = { Date: getDate() , ArrivalTime: getTime()}
                await User.updateOne(
                    { _id: id },
                    { $push: 
                        { timeLog: newTimeLog } 
                    }
                )

                res.status(201).json({ success: true, msg: "amjilttai burtgelee"})

            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
        }
}