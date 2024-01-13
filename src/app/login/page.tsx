import Link from "next/link";

export default function Login(){
    return(
    <>
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="w-full p-6 bg-white border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Email" className="w-full input input-bordered"/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" className="w-full input input-bordered"/>
                    </div>
                    <span className="text-xs text-gray-600"> Don't have an account?
                        <Link href="register" className="hover:underline hover:text-blue-600"> Click here</Link>
                    </span>
                    <div>
                        <button className="btn btn-success btn-block" style={{color:"white"}}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}