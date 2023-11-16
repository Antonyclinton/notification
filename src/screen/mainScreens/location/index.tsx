import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { MAPBOX_TOKEN } from "../../../service/config";

MapboxGL.setAccessToken(MAPBOX_TOKEN);



const Location = () => {

    useEffect(() => {
        MapboxGL.setWellKnownTileServer('Mapbox');
        MapboxGL.setTelemetryEnabled(false);
    })

    return (
        <MapboxGL.MapView style={styles.map} >
        </MapboxGL.MapView>
    );
}


export default Location


const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
});