import React from "react"

const SectionTitle = ({title}) => {
    return (
        <div className="page-title-div border-l-2 border-primary py-2 my-6">
            <h1 className="text-4xl pl-2 text-primary" >
                {title.split(' ')[0]}
                <span className="text-secondary"> {title.split(' ')[1]}</span>
            </h1>
        </div>
    )
}
export default SectionTitle;