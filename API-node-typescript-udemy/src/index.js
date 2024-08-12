const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

app.use(express.json());
let projects = [];

function logRoutes(req, res, next) {
    const { method, url } = req;
    const route = `[${method.toUpperCase()}] ${url}`;
    console.log(route);
    return next();
}

//app.use(logRoutes);

app.get("/projects", logRoutes, (req, res) => {
    return res.json(projects);
});

app.post("/projects", (req, res) => {
    const { name, owner } = req.body;
    const project = {
        uid: uuidv4(),
        name,
        owner
    }
    projects.push(project);
    return res.status(201).json(project);
});

app.put("/projects/:id", (req, res) => {
    const { id } = req.params;
    const { name, owner } = req.body;

    if (!name || !owner) {
        res.status(400).json({ error: 'Name and Owner are required.' });
    }

    const projectIndex = projects.findIndex(p => p.uid === id);
    if (projectIndex < 0) {
        res.status(404).json({ error: 'Project not found.' });
    }

    const json = {
        id, name, owner
    }

    projects[projectIndex] = json;

    res.json(json)

});

app.delete("/projects/:id", (req, res) => {
    const { id } = req.params;

    const projectIndex = projects.findIndex(p => p.uid === id);
    if (projectIndex < 0) {
        res.status(404).json({ error: 'Project not found.' });
    }

    projects.splice(projectIndex, 1);

    res.status(204).json({ msg: "registro excluido." })

});

app.listen(port, () => { console.log(`server running on port ${port} ✨`) });