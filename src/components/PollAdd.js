import React from 'react'



class PollAdd extends React.Component {

    state =  {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    };

    handleInputChange = (e) => {

    }

    isDisabled = () => {

    }

    handleSubmit = () => {

    }


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


                <label  className={'label'}>B.</label>
                <input
                    className={'input'}
                    type={'text'}
                    value={b}
                    id={'b'}
                    onChange={this.handleInputChange}
                    name={'b'}
                />
                <label  className={'label'}>C.</label>
                <input
                    className={'input'}
                    type={'text'}
                    value={c}
                    id={'c'}
                    onChange={this.handleInputChange}
                    name={'c'}
                />
                <label  className={'label'}>D.</label>
                <input
                    className={'input'}
                    type={'text'}
                    value={d}
                    id={'d'}
                    onChange={this.handleInputChange}
                    name={'d'}
                />

                <button className={'btn'}>Submit </button>
            </form>
        )
    }
}

export default PollAdd;
