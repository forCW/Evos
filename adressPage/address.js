let adress_arr = [
    {
        id: 1,
        name: "001-Юнусабад",
        adress: "г. Ташкент, Юнусабадский район, Квартал 5, 11а дом",
        time: "09:00 - 03:00",
       
    },
    {
        id: 2,
        name: "002-Паркентский",
        adress: "г. Ташкент, М.Улугбекский район, ул. Мухаммад Юсуф, 1А.",
        time: "09:00 - 03:00",
     
    },
    {
        id: 3,
        name: "003-Софийский",
        adress: "г. Ташкент, Шайхонтохурский район, Малая колцевая, 29 А дом.",
        time: "09:00 - 03:00",
       
    },
    {
        id: 4,
        name: "004-Чиланзар",
        adress: "г. Ташкент, Чиланзарский район, улица Фархадская, дом 10.",
        time: "09:00 - 03:00",
    
    },
    {
        id: 5,
        name: "005-Алгоритм ",
        adress: "г. Ташкент, Чиланзарский район, ул. Сугалли Ота, рядом с д. 56",
        time: "09:00 - 03:00",
      
    },
    {
        id: 6,
        name: "006-Фрунзе",
        adress: "Самарканд, улица Амира Тимура, 93А",
        time: "09:00 - 03:00",

    }
]


const container = document.getElementById('main');

let section2 =""

adress_arr.map(
    (item) => 
    (section2 += ` <a href="../filialPage_detail/filial_adress.html?id=${item.id}">
    <div class="card">
        <div>
            <h2 class="name">${item.name}</h2>
            <p class="address">${item.adress}</p>
        </div>
        <div class="work-time">
            <p class="label">Время работы</p>
            <div class="time">
                <p>Ежедневно:</p>
                <p class="time-value">${item.time}</p>
            </div>
        </div>
        <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>
        </svg>
    </div>
</a>`)
)

container.innerHTML += section2;