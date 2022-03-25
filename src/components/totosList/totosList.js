import React from 'react'
import priopity from "../../image/priority.png"

import "./totosList.scss"

const TotosList = ({content, complete, id, onComplete, onDelete}) => {
    const classList = `todos__item_img ${complete ? 'todos__item_img_active' : ''}`

    return (
        <div className="todos__item" key={id}>
            <div onClick={() => onComplete(id)} className={classList}>
                <img src={priopity} alt="priopity" />
            </div>
            <div onClick={() => onComplete(id)} className="todos__item_text">
                {content}
            </div>
            <button onClick={() => onDelete(id)} className="todos__item_delete">&times;</button>
        </div>
    )
}

export default TotosList;