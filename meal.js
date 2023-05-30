let famous_food_arr = [
    {
      id: 1,
      name: "Лаваш с говядиной",
      price: "26 000 sum",
      img_url: "https://cp.ectn.uz/files//donar_box_beef.png"
    },
    {
      id: 2,
      name: "Лаваш с курицей",
      price: "24 000 sum",
      img_url: "https://cp.ectn.uz/files//web/lavash_kur.png"
    },
    {
      id: 3,
      name: "Шаурма острая",
      price: "21 000 sum",
      img_url: "https://cp.ectn.uz/files//0622/shaurma_s_govyadinoy_sredniy_evos.png"
    },
    {
      id: 4,
      name: "Гамбургер",
      price: "22 000 sum",
      img_url: "https://cp.ectn.uz/files//0622/gamburger_evos.png"
    },
    {
      id: 5,
      name: "Хот-дог",
      price: "13 000 sum",
      img_url: "https://cp.ectn.uz/files//0622/hot_dog_Baguette_evos.png"
    },
    {
      id: 6,
      name: "Картофель Фри",
      price: "13 000 sum",
      img_url: "https://cp.ectn.uz/files//kartofel_fri_evos.png"
    },
    {
      id: 7,
      name: "Саб с говядиной и сыром",
      price: "20 000 sum",
      img_url: "https://cp.ectn.uz/files//0622/sub_s_govyadinoy_s_sirom_evos.png"
    },
    {
      id: 8,
      name: "Триндвич",
      price: "24 000 sum",
      img_url: "https://cp.ectn.uz/files//0622/trend_wich.png"
    }
  ];
  
  const container1 = document.getElementById('container2');
  let foodCardsHTML = '';
  
  famous_food_arr.forEach(item => {
    foodCardsHTML += `
      <div class="menu-card">
        <div class="image-container">
          <img src="${item.img_url}" alt="Meal Image" class="meal-image">
        </div>
        <div class="content-container">
          <h3 class="meal-name">${item.name}</h3>
          <p class="meal-price">${item.price}</p>
        </div>
        <button class="add-button">Add</button>
      </div>
    `;
  });
  
  container1.innerHTML = foodCardsHTML;
  console.log(foodCardsHTML);
  