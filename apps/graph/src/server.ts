import express from "express";
const app = express();
app.get("/health", (_req, res) => res.json({ ok: true }));
app.listen(8000, () => console.log("graph runtime OK on http://localhost:8000 (SSD path)"));
