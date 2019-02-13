const path = require('path');
var zip = require('bestzip');

zip(
	{
		source: path.resolve( __dirname, '/gatherband.html'),
		destination: `gatherband.emailfooter.${ version }.zip`,
		cwd: path.resolve( __dirname )
	}
).then( ()=> {
	console.log('done');
}).catch( (err) => {
	console.error(err.stack);
});



