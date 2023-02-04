import Spinner from './Spinner';
import RequestStatus from '../../constants/RequestStatus';
import React from 'react';

const withRequestStatusSpinner = (requestStatus) => (Component) => (
	<Spinner isLoading={requestStatus === RequestStatus.LOADING}>
		{requestStatus === RequestStatus.SUCCESS && Component}
	</Spinner>
);

export default withRequestStatusSpinner;