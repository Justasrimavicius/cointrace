import { db } from '../Components/Firebase-config'
import { setDoc, doc } from "firebase/firestore"; 

async function setAvatarInFB(avatar,UID){
    console.log(UID);
    console.log(avatar);
    try {
        // const docRef = await addDoc(collection(db, "users"), {
        //   avatar: 'avatar'
        // });
        await setDoc(doc(db, "users", `${UID}`), {
            avatar: `${avatar}`
          });

      } catch (e) {
        console.error("Error adding document: ", e);
      }



}

export default setAvatarInFB;