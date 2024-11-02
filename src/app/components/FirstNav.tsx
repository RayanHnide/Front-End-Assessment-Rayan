
import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,

    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const FirstNav: React.FC = () => {
    return (
        <div className="bg-black text-white py-2 px-4 flex  items-center">
            <div className="text-sm text-center lg:w-[90%]">
                Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
                <span className="font-bold ml-2 cursor-pointer">Shop Now</span>
            </div>
            <div className="text-sm lg:w-[10%] ">
                <Select >
                    <SelectTrigger className="w-[180px] lg:border-none">
                        <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="arabic">arabic</SelectItem>
                            <SelectItem value="english">english</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default FirstNav;