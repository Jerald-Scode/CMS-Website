<?php
use App\Http\Controllers\OfficerController;
use App\Http\Controllers\FaqsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    // Officers
    Route::get('/Officers', [OfficerController::class, 'index'])->name('Admin.Officers.index');
    Route::get('/Officers/create', [OfficerController::class, 'create'])->name('Admin.Officers.create');

// FAQs
    Route::get('/Faqs', [FaqsController::class, 'index'])->name('Admin.Faqs.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
