import { useGetCat } from "../useGetCat";


export const Cat = () => {
    const { data, refetchData, isCatLoading, isError } = useGetCat();
    
    if(isCatLoading)
    {
        return <h1>the cat fact is loading</h1>
    }

    if(isError) 
    {
        return <h1>Sorry seems like there was some error</h1>
    }

    
    return (
        <div>
            <button onClick={refetchData}>Refetch</button>
            <p>{data?.fact}</p>
        </div>
    );
}
