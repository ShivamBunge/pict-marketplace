import React from 'react'
import Navbar from "../Global/Navbar/Navbar";
import styled from 'styled-components';
import "./auth.css"

const Register = () => {
    return (
        <Container>
            <Navbar />
            <div className="card border-success mb-3 text-center mx-auto" id='test'  >
                <div className="card-header text-center">Expert Registration</div>
                <form style={{ padding: "20px" }} className="expRegistrationForm">
                    <div className="details">

                        <div className="form-group" >
                            <label for="exampleInputEmail1">First Name</label>
                            <input type="text" className="form-control" id="exampleInpuText" aria-describedby="emailHelp" placeholder="Enter First Name" />
                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter Last Name" />
                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Contact no</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Enter contact no" />
                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Company Name</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="companyHelp" placeholder="Enter Company Name" />
                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Postal address</label>
                            <textarea className="form-control" id="exampleInputAddr" aria-describedby="addrHelp" placeholder="Enter postal address" />

                        </div>
                        <div className="form-group" >
                            <label for="exampleInputEmail1">Domain of Company</label><br />
                            <select name="profession" id="profession">
                                <option value="Finance">Finance</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Business">Business</option>
                                <option value="Legal">Legal</option>
                                <option value="Technical">Technical</option>
                                <option value="Education">Education</option>
                            </select>

                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Subdomain</label>
                            <input type="text" className="form-control" id="exampleInputText" aria-describedby="domainHelp" placeholder="Enter subdomain" />
                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Service offering on Platform:</label><br />
                            <select name="profession" id="profession">
                                <option value="Fitness instructor">Fitness Instructor</option>
                                <option value="Business Establishment">Business Establishment</option>
                                <option value="Legal">Legal Advice</option>
                                <option value="Technical advice">Technical Advice</option>
                                <option value="Technical advice">Carrer councelling</option>
                            </select>

                        </div>

                        <div className="form-group" >
                            <label for="exampleInputEmail1">Brief Intro</label>
                            <textarea className="form-control" id="exampleInputAddr" aria-describedby="introHelp" placeholder="This information will be visible to all the users " />
                            <small className="form-text text-muted">You can modify it later as well.</small>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                        </div>

                        <div class="custom-file">
                            <label class="custom-file-label" for="customFile">Document for Identity Verification</label><br />
                            <input type="file" class="custom-file-input" id="customFile" /> <br />
                            <small className="form-text text-muted">Aadhar card/Pan Card/Voting Card</small>
                        </div>

                        <div class="custom-file">
                            <label class="custom-file-label" for="customFile">Document for Company /Qualification Verification</label><br />
                            <input type="file" class="custom-file-input" id="customFile" /> <br />
                            <small className="form-text text-muted">GST Certificate/Comp. Registered certificate</small>
                        </div>
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Container>
    )
}

export default Register;

const Container = styled.div`
    background-image:linear-gradient(to bottom,#1ABC9C,#A3E4D7 );
    height:100%;
`;