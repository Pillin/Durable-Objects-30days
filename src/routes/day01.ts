import { Hono } from "hono";
import type { HonoEnv } from "../types/env";
import { day01HelloHandler } from "../handlers/day01Hello";

export const day01 = new Hono<HonoEnv>();

day01.get("/hello/:key", day01HelloHandler);
