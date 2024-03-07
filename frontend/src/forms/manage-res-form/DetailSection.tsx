import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
const DetailSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-10 mb-10">
      <div>
        <h2 className="text-xl font-semibold">Details</h2>
        <FormDescription>
          Enter the details of the Restaurant.
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl >
              <Input {...field} className="bg-white"></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-5">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl >
                <Input {...field} className="bg-white"></Input>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl >
                <Input {...field} className="bg-white"></Input>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Delivery Price ($)</FormLabel>
            <FormControl >
              <Input {...field} className="bg-white" placeholder="1.50"></Input>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
            <FormControl >
              <Input {...field} className="bg-white" placeholder="30"></Input>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}

export default DetailSection;