import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";


// Firebaseの設定
var config = {
  apiKey: "AIzaSyDucG4uFbb0ZyaMAh3jiF8KoZirVO42k10",
  authDomain: "ngrok-dummy.firebaseapp.com",
  databaseURL: "https://ngrok-dummy.firebaseio.com",
  projectId: "ngrok-dummy",
  storageBucket: "ngrok-dummy.appspot.com",
  messagingSenderId: "415470711432",
  appId: "1:415470711432:web:d7e812face55e430cca53d",
  measurementId: "G-8P9VPYHXES"
};

// Firebaseの初期化
firebase.initializeApp(config);


// Appコンポーネント
class App extends Component {


  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}


export default App;
