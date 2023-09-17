import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accodrion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div>
            <PageTitle title={"This App Component"}/>
            <PageTitle title={"My Friends"}/>
            <UncontrolledRating/>
            Article 2
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType= {
    title:string
}

function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
