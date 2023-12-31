import CreateForm from './partials/CreateForm'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


function Create({auth, categories}) {
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Create</h2>}
        >
            <Head title="Product Create" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">   
                    <CreateForm categories={categories}/>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default Create