interface LabelProps {
    className?: string;
    text: string;
    icon?: string;
    iconClassName?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const labelSizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-sm',
};

const labelVariants = {
    primary: 'bg-indigo-600/10',
    secondary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
    tertiary: 'bg-red-600/10',
};

const labelClass =
    'mb-8 inline-flex items-center justify-center rounded-full  text-sm backdrop-blur-sm';
const iconClass = 'mr-1';

export default function Label({
    className,
    text,
    icon,
    size = 'md',
    variant = 'primary',
    iconClassName,
}: LabelProps) {
    const combinedClass = [
        labelClass,
        labelSizes[size],
        labelVariants[variant],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={combinedClass}>
            {icon && (
                <span
                    className={[iconClass, iconClassName]
                        .filter(Boolean)
                        .join(' ')}>
                    {icon}
                </span>
            )}
            <span>{text}</span>
        </div>
    );
}
