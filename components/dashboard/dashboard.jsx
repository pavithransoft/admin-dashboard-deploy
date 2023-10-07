"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { GiConvergenceTarget } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { TiThLargeOutline, TiPower } from "react-icons/ti";
import { MdInsertChartOutlined } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Chart } from "./barchart";
import Card from "./card";
import { BiDollar } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { CiWavePulse1 } from "react-icons/ci";
import CardList from "./cardlist";
import Image from "next/image";

const Dashboard = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const currentRoute = usePathname();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuList = [
    {
      link: "/",
      icon: <TiThLargeOutline className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "Dashboard",
    },
    {
      link: "",
      icon: <MdInsertChartOutlined className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "Applications",
    },
    {
      link: "",
      icon: <IoSettingsOutline className="h-4 w-4 sm:h-5 sm:w-5" />,
      name: "Settings",
    },
  ];

  return (
    <section className="grid px-2 sm:px-5 lg:px-5 xl:px-24 py-10 font-nunito font-semibold">
      <div
        className={`bg-background h-[26rem] sm:h-[30rem] lg:h-[37rem] duration-500 grid border rounded-xl shadow ${
          !openMenu
            ? "grid-cols-[20%,80%] sm:grid-cols-[10%,80%] lg:grid-cols-[10%,90%] xl:grid-cols-[10%,90%]"
            : "grid-cols-2 sm:grid-cols-[30%,70%]  lg:grid-cols-[20%,80%] xl:grid-cols-[20%,80%]"
        }`}
      >
        <div className="grid grid-rows-[3%,12%,75%,10%] sm:grid-rows-[5%,15%,65%,15%] border-r">
          <span className="relative">
            {!openMenu ? (
              <HiMenuAlt2
                className="absolute h-4 w-4 sm:h-5 sm:w-5 top-0 -right-4 sm:-right-[1.1rem] lg:-right-5 cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <HiMenuAlt3
                className="absolute h-4 w-4 sm:h-5 sm:w-5 top-0 right-0 cursor-pointer"
                onClick={handleMenu}
              />
            )}
          </span>
          <div
            className={`grid ${
              openMenu && "grid-cols-2"
            } items-center justify-self-center sm:place-items-center`}
          >
            <GiConvergenceTarget className="w-5 h-5 sm:w-7 sm:h-7 " />
            {openMenu && (
              <h1 className="justify-self-start sm:text-xl">Finder</h1>
            )}
          </div>
          <ul className="font-semibold border-y px-1 sm:px-2 lg:px-[0.7rem] py-5 flex flex-col gap-3 items-center duration-500 relative">
            {menuList.map((menu, index) => (
              <Link
                key={index}
                href={menu?.link}
                className={`cursor-pointer flex items-center gap-8 p-3 rounded-xl group ${
                  openMenu ? "w-full" : "w-fit"
                } ${
                  currentRoute === menu?.link
                    ? "bg-slate-200 text-black hover:bg-slate-200 hover:text-black"
                    : "hover:bg-slate-200 hover:text-black"
                } `}
              >
                {menu?.icon}
                {openMenu && (
                  <h1 className="whitespace-pre overflow-hidden text-xs sm:text-sm">
                    {menu?.name}
                  </h1>
                )}
                {!openMenu && (
                  <h1
                    className={`${
                      openMenu && "hidden"
                    } absolute left-60 whitespace-pre overflow-hidden rounded-md bg-black text-white px-0 py-0 w-0 drop-shadow-lg group-hover:px-2 group-hover:py-1 group-hover:left-28 xl:group-hover:left-36 group-hover:duration-300 group-hover:w-fit z-50 backdrop-blur`}
                  >
                    {menu?.name}
                  </h1>
                )}
              </Link>
            ))}
          </ul>
          <div
            className={`grid ${
              openMenu && "grid-cols-3"
            } items-center justify-self-center place-items-center group duration-500 relative`}
          >
            <CiUser className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
            {!openMenu && (
              <h1
                className={`${
                  openMenu && "hidden"
                } absolute sm:left-60 whitespace-pre overflow-hidden rounded-md bg-black text-white px-0 py-0 w-0 drop-shadow-lg group-hover:px-2 group-hover:py-1 group-hover:left-14 lg:group-hover:left-[5.5rem] group-hover:duration-300 group-hover:w-fit z-50 backdrop-blur`}
              >
                Pavithran
              </h1>
            )}
            {openMenu && (
              <>
                <h1 className="justify-self-start text-xs sm:text-sm">
                  Pavithran
                </h1>
                <TiPower className="w-3 h-3 sm:w-5 sm:h-5 fill-red-500" />
              </>
            )}
          </div>
        </div>
        <div
          className={`sm:w-fit sm-h-fit grid sm:gap-5 lg:gap-0 lg:grid-rows-[25%,75%] xl:grid-rows-[30%,70%] sm:text-2xl rounded-r-xl p-5 ${
            props.onClicked ? "bg-black text-white" : ""
          }`}
        >
          <div className="grid sm:grid-cols-4 gap-2 xl:gap-5 lg:pb-5 xl:py-5">
            <Card
              title="Total Revenue"
              reach="$45,231.89"
              description="+20.1% from last month"
              icon={<BiDollar className="h-3 w-3 lg:h-5 lg:w-5" />}
            />
            <Card
              title="Subscriptions"
              reach="+2350"
              description="+180.1% from last month"
              icon={<FaUsers className="h-3 w-3 lg:h-5 lg:w-5" />}
            />
            <Card
              title="Sales"
              reach="+12,234"
              description="+19% from last month"
              icon={<BsCreditCard className="h-3 w-3 lg:h-5 lg:w-5" />}
            />
            <Card
              title="Active Now"
              reach="+573"
              description="+201 since last hour"
              icon={<CiWavePulse1 className="h-3 w-3 lg:h-5 lg:w-5" />}
            />
          </div>
          <div className="hidden sm:grid lg:grid-cols-2 gap-5 w-fit h-fit">
            <div
              className={`lg:grid place-items-center border rounded-xl shadow relative hidden block:lg ${
                props.onClicked ? "bg-black" : ""
              }`}
            >
              <h1 className="absolute top-0 right-1 p-1 text-lg">Overview</h1>
              <Chart />
            </div>
            <div className="border rounded-xl p-2 shadow">
              <div className="px-4 xl:pb-4">
                <h1 className="text-lg">Recent Sales</h1>
                <h1 className="text-xs text-slate-500">
                  You made 265 sales this month.
                </h1>
              </div>
              <div className="grid sm:gap-3 lg:gap-2 xl:gap-4 lg:p-2 xl:p-4">
                <CardList
                  profile={
                    <Image
                      src="https://ui.shadcn.com/avatars/01.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-full"
                    />
                  }
                  name="Olivia Martin"
                  email="olivia.martin@email.com"
                  sales="+$1,999.00"
                />
                <CardList
                  profile={
                    <Image
                      src="https://ui.shadcn.com/avatars/02.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-full"
                    />
                  }
                  name="Jackson Lee"
                  email="jackson.lee@email.com"
                  sales="+$39.00"
                />
                <CardList
                  profile={
                    <Image
                      src="https://ui.shadcn.com/avatars/03.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-full"
                    />
                  }
                  name="Isabella Nguyen"
                  email="isabella.nguyen@email.com"
                  sales="+$299.00"
                />
                <CardList
                  profile={
                    <Image
                      src="https://ui.shadcn.com/avatars/04.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-full"
                    />
                  }
                  name="William Kim"
                  email="will@email.com"
                  sales="+$99.00"
                />
                <CardList
                  profile={
                    <Image
                      src="https://ui.shadcn.com/avatars/05.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-full"
                    />
                  }
                  name="Sofia Davis"
                  email="sofia.davis@email.com"
                  sales="+$39.00"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
