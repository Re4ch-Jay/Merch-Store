import EditForm from './partials/EditForm'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


function Edit({auth, category}) {
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Edit</h2>}
        >
            <Head title="Product Create" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">   
                    <EditForm category={category}/>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default Edit