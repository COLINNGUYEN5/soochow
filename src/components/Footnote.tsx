type FootnoteProps = {
    number: number | string;
    href: string;
    tooltip: string;
};

export default function Footnote({ number, href, tooltip }: FootnoteProps) {
    return (
        <sup className="relative group text-blue-500 ml-0.5">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 no-underline"
            >
                [{number}]
            </a>
            <span className="absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2
             translate-x-0 mb-2 w-fit max-w-xs px-3 py-2 text-xs text-white bg-gray-800
              rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
        {tooltip}
      </span>
        </sup>
    );
}
