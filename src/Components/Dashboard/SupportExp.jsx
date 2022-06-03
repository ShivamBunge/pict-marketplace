import React from 'react'
import styled from 'styled-components';
const SupportExp = () => {
    return (
        <Container>
            <h5>Create a ticket</h5>
            <div>
            <p>
                Subject <input type={"text"} />
            </p>
            <div className="p-info-tx">
                <p>
                    Message
                    <textarea rows="30" cols="30" wrap="soft" maxlength="400" className="text-ar"></textarea>
                </p>
                <button type="button" class="btn btn-primary btn-sm">Submit</button>

            </div>
            </div>
        </Container>
    )
}
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
export default SupportExp;