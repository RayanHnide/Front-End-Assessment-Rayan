import CardComponents from "../components/CardComponents"
import HeaderSection from "../components/HeaderSection"

const ExploreProducts = async () => {
    type Product = {
        id: number,
        title: string,
        price: string,
        description: string,
    }
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await res.json()
    const sliceData = data.slice(0, 8)

    console.log(data)
    return (
        <>
            <div className="container mx-auto ">
                <HeaderSection title="Our Products" subTitle="Explore our wide range of products" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        sliceData.map((item: Product) => (
                            <CardComponents key={item.id} src={`https://i.imgur.com/KeqG6r4.jpeg`} title={item.title} price={item.price} originalPrice={item.price} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ExploreProducts;