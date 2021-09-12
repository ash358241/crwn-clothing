import React, { useEffect, useState } from 'react';
import ShopData from "../Shop/ShopData";

console.log(ShopData);

const Shop = () => {
    const [shopData, setShopData] = useState([]);
    useEffect(() => {
        setShopData(ShopData)
    }, [])
    console.log(shopData)
    return (
        <div>
            shop page
        </div>
    );
};

export default Shop;