import express from "express";
import signingRequestRoutes from "./api/signingRequest.routes";
//import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./api/swagger";

export const app = express();

app.use(express.json());

//app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/signing-requests", signingRequestRoutes);
