import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accodrion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {

    let [ratingValue, setRatingValue] = useState< RatingValueType >(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState< boolean>(false)
    return (
        <div>
            <PageTitle title={'This App Component'}/>
            <PageTitle title={'My Friends'}/>
            Article 2
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
