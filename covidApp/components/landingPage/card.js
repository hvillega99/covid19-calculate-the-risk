import React from "react";
import { View , Image, Text , StyleSheet , TouchableHighlight, Dimensions} from "react-native";
import { borderRadius, justifyContent, margin, padding, style } from "styled-system";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({datos}) => {
    
    return(
        <TouchableHighlight>
            <View style={styles.card}>
                <View style={styles.imagen}>
                    <Image
                        source={require(`../../assets/img/${datos.imagen}`)}
                        style={styles.icono}
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
        </TouchableHighlight>
        
    );
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        flexDirection: "row",
        width: windowWidth/1.16,
        minHeight: windowHeight/7,
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 0.05,
        marginBottom: 10,
        borderColor: '#9b9b9b'

    },
    icono:{
        paddingLeft: 5,
        width: windowWidth/9,
        height: windowWidth/9,
        borderRadius: 21,
    },
    textTitle:{
        fontSize: windowWidth/22,
    },
    textDescription:{
        fontSize: windowWidth/29
    },
    text:{
        width:  (windowWidth/1.16) - ((windowWidth/1.16)/3.61),
        padding: 5
    },
    imagen:{
        width:(windowWidth/1.16)/3.61 ,
     
    }
});
export default Card;