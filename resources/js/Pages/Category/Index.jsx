
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({auth, categories}) {
console.log(categories)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Category" />
           
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('categories.create')}>Upload new category</Link>
                    {
                        categories.map(category => (
                            <Link href={route('categories.destroy', category.id)} method='delete' key={category.id}>
                                {category.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
