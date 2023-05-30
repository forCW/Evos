const meals = [
    {
      id: 1,
      name: "Донар с говядиной",
      price: "41000 sum",
      img_url: "https://cp.ectn.uz/files//donar_s_govyadinoy_evos.png"
    },
    {
      id: 2,
      name: "Донар с курицей",
      price: "38000 sum",
      img_url: "https://cp.ectn.uz/files//donar_s_kuricey_evos.png"
    },
    {
      id: 3,
      name: "Стрипсы",
      price: "18000 sum",
      img_url: "https://cp.ectn.uz/files//0622/strips_iz_kurochki_evos.png"
    },
    {
      id: 4,
      name: "Донар-бокс с говядиной",
      price: "32000 sum",
      img_url: "https://cp.ectn.uz/files//donar_box_beef.png"
    }
  ];
  
  const container = document.getElementById('container');
  let mealCardsHTML = '';
  
  meals.forEach(item => {
    mealCardsHTML += `
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
  
  container.innerHTML = mealCardsHTML;
  