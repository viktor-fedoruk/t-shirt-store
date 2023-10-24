import {FC} from "react";

interface ButtonProps {
    classNameContainer: string,
    classNameContent: string,
    text: string,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        classNameContainer,
        classNameContent,
        text,
    } = props;

    return (
        <div className={classNameContainer}>
            <button className={classNameContent}>{text}</button>
        </div>
    )
};

export default Button;