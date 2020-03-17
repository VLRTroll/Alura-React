import M from 'materialize-css';

const PopUp = {
	show: (message, success = true) => {
		M.toast({
			html: message,
			classes: success ? 'green' : 'red',
			displayLenght: 2000
		});
	}
};
export default PopUp;
