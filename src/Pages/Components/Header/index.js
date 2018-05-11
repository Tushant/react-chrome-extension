import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardHeader, Avatar, Image } from './style';
import NaviLogo from './NaviLogo.png';

const Header = () => {
	return (
		<Grid fluid>
			<Row>
				<Col sm={12} lg={12}>
					<Card>
						<CardHeader />
						<Avatar>
							<Image src={NaviLogo} alt="" className="img-responsive" />
						</Avatar>
					</Card>
				</Col>
			</Row>
		</Grid>
	);
};

export default Header;
