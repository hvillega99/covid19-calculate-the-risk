import React from "react";
import { View , Image, StyleSheet} from 'react-native';
import imagen from '../../assets/img/precauciones.jpg'
import Title from "../title/title";
import Card from "./Card";

const datos = [
    {
        titulo: 'Usa Máscarilla',
        descripcion: 'en lugares públicos y\nespacios cerrados',
        imagen: 'mascarilla.png'
    },
    {
        titulo: 'Lava tus manos',
        descripcion: 'con agua y jabos o\nusa desinfectante',
        imagen: 'lavar-mano.png'
    },
    {
        titulo: 'Cubrete',
        decripcion: 'Al toser o estornudar',
        imagen: 'cubrirse.png'
    },
    {
        titulo: 'distanciamiento Fisico',
        descripcion: 'de seguridad de 2 metros',
        imagen: 'distanciamiento_banner.png'
    },
    {
        titulo: 'Vacunate',
        descripcion: 'las dosis completas',
        imagen: 'vacunat.png'
    }
]

const Body = () => {

    return (
        <View style={styles.body}>
            <Title title='Precausiones'/>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={imagen}
                />
            </View> 
            <View style={styles.card}>
                {datos.map( e => <Card datos={e}/>)}
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    body:{
        width: "417px",
    },
    image: {
        width: "417px",
        height: "270px",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    imageContainer:{
        backgroundColor: '#29AEF2',
    },
    card:{
        flex:1,
        flexDirection: "row"
    }
});

export default Body;