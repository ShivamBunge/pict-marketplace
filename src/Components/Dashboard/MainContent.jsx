import React from "react";
import styled from "styled-components";
import "./dashboard.css"

function MainContent() {
  return (
    <Container>
      <div className="info">
        <h3 className="text-center">Expert Profile</h3>
        <div className="wrapper">
          <div className="one"><p>Username</p></div>
          <div className="two"><p contentEditable="true">Shivam Bunge</p></div>
          <div className="three"><p>Email</p></div>
          <div className="four"><p> abc@gmail.com (cant be changd)</p></div>
          <div className="five"><p contentEditable="true">Phone  </p></div>
          <div className="six"><p><input classNameName="p-info" type={"text"} placeholder="+91"/></p></div>
          <div><label htmlFor="domain"><p>Domain</p></label></div>
          <div><p><select name="domain" id="domain">
                <option value="Finance">Finance</option>
                <option value="Legal">Legal</option>
                <option value="Health">Health</option>
                <option value="Educcation">Education</option>
              </select></p></div>
          <div><label htmlFor="subdomain"><p>Subdomain</p></label></div>
          <div><input type="text" name="subdomain" id="subdomain" /></div>
          <div><label htmlFor="time"><p>Average session time</p></label></div>
          <div><input type="number" name="time" id="time" placeholder="e.g. 30 mins" /> </div>
          <div><label htmlFor="fee"><p>Average per session fee</p></label></div>
          <div><input type="number" name="fee" id="fee" placeholder="INR"/></div>
        </div>
       
        <div className="txt-ar-box">
          <div className="seven"><p>About me</p></div>
          <div className="p-info-tx">
            <p>
              <textarea rows="30" cols="30" wrap="soft" maxlength="400" className="text-ar"></textarea>
            </p>
            <button type="button" class="btn btn-primary btn-sm">Save</button>

          </div>
        </div>
      </div>


    </Container>
  );
}
export default MainContent;




const Container = styled.div`
  width: 50%;
  background:  transparent ;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
