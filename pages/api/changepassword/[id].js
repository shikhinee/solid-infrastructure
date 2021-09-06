import dbConnect from "../../../utils/database";
import User from '../../../models/users'
import { hashPassword , verifyPassword } from "../../../utils/auth";

dbConnect()

export default async(req, res) => {

    const {
        query: { id },
        method
    } = req;

    switch (method) {

        case 'PUT':

            try {

                const { oldPass , newPass } = req.body
                const newPassHashed = await hashPassword(newPass)
                const reqUser = await User.findOne({ _id: id })
                const isValid = await verifyPassword(oldPass, reqUser.password);

                if (!reqUser) return res.status(200).json({ success: false, msg: "hereglegch oldsongue" })
                if (!isValid) return res.status(200).json({ success: false, msg: "password bolon username tohirsongue" })

                await User.updateOne(
                    { _id: id },
                    { $set: 
                        { password: newPassHashed } 
                    }
                )
                res.status(201).json({ success: true, msg: "amjillttai password soligdloo"})

            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;           

        default:
            res.status(400).json({ success: false })
            break;
        }
}