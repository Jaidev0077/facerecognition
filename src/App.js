import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


import Clarifai from 'clarifai';
import Particles from 'react-particles-js';


const app = new Clarifai.App({
 apiKey: '81bf0e98d21646769fbf2c106ad7d8d9'
});

  const particlesOptions={
    particles:{
      number:{
        value: 100,
        density:{
          enable: true,
          value_area: 800
        }
      },
      color:{
        value:'#ffffff'
      }
  }
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl: ''
    }
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  onButtonSubmit=()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(
      function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err){

      }
    );
    // app.models.initModel({id: Clarifai.GENERAL_MODEL, 
    //     version: "aa7f35c01e0642fda5cf400f543e7c40"})
    //   .then(faceModel => {
    //     return faceModel.predict("https://www.telegraph.co.uk/content/dam/films/2018/09/21/TELEMMGLPICT000027014340_trans_NvBQzQNjv4BqM37qcIWR9CtrqmiMdQVx7HKcsGtiuU_lafizKj4PQO0.jpeg");
    //   })
    //   .then(response => {
    //     var concepts = response['outputs'][0]['data']['concepts']
    //     console.log(concepts);
    //   })
  }

  render(){
  return (
    <div className="App">
      <Particles 
                className="particles"
                params={particlesOptions} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm 
        onInputChange = {this.onInputChange} 
        onButtonSubmit = {this.onButtonSubmit}
      />
      <FaceRecognition imageUrl = {this.state.imageUrl}/>
      
    </div>
  );
  }
}

export default App;
