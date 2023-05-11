import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
const api = {
  base: "https://covidtracking.com/api/v1/"
}
const dateBuilder=(d)=>{
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  
  let day = days[d.getDay()];
  let date  = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`

}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput:"",
    };
  }  
   
  render(){ 
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Welcome to the CoronaTracker</Text>
        <Text style={styles.txt}>Enter the desired state in all lowercase</Text>
        <TextInput style={styles.ti}
        placeholder="Search state..."
        ></TextInput>
        <Button title="Submit"
        ></Button>
        <Text style={styles.txt}></Text>
        <Text style={styles.txt}>{dateBuilder(new Date())}</Text>
        <Text style={styles.txt}>Amount of new cases: </Text>
        <Text style={styles.txt}>Amount of people dead: </Text>
        <Text style={styles.txt}>Amount of people recovered: </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ti:{
    height: 40,
    padding: 50,
    fontSize: 40
  },
  txt:{
    height: 20,
    padding: 25,
    fontSize: 20
  }
});
