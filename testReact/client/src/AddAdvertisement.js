import React from 'react';
import { Modal } from 'semantic-ui-react';

class AddAdvertisement extends React.Component {
    state = {
        open: false,
        description: '',
        email: '',
        username: '',
        location: '',
        phone: '',
        duration: '',
        subject: ''
    }

    close = () => {
        this.setState({
            open: false
        });
    }

    open = () => {
        this.setState({
            open: true
        });
    }

    todayDate() {
        let date = new Date();

        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        return dd + '/' + mm + '/' + yyyy;
    }

    daysAfterToday(days) {
        let today = new Date();

        today.setDate(today.getDate() + parseInt(days));

        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        return dd + '/' + mm + '/' + yyyy;
    }

    handleClick = async () => {
        await this.props.createAdvertisement({
            description: this.state.description,
            additiondate: this.todayDate(),
            expirationdate: this.daysAfterToday(this.state.duration),
            email: this.state.email,
            username: this.state.username,
            location: this.state.location,
            phone: this.state.phone,
            subject: this.state.subject
        });
        this.close();
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handleSubjectChange = (e) => {
        this.setState({
            subject: e.target.value
        });
    }

    handleDurationChange = (e) => {
        this.setState({
            duration: e.target.value
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    render() {
        return (
            <Modal
                size="tiny"
                open={this.state.open}
                onClose={() => this.close()}
                trigger={
                    <button 
                        className="circular ui icon button blue" 
                        data-tooltip="Dodaj ogłoszenie" 
                        onClick={() => this.open()}
                    >
                        <i className="icon plus large" />
                    </button>
                }
            >
                <Modal.Header>Dodaj ogłoszenie</Modal.Header>
                <Modal.Content>
                    <form className="ui form">
                        <div className="field">
                            <label>Tytuł</label>
                            <input name="subject" type="text" value={this.state.subject} onChange={(e) => this.handleSubjectChange(e)} />
                        </div>
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
                            <input name="username" type="text" value={this.state.username} onChange={(e) => this.handleUsernameChange(e)} />
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