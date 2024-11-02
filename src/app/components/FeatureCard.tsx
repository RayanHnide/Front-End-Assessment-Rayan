import Image from 'next/image';
import { FeatureProps } from '../types/types';
const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
      <Image src={icon} alt={title} width={50} height={50} />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);


export default Feature;