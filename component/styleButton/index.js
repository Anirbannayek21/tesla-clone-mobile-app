import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './style'

const StyleButton = (props) => {

    const { type, content } = props

    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6"
    const color = type === "primary" ? "#FFFFFF" : "#171A20"
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.btn, {
                    backgroundColor: backgroundColor
                }]}
                onPress={() => { }}
            >
                <Text style={[styles.btntext, {
                    color: color
                }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyleButton
