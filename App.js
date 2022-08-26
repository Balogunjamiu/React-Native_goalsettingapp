
import { useState } from 'react';
import { 
  StyleSheet,
    View,
    FlatList,
  Button,
Pressable } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';


export default function App() {

  const [modalIsVisible, setModalVisible] = useState(false)
  const[courseGoals, setCourseGoals] = useState([])  

  function startAddGoalHandler(){
    setModalVisible(true)

  }
  function closeModal(){
    setModalVisible(false)
  }
  

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals
      , {text:enteredGoalText,
        isDone:false,
        createAt:moment(),
        id: Math.random().toString()}
    ])
    closeModal()
  };

  console.log(courseGoals)
  function deleteGoalHandler(id){
      setCourseGoals(currentCourseGoals=>{
        return currentCourseGoals.filter((goal)=> goal.id !== id)
      })
  }
  function doneGoalHandler(id){
       courseGoals.map((goal) => {
          if(goal.id === id ){
            return goal.isDone = true
          }
        })
                
  }
  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.appContainer}>
      <Button title='Add a new Goal' 
      color={'#5e0acc'}
      onPress={startAddGoalHandler}
      />
      <GoalInput
      closeModal={closeModal} 
      visible={modalIsVisible}
      onAddGoal = {addGoalHandler}
      />
      <View style={styles.goalsContainer}>
    <FlatList data={courseGoals}
     renderItem={({item})=>{
       return  <GoalItem 
       onDelete={deleteGoalHandler}
       onDone={doneGoalHandler}
       text={item.text}
       date={item.createAt}
       isDone={item.isDone}
       id={item.id}  />
      }} 
      keyExtractor={(item, index)=>{
        return item.id
      }}
      alwaysBounceVertical={false} />
        </View>  
    </View>
</>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'white'
  },
  goalsContainer:{
    flex: 4,
  }
});
