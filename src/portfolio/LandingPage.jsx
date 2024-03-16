// Portfolio.jsx
import { createSignal } from "solid-js";

function Portfolio() {
   // Sample data for projects
   const projects = [
      {
         title: "Project 1",
         description: "ED-TECH Site using Django ",
         link: "#",
      },
      {
         title: "Project 2",
         description: "Dashboard using React",
         link: "#",
      },
      {
         title: "Project 3",
         description: "Mobile Application Using Flutter",
         link: "#",
      },
   ];

   return (
      <div>
         <header>
            <h1>Vinodh Karthik</h1>
            <p>Full Stack Developer</p>
         </header>
         <main>
            <h2>Projects...</h2>
            <ul>
               {projects.map((project, index) => (
                  <li key={index}>
                     <h3>{project.title}</h3>
                     <p>{project.description}</p>
                     <a href={project.link}>View Project</a>
                  </li>
               ))}
            </ul>
         </main>
         <footer>
            <p>&copy; {new Date().getFullYear()} </p>
         </footer>
      </div>
   );
}

export default Portfolio;
