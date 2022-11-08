import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layout title={"Home Page"}>
      <Slider></Slider>
    </Layout>
  );
}
