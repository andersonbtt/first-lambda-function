console.log('First Lambda Function');

exports.handler = function(event, context) {
	var result = {
		statusCode: 200,
		body: process.env.message
	};
	context.succeed(result);
};

