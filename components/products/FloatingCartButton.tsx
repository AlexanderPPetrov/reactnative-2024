import AppBadge from "@/components/ui/AppBadge";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

function FloatingCartButton() {

    const selectedProducts = useSelector(({ product } : any) => product.selectedProducts)

    if(!selectedProducts.length) {
        return null
    }
    return <AppBadge component={
        <MaterialCommunityIcons color={"#000"}
                                size={30}
                                name={"cart-outline"}
        />
    } count={selectedProducts.length}/>
}
export default FloatingCartButton