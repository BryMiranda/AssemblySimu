<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

🚀 Instalación y Configuración de AssemblySimu
Este proyecto utiliza Laravel, React e Inertia. Sigue los pasos a continuación para clonar el repositorio y ejecutarlo en tu entorno local.

🔹 1. Clonar el Repositorio
Abre la terminal y ejecuta:

sh
Copiar
Editar
git clone https://github.com/BryMiranda/AssemblySimu.git
cd AssemblySimu
🔹 2. Configurar el Entorno
Copia el archivo de configuración:

sh
Copiar
Editar
cp .env.example .env
Genera la clave de la aplicación:

sh
Copiar
Editar
php artisan key:generate
🔹 3. Instalar Dependencias
Ejecuta los siguientes comandos:

📦 Instalar paquetes de PHP (Laravel)
sh
Copiar
Editar
composer install
📦 Instalar paquetes de JavaScript (React, Inertia, Vite, Tailwind, etc.)
sh
Copiar
Editar
npm install
