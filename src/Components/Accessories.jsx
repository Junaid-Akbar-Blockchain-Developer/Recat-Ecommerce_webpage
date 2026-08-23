import React from 'react'
import Home_Header from './Home_Header';
import Cards from './Cards';
const products = [
{
    id : 1,
    name :"Luxury Oud Perfume",
    details : "Premium oud fragrance with elegant black and gold bottle design.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/8wjx4Cu7wvRonEGjXCxwq7H_Q7UJMsCvPUgxEzaDPReogjH1iV_NTrDVEk0A5BEocIJqQ3dytmrZPBCOVCNxNRn3qzDAcWxJdODIX7VyKqlRj90Fo9lmnZVGjTWi3TnKO4k7QavzrXx-0pdjaDzw8pBmpSAN7nqi1lvNI1aH1j8avEWApBP3IkEn2XkjQVBo?purpose=fullsize"
  },
  {
    id : 2,
    name :"Luxury Oud Perfume",
    details : "Rich oud fragrance with a luxurious black-and-gold bottle design.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/8CGsEUz7i2dIfQNI6W7o5kfDjSVu1JPnfXqzaA8r7tIwZ5sPFOwAkOtFvhZYuGL5WIsoUUFqJJciyF2HozWWnAWQzlv5i2invAE6dFqko7Pe3BxZ3Oh4H-u2Eb4m9jHkzzSE8jgclOjFUrywlL-H96IltgIEPCx0reJ66mVhVTMA_RmbweYQaN0SsuUwOdH8?purpose=fullsize"
  },
  {
  id : 3,
  name :"Slevace Oicr Perfume",
  details:"Elegant fragrance with a bold, fresh scent.",
  price : "12",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGtSa7HTp8VWCQSTeVIkE1l2aggoJ5RvgjTvWrZ-K5gfE3MFKIc4-syw&s=10",
},

{
  id : 4,
  name :"Body Luxuries Perfume",
  details:"Elegant floral fragrance for everyday use.",
  price : "8",
  image: "https://sc04.alicdn.com/kf/H8fd5681724de4c37a97bbe67e5cd794da.jpg",
},
  {
  id : 5,
  name :"Black & Brown Leather Wallet",
  details:"Stylish black and brown leather wallet for everyday use.",
  price : "12",
  image: "https://harshaystore.pk/cdn/shop/files/waerfwef_900x.jpg?v=1771961508",
},

{
  id : 6,
  name :"Brown Leather Wallet",
  details:"Stylish brown wallet with card and cash pockets.",
  price : "12",
  image: "https://www.leatherproducts.com.pk/cdn/shop/files/rn-image_picker_lib_temp_e8d3e9db-ce1c-42c7-922c-30afe11c0177.jpg?v=1751973279",
},
{
    id: 7,
    name: "Brown Leather Belt & Wallet Set",
    details: "Stylish brown leather belt and matching wallet gift set.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/63cjzJzl3MdiVDqWVKqQqRfGCa75dEhFIUo5UFkXs2cbVbzEhVaBjiyblFGD2UZb1baITfHItIFuJMe1O-K0sbs8H86OqwNHBTzh9EJdhH3kwsM06N1lAfVZCspmrStfOuun7hPeNBDCWkEXjbQUiMRbM0hx-i4GxzNmCZ8wb8GNkz3-US7G_WNw1tNaEHfl?purpose=fullsize"
  },
  {
    id: 8,
    name: "Brown Leather Belt & Wallet Gift",
    details: "Premium brown leather belt and wallet in elegant gift box.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/er0KoqKm7oDAM8-zC4ooC87AuKTnWRtWwtggR5YCc6AwkxS0qZDhk7d6SgH1vDfuUS7EakZUm5lxeaQwqBxx2rpJrb_JlVBSKNQsKCedE9iPLTNLtmYqykVAMJERF73WV5FUXndVOdfGXmU6DiZm9sljWlqwxiBpGzNfRl8fq2ZvJ67l8dlwx8fuNvQOnYz5?purpose=fullsize"
  },

  {
    id: 9,
    name: "Black Square Luxury Sunglasses",
    details: "Stylish black square sunglasses with elegant gold-tone frame details.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/QK7ywUL063DOq6SgrmaU3grxyLZT1TpkxhxiNjwIcka68kNk0xqJh45K4uVWRdhboiYwGHpyrvhWYhlKMw3TdWuNVkSOvQNDno9ka_MNrxtQyJF9r8SKrFLCUtefvTqT2PuY0zOLhx3keMVtB5JPZ1O-571VlxRrAj19oHv9oZ3xuBBqATnIpx-XFnuW_3O7?purpose=fullsize"
  },
  {
    id: 10,
    name: "Black Clubmaster Sunglasses",
    details: "Classic black sunglasses with sleek gold-tone frame accents.",
    price:"12",
    image: "https://images.openai.com/static-rsc-4/9TodEqKvh7zQBHNXvgHNfULOYZBI0pmXA3d8h2e8OuVdhhFbwXoXa-XMBH3JAQCjzZiN8tGYwKwsFqm61LMZX6546ylslsU4FnLDrk7R3uukgTwj-4AZI0bF8OTtfxCJcxvmA3QvzmR_uI4kZgutBUD1SuQMkWqdNT4oEKUWpHKTGRiCQ6H-G_QcB4tBL_1G?purpose=fullsize"
  },
  {
  id : 11,
  name :"Women’s Cat-Eye Sunglasses",
  details:"Stylish cat-eye sunglasses for a trendy look.",
  price : "5",
  image: "https://negativeapparel.com/cdn/shop/files/3pairs-women-cat-eye-frame-sunglasses-negative-apparel-664103.jpg?v=1776716246&width=1340",
},
{
  id : 12,
  name :"Stylish White glasses",
  details:"Stylish white frame glasses for everyday wear.",
  price : "5",
  image:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/8963093/1.jpg?1506",
},
  {
    id : 13,
    name :"Brown Leather Watch",
    details : "Elegant brown leather watch with Roman numerals and chronograph details.",
    price :"15",
    image : "https://images.openai.com/static-rsc-4/cYF0xyxOlDvznvQbGNr6XIgcRzYkdUrLoDPJy59diTY1ePjn1Qg0QG94Ye4KGTl8mVLCq1LiFg2UfKx0nw2pefqWGctmMITwfhhnyeiTkuSKUeU9wxHzHffV326p52Ar6ArvWUHBGWEuVlleE8w-kN8EJlctS3ZgYcN2uuPeI8a7hZXF2NMpuDFwZj54q-Bs?purpose=fullsize"
  },
  {
    id : 14,
    name :"Silver Stainless Steel Smartwatch",
    details : "Premium round smartwatch with stainless steel strap and colorful AMOLED display.",
    price :"12",
    image : "https://images.openai.com/static-rsc-4/89-ohV6Snh-RwoVfUJsxQtJZfEV86knXapNNnes1t2kJKLp3pMUGiw5ukSFZAs4FswBct_DI50ZTYfNEf22b-N5j9zT5mUu8cVuaisLTQnrtUHOr4ly0iiMB2cqEScdRXGE2Af-Qo5dA7uppgl5wLF3q9fpfeab3zqiO4EhT-gCOn0fsx95sy-3ZEKSLjNX7?purpose=fullsize"
  },
  

{
  id : 15,
  name :"Women’s Stylish Wrist Watch",
  details:"Elegant women’s  gold watch with crystal , perfect for parties, casual wear, and stylish everyday fashion.",
  price : "8",
  image: "https://hutch.pk/cdn/shop/articles/Best-Womens-Watches-in-Pakistan.jpg?v=1714751107",
},
{
  id : 16,
  name :"Women’s Rose Gold Crystal Watch",
  details:"Elegant crystal watch with a floral dial.",
  price : "10",
  image: "https://img.drz.lazcdn.com/static/pk/p/5d0e4c8255750b310d5ac30c10915345.jpg_960x960q80.jpg_.webp",
},
{
  id : 17,
  name :"Silver Strap Crossbody Bag",
  details:"Stylish mini handbag with a silver strap.",
  price : "12",
  image: "https://image.made-in-china.com/365f3j00lsrWzLiJOtgR/Wide-Silver-Strap-Crossbody-Shoulder-Fashion-Lady-Bag-Mini-Small-Ladies-Handbag.webp",
},
{
  id : 18,
  name :"Stylish Crossbody Bag",
  details:"Compact crossbody bag for everyday use.",
  price : "14",
  image: "https://harshaystore.pk/cdn/shop/files/Hf8869b240c1b46fd87b3ef4a913c5d49v.jpg_720x720q50_900x.jpg?v=1727881619",
},
,{
    id : 19,
    name: "Stylish Handbag",
    details: "Stylish handbag with a modern design, perfect for everyday outfits.",
    price : "25",
    image: "https://lotshop.pk/cdn/shop/articles/6-must-have-handbags-every-pakistani-woman-needs-in-her-wardrobe-8415294.jpg?v=1770599649&width=1500",
  },{
    id : 20,
    name: "Handbag Collection",
    details: "Stylish handbags with trendy designs for every occasion.",
    price : "20",
    image: "https://i0.wp.com/modixer.pk/wp-content/uploads/2025/08/Handbags-Mega-Bundle-Deals-scaled.webp?fit=2560%2C2560&ssl=1",
  },
];

function Accessories() {
  return (
    <>
    
  <section className='Shop-section'>
    <div className='shope-container'>
      <div className='shop-title'>
    <h1>The Accessories </h1>
    <p>Discover stylish accessories to complete your everyday look.
Shop quality belts, bags, watches, <br></br>sunglasses, and more.
Find the perfect finishing touch for every outfit.</p>
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

export default Accessories;