// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  function handleSubmit(event) {
    event.preventDefault()
  
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  const inp = event.target.elements.username.value
  
  // 🐨 Call `onSubmitUsername` with the value of the input
  onSubmitUsername(`From regular submit: ${inp}`)

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  }

  // Extra credit 1 ref
  const usernameRef = React.useRef(null)
  const handleSubmitRef = (event) => {
    event.preventDefault()
    onSubmitUsername(`From Ref submit: ${usernameRef.current.value}`)
  }
  // Extra credit 2 setState hook
  const [error, setError] = React.useState('')
  const [correctedUsername, setCorrectedUserName] = React.useState('') // Extra credit 3
  function handleChange(event) {
    const inp = event.target.value
    const isValid = inp === inp.toLowerCase()
    setError(isValid ? 'all good' : 'too bad')
    if (isValid) document.getElementById("submit").disabled = false
    else document.getElementById("submit").disabled = true
    
    // Extra credit 3 controlled input (I chged it a bit so a number can be typed)
    const lastInp = inp[inp.length - 1]
    const isNumber = lastInp >= 0 && lastInp <= 9 ? true : false
    setCorrectedUserName(isNumber ? 'StartOver!' : inp)
  }
  return (
    // <form onSubmit={handleSubmit}>
    <form onSubmit={handleSubmitRef}>
      <div>
        <label htmlFor='username'>Username:</label>
        {/* <input ref={usernameRef} id="username" type="text" onChange={handleChange} /> */}
        <input ref={usernameRef} id="username" type="text" onChange={handleChange} value={correctedUsername}/>
        <label id='alert'>{error}</label>
      </div>
      <button id="submit" type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
