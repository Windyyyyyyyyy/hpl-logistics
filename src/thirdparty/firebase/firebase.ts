import { firestore } from "../firebase/config"; ;
import { collection, addDoc } from "firebase/firestore";

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  isNew: boolean;
}

export const sendMessage = async (message: ContactMessage) => {
  try {
    const messagesRef = collection(firestore, "messages");
    await addDoc(messagesRef, message);
    return true;
  } catch (error) {
    console.log("Error sending message:", error);
    return false;
  }
};

export const saveEmail = async (email: string) => {
    try {
      const emailsRef = collection(firestore, "subscribers");
      await addDoc(emailsRef, { email, createdAt: new Date() });
      return true;
    } catch (error) {
      console.log("Error saving email:", error);
      return false;
    }
  };