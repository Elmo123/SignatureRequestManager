import swaggerJsdoc from "swagger-jsdoc";
import { SwaggerDefinition } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Signature Request API",
    version: "1.0.0",
    description: "API for managing electronic signature requests"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server"
    }
  ]
};

export const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/api/signingRequest.routes.ts"]
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
