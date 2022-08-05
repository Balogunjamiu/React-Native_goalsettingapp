
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
        id: Math.random().toString()}
    ])
    closeModal()
  };
  function deleteGoalHandler(id){
      setCourseGoals(currentCourseGoals=>{
        return currentCourseGoals.filter((goal)=> goal.id !== id)
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
     renderItem={(itemData)=>{
       return  <GoalItem 
       onDelete={deleteGoalHandler}
       text={itemData.item.text}
       id={itemData.item.id}  />
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
