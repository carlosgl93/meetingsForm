import Storage from "../../utils/StoreManager"

export default async (storageInstance, data) => {
  const storage = new Storage(storageInstance)
  if (data.banner) {
    console.log("GOT BANNER:", data.banner)
    if (data.bannerUrl) {
      console.log("GOT BANNER URL:", data.bannerUrl)
      await storage.deleteFile(`events/banners/${data.id}`)
      console.log("DELETED BANNER")
    }
    data.bannerUrl = await storage.manageFile(data.banner, 'events/banners', data.id)
    console.log("NEW URL:", data.bannerUrl)
  }
  delete data.banner
  return data
}