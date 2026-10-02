import "./ConfirmationItem.css";

const ConfirmationItem = ({name, amount, price, image}) => {
    
    const total = amount * price;

    return(
        <div className="confirmation-item">

            <div className="item-details">
                <img src={image.thumbnail}/>
                <div>
                    <p>{name}</p>
                    <p><span>{amount}x</span><span>@ ${price.toFixed(2)}</span></p>
                </div>
            </div>

            <p>${total.toFixed(2)}</p>
        </div>
    )
};

export default ConfirmationItem;