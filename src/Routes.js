import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Start from './src/pages/Start';
import Ologin from './pages/Ologin';
//import Signup from './pages/Signup';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			       <Scene key="start" component={Start} title="Start" initial={true}/>
			      <Scene key="ologin" component={Login} title="Ologin"/>
			   
			    </Stack>
			 </Router>
			)
	}
}