'use client'

import { Forum, Koulen, Krona_One, Lexend, M_PLUS_1, Noto_Sans_Kayah_Li } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const krona = Lexend({ subsets: ["latin"], weight: ['200'] });
const mplus = M_PLUS_1({ subsets: ["latin"], weight: ['300', '600'] });



const Header = () => {

    const router = useRouter()
  const searchParams = useSearchParams()
    const pathname = usePathname();

  

    const [isOpen, setOpen] = useState(false)
    

    return ( 
    <header className={`${krona.className} flex flex-col justify-center items-center py-12`}>
        <div>
             <Link href={'/'} className="text-[62px] tracking-wide" >Venuez</Link>
        </div>
        <div className="flex flex-row w-full justify-between md:py-12 md:px-20 items-center gap-12 md:gap-0 ">
            <div>
                <p>NOK</p>
            </div>

            <button className="md:hidden" onClick={() => setOpen(!isOpen)}>Burger</button>
            {isOpen && <ul className="flex flex-row text-sm gap-12 w-fit h-fit">
                <li>
                    <Link className={` ${pathname === '/portfolio' ? 'underline underline-offset-2' : ''}`} href={'/portfolio'}>portfolio</Link>
                </li>
                <li>
                    <Link className={` ${pathname === '/contact' ? 'underline underline-offset-2' : ''}`} href={'/contact'}>contact</Link>
                </li>
            </ul>}
            <div>
                <p>Login</p>
            </div>
        </div>
        
        
    </header> );
}
 
export default Header;