// // // // Import the functions you need from the SDKs you need
// // // import { initializeApp } from "firebase/app";
// // // import { getAnalytics } from "firebase/analytics";
// // // // TODO: Add SDKs for Firebase products that you want to use
// // // // https://firebase.google.com/docs/web/setup#available-libraries

// // // // Your web app's Firebase configuration
// // // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // // const firebaseConfig = {
// // //   apiKey: "AIzaSyCfFBgR1cKDvKQ8K2cu93rUMexFrJ26VBQ",
// // //   authDomain: "perfume-app-10878.firebaseapp.com",
// // //   projectId: "perfume-app-10878",
// // //   storageBucket: "perfume-app-10878.firebasestorage.app",
// // //   messagingSenderId: "723191079590",
// // //   appId: "1:723191079590:web:ed86e7b302a0fe752d4a67",
// // //   measurementId: "G-8SWG7J7LET"
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // // const analytics = getAnalytics(app);






//   // const searchInput = document.querySelector('.search-box input');
//   // const perfumeCards = document.querySelectorAll('.card-container .card');

//   // searchInput.addEventListener('keyup', function () {
//   //   const query = this.value.toLowerCase();

//   //   perfumeCards.forEach(card => {
//   //     const name = card.getAttribute('data-name').toLowerCase();
//   //     const match = name.includes(query);
//   //     card.style.display = match ? 'block' : 'none';
//   //     // alert("Product not found")
//   //   });
//   // });

// window.onload = function () {
//   loadDynamicProducts();

//   const searchInput = document.querySelector('.search-box input');

//   searchInput.addEventListener('keyup', function () {
//     const query = this.value.toLowerCase();
//     const perfumeCards = document.querySelectorAll('.card-container .card'); // Now selects after cards exist

//     perfumeCards.forEach(card => {
//       const name = card.getAttribute('data-name').toLowerCase();
//       const match = name.includes(query);
//       card.style.display = match ? 'block' : 'none';
//     });
//   });
// };



// localStorage.setItem('products', JSON.stringify([
//   {
//     id: 1,
//     description: "Emper President Saviour Perfume For Men 100ml",
//     price: "3200",
//     imageUrl: "https://perfumehut.com.pk/wp-content/uploads/2023/11/Emper-President-Saviour-Perfume-For-Men-100ml-1-800x800.webp"
//   },
//   {
//     id: 2,
//     description: "Dirham Perfume EDP - 100ml",
//     price: "3199",
//     imageUrl: "https://www.catchnpack.pk/wp-content/uploads/2023/02/Dirham-Perfume-EDP-%E2%80%93-100ml.png"
//   },
//   {
//     id: 3,
//     description: "Hayyati Men  100ml",
//     price: "4,648.50",
//     imageUrl: "https://fragrancegallery.pk/wp-content/uploads/2022/08/lattafa-perfumes-hayaati-men-eau-de-parfum-100ml.png"
//   },
//   {
//     id: 4,
//     description: "Dark as wood EDP by fragrance world 100ml",
//     price: "Rs3,500",
//     imageUrl: "https://giftpoint.com.pk/cdn/shop/files/DarkAsWoodEDPByFragranceWorld100ml.png?v=1714253549"
//   }
// ]));



//   const isAdmin = localStorage.getItem('isAdmin') === 'true';

//  function loadDynamicProducts() {
//   const container = document.getElementById('productContainer');
//   const products = JSON.parse(localStorage.getItem('products')) || [];

//   products.forEach(product => {
//     const card = document.createElement('div');
//     card.className = 'card position-relative';
//     card.dataset.name = product.description;

//     card.innerHTML = `
//       <img src="${product.imageUrl}" alt="Perfume">
//       <div class="card-title">${product.description}</div>
//       <div class="card-price">
//         <span class="new-price">Rs ${product.price}</span>
//       </div>
    
//       <a href="https://wa.me/923343901525?text=I'm%20interested%20in%20${encodeURIComponent(product.description)}"
//          target="_blank"
//          class="whatsapp-icon">
//          <i class="fab fa-whatsapp"></i>
//       </a>
//     `;

//     container.appendChild(card);
//   });
// }


  // document.addEventListener('click', function (e) {
  //   if (e.target.classList.contains('remove-btn') && isAdmin) {
  //     const id = parseInt(e.target.dataset.id);
  //     let products = JSON.parse(localStorage.getItem('products')) || [];
  //     products = products.filter(p => p.id !== id);
  //     localStorage.setItem('products', JSON.stringify(products));
  //     e.target.closest('.card').remove();
  //   }
  // });

