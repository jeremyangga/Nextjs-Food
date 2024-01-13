import { ObjectId } from "mongodb";

export type Product = {
    _id: ObjectId
    name: string
    slug: string
    description: string 
    excerpt: string
    price: number
    tags: string[]
    thumbnail: string
    images: string[]
    createdAt: string
    updatedAt: string
}

export type User = {
    _id: ObjectId
    name: string
    username: string
    email: string
    password: string
}

export type Wishlist = {
    _id: ObjectId
    userId: ObjectId
    productId: ObjectId
    createdAt: string
    updatedAt: string
}