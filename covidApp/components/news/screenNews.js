import React from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import Title from "../title/title";

const ScreenNews = () =>{
    return (
        <View>
            <Title title="Noticias" />
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require("../../assets/img/news.png")}
                    />
                </View>
                
            </ScrollView> 
        </View>
    );
}

export default ScreenNews;

const styles = StyleSheet.create({
    image: {
        width: "417px",
        height: "270px",
        borderRadius: 5
    },

    imageContainer: {
        backgroundColor: "#29AEF2"
    }

});