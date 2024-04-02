import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "../utils";
import { useState } from "react";

export type ItemType = {
    title: string;
    items: {
        icon: IconType;
        name: string;
        href: string;
    }[];
};
const Item = ({ items, title }: ItemType) => {
    const [isItemOpen, setItemOpen] = useState(false);
    const pathName = window.location.pathname.split("/")[1];

    const [animationParent] = useAutoAnimate();

    function toggleItem() {
        setItemOpen(!isItemOpen);
    }
    return (
        <div ref={animationParent} className="flex flex-col gap-3">
            <button onClick={toggleItem} className=" flex items-center gap-2">
                <IoIosArrowDown
                    className={cn("  text-sm  text-gray-400 transition-all", {
                        "-rotate-90": !isItemOpen,
                    })}
                />
                {/* <FaChevronDown  /> */}
                <p className="font-semibold">{title}</p>
            </button>

            {isItemOpen && (
                <div className="  flex flex-col gap-2 ">
                    {items.map(({ icon: Icon, name, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            //   pathName
                            className={cn(
                                " flex items-center gap-2  rounded py-2 pl-3 text-gray-600 transition-all hover:bg-blue-200 ",
                                { "bg-blue-200 text-black": pathName === href }
                            )}
                        >
                            <Icon size={16} className=" " />

                            <p className="text-sm">{name}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Item;
