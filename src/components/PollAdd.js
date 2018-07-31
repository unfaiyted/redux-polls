import React from 'react'
import { connect } from 'react-redux'

import { handleAddPoll } from "../actions/polls";


class PollAdd extends React.Component {

    state =  {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    };


    handleInputChange = (e) => {
            const { value, name } = e.target;

            this.setState(() => ({
                [name]: value
            })
            );
    };

    isDisabled = () => {
            const { question, a,b,c,d } = this.state;

            return question === '' ||
                a === '' ||
                b === '' ||
                c === '' ||
                d === ''
    };

    handleSubmit = (e) => {
        e.preventDefault();

         console.log('Add poll: ', this.state);
        //
        this.props.dispatch(handleAddPoll(this.state, () => {
            console.log("hide this and go to the dash");
        }))

    };


    render() {
        const { question, a, b, c, d} = this.state;

        return (
            <form className={'add-form'} onSubmit={this.handleSubmit}>
                <h3 style={{marginBottom: 5}}>What is your polls name?</h3>
                <input
                    className={'input'}
                    type={'text'}
                    onChange={this.handleInputChange}
                    name={'question'}
                />

                <h3>What is your options</h3>


                <label className={'label'} htmlFor={'a'}>A.</label>
                <input
                    className={'input'}
                    type={'text'}
                    value={a}
                    id={'a'}
                    onChange={this.handleInputChange}
                    name={'a'}
                />


                <label  className={'label'} htmlFor={'b'}>B.</label>
                <input
                    className={'input'}
                    type={'text'}
                    value={b}
                    id={'b'}
                    onChange={this.handleInputChange}
                    name={'b'}
                />
                <label  className={'label'} htmlFor={'c'}>C.</label>
                <input
                    className={'input'}
                    type={'text'}
                    value={c}
                    id={'c'}
                    onChange={this.handleInputChange}
                    name={'c'}
                />
                <label  className={'label'} htmlFor={'d'}>D.</label>
                <input
                    className={'input'}
                    type={'text'}
                    value={d}
                    id={'d'}
                    onChange={this.handleInputChange}
                    name={'d'}
                />

                <button className={'btn'} disabled={this.isDisabled()}>Submit </button>
            </form>
        )
    }
}



export default connect()(PollAdd);
