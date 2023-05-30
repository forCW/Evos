const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

console.log(myParam)

let arrData = [
    {
        id: 1,
        name: "001-Юнусабад",
        adress: "г. Ташкент, Юнусабадский район, Квартал 5, 11а дом",
        time: "09:00-03:00",
        phone: "712031212",
        orient: "Рынок универсам",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5706351721433!2d69.27237967651837!3d41.36168539758842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb8319fde1f%3A0xdd31d628156bc1b4!2sYunusabad-5%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1685379667990!5m2!1sen!2s"
    },
    {
        id: 2,

        name: "002-Паркентский",
        adress: "г. Ташкент, М.Улугбекский район, ул. Мухаммад Юсуф, 1А.",
        time: "09:00 - 03:00",
        phone: "",
        orient: "ТЦ Парус.",
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5706351721433!2d69.27237967651837!3d41.36168539758842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb8319fde1f%3A0xdd31d628156bc1b4!2sYunusabad-5%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1685379667990!5m2!1sen!2s"
    },
    {
        id: 3,
        name: "003-Софийский",
        adress: "г. Ташкент, Шайхонтохурский район, Малая колцевая, 29 А дом.",
        time: "09:00 - 03:00",
        phone: "",
        orient: "Медиа парк",
         iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5706351721433!2d69.27237967651837!3d41.36168539758842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb8319fde1f%3A0xdd31d628156bc1b4!2sYunusabad-5%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1685379667990!5m2!1sen!2s"
    },
    {
        id: 4,
        name: "004-Чиланзар",
        adress: "г. Ташкент, Чиланзарский район, улица Фархадская, дом 10.",
        time: "09:00 - 03:00",
        phone: "",
        orient: "Алайский базар",
         iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5706351721433!2d69.27237967651837!3d41.36168539758842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb8319fde1f%3A0xdd31d628156bc1b4!2sYunusabad-5%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1685379667990!5m2!1sen!2s"
    },
    {
        id: 5,
        name: "005-Алгоритм ",
        adress: "г. Ташкент, Чиланзарский район, ул. Сугалли Ота, рядом с д. 56",
        time: "09:00 - 03:00",
        phone: "",
        orient: "Метро Ойбек",
         iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5706351721433!2d69.27237967651837!3d41.36168539758842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb8319fde1f%3A0xdd31d628156bc1b4!2sYunusabad-5%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1685379667990!5m2!1sen!2s"
    },
    {
        id: 6,
        name: "006-Фрунзе",
        adress: "Самарканд, улица Амира Тимура, 93А",
        time: "09:00 - 03:00",
        phone: "",
        orient: "Некст",
         iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5706351721433!2d69.27237967651837!3d41.36168539758842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb8319fde1f%3A0xdd31d628156bc1b4!2sYunusabad-5%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1685379667990!5m2!1sen!2s"
    },
]

let currentData = {
}


switch (Number(myParam)) {
    case 1:
        currentData = arrData[0]
        break;
    case 2:
        currentData = arrData[1]
        break;
    case 3:
        currentData = arrData[2]
        break;
    case 4:
        currentData = arrData[3]
        break;
    case 5:
        currentData = arrData[5]
        break;
    default:
        break;
}

console.log(currentData)

const container = document.querySelector('.main');

container.innerHTML = `<div class="box">
<div>
    <h2>${currentData.name}</h2>
    <div class="container_adress">
    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
            </path>
        </svg>
        <p>Адрес:</p>
        <p>${currentData.adress}</p>
    </div>

    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
        <p>Часы работы:</p>
        <p>${currentData.time}</p>
    </div>

    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
        <p>Номер телефона:</p>
        <p>${currentData.phone}</p>
    </div>

    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></svg>
        <p>Ориентир:</p>
        <p>${currentData.orient}</p>
        </div>
    </div>    
    
</div>
<div class="map">
    <iframe src="${currentData.iframe}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>`;