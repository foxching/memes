export const asyncActionStarted = () => {
	return {
		type: 'ASYNC_ACTION_START'
	};
};

export const asyncActionFinished = () => {
	return {
		type: 'ASYNC_ACTION_FINISH'
	};
};

export const asyncActionError = () => {
	return {
		type: 'ASYNC_ACTION_ERROR'
	};
};