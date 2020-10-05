export default class Storage {
constructor(storage) {
    this.storage = storage
}
/**
 * Uploads a file to Firebase Storage and returns the full path to retrieve it
 *
 * @param {String} FileObject  File Object from a form
 * @param {String} path        The path to store the file in
 * @param {String} docIda      Id of the asociated document
 *
 * @returns {String} The full path of the file in storage or null
 *
 * @memberof FirebaseProvider
 */
manageFile = async (fileObject, path, docId) => {
    if (fileObject) {
    try {
        const fullPath = `${path}/${docId}`
        await this.uploadFile(fullPath, fileObject.rawFile)
        return this.getDownloadUrl(fullPath)
    } catch (error) {
        console.error('Could not upload file:', error.message)
    }
    }
}

uploadFile = async (filePath, file) => {
    const storageRef = this.storage.ref()
    const fileRef = storageRef.child(filePath)
    try {
    await fileRef.put(file)
    } catch (error) {
    console.error('Error uploading file:', error)
    }
}

deleteFile = async filePath => {
    const storageRef = this.storage.ref()
    const fileRef = storageRef.child(filePath)
    try {
    await fileRef.delete()
    } catch (error) {
    console.error('Error deleting file:', error)
    }
}

getDownloadUrl = async filePath => {
    const storageRef = this.storage.ref(filePath)
    try {
    return await storageRef.getDownloadURL()
    } catch (error) {
    console.error('Could not get download url:', error)
    }
}
}
