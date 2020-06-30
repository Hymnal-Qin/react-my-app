// Imports
import {PureComponent, useEffect} from 'react';
import {withRouter} from 'react-router-dom';

// Component
const ScrollToTop = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [props.location.pathname])
	return null;
}

export default withRouter(ScrollToTop);
