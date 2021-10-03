import React from "react";
import { View , Image, StyleSheet, Dimensions} from 'react-native';
import imagen from '../../assets/img/precauciones.jpg'
import Title from "../title/title";
import Card from "./Card";

const datos = [
    {
        titulo: 'Usa Mascarilla',
        descripcion: 'en lugares públicos y\nespacios cerrados',
        imagen: 'mascarilla.png'
    },
    {
        titulo: 'Lava tus manos',
        descripcion: 'con agua y jabón o\nusa desinfectante',
        imagen: 'lavar-mano.png'
    },
    {
        titulo: 'Cúbrete',
        decripcion: 'Al toser o estornudar',
        imagen: 'cubrirse.png'
    },
    {
        titulo: 'distanciamiento Fisico',
        descripcion: 'de seguridad de 2 metros',
        imagen: 'distanciamiento_banner.png'
    },
    {
        titulo: 'Vacúnate',
        descripcion: 'las dosis completas',
        imagen: 'vacunat.png'
    }
]

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Body = () => {

    return (
        <View style={styles.body}>
            <View style={styles.imageContainer}>
                <Title title='Precauciones'/>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={imagen}
                    />
                </View> 
            </View>
            <View style={styles.card}>
                {datos.map( e => <Card datos={e}/>)}
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    body:{
        width: windowWidth,
    },
    image: {
        width: windowWidth,
        height: 270,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    imageContainer:{
        backgroundColor: '#29AEF2',
    },
    card:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 'auto',
        marginRight: "auto",
        marginTop: 30,
        width: windowWidth/1.05,
    }
});

export default Body;