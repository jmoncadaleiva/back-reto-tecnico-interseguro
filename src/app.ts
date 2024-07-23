import "dotenv/config"
import express from "express";
import cors from "cors";
import authRoute from "./app/authentication/infrastructure/route/authentication.route"
import matrizRoute from "./app/matrices/infrastructure/matriz.route";

const app = express()
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(express.json())

const port = process.env.PORT || 3000

app.use(authRoute)
app.use(matrizRoute)

app.listen(port, () => console.log(`Listo por el puerto ${port}`))