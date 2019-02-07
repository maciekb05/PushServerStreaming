import React from 'react';
import { Modal } from 'semantic-ui-react';
import Advertisement from "./Advertisement";

class AddAdvertisement extends React.Component {
    state = {
        open: false,
        description: '',
        additionDate: '',
        expirationDate: '',
        email: '',
        author: '',
        location: '',
        phone: '',
        duration: ''
    }

    close = () => {
        this.setState({
            open: false
        })
    };

    open = () => {
        this.setState({
            open: true
        })
    };

    handleClick = async () => {
        console.log("clicked");
        console.log(this.state)
        await this.props.createAdvertisement({
            description: this.state.description,
            additionDate: this.state.additionDate,
            expirationDate: this.state.expirationDate,
            email: this.state.email,
            author: this.state.author,
            location: this.state.location,
            phone: this.state.phone,
            duration: this.state.duration
        });
        this.close();
    };

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    handleDurationChange = (e) => {
        this.setState({
            duration: e.target.value
        })
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handleAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        })
    };

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    };

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        })
    };

    render() {
        return (
            <Modal
                size="tiny"
                open={this.state.open}
                onClose={() => this.close()}
                trigger={
                    <button className="circular ui icon button blue" data-tooltip="Dodaj ogłoszenie" onClick={() => this.open()}>
                        <i className="icon plus large"></i>
                    </button>
                }
            >
                <Modal.Header>Dodaj ogłoszenie</Modal.Header>
                <Modal.Content>
                    <form className="ui form">
                        <div className="field">
                            <label>Czas trwania</label>
                            <input name="duration" type="number" max={21} value={this.state.duration} onChange={(e) => this.handleDurationChange(e)} />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input name="email" type="email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />
                        </div>
                        <div className="field">
                            <label>Username</label>
                            <input name="author" type="text" value={this.state.author} onChange={(e) => this.handleAuthorChange(e)} />
                        </div>
                        <div className="field">
                            <label>Lokalizacja</label>
                            <input name="location" type="text" value={this.state.location} onChange={(e) => this.handleLocationChange(e)} />
                        </div>
                        <div className="field">
                            <label>Numer telefonu</label>
                            <input name="phone" type="number" max={999999999} value={this.state.phone} onChange={(e) => this.handlePhoneChange(e)} />
                        </div>
                        <div className="field">
                            <label>Opis</label>
                            <input name="description" type="text" value={this.state.description} onChange={(e) => this.handleDescriptionChange(e)} />
                        </div>
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <button className="ui button green" onClick={() => this.handleClick()}>Dodaj</button>
                </Modal.Actions>
            </Modal>
        );
    }
}
export default AddAdvertisement;