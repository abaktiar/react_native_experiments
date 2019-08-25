import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

export interface UberScreenProps {}

export interface UberScreenState {}

class UberScreen extends React.Component<UberScreenProps, UberScreenState> {
  constructor(props: UberScreenProps) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uberContainer}>
          <View style={styles.uber}>
            <Text style={styles.uText}>Uber</Text>
          </View>
        </View>
        <View style={styles.btm}>
          <View style={styles.mobileContainer}>
            <View style={styles.mobile}>
              <Text style={styles.mobileHeading}>Get moving with Uber</Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  marginTop: 25,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../assets/img/India.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
                />
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      paddingHorizontal: 10,
                      marginTop: 10
                    }}
                  >
                    +91
                  </Text>
                  <TextInput
                    style={{ flex: 1, fontSize: 20 }}
                    placeholder="Enter your mobile number"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.social}>
            <Text style={styles.socialText}>Or connect with social</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  uberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  uber: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 100,
    width: 100
  },
  uText: {
    fontWeight: "bold",
    fontSize: 24
  },
  btm: {},
  social: {
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
    borderTopColor: "#e8e8ec",
    borderTopWidth: 1,
    paddingHorizontal: 16
  },
  socialText: {
    color: "blue",
    fontWeight: "500"
  },
  mobileContainer: {
    height: 150,
    backgroundColor: "#fff",
    paddingHorizontal: 16
  },
  mobile: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 25
  },
  mobileHeading: { fontSize: 24 }
});

export default UberScreen;
