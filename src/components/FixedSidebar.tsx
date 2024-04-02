import { IconType } from "react-icons";

import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineBell,
    AiOutlineMail,
} from "react-icons/ai";
import { cn } from "../utils";

type Item = {
    icon: IconType;
    isActive: boolean;
};

const itemData: Item[] = [
    {
        icon: AiOutlineHome,
        isActive: true,
    },

    {
        icon: AiOutlineUser,
        isActive: false,
    },
    {
        icon: AiOutlineSetting,
        isActive: false,
    },

    {
        icon: AiOutlineBell,
        isActive: false,
    },

    {
        icon: AiOutlineMail,
        isActive: false,
    },

    {
        icon: AiOutlineSetting,
        isActive: false,
    },
];

const FixedSidebar = () => {
    return (
        <div className="flex  h-full min-w-[50px] max-w-[50px] flex-col items-center bg-gray-200 py-2 shadow-sm">
            {itemData.map(({ icon: Icon, isActive }, i) => (
                <button
                    key={i}
                    className={cn(
                        "flex w-full items-center justify-center border-l-4 border-transparent py-4  hover:bg-blue-300/70",
                        {
                            "border-blue-500": isActive,
                        }
                    )}
                >
                    <Icon
                        className={cn("text-xl text-gray-500", {
                            "text-blue-500": isActive,
                        })}
                    />
                </button>
            ))}
        </div>
    );
};

export default FixedSidebar;
