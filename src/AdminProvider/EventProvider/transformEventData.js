
import { Storage } from "../../utils"

export default async (storageInstance, data) => {
  const storage = new Storage(storageInstance)
  data.bannerUrl = await storage.manageFile(data.banner, 'events/banners', data.id)
  delete data.banner
  return data
}