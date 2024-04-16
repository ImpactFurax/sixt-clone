import Image from 'next/image';
import Logo from '../../public/images/sixt-logo.png';
import { IoMdMenu } from "react-icons/io";
import { menu } from '../constants';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <IoMdMenu className='text-white cursor-pointer hover:scale-125 transition-all' size={24} />
        <Image src={Logo} alt='Logo' width={70} height={70} />
      </div>

      <ul className='flex items-center gap-4'>
        {menu.map((item, index) => (
          <li key={index} className='hidden md:flex items-center gap-2 font-bold text-white'>
            <item.icon />
            <Link href="#">
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <UserButton />
        </li>
      </ul>
    </div>
  )
}

export default Navbar