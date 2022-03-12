import { adapters, services } from "@/infrastructure/driven-adapters/providers"

import { Container } from "@tsclean/core"
import { controllers } from "@/infrastructure/entry-points/api"

@Container({
  controllers: [...controllers],
  providers: [...services, ...adapters],
})
export class AppContainer {}
