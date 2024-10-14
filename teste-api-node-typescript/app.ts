import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.send("Isso é um teste");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
