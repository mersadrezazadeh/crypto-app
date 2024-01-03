import CurrencySelector from "./CurrencySelector";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SearchBar from "./SearchBar";
import User from "./User";

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-50 px-6 py-3 text-brand-700 dark:bg-gray-850">
      <Logo />
      <MainNav />
      <SearchBar />
      <CurrencySelector />
      <ThemeSwitcher />
      <User />
    </header>
  );
}

export default Header;
