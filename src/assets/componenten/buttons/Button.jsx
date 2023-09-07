

function Button({ buttonType, buttonText, buttonVariant}) {
    return (
        <button
            type={buttonType}
            className={`${buttonVariant}-button`}
            //onClick={clickHandler}

        >
            {buttonText}
        </button>


    )
}

export default Button;