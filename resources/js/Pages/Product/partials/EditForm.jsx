import React from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {  useForm } from '@inertiajs/react';
import SelectInput from '@/Components/SelectInput';

export default function EditForm({product, categories}) {
    
    const { data, setData, put, errors } = useForm({
        name: product.name,
        description: product.description,
        price: product.price,
        category_id: product.category_id,
    })

    const submit = (e) => {
        e.preventDefault();

        put(route('products.update', product.id));
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
                    id="category"
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
                <PrimaryButton>Update</PrimaryButton>
            </div>
        </form>
    )
}
