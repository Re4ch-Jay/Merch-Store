<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    public function scopeFilter($query, array $filters) {

        $query->when($filters['category'] ?? false, fn($query, $category) => 
            $query->whereHas('category', fn($query) => $query->where('name', $category))
        );

        $query->when($filters['search'] ?? false, fn($query, $search) => 
            $query->where('name', 'like', '%'. $search .'%')
            ->orWhere('price', 'like', '%'. $search. '%')
        );
    }

    public function category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }
}
