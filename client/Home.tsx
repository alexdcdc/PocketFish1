import React from 'react';
import type {PropsWithChildren} from 'react';
import {useState} from 'react';
import {

    ToastAndroid,
    PermissionsAndroid,  
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Image,
  } from 'react-native';

  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


  type SectionProps = PropsWithChildren<{
    title: string;
  }>;
  
  function Section({children, title}: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
                color: Colors.dark,
            },
          ]}>
          {title}
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 15,
      paddingHorizontal: 24,
      alignContent: "center"
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
    },
    highlight: {
      fontWeight: '700',
    },
    container: {
      flex: 1,
      padding: 10,
    },
    rectangle: {
      width: 25, 
      height: '75%', 
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
      overflow: 'hidden',
    },
    coloredPortion: {
      width: '100%',
      backgroundColor: 'black', 
    },
  });
    
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Grant Camera Permissions',
          message:
            'Please grant camera access ' +
            'for Pocketfish to take pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera({mediaType: "photo", cameraType:"front"})
      } else {
        showCameraDeniedTost();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const showCameraDeniedTost = () => {
    ToastAndroid.showWithGravity(
      'Camera Permissions Denied',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };


const Home = () =>  {

  //TODO TEMP VALUES HERE
  const [coloredPercentage, setColoredPercentage] = useState(50);

    return(
  <>
  <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
    <View style={{flex: 0.5, alignItems: 'center'}}>
      <Section title = "Select Image:"/>
   </View>

   <View style={{flex: 1, alignItems: 'center'}}>
    
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
       <View style={{flex: 1, alignItems: 'center'}}>
         <Button title = "Upload Photo" onPress = {() => {launchImageLibrary({mediaType: "photo"})}}/>
       </View>

         <View style={{flex: 1, alignItems: 'center'}}>
          <Button title = "Take Photo" onPress = {requestCameraPermission}/>
         </View>

       </View>
    </View>

    <View style={{flex: 3, alignItems: 'center'}}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.rectangle}>
            <View style={[styles.coloredPortion, { height: `${coloredPercentage}%` }]} />
          </View>
        </View>

        <View style={{flex: 5, alignItems: 'center'}}>
        <Image source={require('../images/chess.png')} style={{height: '75%', aspectRatio: 1, alignItems: 'center'}}/>
        </View>
      </View>
    </View>

    <View style={{flex: 2, alignItems: 'center'}}>
      <Section title="Suggested Next Moves">
          {/**TODO: NEXT BEST MOVES*/}
      </Section>
    </View>

  </View>
  </>
    );
};

export default Home;