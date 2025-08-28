import { StyleSheet, ScrollView } from 'react-native'
import About from '../component/About'
import Profilecard from '../component/Profilecard'
import EducationSection from '../component/Edudcation'
import CertificatesSection from '../component/Certificatessection'
import CVComponent from '../component/CVcomponent'



const Profilescreen = () => {
  return (
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Profilecard />
        <About/>
        <EducationSection />
        <CertificatesSection />
        <CVComponent />
      </ScrollView>
  )
}
export default Profilescreen
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#503296ff',
    flex: 1,
    alignItems: 'center',
    
  },
});