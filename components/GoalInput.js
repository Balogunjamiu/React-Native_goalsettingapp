import { useState } from 'react';
import {View,Modal, Alert, TextInput, Button,StyleSheet, Image} from 'react-native'
import Icon from '../assets/images/todoIcon.png'
function GoalInput(props){
    const[enteredGoalText, setEnteredGoalText] = useState('')

      const createTwoButtonAlert = () =>
    Alert.alert(
      "Error",
      "An Empty task cannot be added",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
      
    // const isEntered =()=>(enteredGoalText.length !== 0)
    
    function goalInputHandler(enteredText){
      setEnteredGoalText(enteredText)
      
    }
    
    function addGoalHandler(){
      props.onAddGoal(enteredGoalText)
      setEnteredGoalText('')
      
      }

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={Icon} />
      <TextInput style={styles.textInput} 
       placeholder='Your course Goal'
        onChangeText={goalInputHandler} 
        value={enteredGoalText}
        multiline
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>  
            { enteredGoalText ?
              <Button  title='Add Goal' color={'#7DF9FF'}  
              onPress={
                addGoalHandler
              }/>  :
              <Button  title=' Add Goal' color={'grey'}  
              onPress={
                createTwoButtonAlert
              }/>
            }
      
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