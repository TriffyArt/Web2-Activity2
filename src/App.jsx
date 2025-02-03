import Contact from "./components/Contact"
import Experience from "./components/MyExp"
import Profile from "./components/Profile"
import Skills from "./components/Skills"

function App() {
  

  return (
    <>


      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-5 w-[70%]">
        <Profile 
          profilePic="https://avatars.githubusercontent.com/u/180009427?v=4"
          name="Salcedo, Psalm Zyhrone M."
          aboutProfile="A Passionate Pixel Artist who loves turning ideas into Digital Art Format"
          />

          <Contact
          email="Businesspsalmsalcedo@gmail.com"
          phone="+63**********"
          address="Daraga, Albay"
          />
          
          <Experience 
            Title="Pixel Artist"
            Date="2021 - Present"
            Description="Pixel Artist Specialized on Creating 2d sprite sheets and Game Assets and GIF Pixel Animator"
          />

          <Skills
            Skills="Aseprite, Adobe Illustrator, Krita, Adobe Photoshop, GDScript, C#, HTML, CSS, Tailwind, JavaScript"
          />

         
           

        </div>

      </div>
    </>
  )
}

export default App
