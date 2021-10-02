import React from 'react';
import { View , StyleSheet , Image,  ScrollView ,Dimensions} from 'react-native';
import Title from '../title/title';
import imagen from '../../assets/img/covid-landing-page.jpg';
import Card from './card';

const datos = [
    {
        titulo: 'Estadistica',
        descripcion: 'Conoce la cantidad de casos,\nrecuperados y muertes',
        imagen: 'bx-left-top-arrow-circle.svg',
    },
    {
        titulo: 'Clima',
        descripcion: 'Conoce el clima de tu localizacion\nactual',
        imagen: 'bx-sun.svg',
    },
    {
        titulo: 'Noticias',
        descripcion: 'Conoce nuevas noticias sobre el\nCovid-19',
        imagen: 'bx-sun.svg',
    },
    {
        titulo: 'Precauiones',
        descripcion: 'Conoce las recomendacioces de los doctores\npara prevenir el contagio',
        imagen: 'bx-sun.svg',
    },
]

const Body = () => {
    
    return (
        <View style={styles.body}>
            <Title title='FizeNet'/>
            <View>
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={imagen}
                />
            </View>    
            
            </View>
            <ScrollView>
                <View style={styles.cards}>
                    {
                        datos.map( e => <Card datos={e}/>)
                    }
                </View>
            </ScrollView>
            
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
    cards:{
        flex:1,
        marginTop: 40,
        alignItems: 'center'
    }
});

export default Body;

