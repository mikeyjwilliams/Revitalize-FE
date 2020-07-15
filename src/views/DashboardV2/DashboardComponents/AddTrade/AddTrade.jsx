import React, { useState } from 'react';
import { MdClose } from "react-icons/md";



const AddTrade = props => {
    const {
        setAddTradeState,
        addTradeState,
        submitAddTrade,
        setAddTradeModal,

    } = props;

    // const [errors, setErrors] = useState({
  	// 	validate:false,
    //   validate2:false,
    //   validate3:true
  	// });

    const [validate, setValidate] = useState(false);
    const [validate2, setValidate2] = useState(false);
    const [validate3, setValidate3] = useState(true);
    const [changeTrack, setChangeTrack] = useState(0);
    const [changeTrack2, setChangeTrack2] = useState(0);



    const validateInput = e =>{

      if (e.target.value === "0") {

        if(e.target.name === "name"){

          setValidate(true);
          setChangeTrack(0);
          setValidate3(true);

        } else {
          setValidate2(true);
          setChangeTrack2(0);
          setValidate3(true);
          
        }
      } else {
        if(e.target.name === "name"){

          if(changeTrack === 0){
            setChangeTrack(1);
            if(changeTrack2 === 1){
              setValidate3(false);
            }
          }
          setValidate(false);

        } else {
          if(changeTrack2 === 0){
            setChangeTrack2(1);
            if(changeTrack === 1){
              setValidate3(false);
            }
          }
          setValidate2(false);

        }
      }




    }


    return (
        <>
            <section
                className="add-trade-container"
            >
                <div className="add-trade-card">

                    <div className="add-trade-actions">
                        <MdClose className="close" onClick={() => setAddTradeModal({ show: false })} />
                    </div>

                    <h3>Add Trade</h3>
                    <form>
                        <select
                            name='name'
                            onChange={(event) => {
                                validateInput(event);
                                setAddTradeState({ ...addTradeState, [event.target.name]:event.target.value });

                              }
                            }
                        >
                          <option value={0} selected>Select One</option>
                          <option value="Electrician">Electrician</option>
                          <option value="Carpenter">Carpenter</option>
                          <option value="Plumber">Plumber</option>
                          <option value="HVAC technician">HVAC technician</option>
                          <option value="Welder">Welder</option>
                          <option value="Landscaper">Landscaper</option>
                          <option value="Stone Mason">Stone Mason</option>
                        </select>
                        {validate && <p className="errorText">Please select a valid selection</p>}
                        <br />

                        <select
                            name='description'
                            type='text'
                            value={addTradeState.description}
                            onChange={(event) =>{
                              validateInput(event);
                              setAddTradeState({ ...addTradeState, [event.target.name]:event.target.value })

                              }
                            }
                        >
                          <option value={0} selected>How many do you need?</option>
                          <option value="You need 1">1</option>
                          <option value="You need 2">2</option>
                          <option value="You need 3">3</option>
                          <option value="You need 4">4</option>
                          <option value="You need 5+">5+</option>
                        </select>
                        {validate2 && <p className="errorText">Please select a valid selection</p>}
                        <br />
                        <br />

                        <div className="add-trade-button-container" >

                            <div className={`add-trade-button${validate3 ? ' disabled' : ''}`} onClick={submitAddTrade}  >
                                Submit
                            </div>
                            <div className={`add-trade-button${!validate3 ? ' disabled' : ' fake'}`} >
                                Submit
                            </div>
                        </div>
                    </form>

                </div>

            </section>
        </>
    );
}


export default AddTrade;
