import React, { useState, useEffect } from "react";
import { Animated, TextInput, View } from "react-native";

const BlinkingCursorTextInput = () => {
  const [isCursorVisible, setCursorVisible] = useState(true);
  const blinkAnimation = new Animated.Value(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the visibility of the cursor
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Define the animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [blinkAnimation]);

  const cursorStyle = {
    opacity: blinkAnimation,
  };

  return (
    <View>
      <Animated.Text style={[{ fontSize: 40, color: "#F8908E" }, cursorStyle]}>
        {isCursorVisible ? "|" : " "}
      </Animated.Text>
    </View>
  );
};

export default BlinkingCursorTextInput;
