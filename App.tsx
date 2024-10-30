import {View, Text, StyleSheet} from 'react-native';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber/native';
import Model from './src/Components/Model';
import useControls from 'r3f-native-orbitcontrols';
const App = () => {
  const [OrbitControls, events] = useControls();
  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}{...events}>
        <Canvas>
          <OrbitControls enablePan={false}/>
          <directionalLight position={[1,0,0]} args={['white',5]}/>
          <directionalLight position={[-1,0,0]} args={['white',5]}/>
          <directionalLight position={[0,1,0]} args={['white',5]}/>
          <directionalLight position={[0,-1,0]} args={['white',5]}/>
          <directionalLight position={[0,0,1]} args={['white',5]}/>
          <directionalLight position={[0,0,-1]} args={['white',5]}/>
          <Suspense fallback={null}>
            <Model/>
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Grey chair</Text>
        <Text style={styles.text}>$180</Text>
        <Text style={styles.text}>
          Grey chain Grey chainGrey chainGrey chainGrey chainGrey chainGrey
          chainGrey chainGrey chainGrey chainGrey chainGrey chain
        </Text>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'F6F7FB',
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text:{
    color:'black',
    fontSize:20,
    marginHorizontal:20,
    marginTop:10
  }
});
