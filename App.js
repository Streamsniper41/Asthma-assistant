import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <SafeAreaView style={{ backgroundColor: "dodgerblue", flex: 6 , borderRadius: 5}} >
        <SafeAreaView>
      <Text style={{alignSelf: "center", color: "white", fontSize: 30,  top: -10}}> Hello there</Text>
      </SafeAreaView>

      </SafeAreaView>
   
    </View>
  );
};

export default ViewBoxesWithColorAndText;