//   window.onload = loadDynamicProducts;










































































    // // ✅ Set products in localStorage (only if not already there)
    // if (!localStorage.getItem('products')) {
    //   localStorage.setItem('products', JSON.stringify([
    //     {
    //       id: 1,
    //       description: "Emper President Saviour Perfume For Men 100ml",
    //       price: "3200",
    //       imageUrl: "https://perfumehut.com.pk/wp-content/uploads/2023/11/Emper-President-Saviour-Perfume-For-Men-100ml-1-800x800.webp"
    //     },
    //     {
    //       id: 2,
    //       description: "Dirham Perfume EDP - 100ml",
    //       price: "3199",
    //       imageUrl: "https://www.catchnpack.pk/wp-content/uploads/2023/02/Dirham-Perfume-EDP-%E2%80%93-100ml.png"
    //     },
    //     {
    //       id: 3,
    //       description: "Hayyati Men  100ml",
    //       price: "4,648.50",
    //       imageUrl: "https://fragrancegallery.pk/wp-content/uploads/2022/08/lattafa-perfumes-hayaati-men-eau-de-parfum-100ml.png"
    //     },
    //     {
    //       id: 4,
    //       description: "Dark as wood EDP by fragrance world 100ml",
    //       price: "Rs3,500",
    //       imageUrl: "https://giftpoint.com.pk/cdn/shop/files/DarkAsWoodEDPByFragranceWorld100ml.png?v=1714253549"
    //     }
    //   ]));
    // }

    // // ✅ Load and render product cards
    // function loadDynamicProducts() {
    //   const container = document.getElementById('productContainer');
    //   container.innerHTML = ""; // Clear existing content
    //   const products = JSON.parse(localStorage.getItem('products')) || [];

    //   products.forEach(product => {
    //     const card = document.createElement('div');
    //     card.className = 'card';
    //     card.dataset.name = product.description;

    //     card.innerHTML = `
    //       <img src="${product.imageUrl}" alt="Perfume">
    //       <div class="card-title">${product.description}</div>
    //       <div class="card-price">
    //         <span class="new-price">Rs ${product.price}</span>
    //       </div>
    //       <a href="https://wa.me/923343901525?text=I'm%20interested%20in%20${encodeURIComponent(product.description)}"
    //          target="_blank"
    //          class="whatsapp-icon">
    //          <i class="fab fa-whatsapp"></i>
    //       </a>
    //     `;
    //     container.appendChild(card);
    //   });
    // }

    // // ✅ Initialize on window load
    // window.onload = function () {
    //   loadDynamicProducts();

    //   const searchInput = document.querySelector('.search-box input');
    //   searchInput.addEventListener('keyup', function () {
    //     const query = this.value.toLowerCase();
    //     const perfumeCards = document.querySelectorAll('.card-container .card');

    //     perfumeCards.forEach(card => {
    //       const name = card.getAttribute('data-name').toLowerCase();
    //       const match = name.includes(query);
    //       card.style.display = match ? 'block' : 'none';
    //     });
    //   });
    // };




















//    // ✅ Store initial products once if not already stored
// if (!localStorage.getItem('initialProducts')) {
//   localStorage.setItem('initialProducts', JSON.stringify([
//     {
//       id: 1,
//       description: "Emper President Saviour Perfume For Men 100ml",
//       price: "3200",
//       imageUrl: "https://perfumehut.com.pk/wp-content/uploads/2023/11/Emper-President-Saviour-Perfume-For-Men-100ml-1-800x800.webp"
//     },
//     {
//       id: 2,
//       description: "Dirham Perfume EDP - 100ml",
//       price: "3199",
//       imageUrl: "https://www.catchnpack.pk/wp-content/uploads/2023/02/Dirham-Perfume-EDP-%E2%80%93-100ml.png"
//     },
//     {
//       id: 3,
//       description: "Hayyati Men  100ml",
//       price: "4,648.50",
//       imageUrl: "https://fragrancegallery.pk/wp-content/uploads/2022/08/lattafa-perfumes-hayaati-men-eau-de-parfum-100ml.png"
//     },
//     {
//       id: 4,
//       description: "Dark as wood EDP by fragrance world 100ml",
//       price: "Rs3,500",
//       imageUrl: "https://giftpoint.com.pk/cdn/shop/files/DarkAsWoodEDPByFragranceWorld100ml.png?v=1714253549"
//     }
//   ]));
// }

