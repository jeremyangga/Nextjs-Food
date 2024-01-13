import AddToWishlist from "@/components/AddToWishlist";
import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import { rupiah } from "@/db/helpers/currency";
import type { Product } from "@/types"
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { slug: string }
}


// const url = 'localhost:3000';
const dataProductsDetail = async (slug:string):Promise<Product> => {
    const res = await fetch(`nextjs-food-5fpz-1kw7s88az-jeremys-projects-fd0e0ae2.vercel.app/api/products/`+ slug, {
        method: 'GET'
    });
    if(!res.ok){
        throw new Error("Failed to fetch data");
    }
    let getDataProducts = await res.json();
    return getDataProducts.data;
}

export async function generateMetadata(
    { params }: Props): Promise<Metadata> {
    // read route params
    const slug = params.slug
   
    // fetch data
    const data = await dataProductsDetail(params.slug);
   
    return {
      title: data.name,
      description: data.description
    }
}

export default async function ProductDetail({params}:Props){
    // console.log(params.slug, '<-- params');
    const data = await dataProductsDetail(params.slug)
    // console.log(data, '<-data fetch slug');
    
    return (
        <>
            <Navbar/>
            <div className="flex flex-col gap-5 p-10 md:flex-row" style={{marginTop: '100px'}}>
                <div className="carousel carousel-vertical carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item h-full">
                        {/* <img alt={data.name} src={data.thumbnail} width="100%"/> */}
                        {data.images.map((img, index) =>{
                            return <ImageCarousel key={index} data={img} />
                         })}
                    </div>
                </div>
                <div className="flex flex-col w-full gap-10">
                    <div className="flex items-end">
                        <h1 className="text-3xl font-bold">{data.name} - <span className="font-normal">{data.excerpt}</span></h1>
                    </div>
                    <h2 className="text-2xl font-semibold">{rupiah(data.price)}</h2>
                    <p className="text-base">{data.description}</p>
                    <AddToWishlist/>
                </div>
            </div>
        </>
    )
}