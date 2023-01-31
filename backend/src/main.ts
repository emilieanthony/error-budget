import { Application, isHttpError, Router, oakCors } from "./deps.ts";
import { services } from "./handlers/services.ts";

const PORT = 8081;

const app = new Application();
const router = new Router();

// Routes
router.get("/services", services.list);
router.post("/services", services.create);

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Error handling
app.use(async (context, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      context.response.status = err.status;
    } else {
      context.response.status = 500;
    }
    console.warn(
      `Response error: [${context.response.status}]: ${err.message}`
    );
    context.response.body = { error: err.message };
    context.response.type = "json";
  }
});

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ hostname: "localhost", port: PORT });
