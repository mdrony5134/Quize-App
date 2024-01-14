import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div
    style={{
        width: "100%",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#cc3300",
        color: "white",
        textAlign:"center",
        textTransform: "capitalize",
        borderRadius: 5,
    }}
    >
        {children}
    </div>
  )
}

export default ErrorMessage