// // ✅ Make sure userProducts exists
// if (!localStorage.getItem('userProducts')) {
//   localStorage.setItem('userProducts', JSON.stringify([]));
// }

// // ✅ Admin flag
// const isAdmin = localStorage.getItem('isAdmin') === 'true';

// function loadDynamicProducts() {
//   const container = document.getElementById('productContainer');
//   container.innerHTML = "";

//   const initialProducts = JSON.parse(localStorage.getItem('initialProducts')) || [];
//   const userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];

//   const allProducts = [...initialProducts, ...userProducts];

//   allProducts.forEach(product => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.dataset.name = product.description;
//     card.dataset.id = product.id;

//     card.innerHTML = `
//       <img src="${product.imageUrl}" alt="Perfume">
//       <div class="card-title">${product.description}</div>
//       <div class="card-price">
//         <span class="new-price">Rs ${product.price}</span>
//       </div>
//       <a href="https://wa.me/923343901525?text=I'm%20interested%20in%20${encodeURIComponent(product.description)}"
//          target="_blank"
//          class="whatsapp-icon">
//          <i class="fab fa-whatsapp"></i>
//       </a>
    
//     `;

//     container.appendChild(card);
//   });
// }

// window.onload = function () {
//   loadDynamicProducts();

//   const searchInput = document.querySelector('.search-box input');
//   searchInput.addEventListener('keyup', function () {
//     const query = this.value.toLowerCase();
//     const perfumeCards = document.querySelectorAll('.card-container .card');

//     perfumeCards.forEach(card => {
//       const name = card.getAttribute('data-name').toLowerCase();
//       const match = name.includes(query);
//       card.style.display = match ? 'block' : 'none';
//     });
//   });

//   // ✅ Remove button logic
//   document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('remove-btn') && isAdmin) {
//       const id = parseInt(e.target.dataset.id);
//       let userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
//       // Only allow removing user-added products
//       userProducts = userProducts.filter(product => product.id !== id);
//       localStorage.setItem('userProducts', JSON.stringify(userProducts));
//       loadDynamicProducts();
//     }
//   });
// };









// Store initial products once
// if (!localStorage.getItem('initialProducts')) {
//   localStorage.setItem('initialProducts', JSON.stringify([
//     {
//       id: 1,
//       description: "Emper President Saviour Perfume For Men 100ml",
//       price: "3200",
//       imageUrl: "https://perfumehut.com.pk/wp-content/uploads/2023/11/Emper-President-Saviour-Perfume-For-Men-100ml-1-800x800.webp"
//     },
//     {
//       id: 2,
//       description: "Dirham Perfume EDP - 100ml",
//       price: "3199",
//       imageUrl: "https://www.catchnpack.pk/wp-content/uploads/2023/02/Dirham-Perfume-EDP-%E2%80%93-100ml.png"
//     },
//     {
//       id: 3,
//       description: "Hayyati Men 100ml",
//       price: "4,648.50",
//       imageUrl: "https://fragrancegallery.pk/wp-content/uploads/2022/08/lattafa-perfumes-hayaati-men-eau-de-parfum-100ml.png"
//     },
//     {
//       id: 4,
//       description: "Dark as wood EDP by fragrance world 100ml",
//       price: "Rs3,500",
//       imageUrl: "https://giftpoint.com.pk/cdn/shop/files/DarkAsWoodEDPByFragranceWorld100ml.png?v=1714253549"
//     }
//   ]));
// }

// // Ensure userProducts exists
// if (!localStorage.getItem('userProducts')) {
//   localStorage.setItem('userProducts', JSON.stringify([]));
// }

// // Admin check
// const isAdmin = localStorage.getItem('isAdmin') === 'true';

// function loadDynamicProducts() {
//   const container = document.getElementById('productContainer');
//   container.innerHTML = "";

//   const initialProducts = JSON.parse(localStorage.getItem('initialProducts')) || [];
//   const userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
//   const allProducts = [...initialProducts, ...userProducts];

//   allProducts.forEach(product => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.dataset.name = product.description;
//     card.dataset.id = product.id;

