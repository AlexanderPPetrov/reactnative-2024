import ProductsList from "@/components/products/ProductsList";
import { useFetchProducts } from "@/react-query/queries/products";
import {ProductListType} from "@/types/product";
import {ActivityIndicator, Text} from "react-native"
function ProductsContainer() {
    const { isLoading, data, error } = useFetchProducts()

    if(isLoading) {
        return <ActivityIndicator color={"#00ff00"}/>
    }
    if(error) {
        return <Text>Something went wrong...</Text>
    }
    const productList = (data as ProductListType) || []
    return <ProductsList productList={productList}/>
}
export default ProductsContainer