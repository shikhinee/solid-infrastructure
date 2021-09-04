import User from '../../models/users'
import dbConnect from "../../utils/database";

dbConnect()

export default async (req, res) => {

    const users = await User.find({}).select('username');
    res.status(200).json({ success: true, data: users })
}