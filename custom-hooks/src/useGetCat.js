import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
    const { 
        data, 
        isLoading: isCatLoading, 
        isError, 
        refetch 
    } = useQuery({
        queryKey: ["cat"],
        queryFn: async () => (await Axios.get("https://catfact.ninja/fact")).data,
    });

    const refetchData = () => {
        // alert("Data Refetched");
        refetch();
    }

    return { data, refetchData, isCatLoading, isError };
}