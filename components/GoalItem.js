import {View,Text, StyleSheet, Pressable}  from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import moment from 'moment'

function GoalItem(props){

const {isDone, date, text} = props

const color = isDone == true ? "green" : 'white'
  return(
        <View>
    <View style={styles.goalItem}>

        <View style={styles.item}>
          <Text style={[styles.goalText,{
          color
          }]}
          >{text}</Text>
          <Text style={styles.date}>{moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')}</Text>
          <View style={styles.pressed}>
          <Pressable android_ripple={{color:'#ddd'}} 
          style={(pressed)=> pressed && styles.pressedItem}
          onPress={props.onDone.bind(this, props.id)}>
             <Ionicons name="checkmark-done" size={24} color="white" />
      </Pressable>
      <Pressable android_ripple={{color:'#ddd'}} 
          style={(pressed)=> pressed && styles.pressedItem}
          onPress={props.onDelete.bind(this, props.id)}>
             <MaterialIcons name="cancel" size={24} color="white" />
      </Pressable>
            </View>
        </View>
       </View>
        </View>
    )
}
export default GoalItem;



const styles = StyleSheet.create({
  completed:{
      width : '100%',
      height: '30%',
      backgroundColor:'green',
      marginTop:10
  },
  item:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  pressed:{
    flexDirection:'row',
    height:40
  },
    goalItem:{
        margin:8,
        borderRadius: 6,
        backgroundColor:'#5e0acc',
      },
      date:{
        width:'30%',
        padding: 8,
        color:'white'  
      },
      pressedItem:{
          opacity:0.5,
          padding: 5

      },
      goalText:{
        flex:1,
        padding: 8,
        color:'white'
      },    
})
