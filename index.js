const express = require("express");
const app = express();
const port = 3000;

// Sample roles data
const roles = [
  { id: 1, name: "Admin", permissions: "read,create,update,delete" },
  { id: 2, name: "Manager", permissions: "read,create" },
  { id: 3, name: "User", permissions: "read,update" },
  { id: 4, name: "Guest", permissions: "read" },
  { id: 5, name: "Admin", permissions: "read,create,update,delete" },
  { id: 6, name: "Manager", permissions: "read,create,update" },
  { id: 7, name: "User", permissions: "read,update" },
  { id: 8, name: "Guest", permissions: "read" },
  { id: 9, name: "Admin", permissions: "read,create,update,delete" },
  { id: 10, name: "Manager", permissions: "read,create,update" },
];

app.get("/", (req, res) => {
  res.send("Hello I'm the Node JS API deployed with Cloudoor");
});

// Route to return the list of roles
app.get("/roles", (req, res) => {
    if (req.query.error) {
        res.status(500).json({ error: "Role service unavailable" });
        return
    }
    const role = roles.find((r) => r.id === parseInt(req.query.id));
    if (role) {
        if (req.query.latence) {
            setTimeout(() => {
              res.json(role.permissions);
            }, parseInt(req.query.latence));
        } else {
            res.json(role.permissions);
        }
    }else{
        res.json({});
    }

    
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
