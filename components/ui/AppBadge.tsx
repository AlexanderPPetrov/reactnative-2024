import {StyleSheet, View, Text} from "react-native";
import type { ReactNode } from "react";
import { UI } from "@/components/ui/styles";

type Props = {
    component: ReactNode
    count?: number
}
function AppBadge({ component, count = 0 }: Props) {
    return (
        <View style={[styles.badge, UI.boxShadow]}>
            <View style={styles.count}>
                <Text style={styles.countText}>{ count }</Text>
            </View>
            { component }
        </View>
    )
}

export default AppBadge
const styles = StyleSheet.create({
    badge: {
        padding: 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderColor: "#efefef",
        borderWidth: 1,
        borderRadius: 60,
        width: 60,
        height: 60,
        position: "absolute",
        right: 15,
        bottom: 60,
    },
    count: {
        backgroundColor: "red",
        borderRadius: 16,
        width: 16,
        height: 16,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        right: 0,
    },
    countText: {
        color: "#fff",
        fontSize: 10
    },
})