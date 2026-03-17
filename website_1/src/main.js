import './style.css'
import placeholderImg from './assets/MinminFish.png'

// Native browser tooltips work via the `title` attribute. No JS initialization is needed.
document.querySelector('#app').innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Marketing Services</title>
    <style>
        body{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f3ffc6;
            color: #333;
            text-align: center;
        }
        nav {
            background-color: #2c3e50;
            padding: 10px 20px;
            display: flex;  
            justify-content: space-between;
        }
        nav .tabs{
            display: flex;
            justify-content: flex-end;
        }
        nav .tabs ul {
            display: flex;
            gap: 18px;
            margin: 0;
            padding: 0;
            list-style: none;
            align-items: center;
        }
        nav .tabs li {
            margin: 0;
        }
        nav .navbar-brand img {
            filter: invert(100%);
        }
        nav .nav-link {
            color: white;
            margin-left: 20px;
            text-decoration: none;
            font-weight: bold;
        }

        header {
            background-color: #2c3e50;
            background-size: cover;
            background-position: center;
            color: white;
            padding: 60px 20px;
        }
        main {
            padding: 20px;
        }
        .abtServices {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .service-box {
            border: 1px solid black;
            background-color: white;
            border-radius: 15px;
            padding: 20px;
            margin: 20px auto;
            max-width: 400px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        #Email{
            margin-top: 0px;
            margin-bottom: 12px;
        }
        

        .products {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 20px;
            margin-top: 40px;
            padding: 20px;
            justify-items: center;
        }

        .product-card {
            background-color: white;
            border:1px solid black;
            border-radius: 15px;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.12);
            overflow: hidden;
            width: 100%;
            max-width: 320px;
            text-align: left;
        }

        .product-card img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
        }

        .product-card .card-body {
            padding: 16px;
        }

        .product-card .card-title {
            margin: 0 0 10px;
            font-size: 1.1rem;
        }

        .product-card .card-text {
            margin: 0 0 16px;
            color: #555;
            font-size: 0.95rem;
        }

        .product-card .btn {
            display: inline-block;
            padding: 8px 14px;
            background-color: #3498db;
            color: white;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
        }

        .contact-button {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 10px;
        }
        footer {
            background-color: #2c3e50;
            color: white;
            padding: 10px;
            // position: fixed;
            bottom: 0;
            width: 98.3%;
        }
        .text-r {
            color: #e74c3c;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar bg-body-tertiary">
        <div class="logo container-fluid">
            <h4 style="color: white;"><span class="text-r">T</span>ezpur<span class="text-r">D</span>igital<span class="text-r">H</span>ub</h4>
        </div>
        <div class="tabs container-fluid">
            <ul class="nav justify-content-end">
                <li class="nav-item"><a class="nav-link" href="/about.html">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#footer">Contact</a></li>
                <li class="nav-item"><a class="nav-link" aria-disabled="true" href="/services.html" disabled >Services</a></li>
            </ul>
        </div>
    </nav>


    <header class="header">
        <h1>Growth Marketing</h1>
        <p>Helping local businesses grow their online presence.</p>
    </header>

    <main>
      <div class="abtServices">
        <div class="service-box">
            <h3>Social Media Management</h3>
            <p>Engaging content creation and daily management for your Facebook and Instagram pages.</p>
        </div>
        <div class="service-box">
            <h3>Local SEO</h3>
            <p>Get your business ranking higher on Google Maps so local customers can find you easily.</p>
        </div>
      </div>
      <hr>
      <p>Lets start growing your business!</p>
      <a id="Email" title="This will create an Email ready for you to send!" href="https://mail.google.com/mail/?view=cm&fs=1&to=dmondeep632@gmail.com&su=Lets%20grow" target="_blank" rel="noopener" class="contact-button">Email Me to Start</a>
      <hr>
    </main>

    <div id="products" class="products"></div>

    <footer id="footer">
        <div class="contact-info">
            Stay connected with us:
              <li><a href="https://www.facebook.com/profile.php?id=61587002411136" target="_blank">Facebook</a></li>
              <li><a href="https://www.instagram.com/yourpage" target="_blank">Instagram</a></li>
            <p>Contact us at: dmondeep632@gmail.com</p>
        </div>
        <br>
        <p>© 2026 Growth Marketing. All rights reserved.</p>
    </footer>

</body>
</html>

`
// Product listing data - this can be fetched from an API or database in a real application
const img_placeholder = placeholderImg;
const products = [
  {
    title: 'Product 1',
    description: 'A brief description of the product goes here. Highlight the key value or feature.',
    img: "",
    href: '#'
  },
  {
    title: 'Product 2',
    description: 'A short description for the second product. Keep it clear and inviting.',
    img: "",
    href: '#'
  },
  {
    title: 'Product 3',
    description: 'Another product description. Add product details, pricing, or highlights.',
    img: 'https://via.placeholder.com/320x180',
    href: '#'
  },
  {
    title: 'Product 4',
    description: 'A short description for the fourth product. Keep it clear and inviting.',
    img: 'https://via.placeholder.com/320x180',
    href: '#'
  }
]

const productsContainer = document.querySelector('#products')
if (productsContainer) {
  productsContainer.innerHTML = products
    .map((product) => {
      const imgSrc = product.img && product.img.trim() ? product.img : img_placeholder
      const imgAlt = product.alt && product.alt.trim() ? product.alt : `${product.title} image`

      return `
        <div class="product-card">
          <img src="${imgSrc}" alt="${imgAlt}" loading="lazy" onerror="this.onerror=null;this.src='${img_placeholder}'" />
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <a href="${product.href}" class="btn">Learn more</a>
          </div>
        </div>
      `
    })
    .join('')
}
