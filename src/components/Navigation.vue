<template>
    <ul
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-end font-avenir"
    >
        <li>
            <a href="#" class="p-6 hover:underline">Spis treści</a>
        </li>
        <li>
            <a href="#" class="p-6 hover:underline">O nas</a>
        </li>
        <li>
            <a href="#" class="p-6 hover:underline">Kontakt</a>
        </li>
        <li>
            <router-link
                to="#"
                class="font-avenir inline-flex items-center justify-center rounded-full border border-transparent px-8 py-1 text-base font-medium leading-7 transition duration-150 ease-in-out focus:outline-none text-center bg-black text-white ml-6"
            >
                Zaloguj się</router-link
            >
        </li>
    </ul>
</template>
