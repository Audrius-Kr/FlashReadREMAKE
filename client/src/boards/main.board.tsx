import "./css/main.board.css";
import "./css/dropdown.css";
import "./css/mode1.css";
import "./css/loginPage.css";
import "./css/fonts.css";
import "./css/buttons.css";
import React, { useRef } from 'react';
import CustomButton from "../components/buttons/customButton";
import Dropdown from "../components/dropdown";
import CustomHyperlink from '../components/buttons/hyperlink';
import { postTaskText } from "../components/axios";
import { createBoard } from "@wixc3/react-board";
import ChoiceBox from "../components/choiceBox";
import Timer from "../components/timer";
import "./css/timer.css";
import BulletPoints from "../components/bulletPoint";

function handlePageChange(pageName: string, timerRef?: React.RefObject<any>) {
  console.log("Page change clicked");

  const pages = {
    selectionPage: document.getElementById("selectionDiv") as HTMLDivElement,
    mode1Page: document.getElementById("mode1Div") as HTMLDivElement,
    loginPage: document.getElementById("loginPage") as HTMLDivElement,
    loginContainer: document.getElementById("loginContainer") as HTMLDivElement,
    registerContainer: document.getElementById("registerContainer") as HTMLDivElement,
  };
  const inputs = {
    signinEmailInput: document.getElementById("signinEmailInput") as HTMLInputElement,
    signinPasswordInput: document.getElementById("signinPasswordInput") as HTMLInputElement,
    registerEmailInput: document.getElementById("registerEmailInput") as HTMLInputElement,
    registerUsernameInput: document.getElementById("registerUsernameInput") as HTMLInputElement,
    registerPasswordInput: document.getElementById("registerPasswordInput") as HTMLInputElement,
    registerPasswordInput2: document.getElementById("registerPasswordInput2") as HTMLInputElement,
  };
  const modes_start = {
    startButton1: document.getElementById("mode1_startButton") as HTMLButtonElement,
  };

  const hideAllPages = () => {
    Object.values(pages).forEach(page => {
      page.style.display = "none";
    });
    Object.values(inputs).forEach(input => {
      input.value = "";
    });
    Object.values(modes_start).forEach(start => {
      start.textContent = "Start";
    });
  };

  hideAllPages();

  switch (pageName) {
    case "mode1Page":
      postTaskText().then((data) => {
        console.log(data);
        const mode1Text = document.querySelector(".mode1_text") as HTMLParagraphElement;
        mode1Text.textContent = data.text;
      });
      pages.mode1Page.style.display = "flex";
      if (timerRef?.current) {
        timerRef.current.reset();
      }
      const mode1AnswerDiv = document.getElementById("mode1_answerDiv") as HTMLDivElement;
      const mode1ResultDiv = document.getElementById("mode1_resultDiv") as HTMLDivElement;
      const mode1TextDiv = document.getElementById("mode1_textDiv") as HTMLDivElement;
      mode1AnswerDiv.style.visibility = "hidden";
      mode1ResultDiv.style.visibility = "hidden";
      mode1TextDiv.style.visibility = "visible";
      break;

    case "selectionPage":
      pages.selectionPage.style.display = "flex";
      break;

    case "loginPage":
      pages.loginPage.style.display = "flex";
      pages.loginContainer.style.display = "flex";
      pages.loginContainer.style.zIndex = "50";
      pages.registerContainer.style.zIndex = "0";
      break;

    case "registerPage":
      pages.loginPage.style.display = "flex";
      pages.registerContainer.style.display = "flex";
      pages.registerContainer.style.zIndex = "50";
      pages.loginContainer.style.zIndex = "0";
      break;

    default:
      console.log("Unknown page: " + pageName);
  }
}

