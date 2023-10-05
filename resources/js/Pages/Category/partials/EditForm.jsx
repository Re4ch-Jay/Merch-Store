import React from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function EditForm({category}) {
    
    const { data, setData, put, errors } = useForm({
        name: category.name,
    })

    const submit = (e) => {
        e.preventDefault();

        put(route('categories.update', category.id));
    };

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                <InputLabel htmlFor="" value="Product Name" />
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    type="text"
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="flex items-center gap-4">
                <PrimaryButton>Update</PrimaryButton>
            </div>
        </form>
    )
}
