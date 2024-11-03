import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HeaderSection from "../components/HeaderSection";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import { Item } from "../types/types";

const Category = async () => {
    try {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories', {
            next: {
                revalidate: 60
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return (
            <>
                <div className="container mx-auto ">
                    <HeaderSection title="Categories" subTitle="Browse By Category" />

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full mt-10"
                    >
                        <div className="flex items-center justify-between absolute lg:top-[-60px] right-56 " >
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>

                        <CarouselContent>
                            {data.map((item: Item) => (
                                <CarouselItem key={item.id} className="w-full sm:w-1/2 p-1 basis-full sm:basis-1/2 lg:basis-1/6">
                                    <div className="p-1">
                                        <CategoryCard
                                            src={item.image?.includes('i.imgur.com') ? item.image : 'https://i.imgur.com/KeqG6r4.jpeg'}
                                            title={item.name || ''}
                                        />
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
    } catch (error) {
        console.error("Failed to fetch categories:", error);
         return <div>Error loading categories. Please try again later.</div>;
    }
};

export default Category;
