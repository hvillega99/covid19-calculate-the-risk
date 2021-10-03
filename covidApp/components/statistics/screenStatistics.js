import React , { useState, useEffect } from "react";
import {Platform, View, Image, Dimensions, ScrollView, Text, StyleSheet } from "react-native";
import Title from "../title/title";
import Line from "./lineChart";
import Probability from "./progressChart";



const ScreenStatistics = ({navigation}) => {
    

    return (
        <View>
            
            <ScrollView>
                <Title title="Estadísticas" />
                <View style={styles.imageContainer}>
                    <Image
                    style={styles.image}
                    source={require("../../assets/img/coronavirus.png")}
                    />
                </View>
                <View style={styles.container}>

                    <View style={styles.card}>
                        <Text style={{fontSize: 20}}>Contagios</Text>
                        <Text style={{fontSize: 20}}>50000</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={{fontSize: 20}}>Muertes</Text>
                        <Text style={{fontSize: 20}}>1000</Text>
                    </View>

                </View>
                <Text style={styles.titleSection}>Probabilidad de contagio</Text>
                <Probability value={0.45} />
                <Text style={styles.titleSection}>Tendencia de contagios</Text>
                <Line 
                    data={[20, 45, 28, 80, 99, 43]}
                    labels={['28/09', '29/09', '30/09', '01/10', '02/10', '03/10']}
                />
            </ScrollView>
        </View>
    )

}

export default ScreenStatistics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },

    card:{
        height: 85,
        width: 0.45*Dimensions.get('window').width,
        backgroundColor: "#ECF0F1",
        borderRadius: 16,
        margin: 10,
        padding: 10,
        textAlign: "center",
        borderRadius: 10,
        borderWidth: 0.05,
    },

    image: {
        width: Dimensions.get('window').width,
        height: 270,
         borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    imageContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: "#29AEF2"
    },

    titleSection: {
        margin: 10,
        fontSize: 20
    }

});