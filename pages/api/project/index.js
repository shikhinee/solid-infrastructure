import dbConnect from "../../../utils/database";
import Project from "../../../models/project";
// import UserRequest from '../../../models/userRequest'
import User from "../../../models/users";

dbConnect();

const projectHandler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const projects = await Project.find({});

        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { projectName, companyName, lead, users, deadline } = req.body;
        const project = await Project.findOne({ projectName: projectName });

        if (project)
          return res
            .status(200)
            .json({ success: false, msg: "project already exists" });

        const myProject = {
          projectName,
          companyName,
          lead,
          users,
          deadline,
        };

        const newProject = await Project.create(myProject);

        res.status(201).json({ success: true, data: newProject });
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

export default projectHandler;
