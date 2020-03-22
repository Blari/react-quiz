import React from "react"
import "./MenuToggle.css"

const MenuToggle = props => {
    const cls = [
        "menuToggle",
        'fa'
    ]

    props.isOpen ? cls.push('fa-times open') : cls.push("fa-bars")


    return(
        <i
        className={cls.join(' ')}
        onClick={props.onToggle}
        />
    )
}

export default MenuToggle