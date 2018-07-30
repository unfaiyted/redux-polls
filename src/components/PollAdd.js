import React from 'react'



class PollAdd extends React.Component {
    render() {
        return (
            <form className={'add-form'}>
                <h1>What is your polls name?</h1>
                <input className={'input'} type={'text'} />
                <h1>What is your options</h1>
                <label className={'label'}>A.</label>
                <input className={'input'}  type={'text'} />
                <label  className={'label'}>B.</label>
                <input className={'input'}  type={'text'} />
                <label  className={'label'}>C.</label>
                <input className={'input'}  type={'text'} />
                <label  className={'label'}>D.</label>
                <input className={'input'}  type={'text'} />

                <button className={'btn'}>Submit </button>
            </form>
        )
    }
}

export default PollAdd;
