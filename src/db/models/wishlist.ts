import type { Wishlist } from "@/types";
import { getCollection } from "../config";

class WishlistModel {
    static getCollection() {
        return getCollection('Wishlist');
    }
    static async createWishlist(Wishlist:Wishlist){
        console.log(Wishlist, '<-- this is wishlist');
    }
}

export default WishlistModel;