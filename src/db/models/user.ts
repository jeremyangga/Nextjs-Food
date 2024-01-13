import { getCollection } from "../config";
import type { User } from "@/types";
import { hashPassword } from "../helpers/bcrypt";
import {z} from 'zod';

const UserInputSchema = z.object({
    username: z.string(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(5).max(Infinity)
})
class UserModel {
    static getCollection(){
        return getCollection('User');
    }  
    static async createUser(user: User){
        const parseResult = UserInputSchema.safeParse(user);
        console.log(parseResult);
        if(!parseResult.success){
            console.log(parseResult.error);
            throw parseResult.error;
        }
        user.password = hashPassword(user.password);
        return (await this.getCollection().insertOne({
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
        })) 
    }
}

export default UserModel;