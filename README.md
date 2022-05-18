# momentum

momentum 클론

submit event가 발생할 때 JS는 onLoginsubmit를 호출하고 있다.
JS는 아무것도 하지 않아도 어떤 정보를 담은 채로 function을 호출한다.
JS에게 함수 이름만 주고 실행하는 것은 JS(브라우저)가 한다.기본동작은 막아야 할 필요가 있다.

어떤 것이 클릭됐는지 등 정보를 알고 싶을 때 JS(브라우저)는 단순히 함수를 실행시키기만 하는게 아니라
JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어준다.

이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
이 object는 handleLinkClick을 위한 EventListener 함수의 첫번째 인자로 주어지게 된다.
공간만 만들고 받기만 하면 된다. argument를 받아줘야 한다.
storage는 브라우저에 뭔가를 저장하고 나중에 가져다 쓸 수 있게 한다. 브라우저에 무료로 기억할 수 있게 해주는 기능. 개발자도구 - 애플리케이션에서 확인 가능
local storage API 중 setitem라는 method를 활용하면 local storage에 정보를 저장할 수 있다. key와 value값을 setitem:저장 getitem:불러오기 removeitem:삭제
