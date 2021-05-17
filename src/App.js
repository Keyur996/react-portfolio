import "./App.css";
import { Title } from "./components/title-message/Title.component";
import { MyCarousal } from "./components/myCarousal/MyCarousal.component";
import { MyNavbar } from "./components/navbar/MyNavbar.component";
import { About } from "./pages/about/About.component";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import { Education } from "./pages/eduction/Education.component";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <Title />
      <MyNavbar />
      <div className="about__bg">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage="./assets/images/parallex/background.webp"
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="mb-3">
        <Education />
      </Container>
    </div>
  );
}

export default App;
