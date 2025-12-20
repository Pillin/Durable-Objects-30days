# 30 Days of Durable Objects
<br>
<br>

A practical series: **demo first**, then mental model, then production.

> **Goal:** In 30 days you’ll be able to explain *when to use Durable Objects*, run real demos in minutes, and make decisions with clear trade-offs.


<br>

## What are Durable Objects?
Durable Objects (DO) are a building block for **stateful coordination**: when you need a single, consistent place to manage state and coordination **per key** (room/tenant/user), especially for real-time and distributed patterns. 


<br>


## How to use this repo

### Repo map
- Diagrams/GIFs live in `assets/`



<br>


## Quickstart (run locally)

### Requirements
- Node.js + npm
- Cloudflare account (for deploy)

### 1) Install dependencies
```bash
npm install
```
<br>

### 2) Run locally
```bash
npx wrangler dev
```

Wrangler is the CLI for building/testing/deploying Workers; wrangler dev starts a local dev server.

<br>

<br>

## Create a new project (optional)

If you want to replicate the setup from scratch, Cloudflare provides a guided starter flow:

```bash
npm create cloudflare@latest
```