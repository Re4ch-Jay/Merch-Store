<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Category;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index() {
        return Inertia::render('Product/Index', [
            'products' => Product::query()->filter(request(['category', 'search']))->with('category')->get(),
            'categories' => Category::all(),
            'filters' => request()->only(['search'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::query()->get(['id', 'name']);

        return Inertia::render("Product/Create", [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $attributes = $request->validated();

        Product::create($attributes);

        return to_route('dashboard');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = Category::query()->get(['id', 'name']);

        return Inertia::render("Product/Edit", [
            'product' => $product,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $attributes = $request->validated();

        $product->update($attributes);

        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return to_route('dashboard');
    }
}
