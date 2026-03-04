import { type FullConfig } from "playwright/test";
import { exec } from "node:child_process";


export default async function globalTeardown(config: FullConfig){
    // Executed after all workers complete. Good place for cleanup  task
    console.log(`[INFO]: Starting the global teardown process ...`)

    if(process.env.RUNNER?.toUpperCase() === "local") {
        console.log(` >>> Local run detected - starting Allure server ...`);

        exec("allure serve", (error, stderr, stdout) => {
            if(error) {
                console.error("ERROR: Starting Allure server:", error.message);
            }
        });
    }
    console.log(`[INFO]: Completed the global teardown process ...`)

}