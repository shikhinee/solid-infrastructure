import dbConnect from "@/utils/database";
import Task from "@/models/task";

dbConnect();

function getDate() {
    const today = new Date();
    return new Date(today).toISOString().substring(0, 10);
  }

const taskHandler = async (req, res) => {
    const {
        query: { id },
        method,
      } = req;

  switch (method) {
    case "GET":

      try {

        const tasks = await Task.findOne({ _id: id })

        res.status(200).json({ success: true, data: tasks });

      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        
        const { content } = req.body;

        const newThread = {
            content,
            Date: getDate()
        };

        await Task.updateOne({ _id: id }, { $push: { threads: newThread } });

        res.status(201).json({ success: true, data: newThread });

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
