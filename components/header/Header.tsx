import CurrencyToggle from "./CurrencyToggle";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SearchBar from "./SearchBar";
import User from "./User";

function Header() {
  return (
    <header className="flex justify-between bg-gray-50 dark:bg-gray-850 text-brand-700 py-3 px-6 items-center">
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
