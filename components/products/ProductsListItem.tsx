import type { ProductType } from "@/types/product";
import {View, Text, StyleSheet, Pressable} from "react-native";
import Card from "@/components/Card";
import { Image } from "expo-image"
import {useColor} from "@/components/Themed";

type Props = {
    product: ProductType
}

function ProductsListItem({ product } : Props) {

    //TODO style title and description
    //TODO create a generic AppButton component that can be easily reused
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
            <Pressable style={[styles.viewDetails, {backgroundColor: secondaryColor}]}>
                <Text style={{ textAlign: "center", color: "white" }}>View Details</Text>
            </Pressable>
            <Pressable style={[styles.addToCart, {backgroundColor: primaryColor}]}>
                <Text style={{ textAlign: "center", color: "white" }}>Add to cart</Text>
            </Pressable>
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
    viewDetails: {
        flex: 1,
        margin: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    addToCart: {
        flex: 1,
        margin: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
    }

})