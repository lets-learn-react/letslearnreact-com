import React from 'react'

export default (props) => {

    let styleRight = {
        float: "right",
        clear: "both"
    };
    let styleLeft = {
        float: "left",
        clear: "both"
    };
    let divStyle = {
        marginTop: "5%",
        marginBottom: "15%"
    };
    let container = {
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "10%",
        marginBottom: "10%"
    }
    return (
      
        <div style={{ top: '50%', left: '50%', transform: `translate(-50%,-50%)` }} className={props.className}>
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
                    <span style={{ width: '80%' }}>#CompanyName</span>
                    <span style={styleRight}>
                        #DayAdded
            </span>
                    <div>
                        <span>#ShiftType</span>
                    </div>
                </div>

                <div style={{ wordBreak: 'break-all', wordWrap: 'break-word' }}>
                    <h3>#Job Description</h3>
                </div>
            </div>
        </div>
        )
}


