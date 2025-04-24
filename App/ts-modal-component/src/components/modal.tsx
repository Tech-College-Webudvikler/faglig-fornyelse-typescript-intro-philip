import { colors } from "../App";
import { FaX } from "react-icons/fa6";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    boxSize: string;
    fontColor: string;
    bgcolor: string;
    children: React.ReactNode;
}

const sizes: Record<string, string> = {
    sm: "w-1/4 min-h-1/4",
    md: "w-1/2 min-h-1/2",
    lg: "w-3/4 min-h-3/4",
    xl: "w-full min-h-full",
};

export default function Modal(props: ModalProps) {
    const { isOpen, setIsOpen, boxSize, fontColor, bgcolor, children } = props;

    return isOpen ? (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setIsOpen(false);
                }
            }}
            className="bg-black/40 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
            <div
                className={`flex flex-col items-center ${
                    fontColor === "text-white" ? "bg-black" : "bg-white"
                } ${sizes[boxSize]} rounded-lg overflow-hidden`}
            >
                <nav className={`w-full ${colors[bgcolor]}`}>
                    <ul className="flex justify-between items-center w-full p-2">
                        <li>
                            <h1 className={`text-2xl font-bold ${fontColor}`}>
                                Modal
                            </h1>
                        </li>
                        <li>
                            <button
                                onClick={() => setIsOpen(false)}
                                className={`cursor-pointer ${fontColor} flex justify-center items-center`}
                            >
                                <FaX className="text-2xl" />
                            </button>
                        </li>
                    </ul>
                </nav>
                <p className={`flex-1 ${fontColor} p-3`}>{children}</p>
            </div>
        </div>
    ) : null;
}
