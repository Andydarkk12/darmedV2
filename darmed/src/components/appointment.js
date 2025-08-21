import { useState } from "react"
import { checkString } from "./checkString"


export const Appointment = () =>{
    const [checkbox,setCheckbox] = useState(false)
    const [type,setType] = useState("")
    const [date,setDate] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [comment,setComment] = useState("")
    const [errorBox, setErrorBox] = useState(false)
    const [successBox, setSuccessBox] = useState(false)
    const [message,setMessage] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!checkString({
          type,
          date,
          name,
          phone,
          comment,
    })) {
      setErrorBox(true)
      setMessage('Данные введены некорректно')
      setTimeout(() => {
        setErrorBox(false)
      }, 3000);
      return
    }
    if (!checkbox){
      setErrorBox(true)
      setMessage('Подтвердите согласие на обработку данных')
      setTimeout(() => {
        setErrorBox(false)
      }, 3000);
      return
    }

    try {
      const response = await fetch("http://localhost:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          date,
          name,
          phone,
          comment,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();
      console.log("Ответ сервера:", result);
      {
      setSuccessBox(true)
      setMessage('Данные отправлены, мы свяжемся с вами в ближайшее время')
      setTimeout(() => {
        setSuccessBox(false)
      }, 3000);
      return
    }
    } catch (err) {
      console.error("Ошибка при отправке:", err);
      {
      setErrorBox(true)
      setMessage('Не удалось отправить заявку')
      setTimeout(() => {
        setErrorBox(false)
      }, 3000);
      return
    }
    }
  }; 

    return(
        <section className="container">
            {errorBox ? <div className="errorBox">{message}</div> :''}
            {successBox ? <div className="successBox">{message}</div> :''}
            <div className="appointment" id="appointment">
                <div className="text">
                    <h1>Записаться на прием</h1>
                    <p>Выберите удобное время для посещения нашей клиники</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="pair">
                        <div><label>Вид исследования (необязательно)</label>
                        <input onChange={(e)=>setType(e.target.value)} ></input></div>
                        <div><label>Предпочтительная дата (необязательно)</label>
                        <input onChange={(e)=>setDate(e.target.value)} type="date"></input></div>
                    </div>
                    <div className="pair">
                        <div><label>Фамилия Имя Очество</label>
                        <input onChange={(e)=>setName(e.target.value)} placeholder="Введите ФИО"></input></div>
                        <div><label>Номер телефона</label>
                        <input onChange={(e)=>setPhone(e.target.value)} placeholder="+7(___)-___-__-__"></input></div>
                    </div>
                    <div>
                        <label>Комментарий (необязательно)</label>
                        <textarea onChange={(e)=>setComment(e.target.value)}></textarea>
                    </div>
                    <div class="checkbox-container">
  <div class="checkbox-wrapper">
    <input onChange={(e)=>setCheckbox(e.target.value)} type="checkbox" id="privacy" class="checkbox-hidden"/>
    <div class="checkbox-custom">

    </div>
  </div>
  <label for="privacy" class="checkbox-label">
    Я согласен с 
    <a href="#" class="checkbox-link"> политикой конфиденциальности </a> 
    и обработкой персональных данных
  </label>
</div>

<button type="submit" class="submit-button">
  Отправить заявку
</button>
                </form>
            </div>
        </section>
    )
}