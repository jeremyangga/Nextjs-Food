import Link from "next/link";

export default function Navbar(){
    return (
        <>
        <nav className="fixed w-full top-0 left-0">
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="products">Products</Link> </li>
                </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-xl">Food Shop</Link>
            </div>
           
            <div className="navbar-end hidden lg:flex">
            <Link href="products" style={{marginRight: '10px'}}>Products</Link> 
            <button className="btn" style={{marginRight: '10px'}}>
                Wishlist
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
                <Link href="login" className="btn btn-success" style={{color: "white"}}>Login</Link>
            </div>
        </div>
        </nav>
        </>
    )
}