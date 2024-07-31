import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

export default function Menu() {  
  return (
    <>
      <div className='hidden lg:block'>
        <DesktopMenu/>
      </div>
      <div className='lg:hidden'>
        <MobileMenu/>
      </div>
    </>
  );
}