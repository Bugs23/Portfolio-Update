"use client"
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    { label: "Home", page: "home"},
    { label: "About", page: "about"},
    { label: "Projects", page: "projects"},
]

export default function Navbar() {

    const { systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const pathname = usePathname()
    const [navbar, setNavbar] = useState(false)

    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-neutral-900 dark:border-b dark:border-stone-900">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex justify-between items-center py-3">
                        <div className="md:py-5 md:block">
                            <h2 className="text-2xl font-bold">Raymond Urrutia</h2>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setNavbar(!navbar)} className="align-middle">
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.page}
                                    className={"block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {currentTheme === "dark" ? (
                                <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl">
                                    <RiSunLine color="black" />
                                </button>
                            ) : (
                                <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl">
                                    <RiMoonFill />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
