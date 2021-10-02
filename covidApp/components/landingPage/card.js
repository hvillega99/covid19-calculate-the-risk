import React from "react";
import { View , Image, Text , StyleSheet , TouchableHighlight} from "react-native";
import { borderRadius, justifyContent, margin } from "styled-system";

const Card = ({datos}) => {
    
    return(
        <TouchableHighlight>
            <View style={styles.card}>
                <View >
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
        width: '354px',
        minHeight: '100px',
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
        width: '42px',
        height: '42px',
        borderRadius: 21,
    },
    textTitle:{
        fontSize: 18,
    },
    textDescription:{
        fontSize: 14
    },
    text:{
        maxWidth: 225,
        minWidth: 225
    }
});
export default Card;