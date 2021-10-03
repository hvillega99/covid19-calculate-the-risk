import React from "react";
import { View, StyleSheet } from "react-native";
import NewsCard from "./newsCard";

const CardGrid = () => {
    return (
        <View style={styles.container}>
            <NewsCard 
                title="Ecuador no dará certificado de vacunación a quienes se inocularon contra el COVID-19 en el exterior" 
                url= "https://www.eluniverso.com/noticias/informes/ecuador-no-dara-certificado-de-vacunacion-a-quienes-se-inocularon-contra-el-covid-19-en-el-exterior-nota/"
                src="El Universo"
                img="https://www.eluniverso.com/resizer/jKoS4y_uCu70QRO4Ke1s-rmtEs0=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/CGQWY5C5VLS7S457CK2X2X7LDU.jpg"
                date="30 de septiembre, 2021"
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
        justifyContent: "center"
    }
});