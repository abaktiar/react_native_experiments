import * as React from "react";
import { View, Text, StatusBar, Animated, Easing } from "react-native";
import {
  NavigationStackScreenOptions,
  FlatList,
  withNavigation,
  NavigationInjectedProps
} from "react-navigation";
import {
  Card,
  // ProgressBar,
  Colors,
  FAB,
  Button,
  List,
  TouchableRipple
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProgressBar from "../../components/common/ProgressBar";
// import Animated, { Transition } from "react-native-reanimated";

const HISTORY = [
  {
    comment: "Annual Leave",
    dates: "17 February - 8 March",
    noOfDays: "- 10 Days"
  },
  {
    comment: "Study Leave",
    dates: "17 February - 8 March",
    noOfDays: "- 3 Days"
  },
  {
    comment: "Festival Leave",
    dates: "17 February - 8 March",
    noOfDays: "- 7 Days"
  }
];

export interface LeaveScreenProps extends NavigationInjectedProps {}

export interface LeaveScreenState {
  animations: {
    in: any;
    inc: any;
    toIn: number;
    toInc: number;
    inDelay: number;
  };
  reverse: boolean;
  hideArrow?: string;
}

class LeaveScreen extends React.Component<LeaveScreenProps, LeaveScreenState> {
  constructor(props: LeaveScreenProps) {
    super(props);
    this.state = {
      animations: {
        in: new Animated.Value(0),
        inc: new Animated.Value(0),
        toIn: 1,
        toInc: 2,
        inDelay: 0
      },

      reverse: false
    };
  }

  componentDidMount = () => {
    this.startAnimations();
  };

  showHistoryDialog = () => {
    this.setState(prevState => ({ reverse: !prevState.reverse }));
    if (this.state.reverse) {
      this.state.animations.in.setValue(0);
      this.state.animations.inc.setValue(2);
      this.setState(
        prevState => ({
          animations: {
            ...prevState.animations,
            toIn: 1,
            toInc: 0,
            // in: new Animated.Value(0),
            // inc: new Animated.Value(2),
            inDelay: 500
          },
          hideArrow: "#fff"
        }),
        this.showHistory
      );
    } else {
      this.state.animations.in.setValue(1);
      this.state.animations.inc.setValue(0);
      this.setState(
        prevState => ({
          animations: {
            ...prevState.animations,
            toIn: 0,
            toInc: 2,
            // in: new Animated.Value(1),
            // inc: new Animated.Value(0),
            inDelay: 0
          },
          hideArrow: "#fff"
        }),
        this.showHistory
      );
    }
  };

  showHistory = () => {
    Animated.parallel([
      Animated.timing(this.state.animations.inc, {
        toValue: this.state.animations.toInc,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.timing(this.state.animations.in, {
        toValue: this.state.animations.toIn,
        duration: 500,
        delay: this.state.animations.inDelay,
        easing: Easing.linear
      })
    ]).start();
    // Animated.timing(this.state.animations.inc, {
    //   toValue: 2,
    //   duration: 1000,
    //   easing: Easing.linear
    // }).start();
  };

  startAnimations = () => {
    Animated.timing(this.state.animations.in, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start();
  };

  static navigationOptions: NavigationStackScreenOptions = {
    header: null
  };
  render() {
    const marginBottom = this.state.animations.in.interpolate({
      inputRange: [0, 1],
      outputRange: [-64, 16]
    });
    const incrementHeight = this.state.animations.inc.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 280]
    });
    const rotateArrow = this.state.animations.inc.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"]
    });
    const opacity = this.state.animations.inc.interpolate({
      inputRange: [1, 2],
      outputRange: [0, 1]
    });
    const fabOpacity = this.state.animations.inc.interpolate({
      inputRange: [0, 0],
      outputRange: [1, 0]
    });
    const aMarginTop = this.state.animations.inc.interpolate({
      inputRange: [1.2, 2],
      outputRange: [48, 0]
    });

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="rgb(55, 106, 255)"
          barStyle="light-content"
        />
        <View style={{ height: "35%", backgroundColor: "rgb(55, 106, 255)" }}>
          <Text style={{ fontSize: 14 }}>{"\n"}</Text>
          <View>
            <Text
              style={{ color: "#9fbef5", fontSize: 16, textAlign: "center" }}
            >
              Leave Report
            </Text>
          </View>
          <Text style={{ fontSize: 20 }}>{"\n"}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "rgb(255, 193, 2)"
              }}
            >
              Good Morning,
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "600", color: "#fff" }}>
              {" DaviD"}
            </Text>
          </View>
          {/* <Text style={{ fontSize: 6 }}>{"\n"}</Text> */}
          <View style={{ flex: 4 }}>
            <Text
              style={{ color: "#9fbef5", fontSize: 16, textAlign: "center" }}
            >
              View your current leave balances
            </Text>
            <Text
              style={{ color: "#9fbef5", fontSize: 16, textAlign: "center" }}
            >
              or request new leave.
            </Text>
          </View>
        </View>
        <Animated.View
          style={{
            height: "65%",
            // height: marginTop,
            backgroundColor: "#fff",
            justifyContent: "space-between"
          }}
        >
          <View style={{ paddingHorizontal: 16, marginTop: -56 }}>
            <Card
              style={{
                borderRadius: 10,
                paddingVertical: 10,
                boxWithShadow: {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 5
                }
              }}
            >
              <Card.Title
                titleStyle={{ color: "#1e1e6e" }}
                title="Annual Leave"
              />
              <Card.Content>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 15,
                      color: "#1e1e6e"
                    }}
                  >
                    Total: 25
                  </Text>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 15,
                      color: "#1e1e6e"
                    }}
                  >
                    Remaining: 5
                  </Text>
                </View>
                <ProgressBar
                  barHeight={8}
                  defaultBackground="rgb(229, 232, 249)"
                  colors={["rgb(55, 106, 255)", "rgb(255, 193, 2)"]}
                  maxProgress={25}
                  progress={[13, 7]}
                  shouldAnimate={true}
                />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: "row",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text
                      style={{
                        color: "rgb(55, 106, 255)",
                        fontWeight: "bold",
                        fontSize: 24,
                        marginTop: -6
                      }}
                    >
                      -
                    </Text>
                    <Text style={{ color: "#1e1e6e" }}>{" Available"}</Text>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        color: "rgb(255, 193, 2)",
                        fontWeight: "bold",
                        fontSize: 24,
                        marginTop: -6
                      }}
                    >
                      -
                    </Text>
                    <Text style={{ color: "#1e1e6e" }}>{" Planned"}</Text>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      flexDirection: "row",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Text
                      style={{
                        color: "rgb(229, 232, 249)",
                        fontWeight: "bold",
                        fontSize: 24,
                        marginTop: -6
                      }}
                    >
                      -
                    </Text>
                    <Text style={{ color: "#1e1e6e" }}>{" Taken"}</Text>
                  </View>
                </View>
                <View>
                  <Animated.View
                    style={{
                      alignItems: "center",
                      marginVertical: 20,
                      opacity: fabOpacity
                    }}
                  >
                    <FAB
                      color={this.state.hideArrow || "rgb(55, 106, 255)"}
                      icon="expand-more"
                      style={{ backgroundColor: "#fff", position: "absolute" }}
                      onPress={this.showHistoryDialog}
                    />
                  </Animated.View>
                </View>
                <Animated.View style={{ maxHeight: incrementHeight }}>
                  <View style={{ height: 260 }}>
                    <Animated.View
                      style={{ opacity: opacity, marginTop: aMarginTop }}
                    >
                      <View>
                        <Text
                          style={{
                            color: "#35327a",
                            fontWeight: "bold",
                            fontSize: 16
                            // opacity: 0
                          }}
                        >
                          Leave History
                        </Text>
                      </View>
                      <View style={{ marginVertical: 16 }}>
                        <FlatList
                          // contentContainerStyle={{ margin: 0 }}
                          style={{ paddingHorizontal: 0 }}
                          data={HISTORY}
                          keyExtractor={(item, index) => String(index)}
                          renderItem={({ item }) => (
                            <List.Item
                              titleStyle={{
                                color: "#35327a",
                                fontWeight: "bold"
                              }}
                              descriptionStyle={{ fontWeight: "600" }}
                              title={item.comment}
                              description={item.dates}
                              right={props => (
                                <Text
                                  style={{
                                    alignSelf: "center",
                                    color: "#35327a",
                                    fontWeight: "bold",
                                    fontSize: 16
                                  }}
                                >
                                  {item.noOfDays}
                                </Text>
                              )}
                              left={props => (
                                <List.Icon
                                  {...props}
                                  icon="panorama-fish-eye"
                                  color="#c5dcff"
                                  style={{ paddingLeft: 0 }}
                                />
                              )}
                            />
                          )}
                        />
                      </View>
                    </Animated.View>
                  </View>
                </Animated.View>
                <Animated.View
                  style={{
                    alignItems: "center",
                    transform: [{ rotate: rotateArrow }]
                  }}
                >
                  <TouchableRipple onPress={this.showHistoryDialog}>
                    <Icon
                      name="expand-more"
                      color="rgb(55, 106, 255)"
                      size={24}
                    />
                  </TouchableRipple>
                </Animated.View>
              </Card.Content>
            </Card>
          </View>
          <Animated.View
            style={{ alignItems: "center", marginBottom: marginBottom }}
          >
            <Button
              contentStyle={{ height: 48 }}
              style={{ width: "60%", backgroundColor: "rgb(55, 106, 255)" }}
              icon="arrow-forward"
              mode="contained"
              // onPress={() => this.props.navigation.navigate("Camera")}
            >
              REQUEST Leave
            </Button>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

export default withNavigation(LeaveScreen);
