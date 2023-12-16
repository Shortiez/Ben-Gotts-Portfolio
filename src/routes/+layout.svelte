
<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let innerHeight = 0;
    let innerWidth = 0;
    let y;

    function goTop() {
        document.body.scrollIntoView()
    }

</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">

    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
        ( y > 0 ? "opacity-full pointer-events-auto" : "opacity-0 pointer-events-none")
    }>
        <button on:click={goTop} class="ml-auto rounded-full aspect-square bg-slate-800 text-violet-400 px-3 sm:px4 hover:bg-slate-700 cursor-pointer">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"/>
        </button>
    </div>

    <Header y={y}/>

    <slot/>

</div>
<Footer/>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>
