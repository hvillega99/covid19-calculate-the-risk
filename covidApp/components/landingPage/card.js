import React from "react";
import { View , Image, Text , StyleSheet , TouchableOpacity, Dimensions} from "react-native";
import { borderRadius, justifyContent, margin, padding, style } from "styled-system";



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({datos , navigation }) => {

    const handlePress = () => {
        switch (datos.titulo) {
            case 'Estadistica':
                navigation.push('estadistica');
                break;
            case 'Noticias':
                navigation.push("noticias");
                break;
            case 'Precauiones':
                navigation.push("recomendaciones");
                break;
            default:
                break;
        }
    }

    return(
            <View key={datos.key} style={{flex:1}}>
            <TouchableOpacity 
                key={datos.key} 
                onPress={handlePress}>
                <View style={styles.card} >
                    
                    <View style={styles.imagen}>
                        <Image
                            source={{uri: datos.imagen}}
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
            </TouchableOpacity>
            </View>
        
    );
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        flexDirection: "row",
        width: windowWidth/1.05,
        minHeight: windowHeight/7,
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#9b9b9b'

    },
    icono:{
        paddingLeft: 5,
        width: windowWidth/5,
        height: windowWidth/5,
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
        padding: 5,
        borderRadius:5
    },
    imagen:{
        width:(windowWidth/1.16)/3.25 ,
        alignItems:"center",
        borderRadius:5
    }
});
export default Card;