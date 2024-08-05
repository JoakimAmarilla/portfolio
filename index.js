import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
const posts = [
    { header: "Header 1", datePost: "date 1", body: "Body 1", image: "/images/Everest.jpg" },
    { header: "Header 2", datePost: "date 2", body: "Body 2",  }, // No image
    { header: "Header 3", datePost: "date 3", body: "Body 3",  }, // No image
    { header: "Header 4", datePost: "date 4", body: "Body 4", image: "/images/Everest.jpg" },

];



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    const dateToday = "05-21-24";

    res.render("home.ejs",{date: dateToday, posts: posts})
})

app.listen(port, ()=>{
    console.log("\n Server is running!\n")
})