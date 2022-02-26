import Image from "next/image";
import HeaderLink from "../components/HeaderLink";

function Home() {
  return <div>
      <header>
          <div className="relative w-32 h-20 ">
              <Image src="http://www.myownpaints.com/wp-content/uploads/2022/02/Logo.svg" layout="fill" 
              objectFit="contain" />
          </div>
          <div className="flex items-center sm:divide-x divide-gray-300">
            <div className="hidden sm:flex space-x-8 pr-4">
                <HeaderLink/>
            </div>
          </div>
      </header>
  </div>;
}

export default Home;