import express from "express";
import cors from "cors";
import routes from "@shared/routes/routes";

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (request, response) => {
	response.send("Olá, selecione alguma das rotas disponíveis");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
