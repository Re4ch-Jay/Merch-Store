import Table from '@/Components/Table';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import useSearch from '@/hooks/useSearch';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, products, filters }) {
    
    const {search, handleSearch} = useSearch(filters);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
           
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <TextInput
                        name="search"
                        value={search}
                        isFocused={true}
                        placeholder="Search..."
                        onChange={(e) => handleSearch(e.target.value)}
                        className="my-4 block w-full"
                    />
                    <Link href={route('products.create')}>Upload new product</Link>
                    <Table products={products}/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
