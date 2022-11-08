import { BellIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import SideBar from "./SideMenu";
import Signin from "./signinModal";

export default function Layout({ title, children }: any) {
  const [open, setOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  return (
    <>
      <Head>
        <title>{title ? title + " - ABC" : "Market Place"}</title>
        <meta name="description" content="Nepal Best MarketPlace" />
      </Head>
      <div className="flex  min-h-screen flex-col justify-between">
        <Signin openModal={openModal} setopenModal={setopenModal}></Signin>
        <header>
          <nav className=" flex h-12 items-center px-4 justify-between shadow-md">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                onClick={() => setOpen(true)}
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <Link href="/">
                <span className="text-xl font-bold p-2">abc</span>
              </Link>
            </div>
            <div className="flex">
              <Link href="/">
                <span className="p-4">Home</span>
              </Link>
              <Link href="/">
                <span className="p-4">Sell</span>
              </Link>
              <Link href="/">
                <span>
                  {" "}
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </span>
              </Link>

              <span onClick={() => setopenModal(true)}>
                <span className="p-4">Login</span>
              </span>
            </div>
          </nav>
        </header>
        <SideBar open={open} setOpen={setOpen}></SideBar>
        <main className="w-full m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10  justify-center items-center shadow-inner">
          Copyright &#169; 2022 Bibash
        </footer>
      </div>
    </>
  );
}
