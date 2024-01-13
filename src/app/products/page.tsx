'use client'
import Swal from 'sweetalert2';
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";
import { useEffect, useState } from "react";
export default function Products(){
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const dataProducts = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://nextjs-food-5fpz.vercel.app/api/products`, {
                method: 'GET'
            });
            if(!res.ok){
                throw new Error("Failed to fetch data");
            }
            let getDataProducts = await res.json();
            setData(getDataProducts.data);
            setLoading(false);
        } catch (error) {
            console.log(error);   
        } finally {
            setLoading(false);
        }
        
    }
    useEffect(()=>{
        dataProducts();
    },[])
    return (
        <>
        <Navbar/>
        <div className="flex items-center justify-center min-h-screen container mx-auto" style={{marginTop: '100px'}}>
            {loading?<h1>Loading...</h1>:''}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">    
              {data.map((product) =>{
                  return <ProductCard key={product.slug} product={product} />
              })}
            </div>
        </div>
        </>
    )
}