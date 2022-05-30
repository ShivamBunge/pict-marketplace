import React from "react";
import styled from "styled-components";
import "./dashboard.css"
function MainContent() {
  return (
    <Container>
      <div className="info">
        <div className="wrapper">
          <div className="one"><p>Username</p></div>
          <div className="two"><p>Shivam Bunge</p></div>
          <div className="three"><p>Email</p></div>
          <div className="four"><p>abc@gmail.com (cant be changd)</p></div>
          <div className="five"><p>Phone  </p></div>
          <div className="six"><p><input classNameName="p-info" type={"text"} /></p><button type="button" class="btn btn-primary btn-sm">Save</button>
          </div>

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
