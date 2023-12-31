import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface iModalProps {
    onClose: () => void;
    children: ReactNode,
    portalClassName: string,
    classNameWrapper?: string,
    classNameContent?: string,
}

const Modal: FC<iModalProps> = (props) => {
    const {
        onClose,
        children,
        portalClassName,
        classNameWrapper,
        classNameContent,
    } = props;

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("click", closeModalWindow, true);

        return () => {
            document.removeEventListener("click", closeModalWindow, true);
        }
    },[]);

    function closeModalWindow(e: MouseEvent): void {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
            e.stopPropagation();
        }
    }

    return createPortal(
        <div
            className={`portal-container ${classNameWrapper || ""}`}
        >
            <div
                ref={modalRef}
                className={`portal-wrapper-content ${classNameContent || ""}`}
            >
                {children}
            </div>
        </div>,
        document.querySelector(`.${portalClassName}`)!
    )
};

export default Modal;