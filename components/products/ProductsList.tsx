import { View } from "react-native";
import { ProductListType } from "@/types/product";
import ProductsListItem from "@/components/products/ProductsListItem";
type Props = {
    productList: ProductListType
}
function ProductsList({ productList } : Props) {
    const getProductListItems = () => {
        return productList.map((product) => {
            return <ProductsListItem key={product.id}
                                     product={product}/>
        })
    }
    return <View>
        {getProductListItems()}
    </View>
}
export default ProductsList