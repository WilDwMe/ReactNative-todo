import React, {useState} from "react";
import { View, StyleSheet, Button, Modal, TextInput, Alert } from 'react-native';

import { THEME } from "../theme";
import { AppButton } from "./UI/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error!', `Title should not less 3 characters, current is ${title.trim().length}`)
        } else {
            onSave(title);
        }
    }

    const cancelHandler = () => {
        setTitle(value);
        onCancel();
    }
 
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Please enter title"
                    autoCapitalize="none"
                    maxLength={64}
                />
                <View style={styles.button}>
                    <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
                        Cancel
                    </AppButton>
                    <AppButton onPress={saveHandler}>
                        Save
                    </AppButton>
                    </View>
            </View>

        </Modal>
    )
} 

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    button: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})