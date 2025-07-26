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
        return <span className="text-white text-sm">{value}</span>
    }

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-800">
                            <TableHead className="text-white font-medium text-left w-1/4"></TableHead>
                            <TableHead className="text-white font-medium text-center text-lg">SPECS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {features(t).hde.map((feature, index) => (
                            <TableRow key={index} className="border-gray-800">
                                <TableCell className="text-white font-medium py-4">{feature.key}</TableCell>
                                <TableCell className="text-center py-4">{renderCell(feature.value)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
