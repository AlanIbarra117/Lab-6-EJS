import express from "express";
import path from "node:path";

const app = express();
const port = 3000;

// Serve static files (CSS, images, etc.) from the "public" folder
app.use(express.static(path.join(import.meta.dirname, "public")));

// Use EJS as the view engine and tell Express where the templates live
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

// Data passed to home.ejs
const user = {
  username: "Alan Ibarra", // <-- replace with your name
};

// Homepage: render the dynamic page home.ejs with the user object
app.get("/", (req, res) => {
  res.render("home", user);
});

// About page
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact page
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
