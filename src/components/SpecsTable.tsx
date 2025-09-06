import { Check } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { features } from "@/lib/data"
import { useTranslations } from "next-intl"

export default function SpecsTable() {
    const t = useTranslations("HomePage")
    const renderCell = (value: boolean | string) => {
        if (typeof value === "boolean") {
            return value ? <Check className="h-4 w-4 text-white mx-auto" /> : null
        }
        return <span className="text-white text-xs md:text-sm">{value}</span>
    }

    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <Table className="min-w-full">
                    <TableHeader>
                        <TableRow className="border-gray-800">
                            <TableHead className="text-white font-medium text-left w-1/2 md:w-1/3 text-sm md:text-base"></TableHead>
                            <TableHead className="text-white font-medium text-center text-base md:text-lg px-2">SPECS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {features(t).hde.map((feature, index) => (
                            <TableRow key={index} className="border-gray-800">
                                <TableCell className="text-white font-medium py-3 md:py-4 text-sm md:text-base">{feature.key}</TableCell>
                                <TableCell className="text-center py-3 md:py-4 px-2">{renderCell(feature.value)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
