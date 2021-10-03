import React from "react";
import { View , Image, Text , StyleSheet , TouchableHighlight , Dimensions} from "react-native";
import { alignContent, alignItems } from "styled-system";
//import { borderRadius, justifyContent, margin } from "styled-system";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({datos}) => {
    
    return(
        <View style={styles.card} key={datos.key}>
            <View style={styles.magenDiv}>
                <Image
                    source={{uri: datos.imagen}}
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
        minWidth: windowWidth/2.5,
        minHeight: windowHeight/3,
        maxWidth: windowWidth/2,
        //maxHeight: windowHeight/3.5,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        marginTop: 10,
        padding: 5,
        alignItems:"center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
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
        fontFamily:"normal",
        textAlign: "center"
    },
    textDescription:{
        fontSize: windowWidth/30,
        fontFamily: "normal",
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

