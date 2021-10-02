import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Title from "../title/title";

const ScreenStatistics = () => {

    return (
        <View>
            <Title title="Estadísticas" />
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={require("../../assets/img/coronavirus.png")}
                />
            </View>
        </View>
    )

}

export default ScreenStatistics;

const styles = StyleSheet.create({
    image: {
        width: "417px",
        height: "270px",
        borderRadius: "5%"
    },

    imageContainer: {
        backgroundColor: "#29AEF2"
    }

});