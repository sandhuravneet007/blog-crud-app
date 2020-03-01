import React, {useState, useContext} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Context} from "../context/BlogContext";

const EditScreen = ({ navigation }) => {

    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find((post) => post.id === navigation.getParam('id'));

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View style={styles.layout}>
            <Text>Edit Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(title) => setTitle(title)}/>
            <Text>Edit Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)}/>
            <Button title="Save Blog Post"
                    onPress={() => editBlogPost(navigation.getParam('id'), title, content, () => navigation.navigate('Index'))}/>

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

export default EditScreen;