import { Hono } from "hono";
import type { HonoEnv } from "./types/env";
import { day01 } from "./routes/day01";

export { Coordinator } from "./objects/Coordinator";

const app = new Hono<HonoEnv>();

app.get("/health", (c) => c.json({ ok: true }));
app.route("/day/01", day01);

export default app;