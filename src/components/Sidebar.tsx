import { FaBell, FaCog, FaEnvelope, FaHome, FaUser } from "react-icons/fa";
import {
    AiOutlineBell,
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineSetting,
    AiOutlineUser,
} from "react-icons/ai";
import Item, { ItemType } from "./Item";
import { useMenu } from "../hooks/useMenu";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const sampleData: ItemType[] = [
    {
        title: "Main",
        items: [
            {
                icon: FaHome,
                name: "Home",
                href: "/",
            },
            {
                icon: FaUser,
                name: "Profile",
                href: "/profile",
            },
            {
                icon: FaCog,
                name: "Settings",
                href: "/settings",
            },
        ],
    },
    {
        title: "Notifications",
        items: [
            {
                icon: FaBell,
                name: "Notifications",
                href: "/notifications",
            },
            {
                icon: FaEnvelope,
                name: "Messages",
                href: "/messages",
            },
        ],
    },
    {
        title: "Main",
        items: [
            {
                icon: AiOutlineHome,
                name: "Dashboard",
                href: "/dashboard",
            },
            {
                icon: AiOutlineUser,
                name: "Profile",
                href: "/profile",
            },
            {
                icon: AiOutlineSetting,
                name: "Settings",
                href: "/settings",
            },
        ],
    },
    {
        title: "Notifications",
        items: [
            {
                icon: AiOutlineBell,
                name: "Notifications",
                href: "/notifications",
            },
            {
                icon: AiOutlineMail,
                name: "Messages",
                href: "/messages",
            },
        ],
    },
    {
        title: "Utilities",
        items: [
            {
                icon: AiOutlineSetting,
                name: "Calculator",
                href: "/calculator",
            },
            {
                icon: AiOutlineSetting,
                name: "Calendar",
                href: "/calendar",
            },
        ],
    },
];

const Sidebar = () => {
    const isOpen = useMenu((state) => state.isOpen);
    const [animationParent] = useAutoAnimate();

    return (
        <div className=" bg-gray-200/80 " ref={animationParent}>
            {isOpen && (
                <div className="flex h-full w-full  max-w-[250px] flex-col gap-3 bg-gray-200/80 p-4">
                    {sampleData.map((d, i) => (
                        <Item key={i} {...{ ...d }} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
