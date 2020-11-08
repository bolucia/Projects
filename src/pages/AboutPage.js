import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title}/>

            <Content>
                <p>Hello, my name is Lucian.</p>
                <p>Then write stuff about yourself here</p>
            </Content>
        </div>

    );

}

export default AboutPage;