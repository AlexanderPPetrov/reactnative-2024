import type { ProductType } from "@/types/product";
import {View, Text, StyleSheet, Pressable} from "react-native";
import Card from "@/components/Card";
import { Image } from "expo-image"
import {useColor} from "@/components/Themed";
import AppButton from "@/components/ui/AppButton";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/product";

type Props = {
    product: ProductType
}

function ProductsListItem({ product } : Props) {

    const dispatch = useDispatch()
    function onAddProduct() {
        dispatch(addProduct(product))
    }

    //TODO style title and description
    //TODO review forms and validations?

    const primaryColor = useColor("primary")
    const secondaryColor = useColor("secondary")

    return <Card>
        <View style={styles.header}>
            <Image source={product.image}
                   contentFit={"scale-down"}
                   style={styles.image}/>
            <Text style={styles.productTitle}>{ product.title }</Text>
        </View>
        <Text>{ product.description }</Text>
        <View style={styles.buttonContainer}>
            <AppButton
                title={"View Details"}
                variant="secondary"
                onPress={()=>{}}
            />
            <AppButton
                title={"Add to cart"}
                variant="primary"
                onPress={onAddProduct}
            />
        </View>
    </Card>
}
export default ProductsListItem

const styles = StyleSheet.create({
    productTitle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#00f",
        flex: 2,
        paddingHorizontal: 12,
    },
    image: {
        height: 100,
        flex: 1,
    },
    header: {
        flexDirection: "row",
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: -6,
    },

})