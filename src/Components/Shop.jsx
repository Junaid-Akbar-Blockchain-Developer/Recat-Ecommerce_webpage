
import Home_Header from './Home_Header'
import Cards from './Cards';
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
  id : 1,
  name :"Body Luxuries Perfume",
  details:"Elegant floral fragrance for everyday use.",
  price : "8",
  image: "https://sc04.alicdn.com/kf/H8fd5681724de4c37a97bbe67e5cd794da.jpg",
},
  {
  id : 4,
  name :"Black & Brown Leather Wallet",
  details:"Stylish black and brown leather wallet for everyday use.",
  price : "12",
  image: "https://harshaystore.pk/cdn/shop/files/waerfwef_900x.jpg?v=1771961508",
},

{
  id : 1,
  name :"Brown Leather Wallet",
  details:"Stylish brown wallet with card and cash pockets.",
  price : "12",
  image: "https://www.leatherproducts.com.pk/cdn/shop/files/rn-image_picker_lib_temp_e8d3e9db-ce1c-42c7-922c-30afe11c0177.jpg?v=1751973279",
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
  id : 1,
  name :"Women’s Cat-Eye Sunglasses",
  details:"Stylish cat-eye sunglasses for a trendy look.",
  price : "5",
  image: "https://negativeapparel.com/cdn/shop/files/3pairs-women-cat-eye-frame-sunglasses-negative-apparel-664103.jpg?v=1776716246&width=1340",
},
{
  id : 1,
  name :"Stylish White glasses",
  details:"Stylish white frame glasses for everyday wear.",
  price : "5",
  image:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/8963093/1.jpg?1506",
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
  id : 1,
  name :"Women’s Stylish Wrist Watch",
  details:"Elegant women’s  gold watch with crystal , perfect for parties, casual wear, and stylish everyday fashion.",
  price : "8",
  image: "https://hutch.pk/cdn/shop/articles/Best-Womens-Watches-in-Pakistan.jpg?v=1714751107",
},
{
  id : 1,
  name :"Women’s Rose Gold Crystal Watch",
  details:"Elegant crystal watch with a floral dial.",
  price : "10",
  image: "https://img.drz.lazcdn.com/static/pk/p/5d0e4c8255750b310d5ac30c10915345.jpg_960x960q80.jpg_.webp",
},
{
  id : 1,
  name :"Silver Strap Crossbody Bag",
  details:"Stylish mini handbag with a silver strap.",
  price : "12",
  image: "https://image.made-in-china.com/365f3j00lsrWzLiJOtgR/Wide-Silver-Strap-Crossbody-Shoulder-Fashion-Lady-Bag-Mini-Small-Ladies-Handbag.webp",
},
{
  id : 1,
  name :"Stylish Crossbody Bag",
  details:"Compact crossbody bag for everyday use.",
  price : "14",
  image: "https://harshaystore.pk/cdn/shop/files/Hf8869b240c1b46fd87b3ef4a913c5d49v.jpg_720x720q50_900x.jpg?v=1727881619",
},
,{
    id : 3,
    name: "Stylish Handbag",
    details: "Stylish handbag with a modern design, perfect for everyday outfits.",
    price : "25",
    image: "https://lotshop.pk/cdn/shop/articles/6-must-have-handbags-every-pakistani-woman-needs-in-her-wardrobe-8415294.jpg?v=1770599649&width=1500",
  },{
    id : 3,
    name: "Handbag Collection",
    details: "Stylish handbags with trendy designs for every occasion.",
    price : "20",
    image: "https://i0.wp.com/modixer.pk/wp-content/uploads/2025/08/Handbags-Mega-Bundle-Deals-scaled.webp?fit=2560%2C2560&ssl=1",
  },
  
];


function Shop() {
  return (
    <>
    <section className='Shop-section'>
    <div className='shope-container'>
      <div className='shop-title'>
    <h1>The shop</h1>
    <p>Explore our latest collection of clothing, shoes, and accessories. Find quality products,<br></br> stylish designs, and great prices all in one place</p>
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

export default Shop;