import React, { useState } from 'react'
import styled from 'styled-components'
import AvatarImage from "../../Assets/avatarImage.jpeg";
import "./sell.css";



const AppointmentsExp = () => {

    const [itemName, setItemName] = useState("");
    const [items, setItems] = useState([]);


    const itemEvent = () => {

        var l1 = document.getElementById("itemName").value
        setItemName(l1)
    }

    const listOfItems = () => {
        if(itemName==""){
            alert("Please enter Item Name");
        }
        else{
            setItems((oldItems) => {
                return [...oldItems, itemName];
            });
            setItemName("");
        }
    }

    const delSlot = (index) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, idx) => {
                return idx != index;
            })
        })
    }

// ********************************************************************************
    const [itemName2, setItemName2] = useState("");
    const [items2, setItems2] = useState([]);

    const itemEvent2 = () => {

        var l1 = document.getElementById("itemName3").value
        setItemName3(l1)
        
    }

    const listOfItems2 = () => {
        if(itemName3==""){
            alert("Please Enter Item Name")
        }
        else{
            setItems3((oldItems) => {
                return [...oldItems, itemName3];
            })
            setItemName3("");
        }
    }

    const delSlot2 = (index) => {
        setItems3((oldItems) => {
            return oldItems.filter((arrElem, idx) => {
                return idx != index;
            })
        })
    }
