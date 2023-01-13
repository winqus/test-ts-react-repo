import './resets.scss';
import Navbar from './components/navbar/organisms/Navbar/Navbar';
import data from './pageData.json';

export default function App() {
  return (
    <Navbar
      title={data.navbar.title}
      cartCount={data.navbar.cartCount}
      cartValue={data.navbar.cartValue}
      cartDropdownItems={data.navbar.cartDropdownItems}
      menuData={data.navbar.menu}
    />
  );
}
