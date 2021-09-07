import dbConnect from "../../../utils/database";
import UserRequest from "../../../models/userRequest";
import User from "../../../models/users";

dbConnect();

const requestModHandler = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const { role } = req.body;
        const userReq = await UserRequest.findById(id);

        if (!userReq) {
          return res.status(400).json({ success: false });
        }

        const userRegister = {
          username: userReq.username,
          fullname: userReq.fullname,
          phoneNumber: userReq.phoneNumber,
          password: userReq.password,
          role: role,
        };

        const checkUser = await User.findOne({
          username: userRegister.username,
        });
        if (checkUser)
          return res
            .status(200)
            .json({ success: false, message: "user already exists" });

        const newUser = await User.create(userRegister);
        await UserRequest.deleteOne({ _id: id });

        res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedReq = await UserRequest.deleteOne({ _id: id });

        if (!deletedReq) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default requestModHandler;
