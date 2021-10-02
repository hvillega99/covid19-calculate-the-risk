import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({title}) => {

    return (
        <View style={styles.titleContainer}>
            <View style={styles.centeredView}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )

}

export default Title;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    titleContainer: {
        backgroundColor: "#29AEF2",
        width: "413px",
        height: "97px"
    },

    titleText: {
        fontSize: "28px",
        fontStyle: "bold",
        color: "white"
    }

});