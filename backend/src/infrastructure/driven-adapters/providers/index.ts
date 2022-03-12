import { ITEMS_SERVICE } from "@/domain/use-cases/items-service"
import { ItemsServiceImpl } from "@/domain/use-cases/impl/items-service-impl"

export const adapters = []

export const services = [
  {
    provide: ITEMS_SERVICE,
    useClass: ItemsServiceImpl,
  },
]
