// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// original code
// const smallBox = <div>small lightblue box</div>
// const mediumBox = <div>medium pink box</div>
// const largeBox = <div>large orange box</div>

// 1...
// const smallBox = <div className="box box--small" style={{backgroundColor: "lightblue", fontStyle: "italic"}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: "pink", fontStyle: "italic"}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor: "orange", fontStyle: "italic"}}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// // 2... Extra credit - 1 Make custom component
// function Box(props) {
//   const eleClassName = `box ${props.className}`
//   const eleStyle = {fontStyle: "italic", ...props.style}
//   const ele = <div className={eleClassName} style={eleStyle}>{props.children}</div>
//   return ele
// }
// function App() {
//   return (
//     <div>
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//         small lightblue box
//       </Box>
//     </div>
//   )
// }

// 3... Extra credit - 2 
function Box(props) {
  const eleClassName = `box box--${props.size}`
  const eleStyle = {fontStyle: "italic", ...props.style}
  const ele = <div className={eleClassName} style={eleStyle}>{props.children}</div>
  return ele
}
function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
