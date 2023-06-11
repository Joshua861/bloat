const popup = document.querySelector('.popup-content')

function say (something) {
  popup.innerHTML = something
}
function check (sel, func) {
  const elements = document.querySelectorAll(sel)
  elements.forEach(element => {
    element.addEventListener('click', func)
  })
}

function done () {
  document.body.removeChild(document.querySelector('.popup-overlay'))
}

function filipInfo () {
  say(`
  <h1>Filip</h1>
  <img src="filip/photo 3.jpg" style="height: 40vw;">
  <br>
  <p>Filip is a top g, love that guy, he just needs to take a touch.</p>
  <br>
  <button id="submit">Ok just take me to the website now.</button>
    `)
  check('#submit', done)
}

function filip () {
  say(`
    <h1>Did you hear about Filip?</h1>
    <img src="/src/images/filip/photo 3.jpg" style="height: 40vw;">
    <br>
    <button id="submit">Tell me more!</button>
    `)
  check('#submit', filipInfo)
}

function unmatched () {
  say(`
    <h1>Create account</h1><br>
<div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
</div>

<div>
    <label for="pass">Password (8 characters minimum):</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
    <label for="pass">Repeat password:</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
           <p style="color: red">Passwords don't match.</p><br>
           <button id="submit">Submit</button>
</div>
    `)
  check('#submit', filip)
}

function createAccount () {
  say(`
    <h1>Create account</h1><br>
<div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
</div>

<div>
    <label for="pass">Password (8 characters minimum):</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
    <label for="pass">Repeat password:</label>
    <input type="password" id="pass" name="password"
           minlength="8" required><br>
           <button id="submit">Submit</button>
</div>
    `)
  check('#submit', unmatched)
}

function wrongerPassword () {
  say(`
      <h1>Please login</h1><br>
      <p style="color: red">STILL WRONG!!!</p>
  <button id="sign-up">Create account</button><br>
  <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
  </div>
  
  <div>
      <label for="pass">Password (8 characters minimum):</label>
      <input type="password" id="pass" name="password"
             minlength="8" required>
  </div>
  <button id="sign-in">Sign in</button>
      `)
  check('#sign-in', wrongPassword)
  check('#sign-up', createAccount)
}

function wrongPassword () {
  say(`
    <h1>Please login</h1><br>
    <p style="color: red">Sorry, that account doesn't exist.</p>
<button id="sign-up">Create account</button><br>
<div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
</div>

<div>
    <label for="pass">Password (8 characters minimum):</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
</div>
<button id="sign-in">Sign in</button>
    `)
  check('#sign-in', wrongerPassword)
  check('#sign-up', createAccount)
}

function login () {
  say(`
    <h1>Please login</h1>
<button id="sign-up">Create account</button><br>
<div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
</div>

<div>
    <label for="pass">Password (8 characters minimum):</label>
    <input type="password" id="pass" name="password"
           minlength="8" required>
</div>
<button id="sign-in">Sign in</button>
    `)
  check('#sign-in', wrongPassword)
  check('#sign-up', createAccount)
}

function right () {
  say(`
    <h1>Your phone number has been verified</h1>
<br>
<p>Well done, that was the right code. Took you long enough. dumbass.</p>
<br><br>
<button class="submit">jeez, sorry, im trying my best</button>
    `)
  check('.submit', login)
}

function wrong () {
  say(`
  <h1>YOU GOT IT WRONG LMAO</h1>
  <br>
  <p>Mate thats the wrong code. ffs like honestly, how hard is it. just put the code in the box. jeez</p>
  <br>
  <label for="code">YOUR FUCKING CODE: </label>
  <input type="number" name="code">
  <br><br>
  <button id="submit">Submit</button>
      `)
  check('#submit', right)
}

function verifyPhone () {
  say(`
    <h1>Please verify your phone number</h1>
<br>
<p>We have sent a code to your phone. To proceed to the website, please enter your code.</p>
<br>
<label for="code">Your code: </label>
<input type="number" name="code">
<br><br>
<button id="submit">Submit</button>
    `)
  check('#submit', wrong)
}

function phone () {
  say(`
    <h1>Please enter your phone number</h1>
<br><br>
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
<br><br>
<button class="submit">Submit</button>
    `)
  check('.submit', verifyPhone)
}

function video () {
  say(`
    <h1>Check out our latest video!</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_3wkyerSBpw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br><br>
<button id="submit">Ok cool.</button>
    `)
  check('#submit', phone)
}

function customizeCookies () {
  say(`
    <h1>Which cookies would you like?</h1>
    <br>
    <br>
    <label for="1">Tracking: </label>
    <input type="checkbox" checked id="1">
    <br>
    <label for="2">Ads: </label>
    <input type="checkbox" checked id="2">
    <br>
    <label for="3">Microphone: </label>
    <input type="checkbox" checked id="3">
    <br>
    <label for="4">Camera: </label>
    <input type="checkbox" checked id="4">
    <br>
    <label for="5">More tracking: </label>
    <input type="checkbox" checked id="5">
    <br>
    <label for="6">Location: </label>
    <input type="checkbox" checked id="6">
    <br>
    <label for="7">Fingerprinting: </label>
    <input type="checkbox" checked id="7">
    <br>
    <label for="8">More ads: </label>
    <input type="checkbox" checked id="8">
    <br>
    <label for="9">Feet pics: </label>
    <input type="checkbox" checked id="9">
    <br>
    <label for="10">Passwords: </label>
    <input type="checkbox" checked id="10">
    <br><br>
    <button id="submit">Ok</button>`)
  check('#submit', video)
}

function cookies () {
  say(`
  <h1>Would you like to enable cookies?</h1>
  <br>
  <br>
  <button style="width: 100%" class="yes">Yes!!! I LOVE COOKIES 🍪🍪</button>
  <br>
  <button style="width: 100%" class="yes">I would be happy to enable cookies!</button>
  <br>
  <button style="width: 100%" class="yes">Wow, cookies? Yes!</button>
  <br>
  <button style="width: 100%" id="no">Hmmm, I need to know more.</button>
  <br>
  <button style="width: 100%" class="yes">YAY COOKIES!!! YASSSS</button>
  <br>
  `)
  check('.yes', video)
  check('#no', customizeCookies)
}

window.addEventListener('load', function () {
  say(`
  <h1>Sign up for our newsletter!</h1>
  <label for="email">Your email adress:</label>
  <input name="email" type="text">
  <br><br>
  <button id="submit">Submit</button>
    `)
  check('#submit', cookies)
})
