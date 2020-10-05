export default (firestore, collectionName, idsArray) => {
  const refs = idsArray.map(id => firestore.doc(`${collectionName}/${id}`))

  const docs = refs.map(async ref => {
      try {
        const doc = await ref.get()
        if (!doc.exists) {
            return null
        } 
        return await doc.data()
      } catch (error) {
        console.log("Error getting Document data")
        return {}
      }
  })
  let documents = []
  Promise.all(docs).then(values => {
    values.forEach(v => documents.push(v))
  })
  return documents
}