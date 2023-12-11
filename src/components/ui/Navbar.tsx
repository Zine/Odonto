"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  Bars3Icon as HamburgerIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const links = [
  {
    href: "/dashboard",
    name: "Dashboard",
    segment: null,
  },
  {
    href: "/dashboard/patients",
    name: "Patients",
    segment: "patients",
  },
  {
    href: "/dashboard/histories",
    name: "Histories",
    segment: "histories",
  },
  {
    href: "/dashboard/appointments",
    name: "Appointments",
    segment: "appointments",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { data: session } = useSession();
  const activeSegment = useSelectedLayoutSegment();

  const toggleMenuState = () => setOpenMenu(!openMenu);

  return (
    <>
      <nav className="shadow">
        <div className="flex justify-between items-center bg-gray-200 p-4">
          <div className="flex gap-6">
            <div className="flex item-center">
              <HamburgerIcon
                onClick={toggleMenuState}
                width={24}
                className="inline lg:hidden mr-4"
              />
              <p className="font-bold">Odonto Servicios</p>
            </div>
            <div className="hidden lg:inline">
              <div className="lg:flex flex-row gap-2 items-center">
                {links.map((l, i) => {
                  const isActive = activeSegment === l.segment;

                  return (
                    <Link key={i} href={l.href}>
                      <p className={isActive ? "text-blue-700" : ""}>
                        {l.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-2 items-center ">
            {session ? (
              <>
                <p>{session.user?.name}</p>
                <button
                  onClick={() => signOut()}
                  className="hover:text-blue-700"
                >
                  Salir
                </button>
              </>
            ) : (
              <button onClick={() => signIn()} className="hover:text-blue-700">
                Ingresar
              </button>
            )}
          </div>
        </div>
        {openMenu && (
          <div className="w-full flex flex-col bg-gray-100">
            {links.map((l, i) => {
              const isActive = activeSegment === l.segment;

              return (
                <Link key={i} href={l.href}>
                  <p className={`${isActive ? "text-blue-700" : ""} p-4`}>
                    {l.name}
                  </p>
                </Link>
              );
            })}
            {session && (
              <div className="flex md:hidden justify-between p-4">
                <p>{session.user?.name}</p>
                <LogoutIcon
                  onClick={() => signOut()}
                  className="hover:text-blue-700"
                  width={24}
                />
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
