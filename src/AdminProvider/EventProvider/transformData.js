import Storage from "../../utils/StoreManager"

export default async (storageInstance, data) => {
  const storage = new Storage(storageInstance)
  if (data.banner) {
    if (data.bannerUrl) {
      await storage.deleteFile(`events/banners/${data.id}`)
    }
    data.bannerUrl = await storage.manageFile(data.banner, 'events/banners', data.id)
  }
  delete data.banner
  return data
}