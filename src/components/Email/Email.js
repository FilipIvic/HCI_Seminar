import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styles from '../Email/style.module.css'

const Email = (props) => {

  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [input3, setInput3] = useState("")
  const [input4, setInput4] = useState("")

  const handleChange1 = (e) => {
    e.preventDefault()
    setInput1(e.target.value)
    console.log(e.target.value)
  }
  const handleChange2 = (e) => {
    e.preventDefault()
    setInput2(e.target.value)
    console.log(e.target.value)
  }
  const handleChange3 = (e) => {
    e.preventDefault()
    setInput3(e.target.value)
    console.log(e.target.value)
  }
  const handleChange4 = (e) => {
    e.preventDefault()
    setInput4(e.target.value)
    console.log(e.target.value)
  }

  function sendEmail(e) {
    e.preventDefault();

    if(input1.length === 0 || input2.length === 0 || input3.length === 0 || input4.length === 0){
        alert("Polja ne smiju biti prazna!")
        return false
    }
    else
    {
        emailjs.sendForm('service_sgng1q5', 'template_508w42h', e.target, 'user_x9tXLKxQIGeKkMu4izPat')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("Poruka poslana")
        e.target.reset()
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <form name="myForm" onSubmit={sendEmail}>
          <div className={styles.form}>
            <div>
              <div className={styles.namediv}>
                  <input type="text" className={styles.name} placeholder=" Vaše Ime..." name="name" onChange={handleChange1} value={input1}/>
              </div>
              <div className={styles.emaildiv}>
                  <input type="email" className={styles.email} placeholder=" Vaša Email Adresa..." name="email" onChange={handleChange2} value={input2}/>
              </div>
              <div className={styles.subjectdiv}>
                  <input type="text" className={styles.subject} placeholder=" Predmet..." name="subject" onChange={handleChange3} value={props.name}/>
              </div>
            </div>
            <div>
              <div className={styles.messagediv}>
                  <textarea className={styles.message} id="" cols="40" rows="8" placeholder=" Vaš Zahtijev..." name="message" onChange={handleChange4} value={input4}></textarea>
              </div>
            </div>
          </div>
          <div className={styles.buttondiv}>
            <input type="submit" className={styles.button} value="Pošalji Zahtijev"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Email