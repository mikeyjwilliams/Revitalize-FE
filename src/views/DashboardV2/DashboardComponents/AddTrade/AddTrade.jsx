import React, {  } from 'react';
import { MdClose } from "react-icons/md";



const AddTrade = props => {
    const {
        setAddTradeState,
        addTradeState,
        submitAddTrade,
        setAddTradeModal,

    } = props;

    console.log("Props in addtrade", props)
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
                            value={addTradeState.name}
                            onChange={(event) => setAddTradeState({ ...addTradeState, [event.target.name]:event.target.value })}
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
                        <br />

                        <select
                            name='description'
                            type='text'
                            placeholder='Description...'
                            value={addTradeState.description}
                            onChange={(event) => setAddTradeState({ ...addTradeState, [event.target.name]:event.target.value })}
                        >
                          <option value={0} selected>How many do you need?</option>
                          <option value="You need 1">1</option>
                          <option value="You need 2">2</option>
                          <option value="You need 3">3</option>
                          <option value="You need 4">4</option>
                          <option value="You need 5+">5+</option>
                        </select>
                        <br />
                        <br />

                        <div className="add-trade-button-container" >
                            <button className="add-trade-button" onClick={submitAddTrade} >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>

            </section>
        </>
    );
}


export default AddTrade
