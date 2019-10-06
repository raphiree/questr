UserController, on successful save and a 200 response, fails to
dispatch after a promise callback. Issue was due to returning a 
string as JSON, not an object.

when do we bind functions like this.handleSubmit and not when
this.setState()?

calling setState within handleClick likely causes state to reset on
re-render?

setState is ASYNCHRONOUS! calling console.log(this.state) does not return
correct state