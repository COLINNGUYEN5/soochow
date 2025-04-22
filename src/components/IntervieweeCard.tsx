
export interface Interviewee {
    name: string;
    title: string;
    image: string;
    quote: string;
    portrait?: string;
    bio?: string;
}

export function IntervieweeCard({
                             person,
                             isSelected,
                             onClick,
                             circular = false,
                             imageClassName = 'w-24 h-24 object-cover rounded-full shadow-lg transition-transform duration-200',
                             nameClassName = 'mt-2 font-semibold text-center whitespace-pre-line',
                             titleClassName = 'text-sm text-gray-600 text-center whitespace-pre-line',
                         }: {
    person: Interviewee;
    isSelected: boolean;
    onClick: () => void;
    imageClassName?: string;
    circular?: boolean;
    nameClassName?: string;
    titleClassName?: string;
}) {
    return (
        <div
            className={`flex flex-col items-center cursor-pointer ${circular ? 'translate-x-[-50%] translate-y-[-50%]' : ''}`}
            onClick={onClick}
        >
            <img
                src={person.image}
                alt={person.name}
                className={`${imageClassName} ${isSelected ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`}
            />
            <p className={nameClassName}>{person.name}</p>
            <p className={titleClassName}>{person.title}</p>
        </div>
    );
}