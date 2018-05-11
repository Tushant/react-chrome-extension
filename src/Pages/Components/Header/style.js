import styled from 'styled-components';

export const Card = styled.div`
	padding-top: 20px;
	margin: 10px 0 20px 0;
	background-color: rgba(214, 224, 226, 0.2);
	border-top-width: 0;
	border-bottom-width: 2px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
`;

export const CardHeader = styled.div`
	height: auto;
`;

export const Avatar = styled.div`
	position: relative;
	top: 40px;
	text-align: center;
	margin-bottom: 50px;
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	max-width: 100px;
	max-height: 100px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
  margin: 0 auto;
	border: 5px solid rgba(255, 255, 255, 0.5);
`;
