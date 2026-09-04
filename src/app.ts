import express from "express";
import signingRequestRoutes from "./api/SigningRequest.routes";

export const app = express();

app.use(express.json());
app.use("/signing-requests", signingRequestRoutes);
