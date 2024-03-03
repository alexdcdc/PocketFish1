import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    ToastAndroid,
    PermissionsAndroid,  
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';

  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { post } from "../utilities"


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
        <Text
          style={[
            styles.sectionDescription,
            {
              color: Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      alignContent: "center"
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    container: {
      flex: 1,
      padding: 20,
    },
  });

  const getEvaluation = async (imageString) => {
    var evaluation = post("http://10.29.161.50:5000/upload", {imageString: imageString}).then((res) => (res.evaluation))
    return evaluation
  }
    
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
        launchCamera({mediaType: "photo", cameraType:"front", includeBase64: true}, (response) => {
          if (response.assets) {
            getEvaluation(response.assets[0].base64)
          }
        });
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
    return(
  <>
   <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 1, alignItems: 'center'}}>
       <Section title = "Upload a Photo">
       <Button title = "abweanws" onPress = {() => {launchImageLibrary({mediaType: "photo"})}}/>
        </Section>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Section title = "Take a Photo">
        <Button title = "swnaewba" onPress = {requestCameraPermission}/>
         </Section>
      </View>
    </View>
  
  </>
    );
};

export default Home;

/** 
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
    );
    */