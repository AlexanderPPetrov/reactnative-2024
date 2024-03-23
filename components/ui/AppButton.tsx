import {Pressable, StyleSheet, Text, TextStyle } from "react-native";
import {useColor} from "@/components/Themed";
import {Variant, variants} from "@/constants/Colors";

interface Props {
    variant?: Variant
    title: string
    onPress: () => void
    textStyle?: TextStyle
}
function AppButton(props: Props) {

    const {
        variant = variants.PRIMARY,
        title,
        onPress,
        textStyle = {},
    } = props

    const backgroundColor = useColor(variant)

    return <Pressable
        onPress={onPress}
        style={[styles.button, { backgroundColor }]}
    >
        <Text style={[styles.buttonText, textStyle]}>{ title }</Text>
    </Pressable>
}
export default AppButton

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: "center",
        color: "white"
    },

})