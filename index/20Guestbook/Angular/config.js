app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("main")

	const mainState = {
		name:"main",
		url: "/main",
		views: {
			"main": {
				templateUrl : "view/login.html",
				controller : "loginController"
			}
		}
	}

	const guestbookState = {
		name:"guestbook",
		url:"/guestbook",
		views: {
			"main": {
				templateUrl : "view/guestbook_main.html",
				controller: "guestbookController"
			},
			"guestbookInput@guestbook": {
				templateUrl : "view/guestbook_input.html",
				controller : "guestbookInputController"
			},
			"guestbookContent@guestbook": {
				// guestbook_content.html 쓰면 계속 변경사항이 반영안되는 희안한 문제 발생 그래서 새로 이름 파서 생
				templateUrl : "view/guestbook_content2.html",
				controller: "guestbookContentController"
			},
		}
	}


	$stateProvider.state(mainState);
	$stateProvider.state(guestbookState);
	
})



