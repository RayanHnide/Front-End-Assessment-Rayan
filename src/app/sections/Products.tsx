import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Button from "../components/Button";
import HeaderSection from "../components/HeaderSection";
import CardComponents from "../components/CardComponents";
import { Item } from "../types/types";
const Products = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products', {
        next: {
            revalidate: 60
        }
    });
    const data = await res.json();
    return (
        <>

            <div className="container mx-auto">

                <div className="flex justify-between items-center mb-10">
                    <HeaderSection title="Products" subTitle="Best Selling Products" />
                    <Button display="hidden lg:flex" title="View All Products" />
                </div>

                <Carousel
                    opts={{
                        align: "start",

                    }}
                    className="w-full  "
                >
                    <div className="flex items-center justify-between absolute lg:top-[-60px] right-56 " >

                        <CarouselPrevious />
                        <CarouselNext />
                    </div>

                    <CarouselContent>
                        {data.map((item: Item) => (
                            <CarouselItem key={item.id} className="w-full sm:w-1/2 p-1 basis-full sm:basis-1/2 lg:basis-1/5">
                                <div className="p-1">

                                    <CardComponents
                                        src={`https://i.imgur.com/KeqG6r4.jpeg`}
                                        title={item.title || ''}
                                        price={item.price || ''}
                                        originalPrice={item.price || ''}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </div>
            <Button display="  lg:flex " title="View All Products" />
            <hr className="my-10" />

        </>
    )
}

export default Products;