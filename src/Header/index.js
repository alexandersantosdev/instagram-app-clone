import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Logo from '../img/logo.png';
import Send from '../img/send.png';

const Header = () => {

    return(
        <View style={styles.header}>
            <TouchableOpacity>
                <Image 
                source={Logo}
                style={styles.logo}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={styles.send}
                source={Send}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        marginTop: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: .2,
        shadowColor: '#000',
        elevation: 1


    },
    send: {
        width:23,
        height: 23
    }
});

export default Header;