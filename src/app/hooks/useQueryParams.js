import { useLocation } from "react-router-dom";

// Without Hooks
export function useQueryParams() {
    const { search } = useLocation();

    const decodeParams = (params) => {
        const replaceFirstCharacter = params.replace('?', '');
        const splitString = replaceFirstCharacter.split('&');

        const formattedQueries = {}

        splitString.forEach(query => {
            const [key, value] = query.split('=');
            Object.assign(formattedQueries, {
                [key]: value
            })
        });

        return (formattedQueries);
    }

    return decodeParams(search);
}

// With Hooks

// export function useQueryParams() {
//     const [queries, setQueries] = useState();
//     const { search } = useLocation();

//     const decodeParams = useCallback((params) => {
//         const replaceFirstCharacter = params.replace('?', '');
//         const splitString = replaceFirstCharacter.split('&');

//         const formattedQueries = {}

//         splitString.forEach(query => {
//             const [key, value] = query.split('=');
//             Object.assign(formattedQueries, {
//                 [key] : value
//             })
//         });

//         setQueries(formattedQueries);
//     }, [])

//     useEffect(() => {
//         if (search.trim()) {
//             decodeParams(search);
//         }
//     }, [decodeParams, search])

//     return queries;
// }