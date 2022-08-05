import { useState } from 'react';
import {View,Modal, TextInput, Button,StyleSheet, Image} from 'react-native'

function GoalInput(props){
    const[enteredGoalText, setEnteredGoalText] = useState('')


    function goalInputHandler(enteredText){
      setEnteredGoalText(enteredText)}

      function addGoalHandler(){
            props.onAddGoal(enteredGoalText)
            setEnteredGoalText('')
      }

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput style={styles.textInput} 
       placeholder='Your course Goal'
        onChangeText={goalInputHandler} 
        value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
      <Button  title='Add Goal' color={'#5e0acc'} onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
      <Button title='cancel' color={'#f31282'} onPress={props.closeModal}   />
            </View>
                
        </View>
      </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{ 
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
      },
      image:{
        width:'80%',
        height:100,
        margin:20
      },
      textInput:{
        borderWidth:1,
        borderColor: '#cccccc',
        width:'100%',
        borderRadius:6,
        padding: 16
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:'row'
      },
      button:{
        width:100,
        marginHorizontal:8,
      }
})