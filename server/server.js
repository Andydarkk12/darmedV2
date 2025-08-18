const TelegramBot = require('node-telegram-bot-api');
const cors = require("cors")
const token = "8441908209:AAGV-6-L9ujDSbpYYBV3JKsohjuuBgwHN1g"
const express = require('express')
const app = express()
const port = 8000

app.use(cors());
app.use(express.json());
//7063397337 darmed
//1644953534 me
//1859791845 mom

const bot = new TelegramBot(token, {
    polling: true
});

const example = {
    type:'УЗИ',
    date:'завтра',
    name:'Андрей',
    phone:'880005553535',
    comment:'что то',
}

const parseObject = (object) =>{
    return ` <b>Вид исследования:</b> ${object.type}\n\n<b>Предпочтительная дата:</b>  ${object.date}\n\n<b>Фамилия Имя Очество:</b>  ${object.name}\n\n<b>Номер телефона:</b>  ${object.phone}\n\n<b>Комментарий:</b>  ${object.comment}\n`
}

const sendMessage = async (data) =>{
    await bot.sendMessage(1644953534, `<b>Новая заявка на сайте!</b>\n\n`+parseObject(data),{parse_mode: 'HTML'});
}
bot.on('message', (msg) => {
    console.log('Новое сообщение от пользователя:', msg);
});


app.post('/', async (req, res) => {
    try {
        const formData = req.body; // данные из React
        await sendMessage(req.body);
        res.json({ success: true });
    } catch (err) {
        console.error('Ошибка при отправке сообщения:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})