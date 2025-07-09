import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';

interface Option {
    value: string;
    label: string
}

interface ReusableSelectProps {
    options: Option[]
    className: string
    onChange?: (value: string) => void
}
const ReusableSelect = ({ options, className, onChange }: ReusableSelectProps) => {
    return (
        <div>
            <Select onValueChange={onChange}>
                <SelectTrigger className={`w-[180px] border border-black  ${className}`}>
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}

                </SelectContent>
            </Select>
        </div>
    )
}

export default ReusableSelect