import React from "react";
import { View, StyleSheet } from "react-native";
import NewsCard from "./newsCard";

const CardGrid = () => {
    return (
        <View style={styles.container}>
            <NewsCard 
                title="Reos se subieron al techo" 
                url= "https://www.eluniverso.com/guayaquil/comunidad/se-registran-disturbios-en-la-carcel-regional-de-guayaquil-la-manana-de-este-sabado-2-de-octubre-nota/?modulo=destacadas-uno&plantilla=home"
                src="El Universo"
                img="https://www.eluniverso.com/resizer/pG8G-XJOJ-oYlpd3CJK36RiAcdM=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/MZRWUA3CWFGQHBZFYUMM3DH7KY.JPG"
                date="2 de octubre, 2021"
            />
        </View>
    );
}

export default CardGrid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start"
    }
});