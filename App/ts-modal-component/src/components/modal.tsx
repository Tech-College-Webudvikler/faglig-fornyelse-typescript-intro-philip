import { colors } from "../App";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    boxSize: string;
    bgcolor: string;
    children: React.ReactNode;
}

const sizes: any = {
    sm: "w-1/4 min-h-1/4",
    md: "w-1/2 min-h-1/2",
    lg: "w-3/4 min-h-3/4",
    xl: "w-full min-h-full",
};

export default function Modal(props: ModalProps) {
    const { isOpen, setIsOpen, boxSize, bgcolor, children } = props;

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
                className={`flex flex-col items-center ${colors[bgcolor]} ${sizes[boxSize]} rounded-lg p-4`}
            >
                <h1 className="text-2xl font-bold text-white">Modal</h1>
                <p className="flex-1 text-gray-300">{children}</p>

                <button
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md"
                >
                    Luk
                </button>
            </div>
        </div>
    ) : null;
}
