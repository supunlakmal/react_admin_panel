import React, { Component,Fragment } from "react";

import Grid from '../Pages/Layout/Grid/Grid';
import Heading  from  '../Components/Heading';
import Alert from '../Components/Alert';

class Index extends Component {





    render() {

     
        return (
<Fragment>
<Grid/>
<Heading h={1}>Hello World Animation.....!!</Heading>
<Heading h={2}>Hello World Animation.....!!</Heading>
<Heading h={3}>Hello World Animation.....!!</Heading>
<Heading h={4}>Hello World Animation.....!!</Heading>
<Heading h={5}>Hello World Animation.....!!</Heading>
<Heading h={6}>Hello World Animation.....!!</Heading>

{/* Alerts */}


<Alert className={'alert-primary'}>
    test
</Alert>

<Alert className={'alert-secondary'}>
    test
</Alert>


<Alert className={'alert-success'}>
    test
</Alert>


<Alert className={'alert-danger'}>
    test
</Alert>


<Alert className={'alert-warning'}>
    test
</Alert>



<Alert className={'alert-info'}>
    test
</Alert>

<Alert className={'alert-light'}>
    test
</Alert>

<Alert className={'alert-dark'}>
    test
</Alert>


</Fragment>
        );
    }
}


export default Index;
