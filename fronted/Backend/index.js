import express from "express";
import cors from "cors"
import multer from "multer";

import assignroutes1 from "./models/rAbout_us.js"
import assignroutes2 from "./models/rAdmin_users.js"
import assignroutes3 from "./models/rContact_us.js"
import assignroutes4 from "./models/rFeedback.js"
import assignroutes5 from "./models/rManage_appointment.js"
import assignroutes6 from "./models/rManage_doctor.js"
import assignroutes7 from "./models/rPatient.js"
import assignroutes8 from "./models/rManage_timeslot.js"
import assignroutes9 from "./models/rLogin.js"
//import path from "path";

const app= express()
app.use(express.json())
app.use(cors())

app.use("/backend/About_us",assignroutes1)
app.use("/backend/Admin_users",assignroutes2)
app.use("/backend/Contact_us",assignroutes3)
app.use("/backend/Feedback",assignroutes4)
app.use("/backend/Manage_appointment",assignroutes5)
app.use("/backend/Manage_doctor",assignroutes6)
app.use("/backend/Patient",assignroutes7)
app.use("/backend/Manage_timeslot",assignroutes8)
app.use("/backend/Login",assignroutes9)



app.listen(8801,()=>{
    console.log("Connected to Backend")
})


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/backend/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});