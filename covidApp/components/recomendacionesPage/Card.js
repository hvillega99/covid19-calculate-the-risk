import React from "react";
import { View , Image, Text , StyleSheet , TouchableHighlight , Dimensions} from "react-native";
import { alignContent, alignItems } from "styled-system";
//import { borderRadius, justifyContent, margin } from "styled-system";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({datos}) => {

    return(
        <View style={styles.card}>
            <View style={styles.magenDiv}>
                <Image
                    source={require(`../../assets/img/${datos.imagen}`)}
                    style={styles.imagen}
                />
            </View>
            <View style={styles.text}>
                <Text style={styles.textTitle}>
                    {datos.titulo}
                </Text>
                <Text style={styles.textDescription}>
                    {datos.descripcion}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flexGrow:0,
        flex: 1,
        minWidth: windowWidth/3.5,
        minHeight: windowHeight/3.5,
        maxWidth: windowWidth/2.9,
        //maxHeight: windowHeight/3.5,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        marginTop: 10,
        padding: 5,
        alignItems:"center",
        justifyContent: "space-between",
        borderWidth: 0.025,
        borderRadius: 10,
        borderColor: '#9b9b9b'
    },
    imagen:{
        height: windowWidth/4,
        width: windowWidth/4,
        marginBottom:15
    },
    magenDiv:{
    },
    textTitle:{
        fontSize: windowWidth/25,
        fontFamily:"italy",
        textAlign: "center"
    },
    textDescription:{
        fontSize: windowWidth/30,
        fontFamily: "italy",
        textAlign: "center"
    },
    text:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin: "auto"
    }

});

export default Card;

