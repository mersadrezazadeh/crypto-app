import Image from "next/image";
import logoLight from "/public/logoipsum-light.svg";

function Logo() {
  return (
    <div>
      <Image src={logoLight} alt="logo" />
    </div>
  );
}

export default Logo;
