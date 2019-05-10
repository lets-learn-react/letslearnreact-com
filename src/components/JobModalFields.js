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

export default ({ className, jobModalFields }) => {
  return (

    <div style={headerStyle} className={className}>
      <div style={container}>
        <div style={divStyle}>
          <span>
            {jobModalFields.designation}
          </span>
          <span style={styleRight}>
            {jobModalFields.location}
          </span>
        </div>
        <div style={divStyle}>
          <span style={companyStyle}>{jobModalFields.companyName}</span>
          <span style={styleRight}>
            {jobModalFields.dayAdded} days ago
          </span>
          <div>
            <span>{jobModalFields.shiftType}</span>
          </div>
        </div>

        <div style={breakStyle}>
          <h3>{jobModalFields.descripton}</h3>
        </div>
      </div>
    </div>
  )
}
