app.controller("loginController",function($scope, $http, $state){
	$scope.login = function(){
		let http = $http({
			url : "server/login_pro.jsp",
			method: "post",
			params: {
				nickname : $scope.nickname
			}
		})

		http.then(function(response){
			if(response.data.trim() == "OK"){
				// guestbook으로 라우팅, $state 선언해줘야
                $state.go("guestbook")
			}
		})
	}
})

app.controller("guestbookController", function($scope, $http){
	$scope.getData = function(){
		let http = $http({
			url : "server/get_data.jsp",
			method: "post"

		})

		http.then(function(response){
			$scope.content_data = response.data
			// console.log($scope.content_data)
		})
		
	}
})

app.controller("guestbookInputController", function($scope, $http){
	$scope.input = function(){

		let http = $http({
			url : "server/insert_data.jsp",
			method : "post",
			// insert_data.jsp에서 content라는 파라미터를 받기에 맵핑을함
			params: {
				content : $scope.guestbook_content
			}
		})

		http.then(function(response){
			if(response.data.trim()== "OK"){
				alert("저장이 완료되었습니다.")
				//저장된 데이터를 가져옴
				$scope.guestbook_content = ""
				$scope.getData()

			}
		})
	}
})

app.controller("guestbookContentController", function($scope){
	// 컨트롤러가 보여질때 자동으로 호출하도록 설정
	$scope.$watch("$viewContentLoaded", function(){
		$scope.getData()
	})
})



