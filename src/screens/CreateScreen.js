import React, {useState, useContext} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Context} from "../context/BlogContext";

const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    return (
        <View style={styles.layout}>
            <Text>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(title) => setTitle(title)}/>
            <Text>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)}/>
            <Button title="Add Blog Post"
                    onPress={() => addBlogPost(title, content, () => navigation.navigate('Index'))}/>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
    },
    layout: {
        margin: 10
    }
})

export default CreateScreen;