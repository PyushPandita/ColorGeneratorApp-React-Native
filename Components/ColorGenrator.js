import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, {useState} from 'react'

const ColorGenrator = () =>  {

    const [newColor, setNewColor] = useState([]);

    const randomColor = () => {
        const red = Math.round(Math.random() * 256);
        const green = Math.round(Math.random() * 256);
        const blue = Math.round(Math.random() * 256);
        return `rgb(${red},${green},${blue})` ;
    }

  return (
    <View style={styles.parent}>
        <TouchableOpacity style={styles.Botton}
        onPress = { () => {
            // console.log(randomColor());
          setNewColor([...newColor, randomColor()]);
        }
        }
        >
            <Text style={styles.TextStyle}>Genrate Random Color</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Botton}
        onPress = { () => {
          setNewColor([]);
        }
        }
        >
            <Text style={styles.TextStyle}>Clear</Text>
        </TouchableOpacity>

        <FlatList
        inverted={true}
        keyExtractor={(key) => key}
        showsVerticalScrollIndicator={false}
            data = {newColor}
            renderItem = {({item}) => {
                return  (
                <View style={styles.imageContainer}>
                    <View style={{backgroundColor: item,
                        width: 280,
                        height: 120,
                        borderRadius: 10,
                        marginVertical: 5,
                        alignItems: 'center',
                        justifyContent: 'center',}}>
                        <Text style={styles.textBox}>{item}</Text>
                    </View>
                </View>
                    );
                          }}
        />

    </View>
  );
}

const styles = StyleSheet.create({
    parent: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    Botton: {
        marginBottom: 20,
        alignItems: 'center',
        paddingHorizontal: 80,
        paddingVertical: 30,  
        backgroundColor: '#00b0ff',
        borderRadius: 20,
    },

    TextStyle: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },

    imageContainer: {
        marginVertical: 30,
        alignItems: 'center',
        },

        textBox: {
            color: '#fff',
            fontSize: 20,
        }
});

export default ColorGenrator;