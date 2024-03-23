import { StyleSheet, ScrollView, Text } from 'react-native';
import ProductsContainer from "@/components/products/ProductsContainer";

export default function TabOneScreen() {
  return (
      <ScrollView>
        <ProductsContainer/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({

});
