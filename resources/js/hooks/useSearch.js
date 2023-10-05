import { router } from '@inertiajs/react';
import { useState } from 'react';


export default function useSearch(filters) {
  
    const [search, setSearch] = useState(filters.search);

    const handleSearch = (search) => {
        setSearch(search)
        router.get(route(route().current()), 
            { search: search }, 
            { 
              preserveState: true,
              replace: true,
    
            }
        );
    }
    return {search, handleSearch};
}
