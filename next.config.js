const path = require("path");

module.exports = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: "http://localhost:3000/",
    MONGO_URI:
      "MONGODB_URI=mongodb+srv://geleg06:Annefrank123@cluster0.vhno6.mongodb.net/SolidFrameworks?retryWrites=true&w=majority",
  },
  sassOptions: {
    // Making it easier to import variables & mixins via _global.scss;
    includePaths: [path.join(__dirname, "sass")],
  },
};
