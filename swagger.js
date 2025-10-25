// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "QA Student Management System API",
      version: "1.0.0",
      description: "API documentation for Student Management System API",
    },
    servers: [
      {
        url: "https://qa-student-management-system.vercel.app/",
      },
      {
        url: "http://localhost:8888",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
