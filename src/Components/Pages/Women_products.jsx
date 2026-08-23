import React from 'react'
import Home_Header from '../Home_Header';
import Cards from '../Cards';
const products = [
  {
    id: 1,
    name: "Party Wear Suit",
    details: "Sophisticated design with decorative , ideal for weddings and formal events.",
    price: "$25.00",
    image:
      "https://images.openai.com/static-rsc-4/5h0fPQwqfJ67WeX0sOsQrWVmW-aHxfZBARyx56OzhuDxjX_SOs1rPs3T2ou2lxwIVVQ_5JZt4vXnDY9QWD1PVKV6lhvpwcgVo7tn2sdTG7q632Eun3o6r-UkDctzF32I8F0Y3HpxqQXwvkgA0IfsdNWTIiYBz41i705g5oOpRO0koaWbSe-LeotvRjhm2yfM?purpose=fullsize",
  },
  {
    id: 2,
    name: "Women’s 3-Piece Suit",
    details: "Elegant shirt, trouser, and dupatta designed for casual and festive wear.",
    price: "$35.00",
    image:"https://images.openai.com/static-rsc-4/20horw8pr4swsU2NwDcYQAmSWJq_0GV4_kttwAUaBYPfrAfoBzQAzRAeULJ2xbJN6zLiUTXMuAwCGnwttIqfrjF0Vq_WlNiCfXgOoLkeWKBWK-bxZdJlXNAilsbIatIwSrzWqDQciPmEL_xzmaWzyFoZfKTmILs_vPLBrFfh3d3ROIJvHJxFkIq4J4FMUpQ2?purpose=fullsize",
  },
  {
    id : 3,
    name: "Golden Embroidered Dress",
    details: "Elegant dress with beautiful golden embroidery.",
    price : "25.5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4qP2zpixMlKwxfWvVNWdAqA8fFoa-JNJHTeN0VO-WQ&s=10",
  },
  {
    id : 4,
    name: "Pakistani Bridal Dress",
    details: "Elegant embroidered dress with a beautiful traditional look.",
    price : "20.33",
    image: "https://www.zenia.pk/cdn/shop/files/Republic_womens_wear_Kyla_RWU-24-D8_Pakistani_wedding_bridal_dresses_mehndi_nikkah_outfits_pakistani_wedding_dress_pakistani_bridal_dresses_pakistani_wedding_guest_dresses_nikkah_dresses_pakistani_wedding_outfits_pakistani_wedding_wear_pak.jpg?v=1735331337",
  },
  {
    id : 5,
    name: "Stylish Women’s Sandals",
    details: "Elegant sandals with a modern, comfortable design.",
    price : "12.5",
    image: "https://starlet.pk/cdn/shop/files/182_5c3d6681-38b5-4819-9e70-34f626daafff.jpg?v=1782279219&width=1800",
  },
  {
    id : 3,
    name: "Beige Floral Heels",
    details: "Elegant sandals with a modern, comfortable design.",
    price : "15",
    image: "https://stylo.pk/cdn/shop/files/FR551947_3.jpg?v=1782967027&width=1800",
  },{
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
  {
    id : 3,
    name: "Stylish Black Sunglasses",
    details: "Trendy sunglasses with a bold, elegant design.",
    price : "12",
    image: "https://discountstore.pk/cdn/shop/files/71ur1X19gvL.jpg?v=1726500652",
  },
  {
    id : 3,
    name: "Makeup Set",
    details: "Beautiful makeup set for a flawless everyday look.",
    price : "20",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXPK9ZW0O8LOyopCKPEBwCBg57eEb2tr0Jb2801V1obrtnDtvYytk650&s=10",
  },
  {
    id : 3,
    name: "Elegant Earrings",
    details: "Stylish earrings with a beautiful, elegant design.",
    price : "18",
    image: "https://www.jewellerystore.pk/wp-content/uploads/2026/04/IMG-20260420-WA0010-e1776659651819.jpg",
  },
  {
    id : 3,
    name: "Chain Locket Set With Earrings",
    details: "Elegant chain locket with matching earrings, perfect for a stylish look.",
    price : " 5.5",
    image: "https://shoprex.com/images/gallery/43607_1.jpg",
  }
];
function Women_products() {
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

export default Women_products;