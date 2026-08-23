import React from 'react'
import Home_Header from './Home_Header'
import Cards from './Cards'
import FashionHeroSlider from "./FashionHeroSlider"
const products = [
 
  {
    id: 2,
    name: "Eid Dress for Men",
    price: 89.99,
    details: "Elegant, comfortable, and perfect for celebrating Eid in style.",
    image: "https://images.openai.com/static-rsc-4/9IfQXCaeWtHUK6Iz_1fp49vS6bXPcMq0LpFzqMvrbuJuXJqACikq8TXQcVEPZTSYNJFbTWtGfbFDm1F4fMRB2xffiYWsJ_mbrVw0CpcheBMUZ3ryAFG7puDemSo9u-IQw2Jx8ZlODh7-t3gT3wFXjS5vPbeoAIdO0IHy4TI9X9Kr6DIjQwiMAUamMbnwBVoR?purpose=fullsize",
  },

  {
    id: 3,
    name: "Kids cothes",
    price: 44.99,
    details: "Comfortable, colorful, and perfect for everyday wear.",
    image: "https://www.shopmodest.pk/cdn/shop/files/Artboard_41.png?v=1785407075&width=900",
  },
  {
    id: 4,
    name: "Party Wear Suit",
    details: "Sophisticated design with decorative , ideal for weddings and formal events.",
    price: "$25.00",
    image:
      "https://images.openai.com/static-rsc-4/5h0fPQwqfJ67WeX0sOsQrWVmW-aHxfZBARyx56OzhuDxjX_SOs1rPs3T2ou2lxwIVVQ_5JZt4vXnDY9QWD1PVKV6lhvpwcgVo7tn2sdTG7q632Eun3o6r-UkDctzF32I8F0Y3HpxqQXwvkgA0IfsdNWTIiYBz41i705g5oOpRO0koaWbSe-LeotvRjhm2yfM?purpose=fullsize",
  },

    {
    id: 5,
    name: "Kurta Pajama",
    details: "Classic traditional wear with a simple, stylish look, and festive occasions.",
    price: "$35.00",
    image:
      "https://images.openai.com/static-rsc-4/_ZdfMdtGqiOJ7rtW7Icytv9my0CEb6rKwr9nqp4QjXPpTTIwYL3q-eOkG4nVMlL9aRE6SP0g5P2siwUOFCgiTZT9pAm2IljBO9JPEWkcFjbP3b9ZtLIMSrgKS-vw7TPdq2h84a6SnR6SMuIXUxZLlVO7PJhz_aPs8JL7UtouMlhYSDvrc_Tnt6Cu9f1ls-i4?purpose=fullsize",
  },
{
    id: 6,
    name: "Women’s 3-Piece Suit",
    details: "Elegant shirt, trouser, and dupatta designed for casual and festive wear.",
    price: "$35.00",
    image:"https://images.openai.com/static-rsc-4/20horw8pr4swsU2NwDcYQAmSWJq_0GV4_kttwAUaBYPfrAfoBzQAzRAeULJ2xbJN6zLiUTXMuAwCGnwttIqfrjF0Vq_WlNiCfXgOoLkeWKBWK-bxZdJlXNAilsbIatIwSrzWqDQciPmEL_xzmaWzyFoZfKTmILs_vPLBrFfh3d3ROIJvHJxFkIq4J4FMUpQ2?purpose=fullsize",
  },
  {
    id: 7,
    name :"Kids cothes",
    details : "Perfect for everyday wear, parties, and special occasions.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/gtdM_XzdsVjhp3Y-f4IjUjELj-2aeS3qMbkzuJYANltr_WEvFQliiIoiDmDY-l6x4VUFafJKcmrqP126fpuIzPJQllbKuVwVWPD1lB3x9AxCOZVEGdQZqTz8DoUwO-2LfjGwDl8l8obNfvRxN37asrL98HCF2M6rBpRV-yyc0sT4sWIt-3BV0VBC--Prx93p?purpose=fullsize"
  },
  {
    id: 7,
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
  
];

export default function Home() {
  return (
    <div>
<FashionHeroSlider/>
  <section className='Shop-section'>
    
    <div className='shope-container'>
      
      <div className='shop-title'>
   {/* <h1>The Home</h1>
    <p>Discover stylish products for every lifestyle and occasion.
Shop quality clothing, shoes,<br></br> and accessories in one place.
Find your favorite styles at great prices.</p>*/}
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
    </div>
  )
}
