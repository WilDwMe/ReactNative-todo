import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/UI/AppCard";
import { THEME } from "../theme";

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
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit' onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="back" onPress={goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button title="delete" onPress={() => onRemove(todo.id)} color={THEME.DANGER_COLOR} />
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
        width: '40%'
    },
    title: {
        fontSize: 20
    }
});