// config.js

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("main")

	const mainState = {
		name: "main",
		url: "/main",
		// template:"<h1>안녕하세요</h1>"
		component: "main"
	}

	const tab1State = {
		name: "main.tab1",
		url: "/main/tab1",
		component: "tab1"
	}
	const tab2State = {
		name: "main.tab2",
		url: "/main/tab2",
		component: "tab2"
	}
	const tab3State = {
		name: "main.tab3",
		url: "/main/tab3",
		component: "tab3"
	}

	$stateProvider.state(mainState)
	$stateProvider.state(tab1State)
	$stateProvider.state(tab2State)
	$stateProvider.state(tab3State)
})