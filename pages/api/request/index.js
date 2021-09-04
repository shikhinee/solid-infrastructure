import dbConnect from "@/utils/database";
import { hashPassword } from "@/utils/auth";
import UserRequest from '@/models/userRequest'
import User from '@/models/users'

dbConnect()

export default async (req, res) => {

    const { method } = req

    switch (method) {

        case 'GET':
            try {
                const userRequests = await UserRequest.find({});

                res.status(200).json({ success: true, data: userRequests })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {

                const { username, fullname, phoneNumber } = req.body;
                const user = await User.findOne({ username: username})

                if (user) 
                    return res.status(200).json({ success: false, msg: 'username already exists' })


                const myPass = await hashPassword(req.body.password);

                const myRequest = {
                    username, 
                    fullname, 
                    phoneNumber, 
                    password: myPass
                }        

                const newRequest = await UserRequest.create(myRequest);
                res.status(201).json({ success: true, data: newRequest })

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