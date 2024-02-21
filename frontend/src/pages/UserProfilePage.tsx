import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const { currentUser, isGetLoading } = useGetMyUser()
    const { updateUser, isLoading } = useUpdateMyUser();


    if (isGetLoading) {
        return <div>Loading...</div>
    }
    if (!currentUser) {
        return <div>User not found</div>
    }
    return (
        <UserProfileForm
            currentUser={currentUser}
            onSave={updateUser} isLoading={isLoading} />
    );
}

export default UserProfilePage;