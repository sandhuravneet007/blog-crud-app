import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);

    const blogPost = state.find((post) => post.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.content}</Text>
        </View>
    )
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35}/>
        </TouchableOpacity>
    }
}

export default ShowScreen