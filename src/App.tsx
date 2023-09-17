import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accodrion';
import {Rating} from './components/Rating/Rating';

function App() {
    return (
        <div>
            <PageTitle title={"This App Component"}/>
            <PageTitle title={"My Friends"}/>
            <Rating value={3}/>
            Article 1
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
