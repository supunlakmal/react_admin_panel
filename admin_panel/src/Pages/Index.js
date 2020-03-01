import React, { Component,Fragment } from "react";

import Grid from '../Pages/Layout/Grid/Grid';
import Heading  from  '../Components/Heading';
import Alert from '../Components/Alert';

class Index extends Component {





    render() {

     
        return (
<Fragment>
<Grid/>
<Heading/>
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
