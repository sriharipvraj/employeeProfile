import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Page.css";
import logo from "../src/Images/1683376259653.jfif";
import profilepic from "../src/Images/photo.jpg";
import dashboard from "../src/Images/dashboard.png";
import pot from "../src/Images/pot.png";
import addons from "../src/Images/puzzle.png";
import faq from "../src/Images/faq.png";
import support from "../src/Images/feedback.png";
import logout from "../src/Images/power.png";
import down from "../src/Images/down.png";
import companyicon from "../src/Images/mandala.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import right from "../src/Images/right-arrow.png";
import line from "../src/Images/minus-horizontal-straight-line.png";
import user from "../src/Images/user.png";
import cloud from "../src/Images/cloud-computing.png";
import mail from "../src/Images/mail.png";
import rightarrow from "../src/Images/arrow-right.png";
import dtick from "../src/Images/double-tick.png";
import bell from "../src/Images/notification.png"
import plus from "../src/Images/plus.png"


function Page() {
  const [btncolor, setBtncolor] = useState(false);
  const handleChange = (val) => setBtncolor(val);
  return (
    <div>
      <div className="page">
        {/* <Row>
          <Col className="col1"  xs={"auto"} sm={"auto"}> */}
        <div className="Fullset1">
          <div className="logodiv">
            <img src={logo} alt="LOGO" className="logo"></img>
          </div>
          <div className="profilediv">
            <img src={profilepic} alt="ME" className="profilepic"></img>
            <p>
              SRIHARI P V RAJ <br />
              <p id="emailid">sriharipvrj@gmail.com</p>
            </p>
          </div>

          <div className="buttondiv">
            <button className="btnwithicon">
              <img
                src={dashboard}
                alt="dashboard"
                width={"15px"}
                height={"15px"}
                className="btnicon"
              ></img>
              Dashboard
            </button>

            <button className="btnwithicon">
              <img
                src={pot}
                alt="perk"
                width={"20px"}
                height={"20px"}
                className="btnicon"
              ></img>
              Perks
            </button>

            <button className="btnwithicon">
              <img
                src={addons}
                alt="dashboard"
                width={"20px"}
                height={"20px"}
                className="btnicon"
              ></img>
              Addons
            </button>

            <button className="btnwithicon">
              <img
                src={faq}
                alt="dashboard"
                width={"20px"}
                height={"20px"}
                className="btnicon"
              ></img>
              FAQ
            </button>

            <button className="btnwithicon">
              <img
                src={support}
                alt="dashboard"
                width={"20px"}
                height={"20px"}
                className="btnicon"
              ></img>
              Support
            </button>

            <button className="btnwithicon" id="logout">
              Logout
              <img
                src={logout}
                alt="dashboard"
                width={"20px"}
                height={"20px"}
              ></img>
            </button>
          </div>
        </div>

        <div className="Fullset2">
          <div className="header">
            <button className="headerbtn">
              <img src={down} width={"30px"} height={"35px"}></img>
            </button>
            <button className="headerbtn" id="cname">
              <img src={companyicon} width={"30px"} height={"35px"}></img> XYZ
              Enterprises Pvt.Ltd
            </button>
          </div>
          <div className="cardsec">
            <div className="chooseaplan">
              <h4>Choose a plan that's right for you!</h4>
            </div>
          </div>
          <div className="monthoranual">
            <ToggleButtonGroup
              type="radio"
              name="options"
              defaultValue={0}
              onChange={handleChange}
            >
              <ToggleButton
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
                variant={btncolor ? "primary" : "light"}
              >
                Monthly
              </ToggleButton>
              <ToggleButton
                style={{
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
                className="timebtn"
                variant={btncolor ? "primary" : "light"}
              >
                Annually
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="cards">
            <Card className="cards1">
              <Card.Body>
                <Card.Title>Basic</Card.Title>
                <Card.Text>
                  <s className="strikethrough"> $ 89.99/mo</s>
                  <br />
                  <h5>$9.99/mo</h5>
                </Card.Text>
                <button className="cardbtn1">
                  Get started
                  <img
                    className="arrow1"
                    src={right}
                    width={"20px"}
                    height={"20px"}
                  ></img>
                </button>

                <img src={line} width={"270px"} height={"7px"}></img>

                <Card.Text>
                  <p>What you'll get:</p>
                  <ul className="cardlist">
                    <li>
                      {" "}
                      <img src={user} width={"12px"} height={"12px"}></img> Upto
                      25 Users
                    </li>
                    <li>
                      <img src={cloud} width={"12px"} height={"12px"}></img>{" "}
                      Upto 25gb storage
                    </li>
                    <li>
                      <img src={mail} width={"12px"} height={"12px"}></img>{" "}
                      Email Support
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Text>
                <p className="explore">
                  EXPLORE FEATURES{" "}
                  <img src={rightarrow} width={"11px"} height={"11px"}></img>
                </p>
              </Card.Text>
            </Card>

            <Card className="cards1">
              <Card.Body>
                <Card.Title>Standard</Card.Title>
                <Card.Text>
                  <s className="strikethrough"> $ 189.99/mo</s>
                  <br />
                  <h5>$99.99/mo</h5>
                </Card.Text>
                <button className="cardbtn2">
                  Get started
                  <img
                    className="arrow1"
                    src={right}
                    width={"20px"}
                    height={"20px"}
                  ></img>
                </button>

                <img src={line} width={"270px"} height={"7px"}></img>

                <Card.Text>
                  <p>What you'll get:</p>
                  <ul className="cardlist">
                    <li>
                      {" "}
                      <img src={user} width={"12px"} height={"12px"}></img> Upto
                      50 Users
                    </li>
                    <li>
                      <img src={cloud} width={"12px"} height={"12px"}></img>{" "}
                      Upto 60gb storage
                    </li>
                    <li>
                      <img src={mail} width={"12px"} height={"12px"}></img>{" "}
                      Email + Chat Support
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Text>
                <p className="explore">
                  EXPLORE FEATURES{" "}
                  <img src={rightarrow} width={"11px"} height={"11px"}></img>
                </p>
              </Card.Text>
            </Card>

            <Card className="cards1">
              <Card.Body>
                <Card.Title>Premium</Card.Title>
                <Card.Text>
                  <s className="strikethrough"> $ 389.99/mo</s>
                  <br />
                  <h5>$199.99/mo</h5>
                </Card.Text>
                <button className="cardbtn3">
                  Get started
                  <img
                    className="arrow1"
                    src={right}
                    width={"20px"}
                    height={"20px"}
                  ></img>
                </button>

                <img src={line} width={"270px"} height={"7px"}></img>

                <Card.Text>
                  <p>What you'll get:</p>
                  <ul className="cardlist">
                    <li>
                      {" "}
                      <img src={user} width={"12px"} height={"12px"}></img> Upto
                      75 Users
                    </li>
                    <li>
                      <img src={cloud} width={"12px"} height={"12px"}></img>{" "}
                      Upto 100gb storage
                    </li>
                    <li>
                      <img src={mail} width={"12px"} height={"12px"}></img>{" "}
                      Email+Chat+Whatsapp Support
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Text>
                <p className="explore">
                  EXPLORE FEATURES{" "}
                  <img src={rightarrow} width={"11px"} height={"11px"}></img>
                </p>
              </Card.Text>
            </Card>
          </div>
          <div className="cards2">
            <Card className="hcard">
              <Row>
                <Col className="cardcol">
                  <button className="card2btn"> Free Forever</button>
                  <Card.Title>Free Starter</Card.Title>
                  <Card.Text className="cardtxt">
                    The quickest and easiest way to try protocols
                    <br /> with basic functionalities
                  </Card.Text>
                  <button className="btncard2">
                    Get started
                    <img
                      className="arrow1"
                      src={right}
                      width={"20px"}
                      height={"20px"}
                    ></img>
                  </button>
                </Col>

                <Col>
                  <ul className="cardlist2">
                    <p>What you'll get:</p>
                    <li>
                      {" "}
                      <img src={user} width={"12px"} height={"12px"}></img> Upto
                      8 Users
                    </li>
                    <li>
                      <img src={cloud} width={"12px"} height={"12px"}></img>{" "}
                      Upto 3gb storage
                    </li>
                    <li>
                      <img src={mail} width={"12px"} height={"12px"}></img>{" "}
                      Email Support
                    </li>
                    <li>
                      <img src={dtick} width={"12px"} height={"12px"}></img>{" "}
                      Basics of Documents, Task Flow, Voting ,Accounting
                      ,Banking,Notes,Investor, Director and Team management
                      included
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>

            <Card className="hcard1">
              <Row>
                <Col className="cardcol">
                  <button className="card2btn1"> Let's Connect</button>
                  <Card.Title>Enterprise Plan</Card.Title>
                  <Card.Text className="cardtxt">
                    Effortlessly customize and fine-tune services as your
                    <br /> needs shift,ensuring the perfect tools for success
                  </Card.Text>
                  <button className="btncard22">
                    Contact Us
                    <img
                      className="arrow1"
                      src={right}
                      width={"20px"}
                      height={"20px"}
                    ></img>
                  </button>
                </Col>

                <Col>
                  <ul className="cardlist2">
                    <p>What you'll get:</p>
                    <li>
                      {" "}
                      <img src={user} width={"12px"} height={"12px"}></img> More
                      than 75 Users
                    </li>

                    <li>
                      <img src={dtick} width={"12px"} height={"12px"}></img>{" "}
                      Customization of all other features
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
        <div className="fdiv">
                <button className="fbtn1"><img src={bell} width={"18px"} height={"18px"}></img></button>
                <button className="fbtn2"></button>
                <img className="plus" src={plus} width={"30px"}></img>

        </div>
      </div>
    </div>
  );
}

export default Page;
