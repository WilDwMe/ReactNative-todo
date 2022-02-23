import React, {useState} from "react";
import { StyleSheet, View, Dimensions } from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/UI/AppCard";
import { THEME } from "../theme";
import { AppTextBold } from "../components/UI/AppTextBold";
import { AppButton } from "../components/UI/AppButton";

export const TodoScreen = ({ goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    } 

    return (
        <View>
            <EditModal
                value={todo.title}
                onSave={saveHandler}
                visible={modal}
                onCancel={() => setModal(false)}
            />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20}/>
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={goBack} color={THEME.GREY_COLOR}>
                        <AntDesign name='back' size={20} color='#fff'/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => onRemove(todo.id)} color={THEME.DANGER_COLOR}>
                        <FontAwesome name='remove' size={20} color='#fff'/>
                    </AppButton>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        // width: Dimensions.get('window').width / 3
        width: Dimensions.get('window').width > 400 ?  100 : 80
    },
    title: {
        fontSize: 16
    }
});