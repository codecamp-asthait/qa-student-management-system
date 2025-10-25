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

// Serve Swagger JSON separately
const swaggerDocs = (app, port) => {
  // Endpoint for Swagger JSON
  app.get("/api-docs/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  // Serve Swagger UI
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      swaggerUrl: "/api-docs/swagger.json", // explicitly point to JSON endpoint
    })
  );

  console.log(`📘 Swagger Docs available at: http://localhost:${port}/api-docs`);
};

module.exports = swaggerDocs;
