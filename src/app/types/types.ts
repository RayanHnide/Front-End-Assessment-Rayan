export interface Item {
    id: number;
    title?: string; 
    price?: string; 
    name?: string;   
    image?: string;  
} 
export interface CountdownTimerProps {
    targetDate: string; // Format: "YYYY-MM-DDTHH:mm:ss"
  }
  
  export interface FeatureProps {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface CardComponentsProps {
    src: string;
    title: string;
    price: string;
    originalPrice: string;
  }
  
  export type ButtonProps = {
    title: string;
    display?: string;
  };
  
  export interface CategoryCardProps {
    src: string;
    title: string;
  }