import { useState } from "react";
import image from "../assets/SideBarImage/image1.png";
import image2 from "../assets/SideBarImage/woman.jpg";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import { FaBook } from "react-icons/fa"
import { FaSquarespace } from "react-icons/fa"
import { BaggageClaim } from "lucide-react";
import { BiBaguette } from "react-icons/bi";
function SideBar() {

    const [isopen, setIsOpen] = useState(false)
    const [isopen1, setIsOpen1] = useState(false)
    const [isopen2, setIsOpen2] = useState(false)
    const [isopen3, setIsOpen3] = useState(false)
    const [isopen4, setIsOpen4] = useState(false)
    const [isopen5, setIsOpen5] = useState(false)


    return (
        <div className="border border-blue-900 w-[324px] shadow-[0_4px_6px_0_#28232d1a] rounded overflow-hidden">

            <div className="mt-3 px-4">
                <img src={image} alt="Logo" className="w-45 h-8" />
            </div>

            <hr className="border-t border-blue-900 my-4 mx-0" />

            <div className="px-4">
                <div className="profile flex">
                    <img
                        src={image2}
                        alt="Profile"
                        className="w-14 h-14 rounded-2xl object-cover"
                    />
                    <div className="text ml-2 leading-none">
                        <p className="text-[#0f626a] font-bold text-xl m-0 leading-none">
                            Ninfa Monaldo
                        </p>
                        <p className="text-black text-sm font-normal m-0 mt-3 leading-none">
                            Web Developer
                        </p>
                    </div>
                </div>
            </div>

            <hr className="border-t border-[#0f626a] my-4 mx-0" />

            <div className="px-4">
                <div className="text-[#0f626a] font-bold">DASHBOARD</div>
                <div
                    className="bg-[#0f626a] mt-3 text-white rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen(!isopen)}
                >
                    <div className="flex items-center gap-2">
                        <FaHome className="text-white" />
                        <span className="font-bold">Dashboard</span>
                    </div>
                    <IoIosArrowDown className={`transition-transform duration-200 ${isopen ? "rotate-180" : ""}`} />
                </div>
            </div>
            {isopen && (
                <div className="mt-3 ml-6 space-y-2 ">
                    <div className="text-[#0f626a] font-semibold flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#0f626a] inline-block rounded-sm"></span>
                        Ecommerce 
                    </div>
                    <div className="text-black ml-3"> Project</div>
                </div>
            )}

            {/* ////////////////////////////// */}

            <div className="px-4 my-3">
                <div
                    className="bg-[#0f626a] mt-3 text-white rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen1(!isopen1)}
                >
                    <div className="flex items-center gap-2">
                        <FaBook className="text-white" />
                        <span className="font-bold">App</span>
                    </div>
                    <IoIosArrowDown className={`transition-transform duration-200 ${isopen1 ? "rotate-180" : ""}`} />
                </div>
            </div>
            {isopen1 && (
                <div className="mt-3 ml-6 space-y-2  text-[15px]">
                    <div className="text-black flex items-center gap-2 mx-6">
                        Calender
                    </div>
                    {/* other dropdown */}
                    <div className="my-2 mx-6">
                        <div
                            className="bg-white mt-3 text-black flex items-center justify-between cursor-pointer"
                            onClick={() => setIsOpen2(!isopen2)}
                        >
                            <div className="flex items-center  text-[15px] font-medium gap-1">
                                <span className="">Profile</span>
                            </div>
                            <IoIosArrowForward className={`transition-transform duration-200 ${isopen2 ? "rotate-90" : ""}`} />
                        </div>
                        {isopen2 && (
                            <div className="mt-3 ml-6 space-y-2 text-[15px]">
                                <div className="text-black  flex items-center gap-2">
                                    <span className="w-1 h-4 inline-block rounded-sm"></span>
                                    Profile
                                </div>
                                <div className="text-black ml-3">Setting</div>
                            </div>
                        )}
                    </div>
                    {/* close drpdown */}

                    {/* other dropdown */}
                    <div className="my-3 mx-6">
                        <div
                            className="bg-white mt-3 text-black flex items-center justify-between cursor-pointer"
                            onClick={() => setIsOpen3(!isopen3)}
                        >
                            <div className="flex items-center  text-[15px] font-medium gap-1">
                                <span className="">Projects Page</span>
                            </div>
                            <IoIosArrowForward className={`transition-transform duration-200 ${isopen3 ? "rotate-90" : ""}`} />
                        </div>
                        {isopen3 && (
                            <div className="mt-3 ml-6 space-y-2 text-[15px]">
                                <div className="text-black  flex items-center gap-2">
                                    <span className="w-1 h-4 inline-block rounded-sm"></span>
                                    projects
                                </div>
                                <div className="text-black ml-3">projects details</div>
                            </div>
                        )}
                    </div>

                    {/* close drpdown */}
                    <div className="text-black flex items-center gap-2 mx-6 my-3">
                        Todo
                    </div>
                    <div className="text-black flex items-center gap-2 mx-6 my-3">
                        Team
                    </div>
                    <div className="text-black flex items-center gap-2 mx-6 my-3">
                        Api
                    </div>
                    <div className="text-black flex items-center gap-2 mx-6 my-3">
                        Chat
                    </div>
                    <div className="text-black flex items-center gap-2 mx-6 my-3">
                        File Manager
                    </div>
                    <div className="text-black flex items-center gap-2 mx-6 my-3">
                        Bookmark
                    </div>
                    <div className="text-black flex items-center gap-2 mx-6 my-3">
                        Timeline
                    </div>
                </div>
            )}
            {/* //////end of App///////// */}
            <div className="text-black font-bold flex items-center gap-2 mx-7 my-3 text-[18px]">
                < FaSquarespace className="text-black" />
                Widgets
            </div>
            {/* ////////////////end of component//////////////// */}

            <div className="px-4">
                <div className="text-[#0f626a] font-bold">COMPONENT</div>
                <div
                    className="bg-[#0f626a] mt-3 text-white rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen4(!isopen4)}
                >
                    <div className="flex items-center gap-2">
                        <BaggageClaim className="text-white" />
                        <span className="font-bold">UI Kits</span>
                    </div>
                    <IoIosArrowDown className={`transition-transform duration-200 ${isopen4 ? "rotate-180" : ""}`} />
                </div>
                {isopen4 && (
                    <div className="mt-3 ml-6 space-y-2 ">
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Cheatsheet
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Alert
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Badges
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Buttons
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Cards
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Dropdown
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Grid
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Avatars
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Tabs
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Accordions
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Progess
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Notification
                        </div>
                    </div>
                )}
            </div>


            <div className="px-4">
                <div
                    className="bg-[#0f626a] mt-3 text-white rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen5(!isopen5)}
                >
                    <div className="flex items-center gap-2">
                        <BiBaguette className="text-white" />
                        <span className="font-bold">Advance UI</span>
                    </div>
                    <IoIosArrowDown className={`transition-transform duration-200 ${isopen5 ? "rotate-180" : ""}`} />
                </div>
                {isopen5 && (
                    <div className="mt-3 ml-6 space-y-2 ">
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Modals
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Offcanvas Toggle
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Sweat Alert
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Scrollbar
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Spinners
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Animaion
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Video Embed
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Tour
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Slider
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Bootstrap Slider
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Scrollpy
                        </div>
                        <div className="text-black flex items-center gap-2 mx-6 my-3">
                            Rating
                        </div>
                    </div>
                )}
            </div>



            {/* ///////////////COMPONENT end//////////////// */}

        </div>
    );
}

export default SideBar;
