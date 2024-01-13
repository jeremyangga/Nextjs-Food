import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";
import Link from "next/link";
const dataProducts = async() => {
  const res = await fetch(`http://localhost:3000/api/products`, {
                method: 'GET'
            });
            if(!res.ok){
                throw new Error("Failed to fetch data");
            }
            let getDataProducts = await res.json();
            return getDataProducts.data as Product [];
}

export default async function Home() {
  let products = await dataProducts();
  const date = new Date();
  const yearNow:number = date.getFullYear();
  return (
   <>
      <Navbar/>
      <div className="mt-20 ">
        <div style={{position: 'relative', textAlign:'center', color:'white'}}>
          <img src="https://png.pngtree.com/background/20210711/original/pngtree-bread-minimalist-literary-white-food-poster-background-picture-image_1121500.jpg" width='100%'/>
          <div style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%,-50%)'}}>
            <p className="xl lg:text-5xl md:text-3xl font-mono font-extrabold text-amber-600">Delicious Food Happy Life</p>
          </div>
        </div>
        
        <div className="text-center mt-10 title-section">
            <h1 className="font-bold text-3xl">Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pt-5">
          {
            products.slice(0, 5).map((el) =>{
              return <ProductCard key={el.slug} product={el}/>
            })
          }
        </div>
        <div className="flex justify-center pb-5">
          <Link href="/products" className="btn btn-outline">See All Products</Link>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © {yearNow} - All right reserved by GC-02-Jeje Ltd</p>
        </aside>
      </footer>
   </>
  )
}
