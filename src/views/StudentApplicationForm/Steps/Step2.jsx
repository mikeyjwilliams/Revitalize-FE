import React from 'react';


const Step2 = ({ setStep, obj, setObj, errorHandle, setErrorHandle }) => {

    const next = () => {
        if (obj.coverLetter.length === 0 || obj.jobExperience.length === 0) {
            for (let key in obj) {
                if (key === 'coverLetter' || key === 'jobExperience') {
                    if (obj[key].length === 0) {
                        setErrorHandle(errorHandle => ({ ...errorHandle, [key]: true }))
                    }
                }
            }
        } else {
            setStep(3)
        }
    }

    const changeHandler = e => {
        setObj({ ...obj, [e.target.name]: e.target.value })
    }

    return (
        <div className='second-page'>
            <h2 className='title'>Getting to know you more</h2>
            <form>
                <label htmlFor="application-fit"><h3>Please why you would be the perfect fit for this apprenticeship.</h3></label>
                <textarea
                    style={{ marginBottom: !errorHandle.coverLetter && '60px' }}
                    value={obj.coverLetter}
                    onClick={() => setErrorHandle({ ...errorHandle, coverLetter: false })}
                    onChange={changeHandler}
                    name='coverLetter'
                    id="application-fit"
                    className='page-two-text-area'>
                </textarea>
                {errorHandle.coverLetter && <p className='application-error margin'>Please tell us why you would like this apprenticeship.</p>}
                <label htmlFor="application-experience"><h3>Please list any prior job experience(s).</h3></label>
                <textarea
                    value={obj.jobExperience}
                    onClick={() => setErrorHandle({ ...errorHandle, jobExperience: false })}
                    onChange={changeHandler}
                    name='jobExperience'
                    id="application-experience"
                    className='page-two-text-area'>
                </textarea>
                {errorHandle.jobExperience && <p className='application-error'>Please list experience. Put none if you have no experience.</p>}
            </form>
            <div className='button-container two'>
                <button type="button" onClick={() => setStep(1)}>&larr; Back</button>
                <button type="button" onClick={next}>Next &rarr;</button>
            </div>
        </div>
    )
};


export default Step2;