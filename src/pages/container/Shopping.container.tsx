import { useEffect, useState } from "react";
import ShoppingLayout from "../layout/Shopping.layout";
import Http from "../../helpers/Fatch";
import IProductValue from "../../interface/IProduct";

function ShoppingContiner() {

    const data: IProductValue[] = [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: "12.96",
            rating: "4.69",
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
            ]
        },
        {
            id: 2,
            title: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: "17.94",
            rating: "4.44",
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/2/1.jpg",
                "https://cdn.dummyjson.com/product-images/2/2.jpg",
                "https://cdn.dummyjson.com/product-images/2/3.jpg",
                "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
            ]
        }
    ];


    const [dataProduct, setDataProduct] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setDataProduct(data);
    }, []);

    const GetAllUser = async () => {
        setLoading(true);
        try {
            const res = await Http.get("product", {
            });

            dataProduct(res.data.products);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    };

    console.log(dataProduct);
    return (
        <div>
            <ShoppingLayout dataProduct={dataProduct} />
        </div>
    );
}
export default ShoppingContiner;
