import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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
        <Button title = "swnaewba" onPress = {() => {launchCamera({mediaType: "photo", cameraType:"front"})}}/>
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