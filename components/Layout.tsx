import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ title, children }: any) {
  return (
    <>
      <Head>
        <title>{title ? title + " - ABC" : "Market Place"}</title>
        <meta name="description" content="Nepal Best MarketPlace" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md ">
            <Link href={"/"}>
              <span className="text-lg font-bold">ABC</span>
            </Link>
            <div>
              <Link href={"/"}>
                <span className="p-2">Home</span>
              </Link>
              <Link href={"/"}>
                {" "}
                <span className="p-2">Blog</span>
              </Link>
              <Link href={"/"}>
                {" "}
                <span className="p-2">Noti</span>
              </Link>
              <Link href={"/"}>
                {" "}
                <span className="p-2">login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 ">{children}</main>
        <footer className="flex h-10  justify-center items-center shadow-inner">
          Copyright &#169; 2022 Bibash
        </footer>
      </div>
    </>
  );
}
