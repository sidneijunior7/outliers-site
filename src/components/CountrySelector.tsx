import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { countries, Country } from "@/lib/countries"

interface CountrySelectorProps {
    value: string
    onChange: (value: string) => void
    disabled?: boolean
    className?: string
}

export function CountrySelector({ value, onChange, disabled, className }: CountrySelectorProps) {
    const [open, setOpen] = React.useState(false)

    // Find country by dial code
    const selectedCountry = countries.find((country) => country.dial === value) || countries[0]; // Default to first (Brazil) if not found

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    disabled={disabled}
                    className={cn("w-[100px] justify-between px-3", className)}
                >
                    <span className="flex items-center gap-2">
                        <span className="text-base">{selectedCountry.flag}</span>
                        <span className="text-muted-foreground">{selectedCountry.dial}</span>
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0" align="start">
                <Command>
                    <CommandInput placeholder="Procurar país..." />
                    <CommandList>
                        <CommandEmpty>País não encontrado.</CommandEmpty>
                        <CommandGroup>
                            {countries.map((country) => (
                                <CommandItem
                                    key={country.code}
                                    value={country.name}
                                    onSelect={(currentValue) => {
                                        onChange(country.dial)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === country.dial ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    <span className="mr-2 text-base">{country.flag}</span>
                                    <span className="flex-1">{country.name}</span>
                                    <span className="text-muted-foreground ml-auto">{country.dial}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
