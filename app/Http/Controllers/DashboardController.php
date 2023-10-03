<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $products = Product::query()->with('category')->latest()->get();
        return Inertia::render('Dashboard', ['products' => $products]);
    }
}
