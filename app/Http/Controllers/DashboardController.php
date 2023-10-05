<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $products = Product::query()->filter(request(['search']))->with('category')->latest()->get();
        return Inertia::render('Dashboard', [
            'products' => $products,
            'filters' => request()->only(['search'])
        ]);
    }
}
