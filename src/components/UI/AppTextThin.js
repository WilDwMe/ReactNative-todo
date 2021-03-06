import React from "react";
import { Text, StyleSheet } from 'react-native';

export const AppTextThin= ({ children, style }) => <Text style={{ ...styles.default, ...style }}>{children}</Text>;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-thin'
    }
})