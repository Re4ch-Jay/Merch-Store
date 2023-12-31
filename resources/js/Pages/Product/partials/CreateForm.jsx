import React from 'react'
import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SelectInput from '@/Components/SelectInput';

export default function Form({categories}) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        price: '',
        category_id: '',
    })

    const submit = (e) => {
        e.preventDefault();

        post(route('products.store'));
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
            <div>
                <InputLabel htmlFor="" value="Product Category" />
                <SelectInput
                    id="category_id"
                    name="category_id"
                    value={data.category_id}
                    categories={categories}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('category_id', e.target.value)}
                />
                <InputError message={errors.category_id} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="" value="Product Price" />
                <TextInput
                    type="number"
                    id="price"
                    name="price"
                    value={data.price}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('price', e.target.value)}
                />
                <InputError message={errors.price} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="" value="Product Description" />
                <TextInput
                    type="text"
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('description', e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
            </div>

            <div className="flex items-center gap-4">
                <PrimaryButton>Store</PrimaryButton>
            </div>
        </form>
    )
}
