
export default function ImageCarousel({data}:{data:string}){
    
    return(
        <>
            <div className="carousel-item h-full">
                    <img alt="description" src={data} width="100%"/>
            </div>
        </>
    )
}