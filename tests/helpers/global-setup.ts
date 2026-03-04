import { type FullConfig } from "playwright/test";
import path from "node:path";
import fs from "fs";

export default async function globalSetup(config: FullConfig) {
  console.log(`[INFO]: Starting the global setup ...`);
  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    // Delete allure results
    const resultDir = path.resolve(process.cwd(), "allure-results");
    console.log(`>>> resultsDir: ${resultDir}`);

    if (fs.existsSync(resultDir))
      fs.rmSync(resultDir, { recursive: true, force: true });
    console.log(`[INFO]: Allure results deleted for local run`);
  }
  console.log(`[INFO]: Completed the global setup ...`);
}
