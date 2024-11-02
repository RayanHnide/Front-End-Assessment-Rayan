import Button from "../components/Button";
import CardComponents from "../components/CardComponents";
import HeaderSection from "../components/HeaderSection";
import Timer from "../components/Timer";

type Item = {
    id: number;
    title: string;
    price: string;
    originalPrice: string;
}

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const FlashSales = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col mt-10 sm:flex-row">
                    <HeaderSection title="Today&apos;s Flash Sales" subTitle="Today&apos;s Flash Sales" />
                    <Timer targetDate="2024-12-31T23:59:59" />
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <div className="flex items-center justify-between absolute lg:top-[-60px]  right-56 " >

                        <CarouselPrevious />
                        <CarouselNext />
                    </div>

                    <CarouselContent>
                        {data.map((item: Item) => (
                            <CarouselItem key={item.id} className="basis-full sm:basis-1/2 lg:basis-1/5">
                                <div className="p-1">
                                    <CardComponents src={`https://i.imgur.com/KeqG6r4.jpeg`} title={item.title} price={item.price} originalPrice={item.price} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <Button title="View All Products" />
            <hr className="my-10" />
        </>
    );
};

export default FlashSales;