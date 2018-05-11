import React from 'react';
import { connect } from 'react-redux';
import {
	Grid,
	Row,
	Col,
	Form,
	Button,
	FormGroup,
	ControlLabel,
	FormControl
} from 'react-bootstrap';
import { login } from './action';

const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(login(user))
})

class Login extends React.Component {
  state = {
    user: {
      email:"",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.userLogin(this.state.user);
  }

	render() {
    const { user } = this.state;
		return (
			<Grid>
				<Row className="pad-10">
					<Col sm={12} md={6} mdOffset={3}>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup controlId="email">
								<ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                  value={user.email}
                />
							</FormGroup>

							<FormGroup controlId="password">
								<ControlLabel>Password</ControlLabel>
									<FormControl
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                    value={user.password}
                  />
							</FormGroup>
							<FormGroup>
									<Button type="submit">Sign in</Button>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default connect(null, mapDispatchToProps)(Login);
