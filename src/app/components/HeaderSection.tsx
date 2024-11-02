import Image from "next/image";
import logo from '../assets/div.svg';

const HeaderSection = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <div className="p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 sm:pt-20">
                <Image src={logo} width={20} height={20} alt="logo" />
                <h1 className="text-center sm:text-left">{title}</h1>
            </div>
            <div className="flex justify-center sm:justify-start items-center">
                <div className="text-xl sm:text-2xl font-bold mt-2 sm:mt-4">{subTitle}</div>
            </div>
        </div>
    );
};

export default HeaderSection;