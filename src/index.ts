import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {createConnection} from "typeorm";

import userRoutes from "./routes/user.routes";

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
  console.log(`Server on Port ${port}`);
})


