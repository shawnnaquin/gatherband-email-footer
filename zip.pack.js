const path = require('path');
const zip = require('bestzip');
const version = require('./package.json').version;

zip(
	{
		source: './gatherband.html',
		destination: `gatherband.emailfooter.${ version }.zip`,
		cwd: path.resolve( __dirname )
	}
).then( ()=> {
	console.log('done');
}).catch( (err) => {
	console.error(err.stack);
});



