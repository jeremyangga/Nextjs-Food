import Link from "next/link";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export default function Register(){
    async function submitHandler(formData: FormData){
        "use server"
        const NewUser = {
            name: formData.get('name'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(NewUser, '<-- new user');
        try {
            const res = await fetch('https://nextjs-food-5fpz.vercel.app/api/register',{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: NewUser.name,
                    username: NewUser.username,
                    email: NewUser.email,
                    password: NewUser.password
                })
            });
            if(res.ok){
                console.log('Success');
            } else{
                console.log(res.json, '<--')
                
            }
        } catch (error) {
            console.log(error, "<-- error handler");
              
        } finally {
            // redirect('/login');
        }
    }
    return(
    <>
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="w-full p-6 bg-white border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Register</h1>
                <form className="space-y-4" action={submitHandler}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="w-full input input-bordered" name="name"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered" name="username"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Email" className="w-full input input-bordered" name="email"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered" name="password"/>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-block" style={{color:"white"}}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}