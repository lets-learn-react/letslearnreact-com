import React from 'react'

let styleRight = {
  float: 'right',
  clear: 'both'
}
let divStyle = {
  marginTop: '5%',
  marginBottom: '15%'
}
let container = {
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '10%',
  marginBottom: '10%'
}
let headerStyle = {
  top: '50%',
  left: '50%',
  transform: `translate(-50%,-50%)`
}
let breakStyle = {
  wordBreak: 'break-all',
  wordWrap: 'break-word'
}
let companyStyle = {
  width: '80%'
}

export default ({ className }) => {
  return (

    <div style={headerStyle} className={className}>
      <div style={container}>
        <div style={divStyle}>
          <span>
                        #Designation
          </span>
          <span style={styleRight}>
                        #Location
          </span>
        </div>
        <div style={divStyle}>
          <span style={companyStyle}>#CompanyName</span>
          <span style={styleRight}>
                        #DayAdded
          </span>
          <div>
            <span>#ShiftType</span>
          </div>
        </div>

        <div style={breakStyle}>
          <h3>#Job Description</h3>
        </div>
      </div>
    </div>
  )
}
