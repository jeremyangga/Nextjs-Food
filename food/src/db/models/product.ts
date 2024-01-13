import { getCollection } from "../config";

import type { Product } from "@/types";

class ProductModel {
    static getCollection() {
        return getCollection('Products');
    }
    
    // static async getAllProducts(){
    //     return (await this.getCollection().find().toArray()) as Product[];
    // }
    static async getProductBySlug(slug:string){
        return (await this.getCollection().findOne({slug})) as Product;
    }
    static async getAllProducts(search:string){
        console.log(search, '<search>', typeof search);
        
        return (await this.getCollection().find({
            $or:[{
                name:{
                    $regex: search,
                    $options: "i"
                }
            }]
        }).toArray()) as Product[]; 
    }
}

export default ProductModel;