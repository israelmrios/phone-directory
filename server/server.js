const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/connection");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/departments", require("./routes/departmentRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serve client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
