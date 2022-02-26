import Image from "next/image";

function Home() {
  return <div>
      <header>
          <div className="relative w-32 h-20">
              <Image src="http://www.myownpaints.com/wp-content/uploads/2022/02/Logo.svg" layout="fill" objectFit="contain" />
          </div>
      </header>
  </div>;
}

export default Home;