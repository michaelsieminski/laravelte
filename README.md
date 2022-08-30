![Laravelte](https://i.imgur.com/Nmvr35n.png)
# Laravelte | Laravel 9 + Svelte Boilerplate

![Latest Stable Version](https://img.shields.io/badge/stable-1.2-success)

## About

Do you want to use the power of Laravel and Svelte combined with InertiaJS as the Middleware hassle-free with just a single click?
This repository is right for you then.
It features the following built-in stack :

- [Laravel](https://github.com/laravel/laravel)
- [Inertia.js](https://github.com/inertiajs/inertia)
- [Svelte](https://github.com/sveltejs/svelte)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [Vite](https://github.com/vitejs/vite)

## Requirements

* [PHP 8.1](https://www.php.net/releases/8.1/en.php)
* [NodeJS 14+](https://nodejs.org/en/)

## Installation

1. Click on `Use this template` in the top right to use the boilerplate
2. Install the required php packages using `composer install`
3. Run `npm install` to install all npm packages
4. Use `npm run dev` to start vite watch your files
5. Copy the .env.example file by using `cp .env.example .env`
6. Generate the laravel application key with `php artisan key:generate`
7. Last but not least use `php artisan serve` to start your laravel application

## Usage

Simply create/edit your Svelte front-end files inside of the `/resources/js/Pages/`directory.

## Deploy

1. Execute `npm run build` to make vite build your project files
