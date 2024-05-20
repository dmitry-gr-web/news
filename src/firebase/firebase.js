import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { set, ref, get, remove } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCYPWsMkl8J4XlCcSSWFtT30gyXauxAqp0",
  authDomain: "newsapp-e44ca.firebaseapp.com",
  databaseURL: "https://newsapp-e44ca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "newsapp-e44ca",
  storageBucket: "newsapp-e44ca.appspot.com",
  messagingSenderId: "762344126793",
  appId: "1:762344126793:web:f0fa47bffdccf9f5040298"
};

initializeApp(firebaseConfig)
const db = getDatabase()

export async function AddToDataBase({title,text,link,imgUrl}) {
  const id = Date.now()
  const date = (new Date()).toLocaleString()
  try {
    await set(ref(db, 'news/' + id), {
      id: id,
      title,
      text,
      link,
      date,
      imgUrl
      // imgUrl: 'https://cdn.magicdecor.in/com/2023/09/19171540/Gautam-Buddha-Stone-Textured-Wallpaper.jpg',
    })
  } catch (error) {
    console.log(error)
  }
}
export async function GetFromDataBase() {
  try {
    const data = await get(ref(db, 'news/'))
    if (data.exists()) {
      const dataArray = Object.values(data.val()).reverse()
      return dataArray
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  }

}
export async function RemoveFromDataBase(id) {
  try {
    await remove(ref(db, `news/${id}`))
  } catch (error) {
    console.log(error)
  }
}





