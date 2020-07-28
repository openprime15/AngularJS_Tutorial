	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("main")

		const mainState= {
			name: "main",
			url: "/main",
			// template : "<h1>Main</h1>"
			component : "mainComponent"
		}

		const page1State= {
			name:"page1",
			url :"/page1",
			// templateUrl : "page1.html",
			// controller : "controller1"
			component: "page1Component"

		}

		$stateProvider.state(mainState)
		$stateProvider.state(page1State)

	})