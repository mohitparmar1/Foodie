import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailSection from "./DetailSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";

const FormSchema = z.object({
    restaurantName: z.string({
        required_error: "Restaurant name is required"
    }),
    city: z.string({
        required_error: "city name is required"
    }),
    country: z.string({
        required_error: "Country is required"
    }),
    deliveryPrice: z.coerce.number({
        required_error: "Delivery price is required",
        invalid_type_error: "Delivery price must be a number"
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: "Estimated delivery time is required",
        invalid_type_error: "Estimated Delivery time must be a number"
    }),
    cuisines: z.array(z.string()).nonempty({
        message: "please add at least one cuisine"
    }),
    menuItems: z.array(z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required")
    })),
    imageUrl: z.instanceof(File, { message: "image is required" }),
})
/*
* type UserFormData = z.infer<typeof FormSchema>; z.infer extracts the type from a zod schema and creates a new type for userFormData
*/
type RestaurantFormData = z.infer<typeof FormSchema>;

type Props = {
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
}

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
    const form = useForm<RestaurantFormData>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            cuisines: [],
            menuItems: [{
                name: "",
                price: 0
            }]
        }
    })

    const onSubmit = (formDataJson: RestaurantFormData) => {
        // todo - convert formDataJson to a new FormData object
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <DetailSection />
                <Separator />
                <CuisinesSection />
            </form>
        </Form>
    )
}

export default ManageRestaurantForm;