import React from "react";
import { View , Image, Text , StyleSheet , TouchableHighlight , Dimensions} from "react-native";
//import { borderRadius, justifyContent, margin } from "styled-system";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({datos}) => {

    return(
        <View style={styles.card}>
            <View>
                <Image
                    source={require(`../../assets/img/${datos.imagen}`)}
                    style={styles.imagen}
                />
            </View>
            <View>
                <Text>
                    {datos.titulo}
                </Text>
                <Text>
                    {datos.descripcion}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        width: 116.29,
        height: 153,
    },
    imagen:{
        height: 70,
        width: 70
    }

});

export default Card;

