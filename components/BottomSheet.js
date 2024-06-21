import { View, Text } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS } from "../constants";

export default function BottomSheet({ bottomSheetRef, children }) {
  return (
    <RBSheet
      ref={bottomSheetRef}
      height={300}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressBack={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0,0,0,0.2)",
        },
        draggableIcon: {
          backgroundColor: COLORS.gray,
          width: 100,
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <View>{children}</View>
    </RBSheet>
  );
}
