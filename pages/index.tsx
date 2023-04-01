import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ImageSet from "../components/ImageSet"

export default function Index() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      
      <ImageSet image='rocket' author = 'Andrew Schmitz' link = 'https://twitter.com/Big_Schmitz'/>
      <ImageSet image='koala' author ='Justin Eldrige' link= 'https://eldridgejm.github.io/'/>
      <ImageSet image='rocket' author='Nikolas Huebecker' link= 'https://twitter.com/nhuebecker?lang=en'/>
    </div>
    
  )
}