/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 

	// console.log('new session id ' + sessionId + ' for login::' + _email	);

	return sessionId;
};

Login.prototype.refreshsession = function(sessionid) {
   /*
	* Generate unique session id and set it into sessionMap
	*/
	var newname=this.sessionMap[sessionid].name;
	var newemail=this.sessionMap[sessionid].email;
	delete this.sessionMap[sessionid];
	var newsessionId = new Date().getTime();
	this.sessionMap[newsessionId] = { name: newname, email: newemail } 

	return newsessionId;
};

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {
	// console.log('logout::' + sessionId);
   /*
	*  Remove the given sessionId from the sessionMap
	*/
	delete this.sessionMap[sessionId];
	// console.log('Logged out from the server');
};

// Export the Login class
module.exports = new Login();
