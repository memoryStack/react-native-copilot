import React, { type FunctionComponent } from "react";
import { Text, View } from "react-native";
import { useCopilot } from "../../contexts/CopilotProvider";

import { styles } from "../style";

export const StepNumber: FunctionComponent<unknown> = ({
  containerStyles,
  textStyles
}) => {
  const { currentStepNumber } = useCopilot();

  return (
    <View style={[styles.stepNumber, containerStyles]}>
      <Text style={[styles.stepNumberText, textStyles]}>{currentStepNumber}</Text>
    </View>
  );
};
