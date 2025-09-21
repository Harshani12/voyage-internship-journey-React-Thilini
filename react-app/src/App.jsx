import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Counter from "./UseState";
import ContactForm from "./Form";
import TodoApp from "./todo";
import EventDemo from "./Event";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <h><u><b>Counting</b></u></h>
      <Counter /><br></br>
      <h><u><b>Form</b></u></h>
      <ContactForm /><br></br>
      <h><u><b>Todo list</b></u></h>
      <TodoApp /><br></br>
      <h><u><b>Event</b></u></h>
      <EventDemo />
      
      
    </div>
  );
}

export default App;

