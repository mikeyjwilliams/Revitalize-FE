import React, { useState } from 'react';
import { MdClose } from "react-icons/md";



const AddTrade = props => {
    const {
        setAddTradeState,
        addTradeState,
        submitAddTrade,
        setAddTradeModal,

    } = props;

    const [errors, setErrors] = useState({
  		validate:false,
      validate2:false,
      validate3:true
  	});

    const validateInput = e =>{
      console.log("validation happens", e.target.name)
      if (e.target.value == 0) {
        if(e.target.name == "name"){
          setErrors({
            ...errors,
            validate: true,})
        } else if(e.target.name =="description") {
          setErrors({
            ...errors,
            validate2:true,})
        }
      } else {
        if(e.target.name == "name"){
          setErrors({
            ...errors,
            validate: false,})
        } else {
          setErrors({
            ...errors,
            validate2:false,})
        }

      }
      console.log("validation3 1:", errors.validate," 2:",errors.validate2, " 3:", errors.validate3)
      if(errors.validate == true || errors.validate2 == true){
        setErrors({...errors, validate3:true})
      } else if (errors.validate == false && errors.validate2 == false){
        setErrors({...errors,validate3:false})
      }
    }


    console.log("are we validated?", errors.validate)
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
                    <form onSubmit={submitAddTrade} >
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
                        {errors.validate && <p className="errorText">Please select a valid selection</p>}
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
                        {errors.validate2 && <p className="errorText">Please select a valid selection</p>}
                        <br />
                        <br />

                        <div className="add-trade-button-container" >

                            <button className={`add-trade-button ${!errors.validate3 && 'disabled'}`}  >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>

            </section>
        </>
    );
}


export default AddTrade;
