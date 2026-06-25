import { WidgetSettings } from "./endpoints/widgetSettings";
import { fromHono } from "chanfana";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// Enable CORS
app.use(
  "*",
  cors({
    origin: "*",
  })
);

// Setup OpenAPI registry
const openapi = fromHono(app, {
  docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/tasks", TaskList);
openapi.get("/api/widget-settings/:slug", WidgetSettings);
openapi.post("/api/tasks", TaskCreate);
openapi.get("/api/tasks/:taskSlug", TaskFetch);
openapi.delete("/api/tasks/:taskSlug", TaskDelete);

// Export the Hono app
export default app;