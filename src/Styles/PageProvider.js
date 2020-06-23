import React from 'react'

 function PageProvider(props) {


    const styles={

        backgroundColor: 'black',
        height:'100vh', //change it to auto
        width:'100vw'
    }
    return (
        
        <div style={styles}>
            {props.children}
        </div>
    )
}
export default PageProvider