import {View, StyleSheet } from "react-native"
import { useColor } from "@/components/Themed";

function Card(props: any) {
    const borderColor = useColor("borderColor")
    const backgroundColor = useColor("backgroundColor")

    return <View style={[styles.card, { borderColor, backgroundColor }]}>
        {props.children}
    </View>
}
export default Card

const styles = StyleSheet.create({
    card: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderStyle: "solid",
        borderWidth: 1,
        marginVertical: 3,
        marginHorizontal: 6,
    }
})