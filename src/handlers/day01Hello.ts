import type { Context } from "hono";
import type { HonoEnv } from "../types/env";

export async function day01HelloHandler(c: Context<HonoEnv>) {
    const key = c.req.param("key");

    const id = c.env.COORDINATORS.idFromName(key);
    const stub = c.env.COORDINATORS.get(id);

    return stub.fetch(c.req.raw);
}