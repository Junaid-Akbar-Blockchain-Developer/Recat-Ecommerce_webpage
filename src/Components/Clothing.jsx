import React from 'react'
import Home_Header from './Home_Header'
import Cards from './Cards'
const products = [
  {
    id: 1,
    name: "Navy Blue Three-Piece Suit",
    price: 89.99,
    details: "Elegant, comfortable, and perfect for celebrating Eid in style.",
    image: "https://images.openai.com/static-rsc-4/w1yb4J6zXHohwqevcHNti2SFpJXHAELaBz0G7qA7ZM0IsIUztTbW9o_-r7a8lxD9ebxLC6dn9UhfzOG-A2UgSY2FCHbSTLXoPR0H5d7slDElCRHlhGinf622xl982LyHn4fRNF-yA0oWj2HwwXkFAkQ_xjeRT18jH41b186u5z3GXNqyYi385A5eqklS-_8n?purpose=fullsize",
  },
{
    id: 2,
    name: "Navy Blue Shalwar Kameez",
    price: 89.99,
    details: "Elegant navy blue shalwar kameez for traditional and formal occasions",
    image: "https://images.openai.com/static-rsc-4/ATusGrgloPn9tMt4KF0ftRjg2X_c7D1Rr73vhEiFoJfTEVTOx63Onmoy7A_KdN_q_6WBKIQQ2DBqnnPac0d3pcW0ACzo8y68O4mb3stMMVzMT_v6jKJXXlKUHgB8WCqtW0eBEHVBkFeZMgBC2y6eXEBJsifvC1KzVTcWZLh0mbUxF8t1ZPZ7g6UYK2CSpU5j?purpose=fullsize",
  },
    {
    id: 3,
    name: "Eid Dress for Men",
    price: 89.99,
    details: "Elegant, comfortable, and perfect for celebrating Eid in style.",
    image: "https://images.openai.com/static-rsc-4/9IfQXCaeWtHUK6Iz_1fp49vS6bXPcMq0LpFzqMvrbuJuXJqACikq8TXQcVEPZTSYNJFbTWtGfbFDm1F4fMRB2xffiYWsJ_mbrVw0CpcheBMUZ3ryAFG7puDemSo9u-IQw2Jx8ZlODh7-t3gT3wFXjS5vPbeoAIdO0IHy4TI9X9Kr6DIjQwiMAUamMbnwBVoR?purpose=fullsize",
  },
{
    id: 4,
    name: "Kurta Pajama",
    details: "Classic traditional wear with a simple, stylish look, and festive occasions.",
    price: "$35.00",
    image:
      "https://images.openai.com/static-rsc-4/_ZdfMdtGqiOJ7rtW7Icytv9my0CEb6rKwr9nqp4QjXPpTTIwYL3q-eOkG4nVMlL9aRE6SP0g5P2siwUOFCgiTZT9pAm2IljBO9JPEWkcFjbP3b9ZtLIMSrgKS-vw7TPdq2h84a6SnR6SMuIXUxZLlVO7PJhz_aPs8JL7UtouMlhYSDvrc_Tnt6Cu9f1ls-i4?purpose=fullsize",
  },
  {
    id: 5,
    name: "Classic Gray Three-Piece Suit",
    details: "Elegant gray three-piece suit, perfect for weddings and formal occasions.",
    price:"123",
    image: "https://images.openai.com/static-rsc-4/HXJp6KAyakGlc7hHZZqgtwZTcVp_OvtAN-WHycZVvYAbtDoH4xX09kFMtdMsFtWFxnHI0_5Oapz8LTI82EZAeQotUwBw13GumjY1FeFqfu_qiP87J1_0YeqJPWr6vZkC48NcGtsmfZOfuu8kGgbqhGFhZm3rAFiYJFRt616RC5HMCnDNHrC9vzqSLT2TtUgd?purpose=fullsize"
  },
  {
    id: 6,
    name: "Olive Green Waistcoat",
    details: "Elegant olive waistcoat with subtle embroidery and button details.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/dl3awM2XWv9RIzntdU5M-7rp7G626HOn4ahPBQzv61Co0hTQmdPUq8LZ9WROnNst9AluqFi-9sF9uboLVbPh8b446NhBAye4qj8oAZg-GF7zI-w3zj1HzPUHiQ0P_tYtBE77ve8UXTCAXsk2FfRzLcKwXkt4P6iBLcgiey2kgNt3_6EZiy86sKfatvNg5B-S?purpose=fullsize"
  },

  {
  id: 7,
    name: "Party Wear Suit",
    details: "Sophisticated design with decorative , ideal for weddings and formal events.",
    price: "$25.00",
    image:
      "https://images.openai.com/static-rsc-4/5h0fPQwqfJ67WeX0sOsQrWVmW-aHxfZBARyx56OzhuDxjX_SOs1rPs3T2ou2lxwIVVQ_5JZt4vXnDY9QWD1PVKV6lhvpwcgVo7tn2sdTG7q632Eun3o6r-UkDctzF32I8F0Y3HpxqQXwvkgA0IfsdNWTIiYBz41i705g5oOpRO0koaWbSe-LeotvRjhm2yfM?purpose=fullsize",
  },
  {
    id: 8,
    name: "Women’s 3-Piece Suit",
    details: "Elegant shirt, trouser, and dupatta designed for casual and festive wear.",
    price: "$35.00",
    image:"https://images.openai.com/static-rsc-4/20horw8pr4swsU2NwDcYQAmSWJq_0GV4_kttwAUaBYPfrAfoBzQAzRAeULJ2xbJN6zLiUTXMuAwCGnwttIqfrjF0Vq_WlNiCfXgOoLkeWKBWK-bxZdJlXNAilsbIatIwSrzWqDQciPmEL_xzmaWzyFoZfKTmILs_vPLBrFfh3d3ROIJvHJxFkIq4J4FMUpQ2?purpose=fullsize",
  },
  {
    id : 9,
    name: "Golden Embroidered Dress",
    details: "Elegant dress with beautiful golden embroidery.",
    price : "25.5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4qP2zpixMlKwxfWvVNWdAqA8fFoa-JNJHTeN0VO-WQ&s=10",
  },
  {
    id : 10,
    name: "Pakistani Bridal Dress",
    details: "Elegant embroidered dress with a beautiful traditional look.",
    price : "20.33",
    image: "https://www.zenia.pk/cdn/shop/files/Republic_womens_wear_Kyla_RWU-24-D8_Pakistani_wedding_bridal_dresses_mehndi_nikkah_outfits_pakistani_wedding_dress_pakistani_bridal_dresses_pakistani_wedding_guest_dresses_nikkah_dresses_pakistani_wedding_outfits_pakistani_wedding_wear_pak.jpg?v=1735331337",
  },
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
];

export default function Clothing() {
  return (
    <>
     <section className='Shop-section'>
    <div className='shope-container'>
      <div className='shop-title'>
    <h1>The Clothing</h1>
    <p>Discover stylish and comfortable clothing for everyone.
Shop quality outfits for casual, <br></br> formal, and special occasions.
Find your perfect style at the best prices.</p>
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
