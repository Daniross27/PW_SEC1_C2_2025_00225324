import express from "express";
import cors from "cors";

const app = express();
const PORT = 3130;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.send("<h1>✅ Servidor funcionando correctamente</h1>");
});

app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
})