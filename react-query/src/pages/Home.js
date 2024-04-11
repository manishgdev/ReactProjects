import { useQuery } from '@tanstack/react-query'
import Axios from 'axios';

export const Home = () => {

    // this is no more supported in @tanstact/react-query
    // const { data } = useQuery(["cat"], () => {
    //     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    // });

    // Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call.

    // data can be renamed as data: catFact

    // switching tabs will make the request fetch new data by default, this can be prevented by adding that in config of QueryClient

    const { 
        data, 
        isLoading, 
        isError, 
        refetch 
    } = useQuery({
        queryKey: ["cat"],
        queryFn: async () => (await Axios.get("https://catfact.ninja/fact")).data,
    });

    if(isLoading)
    {
        return <h1>the cat fact is loading</h1>
    }
    
    if(isError) 
    {
        return <h1>Sorry seems like there was some error</h1>
    }

    
    return (
        <div>
            <h1>This is Home page</h1>
            <p>{data?.fact}</p>
            <button onClick={refetch}>Upate Fact</button>
        </div>
    );
}