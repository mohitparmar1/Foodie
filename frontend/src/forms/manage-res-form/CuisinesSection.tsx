import { Checkbox } from "@/components/ui/checkbox";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form"

function CuisinesSection() {
    const { control } = useFormContext();
    return (
        <div className="space-y-5 mt-10">
            <div>
                <h2 className="text-xl font-semibold">Cuisines</h2>
                <FormDescription>
                    Select the cuisines that the restaurant serves.
                </FormDescription>
            </div>
            <FormField
                control={control}
                name="cuisines"
                render={({ field }) => (
                    <FormItem >
                        <div className="grid md:grid-cols-5 gap-4">
                            {
                                cuisineList.map((cuisine, i) => (
                                    <div className="flex items-center space-x-2">
                                        <Checkbox key={i} />
                                        <label
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {cuisine}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </FormItem>
                )}
            />
        </div>
    )
}

export default CuisinesSection
