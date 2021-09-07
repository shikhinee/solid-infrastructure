import dbConnect from "../../../utils/database";
import User from "../../../models/users";

dbConnect();

const bankInfoHandler = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const { bankName, bankNumber } = req.body;

        const reqUser = await User.findOne({ _id: id });

        if (!reqUser)
          return res
            .status(200)
            .json({ success: false, msg: "hereglegch oldsongue" });

        await User.updateOne(
          { _id: id },
          { $set: { bankName: bankName, bankNumber: bankNumber } }
        );
        res
          .status(201)
          .json({ success: true, msg: "amjillttai banknii medeelel oruullaa" });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default bankInfoHandler;
