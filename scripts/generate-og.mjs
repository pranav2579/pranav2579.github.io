import { createCanvas } from "canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

// Dark background
ctx.fillStyle = "#0a0a0a";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Subtle gradient overlay (top-left to bottom-right)
const grad = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
grad.addColorStop(0, "rgba(16, 185, 129, 0.08)");
grad.addColorStop(1, "rgba(6, 182, 212, 0.06)");
ctx.fillStyle = grad;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Emerald accent bar at top
ctx.fillStyle = "#10b981";
ctx.fillRect(0, 0, WIDTH, 4);

// Name
ctx.fillStyle = "#ffffff";
ctx.font = "bold 64px sans-serif";
ctx.textAlign = "center";
ctx.fillText("Pranav Tripathi", WIDTH / 2, 250);

// Subtitle
ctx.fillStyle = "#d1d5db";
ctx.font = "32px sans-serif";
ctx.fillText("Senior Software Engineer Technical Lead", WIDTH / 2, 310);

// Decorative emerald line below subtitle
ctx.strokeStyle = "#10b981";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(WIDTH / 2 - 120, 345);
ctx.lineTo(WIDTH / 2 + 120, 345);
ctx.stroke();

// Company / tagline
ctx.fillStyle = "#9ca3af";
ctx.font = "24px sans-serif";
ctx.fillText("Microsoft · XBOX Gaming AI", WIDTH / 2, 395);

// Domain at bottom
ctx.fillStyle = "#10b981";
ctx.font = "bold 22px sans-serif";
ctx.fillText("pranavtripathi.dev", WIDTH / 2, 560);

// Save
const outPath = join(__dirname, "..", "public", "og-image.png");
writeFileSync(outPath, canvas.toBuffer("image/png"));
console.log(`✅ OG image saved to ${outPath}`);
console.log(`   Size: ${(canvas.toBuffer("image/png").length / 1024).toFixed(1)} KB`);
