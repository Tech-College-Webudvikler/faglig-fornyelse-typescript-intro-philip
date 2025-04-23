import { useState } from "react";
import Modal from "./components/modal.tsx";

export const colors: any = {
    red: "bg-red-600",
    green: "bg-green-600",
    blue: "bg-blue-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
    orange: "bg-orange-600",
    gray: "bg-gray-600",
    teal: "bg-teal-600",
    cyan: "bg-cyan-600",
    sky: "bg-sky-600",
    indigo: "bg-indigo-600",
    violet: "bg-violet-600",
    lime: "bg-lime-600",
    emerald: "bg-emerald-600",
    fuchsia: "bg-fuchsia-600",
    rose: "bg-rose-600",
    amber: "bg-amber-600",
    stone: "bg-stone-600",
    slate: "bg-slate-600",
    zinc: "bg-zinc-600",
    neutral: "bg-neutral-600",
};

export default function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [bgcolor, setBgcolor] = useState<string>("red");
    const [boxSize, setBoxSize] = useState<string>("sm");
    const [fontColor, setFontColor] = useState<string>("text-white");

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="grid grid-cols-2 gap-6 w-3/4">
                <div>
                    <h2 className="text-center font-bold text-xl">
                        Foredele/Ulemper TypeScript?
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                            <h3 className="font-medium">Fordele</h3>
                            <ol className="list-decimal pl-4">
                                <li>
                                    Fejl vil blive fundet, inden siden kommer
                                    op.
                                </li>
                                <li>Gør det nemmere at arbejde sammen.</li>
                                <li>Bedre autocompletion.</li>
                            </ol>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-medium">Ulemper</h3>
                            <ol className="list-decimal pl-4">
                                <li>
                                    Svært at forstå, når du kommer fra ren JS.
                                </li>
                                <li>
                                    Du skal skrive mere kode, og der er flere
                                    trin, der kan fejle.
                                </li>
                                <li>Typer kan være svære at huske.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-center font-bold text-xl">
                        Hvad er TypeScript?
                    </h2>
                    <p>
                        TypeScript er en udvidelse af JavaScript, der tilføjer
                        statisk typekontrol og andre funktioner til sproget. Det
                        giver udviklere mulighed for at skrive mere struktureret
                        og vedligeholdelsesvenlig kode ved at definere typer for
                        variabler, funktioner og objekter. Det kan gøre det
                        nemmere at arbejde i store projekter og samarbejde med
                        andre udviklere.
                    </p>
                </div>
                <div className="col-span-2">
                    <h2 className="text-center font-bold text-xl">
                        Hvad er forskellen mellem type og interface?
                    </h2>
                    <p className="mb-4">
                        TypeScript giver to måder at definere typer på: type og
                        interface. Begge bruges til at beskrive, hvordan data
                        skal se ud, men de fungerer lidt forskelligt. En
                        interface bruges primært til at beskrive objekter –
                        altså hvilke felter et objekt skal have – og kan også
                        bruges sammen med klasser. En interface kan udvides, så
                        du kan bygge videre på den i andre dele af koden. type
                        er mere fleksibel: den kan ikke kun bruges til objekter,
                        men også til primitive typer som string og number, samt
                        til mere avancerede ting som unioner (flere mulige
                        typer) og kombinationer af typer. De overlapper meget,
                        men bruges i forskellige situationer.
                    </p>
                    <h3 className="font-medium">
                        Eksempel på type og interface
                    </h3>
                    <div className="flex flex-col gap-2">
                        <code className="bg-gray-200 p-2 rounded-md">
                            type Person = {`{ name: string; age: number; }`}
                        </code>
                        <code className="bg-gray-200 p-2 rounded-md">
                            interface Person {`{ name: string; age: number; }`}
                        </code>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col gap-2 mt-4">
                    <label>Farve på Modal</label>
                    <select
                        className="border rounded-md"
                        onChange={(e) => setBgcolor(e.target.value)}
                    >
                        {Object.keys(colors).map((color) => (
                            <option key={color} value={color}>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <label>Størrelse på Modal</label>
                    <select
                        className="border rounded-md"
                        onChange={(e) => setBoxSize(e.target.value)}
                    >
                        <option value="sm">Lille</option>
                        <option value="md">Medium</option>
                        <option value="lg">Stor</option>
                        <option value="xl">Ekstra stor</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <label>Farve på tekst</label>
                    <select
                        className="border rounded-md"
                        onChange={(e) => setFontColor(e.target.value)}
                    >
                        <option value="text-white">Hvid</option>
                        <option value="text-black">Sort</option>
                    </select>
                </div>
            </div>

            <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer mt-4 px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            >
                Se Modal
            </button>

            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                boxSize={boxSize}
                fontColor={fontColor}
                bgcolor={bgcolor}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat iure doloremque dolore rem dolorum sunt tempore,
                expedita quibusdam doloribus molestias nulla? Possimus
                reiciendis rerum fugit vero aliquam doloremque voluptatem in.
            </Modal>
        </div>
    );
}
