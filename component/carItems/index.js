import React from 'react'
import { View, Text, ImageBackground } from "react-native"
import StyleButton from '../styleButton'
import styles from "./style"

const Caritem = (props) => {

    const { name, tagline, subtext, image } = props.car

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.img}
            />
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {" "}
                    <Text style={styles.subtext}>
                        {subtext}
                    </Text>
                </Text>
            </View>
            <View style={styles.btncontainer}>
                <StyleButton type="primary" content="custom order"
                />
                <StyleButton type="secondary" content="existing inverntory"
                />
            </View>
        </View>
    )
}

export default Caritem
