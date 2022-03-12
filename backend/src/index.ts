import "module-alias/register"

import {AppContainer} from "@/application/app"
import {PORT} from "@/application/config/environment"
import {StartProjectInit} from "@tsclean/core"
import express from "express"
import helmet from 'helmet'
import path from "path"

async function init() {
    const app = await StartProjectInit.create(AppContainer)
    app.use(helmet());
    app.enableCors();
    app.use("/static", express.static(path.join(__dirname, "..", "dist", "frontend", "src")))
    await app.listen(PORT, () => console.log('Running on port ' + PORT))
}
   
init().catch();