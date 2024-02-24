import Image from "next/image";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About />
    </>
  );
}
