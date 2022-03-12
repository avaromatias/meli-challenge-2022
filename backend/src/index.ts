import "module-alias/register"

import { AppContainer } from "@/application/app"
import { PORT } from "@/application/config/environment"
import { StartProjectInit } from "@tsclean/core"
import helmet from "helmet"

async function init() {
  const app = await StartProjectInit.create(AppContainer)
  app.use(helmet())
  app.enableCors()
  await app.listen(PORT, () => console.log("Running on port " + PORT))
}

init().catch()
