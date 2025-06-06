
  // document.querySelector('form').addEventListener('submit', function (e) {
  //   e.preventDefault();

  //   const imageUrl = document.getElementById('imageUrl').value;
  //   const description = document.getElementById('description').value;
  //   const price = document.getElementById('price').value;

  //   // Validate
  //   if (!imageUrl || !description || !price) {
  //     alert('Please fill all fields.');
  //     return;
  //   }

  //   // Create product object
  //   const product = {
  //     id: Date.now(), // unique ID
  //     imageUrl,
  //     description,
  //     price
  //   };

  //   // Get existing products from localStorage
  //   const existing = JSON.parse(localStorage.getItem('products')) || [];

  //   // Add new product
  //   existing.push(product);

  //   // Save back to localStorage
  //   localStorage.setItem('products', JSON.stringify(existing));

  //   alert('Product added successfully!');
  //   window.location.href = "index.html";

  //   // Reset form
  //   this.reset();
  // });





//   document.querySelector('form').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const imageUrl = document.getElementById('imageUrl').value;
//   const description = document.getElementById('description').value;
//   const price = document.getElementById('price').value;

//   // Validate
//   if (!imageUrl || !description || !price) {
//     alert('Please fill all fields.');
//     return;
//   }

//   // Create product object
//   const product = {
//     id: Date.now(), // unique ID
//     imageUrl,
//     description,
//     price
//   };
//   console.log(product)

//   // ✅ Save to userProducts instead of products
//   const userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
//   userProducts.push(product);
//   localStorage.setItem('userProducts', JSON.stringify(userProducts));

//   alert('Product added successfully!');
//   window.location.href = "index.html"; // or just reload if needed

//   this.reset();
// });
 














document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const fileInput = document.getElementById('imageFile');
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;

  if (!fileInput.files[0] || !description || !price) {
    alert('Please fill all fields and select an image.');
    return;
  }

  const formData = new FormData();
  formData.append("image", fileInput.files[0]);

  try {
    // 🔑 Replace YOUR_API_KEY with your actual ImgBB key
    const res = await fetch("https://api.imgbb.com/1/upload?key=d394107dd34fd68fc3e4a8f662b74c1a", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    const imageUrl = data.data.url;

    // Save to localStorage
    const product = {
      id: Date.now(),
      imageUrl,
      description,
      price
    };

    const userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
    userProducts.push(product);
    localStorage.setItem('userProducts', JSON.stringify(userProducts));

    alert('Product added successfully!');
    window.location.href = "index.html";

  } catch (error) {
    console.error("Upload failed", error);
    alert("Image upload failed.");
  }
});
