import React from 'react'
import Home_Header from '../Home_Header';
import Cards from '../Cards';
const products = [
   {
    id: 1,
    name: "Kids cothes",
    price: 44.99,
    details: "Comfortable, colorful, and perfect for everyday wear.",
    image: "https://www.shopmodest.pk/cdn/shop/files/Artboard_41.png?v=1785407075&width=900",
  },
   {
    id: 2,
    name :"Kids cothes",
    details : "Perfect for everyday wear, parties, and special occasions.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/gtdM_XzdsVjhp3Y-f4IjUjELj-2aeS3qMbkzuJYANltr_WEvFQliiIoiDmDY-l6x4VUFafJKcmrqP126fpuIzPJQllbKuVwVWPD1lB3x9AxCOZVEGdQZqTz8DoUwO-2LfjGwDl8l8obNfvRxN37asrL98HCF2M6rBpRV-yyc0sT4sWIt-3BV0VBC--Prx93p?purpose=fullsize"
  },
  {
    id: 3,
    name :"Kids cothes",
    details : "Cute, comfortable, and stylish outfits for kids.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/NzvnS9U3DFbMuzip0caQ-DrOJG54PzNjAiP5IRHoPU_RIGyAswuA5gOgzRGfysmJqN4i5DlsAcZeLr7fgg38Br-Vev7XQ4IJ96MTl8YBTBvA4UB10DGU_Do1fSLQxAZjkiFvrLeqhiqiVfvOpzw1-yhzQzAKCq20mQO-gQ2aokvc_twQzkWOlB9_GUgYD-6M?purpose=fullsize"
  },
  {
    id : 4,
    name : "Boys Black Sherwani",
    details :"Stylish black sherwani for boys, perfect for weddings.",
    price :"35",
    image :"https://www.mumkins.in/cdn/shop/products/sherwani-for-boys-bs102570-black-1.jpg?v=1757577253&width=1080",
  },
  {
    id : 5,
    name : "Black Sport Sandals",
    details :"Comfortable black sandals with adjustable straps and sporty design.",
    price :"25",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9UR0aCaBsSQvS94VmM00s1MotknJW_OkhiuZIzna47hN0iv-WF-WMEo&s=10",
  },
  {
    id : 6,
    name : "Kids Casual Sneakers",
    details :"Lightweight breathable sneakers designed for active kids.",
    price :"22",
    image :"https://aiksow.pk/wp-content/uploads/2023/10/Baasploa-Children-Sport-Shoes-Mesh-Breathable-Casual-Sneakers-For-Boys-Girl-Lightweight-Running-Shoes.jpg",
  },
  {
    id : 7,
    name : "Kids Casual Shoes",
    details :"Comfortable and stylish shoes for everyday kids' wear.",
    price :"20",
    image :"https://pk-live-21.slatic.net/kf/S7de5e7ff8bc5495f80adf668c095cbc7e.jpg",
  },
  {
    id : 8,
    name : "Kids Casual Sneakers",
    details :"Comfortable sneakers with a cute, sporty design.",
    price :"22",
    image :"https://img.kwcdn.com/product/fancy/36b1f3d4-2a5a-44c9-a1e9-aecb296e6c39.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
  },

 ];
function Kids_products() {
  return (
    <>
      <section className='Shop-section'>
    <div className='shope-container'>
      <div className='shop-title'>
    <h1>The Home</h1>
    <p>Discover stylish products for every lifestyle and occasion.
Shop quality clothing, shoes,<br></br> and accessories in one place.
Find your favorite styles at great prices.</p>
      </div>
<Home_Header/>

<div className="shop-grid">
          {products.map((product) => (
            <Cards
              key={product.id}
              product={product}
            />
          ))}
        </div>
    </div></section>
    </>
  )
}

export default Kids_products;