//     card.innerHTML = `
//       <img src="${product.imageUrl}" alt="Perfume">
//       <div class="card-title">${product.description}</div>
//       <div class="card-price">
//         <span class="new-price">Rs ${product.price}</span>
//       </div>
//       <a href="https://wa.me/923343901525?text=I'm%20interested%20in%20${encodeURIComponent(product.description)}"
//          target="_blank"
//          class="whatsapp-icon">
//          <i class="fab fa-whatsapp"></i>
//       </a>
    
//     `;

//     container.appendChild(card);
//   });
// }

// window.onload = function () {
//   loadDynamicProducts();

//   // Search
//   const searchInput = document.querySelector('.search-box input');
//   searchInput.addEventListener('keyup', function () {
//     const query = this.value.toLowerCase();
//     const perfumeCards = document.querySelectorAll('.card-container .card');

//     perfumeCards.forEach(card => {
//       const name = card.getAttribute('data-name').toLowerCase();
//       card.style.display = name.includes(query) ? 'block' : 'none';
//     });
//   });

//   // Remove product (admin only)
//   document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('remove-btn') && isAdmin) {
//       const id = e.target.dataset.id;
//       let userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
//       userProducts = userProducts.filter(product => product.id !== id);
//       localStorage.setItem('userProducts', JSON.stringify(userProducts));
//       loadDynamicProducts();
//     }
//   });
// };










if (!localStorage.getItem('initialProducts')) {
  localStorage.setItem('initialProducts', JSON.stringify([
    {
      id: 1,
      description: "Emper President Saviour Perfume For Men 100ml",
      price: "3200",
      imageUrl: "https://perfumehut.com.pk/wp-content/uploads/2023/11/Emper-President-Saviour-Perfume-For-Men-100ml-1-800x800.webp"
    },
    {
      id: 2,
      description: "Dirham Perfume EDP - 100ml",
      price: "3199",
      imageUrl: "https://www.catchnpack.pk/wp-content/uploads/2023/02/Dirham-Perfume-EDP-%E2%80%93-100ml.png"
    },
    {
      id: 3,
      description: "Hayyati Men 100ml",
      price: "4,648.50",
      imageUrl: "https://fragrancegallery.pk/wp-content/uploads/2022/08/lattafa-perfumes-hayaati-men-eau-de-parfum-100ml.png"
    },
    {
      id: 4,
      description: "Dark as wood EDP by fragrance world 100ml",
      price: "Rs3,500",
      imageUrl: "https://giftpoint.com.pk/cdn/shop/files/DarkAsWoodEDPByFragranceWorld100ml.png?v=1714253549"
    }
  ]));
}

// Ensure userProducts exists
if (!localStorage.getItem('userProducts')) {
  localStorage.setItem('userProducts', JSON.stringify([]));
}

// Admin check
const isAdmin = localStorage.getItem('isAdmin') === 'true';

async function loadDynamicProducts() {
  const container = document.getElementById('productContainer');
  container.innerHTML = "";

  try {
    const response = await fetch('https://my-json-server.typicode.com/03332387456/perfume-products/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const allProducts = await response.json();

    allProducts.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.name = product.description;
      card.dataset.id = product.id;

      card.innerHTML = `
        <img src="${product.imageUrl}" alt="Perfume">
        <div class="card-title">${product.description}</div>
        <div class="card-price"><span class="new-price">Rs ${product.price}</span></div>
        <a href="https://wa.me/923343901525?text=I'm%20interested%20in%20${encodeURIComponent(product.description)}"
           target="_blank" class="whatsapp-icon">
           <i class="fab fa-whatsapp"></i>
        </a>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Failed to load products:", err);
    container.innerHTML = "<p>Unable to load products right now.</p>";
  }
}




window.onload = function () {
  loadDynamicProducts();

  // Search
  const searchInput = document.querySelector('.search-box input');
  searchInput.addEventListener('keyup', function () {
    const query = this.value.toLowerCase();
    const perfumeCards = document.querySelectorAll('.card-container .card');

    perfumeCards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      card.style.display = name.includes(query) ? 'block' : 'none';
    });
  });

  // Remove product (admin only)
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn') && isAdmin) {
      const id = e.target.dataset.id;
      let userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
      userProducts = userProducts.filter(product => product.id !== id);
      localStorage.setItem('userProducts', JSON.stringify(userProducts));
      loadDynamicProducts();
    }
  });
};













