import React from 'react';

import Card from '../components/Card';
import notepad from '../assets/images/notepad.png';
import fables from '../assets/images/fables.png';
import calculator from '../assets/images/calculator.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note Pad',
                    subTitle: 'A note-taking app',
                    imgSrc: notepad,
                    link: 'https://pngtree.com/so/school-supplies',
                    selected: false
                },

                {
                    id: 1,
                    title: 'Aesops Fables',
                    subTitle: 'An embodiment of storybooks app',
                    imgSrc: fables,
                    link: 'https://pngtree.com/so/star',
                    selected: false
                },

                {
                    id: 2,
                    title: 'Calculator App',
                    subTitle: 'Mathematical Operations using Android Studio',
                    imgSrc:  calculator,
                    link: 'https://pngtree.com/so/office-supplies',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id],selected ? false : true;

        items.forEach(item => {
            if(item.id !==id) {
                item.selected = false;
            }

        });

        this.setState( {
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
           
        );
        
    }
}

export default Carousel;