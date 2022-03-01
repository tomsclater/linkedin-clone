import Image from "next/image";

function Header() {
  return (
    <header>
        {/* { Left } */}
        <div className="flex items-center space-x-2 w-full max-w-xs">
            <Image/>
        </div>
        {/* { Right } */}
    </header>
  );
}

export default Header;