import React from "react";
import { Oval } from  'react-loader-spinner'
export class Loader extends React.Component{
    render(){
        return(
            <Oval
                height={50}
                width={50}
                color="#4455b0"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4455b0"
                strokeWidth={2}
                strokeWidthSecondary={2}
                />
        )
    }
}