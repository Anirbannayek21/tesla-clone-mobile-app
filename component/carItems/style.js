import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get('window').height + 50
    },
    header: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
        flexGrow: 1
    },
    title: {
        fontSize: 40,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 17,
        color: "#5c5e62"
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
    },
    btncontainer: {
        width: "100%",
        position: "absolute",
        bottom: 50
    }
});

export default styles