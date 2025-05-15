import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Button } from "./Button";

import { styles } from "../style";

import type { TooltipProps } from "../../types";
import { useCopilot } from "../../contexts/CopilotProvider";

export const Tooltip = ({ labels, customStyles }: TooltipProps) => {
  const { goToNext, goToPrev, stop, currentStep, isFirstStep, isLastStep } =
    useCopilot();

  const handleStop = () => {
    void stop();
  };
  const handleNext = () => {
    void goToNext();
  };

  const handlePrev = () => {
    void goToPrev();
  };

  return (
    <View>
      <View style={[styles.tooltipContainer, customStyles?.container]}>
        <Text testID="stepDescription" style={[styles.tooltipText, customStyles?.description]}>
          {currentStep?.text}
        </Text>
      </View>
      <View style={[styles.bottomBar, customStyles?.footer]}>
        {!isLastStep ? (
          <TouchableOpacity onPress={handleStop}>
            <Button style={customStyles?.skipText}>{labels.skip}</Button>
          </TouchableOpacity>
        ) : null}
        {!isFirstStep ? (
          <TouchableOpacity onPress={handlePrev}>
            <Button style={customStyles?.previousText}>{labels.previous}</Button>
          </TouchableOpacity>
        ) : null}
        {!isLastStep ? (
          <TouchableOpacity onPress={handleNext}>
            <Button style={customStyles?.nextText}>{labels.next}</Button>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleStop}>
            <Button style={customStyles?.finishText}>{labels.finish}</Button>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
