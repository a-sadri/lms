import { config } from "dotenv";

config();

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "test api",
    version: process.env.VERSION,
    license: {
      name: "MIT",
      url: "",
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/v1`,
    },
  ],
};

export default swaggerDef;
