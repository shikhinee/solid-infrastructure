import dbConnect from "@/utils/database";
import Task from "@/models/task";
import User from "@/models/users";

dbConnect();

function getDate() {
  const today = new Date();
  return new Date(today).toISOString().substring(0, 10);
}

const taskHandler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":

      const { userID , projectID , Date , startDate , endDate } = req.body;
      var newQuery = {};

      try {

        if (userID) {
          newQuery.userID = userID;
        }
        if (projectID) {
          newQuery.projectID = projectID;
        }
        if (Date) {
          newQuery.Date = Date;
        }
        if (startDate && endDate) {
          newQuery.Date = { $gte: startDate, $lte: endDate };
        }

        const tasks = await Task.find(newQuery);
        res.status(200).json({ success: true, data: tasks });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { projectID, userID, content } = req.body;

        const userInfo = await User.findOne({ _id: userID });

        const newTask = {
          projectID,
          userID,
          content,
          username: userInfo.username,
          fullname: userInfo.fullname,
          Date: getDate(),
        };

        await Task.create(newTask);

        res.status(201).json({ success: true, data: newTask });
        
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default taskHandler;