const mainBoard = createBoard({
  name: "Main", 
  Board: () => {
    const timerRef = useRef(null);

    return (
      <div className="MainBoard_main" id="mainDiv">
      <div className="MainBoard_header" id="headerDiv">
        <Dropdown onSelect={function (item: string): void {
          if (item === "Login") {
            handlePageChange("loginPage");
          }
        } } />
      </div>

      <div className="MainBoard_content" id="contentDiv">

        <div className="MainBoard_mode1" id="mode1Div">
          <div className="mode1_upperDiv" id="upperDiv">
            <div className="mode1_upperDiv_box" id="mode1_upperDiv_box">
              <div className="mode1_upperDiv_parts" id="mode1_upperDiv_parts">
                <ChoiceBox choices={["History", "Technology", "Anime", "Politics"]} onSelect={(choice) => console.log(choice)} label="Theme:"/>
              </div>
              <div className="mode1_upperDiv_parts" id="mode1_upperDiv_parts">
                <ChoiceBox choices={["Easy", "Medium", "Hard", "EXTREME"]} onSelect={(choice) => console.log(choice)} label="Difficulty:"/>
              </div>
              <div className="mode1_upperDiv_parts" id="mode1_upperDiv_parts">
                <span className="mode1Timer" id="mode1Timer">Timer: </span>
                <input type="text" className="mode1TimerInput" id="mode1TimerInput" placeholder="0:00"/>
              </div>
            </div>
          </div>

          <div className="mode1_innerDiv" id="textAreaDiv">
            <div className="mode1_mainBox" id="mode1_mainBox">
              <div className="mode1_textDiv" id="mode1_textDiv">
                <p className="mode1_text" id="mode1_text">
                  TEKSTAS KATRA REIK PERSKAITYT
                </p>
              </div>
              <div className="mode1_answerDiv" id="mode1_answerDiv">
                <p className="mode1_text" id="mode1_text"></p>
                <div className="mode1_questionsContainer" id="mode1_questionsContainer">
                  <div className="mode1_questionDiv" id="mode1_question1Div">
                    <h1 className="mode1_text">Question 1</h1>
                    <BulletPoints choices={["Answer 1", "Answer 2", "Answer 3"]} />
                  </div>
                  <div className="mode1_questionDiv" id="mode1_question2Div">
                    <h1>Question 2</h1>
                    <BulletPoints choices={["Answer 1", "Answer 2", "Answer 3"]} />
                  </div>
                  <div className="mode1_questionDiv" id="mode1_question3Div">
                    <h1>Question 3</h1>
                    <BulletPoints choices={["Answer 1", "Answer 2", "Answer 3"]} />
                  </div>
                </div>              
              </div>
              <div className="mode1_resultDiv" id="mode1_resultDiv">
                <p className="mode1_text" id="mode1_text">
                  DUOMENYS VISI
                </p>
              </div>
              <div className="mode1_start_options">
                <Timer ref={timerRef} className="wideButton" id = "mode1_startButton" onClick= {() => {
                  const startButton = document.getElementById("mode1_startButton") as HTMLButtonElement;
                  const mode1AnswerDiv = document.getElementById("mode1_answerDiv") as HTMLDivElement;
                  const mode1ResultDiv = document.getElementById("mode1_resultDiv") as HTMLDivElement;
                  const mode1TextDiv = document.getElementById("mode1_textDiv") as HTMLDivElement;
                  
                  if (startButton.textContent === "Stop") {
                    console.log("Stop clicked");
                    mode1TextDiv.style.visibility = "hidden";
                    mode1AnswerDiv.style.visibility = "visible";
                  }
                  if (startButton.textContent === "Confirm") {
                    console.log("Confirm clicked");
                    mode1AnswerDiv.style.visibility = "hidden";
                    mode1ResultDiv.style.visibility = "visible";
                  }
                  if (startButton.textContent === "Again") {
                    console.log("Again clicked");
                    mode1TextDiv.style.visibility = "visible";
                    mode1ResultDiv.style.visibility = "hidden";
                  }
                }} />
              </div>
            </div>
          </div>

          <div className="mode1_lowerDiv" id="buttonDiv">
            <CustomButton label="Return" className="wideButton" id="MainBoard_returnButton" onClick={() => handlePageChange("selectionPage")}/>
          </div>

        </div>

        <div className="MainBoard_selection" id="selectionDiv">

          <div className="MainBoard_grid" id="selectionGrid">

            <CustomButton label= "Mode 1" className= "squareButton" id="MainBoard_mode1Button" onClick={()=>{
              console.log("Mode 1 clicked");
              handlePageChange("mode1Page", timerRef);
            }}/>

            <CustomButton label= "Mode 2" className= "squareButton" id="MainBoard_mode2Button" onClick={()=>{
              console.log("Mode 2 clicked");
              const mode2Button = document.getElementById("MainBoard_mode2Button") as HTMLButtonElement;
              mode2Button.textContent = "Coming Soon";
              setTimeout(() => {
                mode2Button.textContent = "Mode 2";
              }, 1000);
            }}/>

            <CustomButton label= "Mode 3" className= "squareButton" id="MainBoard_mode3Button" onClick={()=>{
              console.log("Mode 3 clicked");
              const mode3Button = document.getElementById("MainBoard_mode3Button") as HTMLButtonElement;
              mode3Button.textContent = "Coming Soon";
              setTimeout(() => {
                mode3Button.textContent = "Mode 3";
              }, 1000);
            }}/>

          </div>

        </div>

        <div className="MainBoard_loginPage" id="loginPage">

          <div className="loginContainer" id="loginContainer">

            <div className="loginPage_topDiv">
              <h1 className="loginPage_title">Welcome back!</h1>
            </div>

            <div className="loginPage_loginDiv">
              <input type="text" className="signinInput" id="signinEmailInput" placeholder="Username"/>
              <input type="password" className="signinInput" id="signinPasswordInput" placeholder="Password"/>
              <CustomButton label="Login" className="loginButton" id="loginPage_loginButton" onClick={() => handlePageChange("selectionPage")}/>
            </div>

            <div className="loginPage_bottomDiv">
              <h1 className="loginPage_noAccountText">Don't have an account?</h1>

              <div className="loginPage_links">
                <CustomHyperlink href="/register" label="Register " className="hyperlink" onClick={() => handlePageChange("registerPage")} />
                <span className="smallText"> or </span>
                <CustomHyperlink href="/guest" label=" continue as guest" className="hyperlink" onClick={() => handlePageChange("selectionPage")} />
              </div>

              {/* <CustomButton label="Return" className="loginPage_returnButton" onClick={() => handlePageChange("selectionPage")}/> */}
            </div>

          </div>
          <div className="registerContainer" id="registerContainer">

            <div className="registerPage_topDiv">
              <h1 className="loginPage_title">Create an account</h1>
            </div>

            <div className="registerPage_registerDiv">
              <input type="text" className="signinInput" id="registerEmailInput" placeholder="Email"/>
              <input type="text" className="signinInput" id="registerUsernameInput" placeholder="Username"/>
              <input type="password" className="signinInput" id="registerPasswordInput" placeholder="Password"/>
              <input type="password" className="signinInput" id="registerPasswordInput2" placeholder="Confirm Password"/>
              <CustomButton label="Register" className="loginButton" id="registerPage_registerButton" onClick={() => handlePageChange("selectionPage")}/>
            </div>

            <div className="registerPage_bottomDiv">
              <h1 className="loginPage_noAccountText">Already have an account?</h1>

              <div className="loginPage_links">
                <CustomHyperlink href="/login" label="Login " className="hyperlink" onClick={() => handlePageChange("loginPage")} />
                <span className="smallText"> or </span>
                <CustomHyperlink href="/guest" label=" continue as guest" className="hyperlink" onClick={() => handlePageChange("selectionPage")} />
              </div>
            </div>

          </div>

        </div>
      
      </div>

    </div>
    );
  },
  isSnippet: true,
  environmentProps: { windowHeight: 554, windowWidth: 621 },
});

export default mainBoard;