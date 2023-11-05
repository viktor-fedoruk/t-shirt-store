import { FC, useState } from "react";

interface ButtonProps {
    handleOnClick?: () => void,
    classNameContainer?: string,
    classNameContent: string,
    text: string,
    buttonActiveText?: string,
}

const Button:FC<ButtonProps> = (props) => {
    const {
        handleOnClick,
        classNameContainer,
        classNameContent,
        text,
        buttonActiveText,
    } = props;

    const [buttonText, setButtonText] = useState(text);

    const handleChangeButtonText = () => {
        if (buttonActiveText) {
            setButtonText(buttonActiveText);

            setTimeout(() => {
                setButtonText(text);
            }, 1000);
        }
    }

    return (
        <div
            className={classNameContainer}
            onClick={handleOnClick}
        >
            <button
                className={classNameContent}
                onClick={handleChangeButtonText}
            >
                {buttonText}
            </button>
        </div>
    )};

export default Button;