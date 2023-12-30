import CurrencyToggle from "./CurrencyToggle";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SearchBar from "./SearchBar";
import User from "./User";

function Header() {
  return (
    <header className="text-white flex justify-between">
      <Logo />
      <MainNav />
      <SearchBar />
      <CurrencyToggle />
      <DarkModeToggle />
      <User />
    </header>
  );
}

export default Header;
