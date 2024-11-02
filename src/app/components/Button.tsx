import { ButtonProps } from '../types/types';

const Button = ({ title, display }: ButtonProps) => {
    return (
        <div className={`flex justify-center items-center `}>
            <button className={`bg-red-500 text-white px-6 py-2 rounded ${display}`}>
                {title}
            </button>
        </div>
    );
}

export default Button;