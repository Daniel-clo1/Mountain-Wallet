import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";
import { generateMnemonic } from "../../api";
// Fuente
import * as Font from "expo-font";

import { styles } from "../theme/appTheme";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const Home = ({ navigation }: { navigation: any }) => {
  function generarMnemonic() {
    const memo = generateMnemonic();
    memo.then((value) => {
      console.log(value);
      setTimeout(() => {
        navigation.navigate("Slider");
      }, 100);
    });
  }

  //Función fuentes tipograficas

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });
  const loadFonts = async () => {
    await Font.loadAsync({
      //Fuente
      "opensans-regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={styles.body}>
      <View style={styles.completo}>
        <Image
          style={styles.logocolor}
          source={require("./img/logocolor.png")}
        />

        <View style={styles.btncr}>
          <TouchableOpacity
            style={styles.btnc}
            activeOpacity={0.5}
            onPress={() => generarMnemonic()}
          >
            <Text style={styles.txtc}>CREAR NUEVA CARTERA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnr}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("ImportarCuenta")}
          >
            <Text style={styles.txtr}>RESTAURAR CARTERA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cajadevep}>
          <Text style={styles.txtdevep}>DEVELOPED BY CONDOR LAB</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
