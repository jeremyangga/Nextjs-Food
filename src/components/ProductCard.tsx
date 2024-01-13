"use client"
import { rupiah } from "@/db/helpers/currency"
import type { Product } from "@/types"
import { useRouter } from "next/navigation"
export default function ProductCard({product}:{product: Product}){
    const router = useRouter();
    function clickHandler(slug:string){
        router.push('http://localhost:3000/products/'+slug)
        // console.log(slug, '<--slug');
        
    }
    return (
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{marginBottom: '20px', marginRight: '20px'}}>
            <img className="w-full" src={product.thumbnail} alt={product.name} onClick={() => clickHandler(product.slug)}/ >
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" style={{textAlign: "center"}}>{product.name}</div>
                <p className="text-gray-700 text-base" style={{textAlign: "center"}}>
                {product.tags.join(', ')}
                </p>
                <p className="text-base font-semibold" style={{textAlign: "center"}}>
                    {rupiah(product.price)}
                </p>
            </div>
            <div style={{textAlign:"center", marginBottom:'30px'}}>
                <button className="btn btn-active btn-secondary">Add to Wishlist</button>
            </div>
        </div>
        </>
    )
}