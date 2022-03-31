import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Layout from '../../components/Layout/';

export default function(){

    return(
        <View style={styles.container}>
            <Layout title="HOME LISTA DE TAREFAS">
                <Text style={styles.text}> BODY DA PAGE HOME </Text>
            </Layout>
            
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        width: '100%',
        flex: 1,
    },

    text:{
        color: "#FFF",
        fontSize: 20,
        // marginTop: 40,
    }

})