const sayReact = () => {
    // arrow function
    console.log('react');
}

function alertMe() {
    console.log('그 윈도우 경고창 띄우는 그거')
    window.alert('test alert 입니다')
}

const addRToExampleBox = () => {
    const exampleBox = document.getElementById('example-box');
    const text = exampleBox.innerText;
    exampleBox.innerText = text + "R";
}

const alertInputValue = () => {
    const input = document.getElementById('example-input');
    const text = input.value;
    window.alert(text);
}

const addElem = () => {
    const ul = document.getElementById('example-ul');
    const newLi = document.createElement('li');
    newLi.innerText = `${Math.random()}`;
    ul.appendChild(newLi);
}

const myButton = document.getElementById("my-button")
myButton.addEventListener("click", (e) => {
    // DOM으로 등록하면 Event 오브젝트를 얻어올 수 있습니다
    let message = `(x, y) = (${e.x}, ${e.y})`;
    if (e.ctrlKey) message += ", CTRL";
    if (e.altKey) message += ", ALT";
    if (e.shiftKey) message += ", SHIFT";
    alert(message);
})

console.log('js 파일은 지금 연결돼요');

console.debug('디버그 모드도 있음');