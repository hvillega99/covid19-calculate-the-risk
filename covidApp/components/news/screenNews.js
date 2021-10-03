import React from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from "react-native";
import Title from "../title/title";
import CardGrid from "./cardGrid";

const ScreenNews = ({navigation}) =>{
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
                <CardGrid />
            </ScrollView> 
        </View>
    );
}

export default ScreenNews;

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: 270,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    imageContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: "#29AEF2"
    }
});