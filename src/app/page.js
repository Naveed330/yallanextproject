import Image from "next/image";
import styles from "./page.module.css";
import HomePage from '../app/homePage/HomePage'
import DummyCard from '../app/homePage/dummyCard'
import Form from '../app/homePage/form'
import Animatedcard from '../app/Animatedcard'
import YallaGallery from '../app/YallaGallery'
import WhoweareCom from '../app/WhoweareCom'
import AboutSection from '../app/AboutSection'
import YallaSupplier from '../app/YallaSupplier'
import Yallaconsumer from '../app/Yallaconsumer'
export default function Home() {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <DummyCard /> */}
      {/* <Form/> */}
      {/* <Animatedcard/> */}
      {/* <YallaGallery /> */}
      {/* <WhoweareCom/> */}
      {/* <AboutSection/> */}
      <YallaSupplier/>
      {/* <Yallaconsumer/> */}
    </div>
  );
}
