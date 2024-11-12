import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
  return (
    <div>
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a href="/">
            <img src={headerLogo} alt='Logo' width={130} height={29} />
          </a>
          <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
              {
                navLinks.map((item)=>(
                <li key={item.label}>
                  <a href={item.href} className='font-monserrat text-lg leading-normal text-slate-gray'>{item.label}</a>
                </li>
              ))
              }
          </ul>
          <div>
            <img src={hamburger} width={25} height={25} className='hidden max-lg:block'></img>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav;
