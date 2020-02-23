import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";


// Firebaseの設定
var config = {
  apiKey: "AIzaSyArl-TRQxkbaJZADZqM_b2BnLXfZ0TV068",
  authDomain: "shirai-react.firebaseapp.com",
  databaseURL: "https://shirai-react.firebaseio.com",
  projectId: "shirai-react",
  storageBucket: "shirai-react.appspot.com",
  messagingSenderId: "186479167192",
  appId: "1:186479167192:web:3b0c91f31647a04623b9ad",
  measurementId: "G-NX97G9MBNN"
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
