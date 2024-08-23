import Button from "../button/Button";
import styles from "./Contact.module.css"
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";


const ContactForm = () => {

  const [name, setName] = useState("Binaya");
  const [email, setEmail] = useState("support@coding.com");
  const [text, setText] = useState("Write something here.");


  const onSubmit = (event) => {
    event.preventDefault();

  
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
   

    console.log(name, email, text)
  }

  return <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
      
      <Button 
      text="VIA  CALL" icon={<FaPhoneAlt fontSize="24px" />}/>
      </div>
      <Button isOutline={true} text="VIA  EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/>

      <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="8" />
        </div>
        <div style={{display:"flex",
         justifyContent:"end",
         }}>
          <Button text="SUBMIT" />
        </div>
        <div>
          {name + " " + email + " " + text}
        </div>
      </form>

    console.log("name", event.target[3].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);

    </div>
    <div className={styles.contact_image}>
      {/* <img src="" alt="Contact Image" /> */}
    </div>
  </section>
}

export default ContactForm;