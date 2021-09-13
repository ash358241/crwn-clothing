import React, { useEffect, useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import ShopData from "../Shop/ShopData";

const Shop = () => {
    const [shopData, setShopData] = useState([]);
    useEffect(() => {
        setShopData(ShopData)
    }, [])
    return (
        <div className="shop-page">
            {
                shopData.map(data => <CollectionPreview data={data} key={data.id}></CollectionPreview>)
            }
        </div>
    );
};

export default Shop;