// ********************************************************************************
    const [itemName3, setItemName3] = useState("");
    const [items3, setItems3] = useState([]);

    const itemEvent3 = () => {

        var l1 = document.getElementById("itemName3").value
        setItemName3(l1)
        
    }

    const listOfItems3 = () => {
        if(itemName3==""){
            alert("Please Enter Item Name")
        }
        else{
            setItems3((oldItems) => {
                return [...oldItems, itemName3];
            })
            setItemName3("");
        }
    }

    const delSlot3 = (index) => {
        setItems3((oldItems) => {
            return oldItems.filter((arrElem, idx) => {
                return idx != index;
            })
        })
    }


    const confirmSlot = () => {
        console.log(items)
    }


    return (
        <Container>
            <br />

            <h4>Selling Counter:</h4>
            <div className="sell-card-deck">
                <div className="sell-card" id="card1">
                    <div className="sell-card-header">Academic Books:</div>
                    <div className="sell-card-body">

                        <div className="detail">
                            <label htmlFor="Department">Department</label>

                            <select name="Department" id="dept">
                                <option value="Comp">Computer</option>
                                <option value="IT">Information Technology</option>
                                <option value="Entc">Electronics and Telecommunication</option>
                            </select>
                        </div>

                        <div className="detail">
                            <label htmlFor="Year">Year:</label>

                            <select name="Year" id="Year">
                                <option value="fe">FE</option>
                                <option value="se">SE</option>
                                <option value="te">TE</option>
                                <option value="be">BE</option>
                            </select>
                        </div>

                        <div className="detail">
                            <label htmlFor="Sem">Semester:</label>

                            <select name="Sem" id="Sem">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>



                        <div className="detail" style={{}}>
                            <div className="book-col">
                                <div class="book-row" >
                                    <label htmlFor='itemName'>Name of Books</label>
                                    <input className='itemName' id='itemName' style={{ backgroundColor: "white" }} type="text" value={itemName} onChange={itemEvent} />
                                </div>
                            </div>
                            <div className="col" >
                                <div class="add-Button" style={{ marginTop: "10px" }}>
                                    <input id="add" style={{ backgroundColor: "#4285F4", color: "white", border: "none" }} type="button" value="Add Book to List" onClick={listOfItems} />
                                </div>
                            </div>
                        </div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">
                                {items.map((itemval, index) => {
                                    return <tr><th scope="row">{index + 1}</th>
                                        <td>{itemval}</td>
                                        <td><button class="btn btn-primary btn-sm" onClick={() => { delSlot(index) }}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>

                        <div className="detail">
                            <label htmlFor="desc">Description</label>
                            <textarea name="desc" id="desc" cols="30" rows="7"></textarea>
                        </div>

                        <div className="detail">
                            <label htmlFor="mat_img">Image of material:</label>
                            <input type="file" name="mat_img" id="mat_img" />
                        </div>

                        
                        <div className="detail">
                            <label htmlFor="sell-price">Selling Price:</label>
                            <input type="text" name="sell-price" id="sell-price" />
                        </div>
                    </div>
                </div>
{/* ----------------------------------------------------------------------------------------------- */}
                <div className="sell-card"  id="card2">
                    <div className="sell-card-header">Engineering Materials:</div>
                    <div className="sell-card-body">
                        <div className="detail">
                            <label htmlFor="Department">Department</label>
                            <br />
                            <select name="Department" id="dept">
                                <option value="Comp">Computer</option>
                                <option value="IT">Information Technology</option>
                                <option value="Entc">Electronics and Telecommunication</option>
                            </select>
                        </div>
                        
                        <div className="detail" style={{}}>
                            <div className="book-col">
                                <div class="book-row" >
                                    <label htmlFor='itemName'>Name of Material</label>
                                    <input className='itemName' id='itemName' style={{ backgroundColor: "white" }} type="text" value={itemName2} onChange={itemEvent2} />
                                </div>
                            </div>
                            <div className="col" >
                                <div class="add-Button" style={{ marginTop: "10px" }}>
                                    <input id="add" style={{ backgroundColor: "#4285F4", color: "white", border: "none" }} type="button" value="Add Item to List" onClick={listOfItems2} />
                                </div>
                            </div>
                        </div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">
                                {items2.map((itemval, index) => {
                                    return <tr><th scope="row">{index + 1}</th>
                                        <td>{itemval}</td>
                                        <td><button class="btn btn-primary btn-sm" onClick={() => { delSlot2(index) }}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>

                        <div className="detail">
                            <label htmlFor="desc">Description</label>
                            <textarea name="desc" id="desc" cols="30" rows="7"></textarea>
                        </div>

                        <div className="detail">
                            <label htmlFor="mat_img">Image of material:</label>
                            <input type="file" name="mat_img" id="mat_img" />
                        </div>

                        <div className="detail">
                            <label htmlFor="sell-price">Selling Price:</label>
                            <input type="text" name="sell-price" id="sell-price" />
                        </div>
                    </div>
                </div>

{/* --------------------------------------------------------------------------------------------------- */}
                <div className="sell-card"  id="card3">
                    <div className="sell-card-header">Other Reference Books:</div>
                    <div className="sell-card-body">
                        <div className="detail">
                            <label htmlFor="Department">Department</label>
                            <br />
                            <select name="Department" id="dept">
                                <option value="Comp">Computer</option>
                                <option value="IT">Information Technology</option>
                                <option value="Entc">Electronics and Telecommunication</option>
                            </select>
                        </div>

                        <div className="details">
                            <label htmlFor="Year">Year:</label>

                            <select name="Year" id="Year">
                                <option value="fe">FE</option>
                                <option value="se">SE</option>
                                <option value="te">TE</option>
                                <option value="be">BE</option>
                            </select>
                        </div>

                        <div className="detail">
                            <label htmlFor="Sem">Semester:</label>

                            <select name="Sem" id="Sem">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                            
                        <div className="detail" style={{}}>
                            <div className="book-col">
                                <div class="book-row" >
                                    <label htmlFor='itemName'>Name of Books</label>
                                    <input className='itemName' id='itemName3' style={{ backgroundColor: "white" }} type="text" value={itemName3} onChange={itemEvent3} />
                                </div>
                            </div>
                            <div className="col" >
                                <div class="add-Button" style={{ marginTop: "10px" }}>
                                    <input id="add" style={{ backgroundColor: "#4285F4", color: "white", border: "none" }} type="button" value="Add Book to List" onClick={listOfItems3} />
                                </div>
                            </div>
                        </div>
                        
                        
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">
                                {items3.map((itemval, index) => {
                                    return <tr><th scope="row">{index + 1}</th>
                                        <td>{itemval}</td>
                                        <td><button class="btn btn-primary btn-sm" onClick={() => { delSlot3(index) }}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>

                        <div className="detail">
                            <label htmlFor="desc">Description</label>
                            <textarea name="desc" id="desc" cols="30" rows="7"></textarea>
                        </div>

                        <div className="detail">
                            <label htmlFor="mat_img">Image of material:</label>
                            <input type="file" name="mat_img" id="mat_img" />
                        </div>

                        
                        <div className="detail">
                            <label htmlFor="sell-price">Selling Price:</label>
                            <input type="text" name="sell-price" id="sell-price" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AppointmentsExp;



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
