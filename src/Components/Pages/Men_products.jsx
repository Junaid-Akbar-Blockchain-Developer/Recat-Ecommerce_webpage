import React from 'react'
import Home_Header from '../Home_Header';
import Cards from '../Cards';
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
    id: "6",
    name: "Olive Green Waistcoat",
    details: "Elegant olive waistcoat with subtle embroidery and button details.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/dl3awM2XWv9RIzntdU5M-7rp7G626HOn4ahPBQzv61Co0hTQmdPUq8LZ9WROnNst9AluqFi-9sF9uboLVbPh8b446NhBAye4qj8oAZg-GF7zI-w3zj1HzPUHiQ0P_tYtBE77ve8UXTCAXsk2FfRzLcKwXkt4P6iBLcgiey2kgNt3_6EZiy86sKfatvNg5B-S?purpose=fullsize"
  },
  {
    id: "",
    name: "Brown Leather Peshawari Shoes",
    details: "Stylish brown leather shoes with traditional Pakistani-inspired design.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/5Qss2vJOT5cMl4RWaNAKfcFMGHC_y7Je00_23PyRIMNYj_Z6aTqpImNyxHtPvWXN8B5Qsd_XO6XrCuOlIqz4oyjWey9SBSzxmrkmg-78R54u9zdRHYLDg1LfeDvNvCntF5fBhUU_TxGddfiYPAdjM3gPyPzCc8oEA437o4iKLQ1sLYRd28ppiVrMhrVMGgjf?purpose=fullsize "
  },
  {
    id: "",
    name: "Brown Leather Penny Loafers",
    details: "Elegant brown leather loafers with a polished formal finish.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/XC-LuRBuw4-PL0oNJoyWHwUEVx4_GjTJ129qYyCk_UtZYSzBURP2LXAUjjhBdI-GSfMmF_NAdt2Fn5CcmhliiR2vDZOBYJxH73YgfPJ4YXEReVA8593yFg_VDiOTlfedSJaR31irmGAk9GaeYWQQvh1kBT-xR-_PD-Q8rd0bhH1K51QEnahcUHHxF32WnLn1?purpose=fullsize"
  },
   {
    id: 1,
    name: "Shoes Sneakers",
    price: 59.99,
    details: "Comfortable everyday sneakers with a clean and modern design.",
    image: "https://img.drz.lazcdn.com/static/pk/p/130e6c10bc17b969b1a646bfc70ecbf3.jpg_720x720q80.jpg_.webp",
  },
  
  {
    id: "",
    name: "Black Square Luxury Sunglasses",
    details: "Stylish black square sunglasses with elegant gold-tone frame details.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/QK7ywUL063DOq6SgrmaU3grxyLZT1TpkxhxiNjwIcka68kNk0xqJh45K4uVWRdhboiYwGHpyrvhWYhlKMw3TdWuNVkSOvQNDno9ka_MNrxtQyJF9r8SKrFLCUtefvTqT2PuY0zOLhx3keMVtB5JPZ1O-571VlxRrAj19oHv9oZ3xuBBqATnIpx-XFnuW_3O7?purpose=fullsize"
  },
  {
    id: "",
    name: "Black Clubmaster Sunglasses",
    details: "Classic black sunglasses with sleek gold-tone frame accents.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/9TodEqKvh7zQBHNXvgHNfULOYZBI0pmXA3d8h2e8OuVdhhFbwXoXa-XMBH3JAQCjzZiN8tGYwKwsFqm61LMZX6546ylslsU4FnLDrk7R3uukgTwj-4AZI0bF8OTtfxCJcxvmA3QvzmR_uI4kZgutBUD1SuQMkWqdNT4oEKUWpHKTGRiCQ6H-G_QcB4tBL_1G?purpose=fullsize"
  },
  {
    id: "",
    name: "Brown Leather Belt & Wallet Set",
    details: "Stylish brown leather belt and matching wallet gift set.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/63cjzJzl3MdiVDqWVKqQqRfGCa75dEhFIUo5UFkXs2cbVbzEhVaBjiyblFGD2UZb1baITfHItIFuJMe1O-K0sbs8H86OqwNHBTzh9EJdhH3kwsM06N1lAfVZCspmrStfOuun7hPeNBDCWkEXjbQUiMRbM0hx-i4GxzNmCZ8wb8GNkz3-US7G_WNw1tNaEHfl?purpose=fullsize"
  },
  {
    id: "",
    name: "Brown Leather Belt & Wallet Gift",
    details: "Premium brown leather belt and wallet in elegant gift box.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/er0KoqKm7oDAM8-zC4ooC87AuKTnWRtWwtggR5YCc6AwkxS0qZDhk7d6SgH1vDfuUS7EakZUm5lxeaQwqBxx2rpJrb_JlVBSKNQsKCedE9iPLTNLtmYqykVAMJERF73WV5FUXndVOdfGXmU6DiZm9sljWlqwxiBpGzNfRl8fq2ZvJ67l8dlwx8fuNvQOnYz5?purpose=fullsize"
  },
  {
    id : "",
    name :"Brown Leather Watch",
    details : "Elegant brown leather watch with Roman numerals and chronograph details.",
    price :"15",
    image : "https://images.openai.com/static-rsc-4/cYF0xyxOlDvznvQbGNr6XIgcRzYkdUrLoDPJy59diTY1ePjn1Qg0QG94Ye4KGTl8mVLCq1LiFg2UfKx0nw2pefqWGctmMITwfhhnyeiTkuSKUeU9wxHzHffV326p52Ar6ArvWUHBGWEuVlleE8w-kN8EJlctS3ZgYcN2uuPeI8a7hZXF2NMpuDFwZj54q-Bs?purpose=fullsize"
  },
  {
    id : "",
    name :"Silver Stainless Steel Smartwatch",
    details : "Premium round smartwatch with stainless steel strap and colorful AMOLED display.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/89-ohV6Snh-RwoVfUJsxQtJZfEV86knXapNNnes1t2kJKLp3pMUGiw5ukSFZAs4FswBct_DI50ZTYfNEf22b-N5j9zT5mUu8cVuaisLTQnrtUHOr4ly0iiMB2cqEScdRXGE2Af-Qo5dA7uppgl5wLF3q9fpfeab3zqiO4EhT-gCOn0fsx95sy-3ZEKSLjNX7?purpose=fullsize"
  },
  {
    id : "",
    name :"Luxury Oud Perfume",
    details : "Premium oud fragrance with elegant black and gold bottle design.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/8wjx4Cu7wvRonEGjXCxwq7H_Q7UJMsCvPUgxEzaDPReogjH1iV_NTrDVEk0A5BEocIJqQ3dytmrZPBCOVCNxNRn3qzDAcWxJdODIX7VyKqlRj90Fo9lmnZVGjTWi3TnKO4k7QavzrXx-0pdjaDzw8pBmpSAN7nqi1lvNI1aH1j8avEWApBP3IkEn2XkjQVBo?purpose=fullsize"
  },
  {
    id : "",
    name :"Luxury Oud Perfume",
    details : "Rich oud fragrance with a luxurious black-and-gold bottle design.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/8CGsEUz7i2dIfQNI6W7o5kfDjSVu1JPnfXqzaA8r7tIwZ5sPFOwAkOtFvhZYuGL5WIsoUUFqJJciyF2HozWWnAWQzlv5i2invAE6dFqko7Pe3BxZ3Oh4H-u2Eb4m9jHkzzSE8jgclOjFUrywlL-H96IltgIEPCx0reJ66mVhVTMA_RmbweYQaN0SsuUwOdH8?purpose=fullsize"
  },
];
function Men_products() {
  return (
    <div>
      <>
       <section className='Shop-section'>
    <div className='shope-container'>
      <div className='shop-title'>
    <h1>Men's Collection</h1>
    <p>
      Discover everything you need to complete your style, from modern clothing and traditional wear to shoes, sunglasses, watches, bags, and premium accessories.
    </p>
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
    </div>
  )
}

export default Men_products;