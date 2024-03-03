import AboutMe from "./aboutMe/AboutMe";
import Certifications from "./certifications";
import Projects from "./projects";
import SkillsDiv from "./skills";

export default function Home() {
  return (
    <main className="p-4  w-3/4 m-auto text-xl leading-8 max-lg:w-4/5 max-md:w-5/6 px-2 max-sm:w-11/12 max-lg:text-lg max-sm:text-base">
      <section id="about-me">
          <AboutMe/>
      </section>
      <section id="skills">
          <SkillsDiv/>
      </section>
      <section id="projects">
          <Projects/>
      </section>
      <section id="contact-me">
        
      </section>

      <section id="contribution">
        
      </section>
      <section id="certifications">
        <Certifications/>
      </section>
    </main>
  )
}
