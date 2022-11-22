import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: purple;
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: blue;
`;

const Span = styled.span`
  font-size: 30px;
  text-align: center;
  text-weight: bold;
  color: blue;
`;




function About() {
  return (
    <div>
        <Title>About The Developer</Title>
        <Span> <FaUserAlt/> I am Addis Tsega</Span>
        <Paragraph>
            This is a full stack MERN application for employee management. It is part of a test project for a job application.
        </Paragraph>
        
    </div>
    
  )
}

export default About