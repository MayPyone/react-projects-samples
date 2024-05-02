export default function ModalPopUp({header, body, footer, close}){
    return(
        <div className="modal">
            <div className="modal-content">
          <div className="header"><h2>{header && header} </h2>
            <span onClick={close}>&times;</span>
            </div>  
            <div className="mybody">{body && body}</div>
            <div className="footer">{footer && footer}</div>
            </div>
            </div>
    )
} 