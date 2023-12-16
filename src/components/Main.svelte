<script>
    import Step from "./Project.svelte";

    let projects = [
        {
            projectName : "Adversial Machine Learning",
            projectImage : "fa-solid fa-robot",
            projectLink : "https://github.com/Shortiez/COMP219-AdversialAttack"
        },
        {
            projectName : "Carth",
            projectImage : "fa-brands fa-steam",
            projectLink : "https://store.steampowered.com/app/1526430/Carth/"
        },
        {
            projectName : "Simon Game",
            projectImage : "fa-brands fa-apple",
            projectLink : ""
        },
        {
            projectName: "Garden Navigator",
            projectImage: "fa-brands fa-apple",
            projectLink: ""
        },
    ];

    let aboutMeFacts = [
        {
            name: "Studying For A Bachelors In Computer Science",
            description: "Currently immersed in the dynamic world of Computer Science at the University of Liverpool, pursuing a Bachelor's degree. " +
                "I am presently navigating my second year and actively seeking a compelling industry placement. " +
                "In my inaugural year, I garnered an impressive average of 69.5%, setting the stage for an anticipated first-class achievement in my second year."
        },
        {
            name: "9 Years Of Programming Experience",
            description: "With a rich history spanning nine years, my journey in programming commenced at the age of 11. " +
                "My coding odyssey has predominantly been in C#, " +
                "complemented by proficiency in an array of languages such as Java, Python, Swift, JavaScript, and HTML/CSS. " +
                "This seasoned experience is the bedrock upon which I craft innovative solutions."
        },
        {
            name: "A Hobbyist Game Developer",
            description: "Embarking on a seven-year adventure as a game developer, my exploration began with the Unity game engine at the tender age of 13. " +
                "I have contributed to diverse projects, ranging from solo endeavors to collaborative ventures resulting in notable titles like 'Carth.' " +
                "My game development prowess extends beyond personal projects, " +
                "having successfully undertaken freelance assignments that sharpened my skills and expanded my repertoire."
        },
        {
            name: "A Passionate Learner",
            description: "My zeal for all things Computer Science and Software Development is palpable. " +
                "A perpetual learner, I am dedicated to absorbing new knowledge and expanding my skill set. " +
                "Eager for opportunities to enhance my developer acumen, " +
                "I am equally fervent about delving deeper into the nuances of the games industry. E" +
                "very project is not just a task but an avenue for continuous growth and refinement."
        },
        {
            name: "Innovative Problem Solver",
            description: "Beyond the academic and experiential facets, I take pride in being an innovative problem solver. " +
                "Armed with a potent blend of theoretical knowledge and practical experience, I relish tackling complex challenges head-on." +
                " My approach involves not only writing code but architecting elegant solutions that resonate with efficiency. " +
                "With an insatiable curiosity and a knack for finding creative solutions, " +
                "I am poised to make meaningful contributions in any development environment."
        }
    ];

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Ben</span> Gotts <br/>  <span class="poppins text-violet-400">Student</span> and Aspiring Software <span class="poppins text-violet-400">Developer</span>
            </h2>

            <p class="text-base sm:text-large md:text-xl">
                I'm a student currently studying  <span class="text-violet-300">Computer Science </span> at the <span class="text-violet-400">University Of Liverpool</span>
            </p>

            <a
                    href="#contact"
                    class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"/>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>

        <div class="relative shadow-2xl grid place-items-center">
            <!-- <img src={"images/image-i-choose"} alt="Profile Image" class="object-cover z-[2] max-h-[70vh]"/> TODO: Add image -->
            
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A showcase of some of my work
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    Take a <span class="poppins text-violet-400">peak</span> below
            </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step project={projects[0]}>
                <p>
                    This project was completed as part of my second year of study at the University of Liverpool.
                    It is a <span class="text-violet-400">Machine Learning</span> project that explores the use of <span class="text-violet-400">Adversarial Attacks</span> and <span class="text-violet-400">Defences</span> on a <span class="text-violet-400">Neural Network</span>.
                    <br/>
                    <br/>
                    Languages used: <span class="text-violet-400">Python</span>
                    <br/>
                    Libraries used: <span class="text-violet-400">PyTorch</span>
                </p>
            </Step>
            <Step project={projects[1]}>
                <p>
                    Carth is a multiplayer open world survival game that I initially joined working on in 2018.
                    During my two years of working on this project I developed a number of core gameplay systems, including the <span class="text-violet-400">Building System</span>,
                    the <span class="text-violet-400">Inventory System</span> and the <span class="text-violet-400">Crafting System</span>.
                    As well as this I also worked on a number of other systems including the creation of <span class="text-violet-400">RESPONSIVE UI</span> and <span class="text-violet-400">Multiplayer</span>.
                    <br/>
                    <br/>
                    Languages used: <span class="text-violet-400">C#</span>
                    <br/>
                    Tools used: <span class="text-violet-400">Unity Game Engine</span>
                </p>
            </Step>
            <Step project={projects[2]}>
                <p>
                    This project was completed as part of my second year of study at the University of Liverpool.
                    It is a <span class="text-violet-400">Simon Game</span> that was developed for the <span class="text-violet-400">iOS</span> platform.
                    The game was developed using <span class="text-violet-400">Swift</span> and <span class="text-violet-400">XCode</span>. The game is a simple <span class="text-violet-400">Simon Game</span> that allows the user to play the game and try to beat their high score.
                    The game also features a <span class="text-violet-400">Leaderboard</span> that allows the user to see the top 10 scores of all time.
                    <br/>
                    <br/>
                    Languages used: <span class="text-violet-400">Swift</span>
                    <br/>
                    Tools used: <span class="text-violet-400">XCode</span>
                </p>
            </Step>
            <Step project={projects[3]}>
                <p>
                    This project was completed as part of my second year of study at the University of Liverpool.
                    It is a <span class="text-violet-400">Garden Navigator</span> that was developed for the <span class="text-violet-400">iOS</span> platform.
                    It is an app that guides the user around the <span class="text-violet-400">Ness Gardens</span> in Liverpool.
                    It has extensive database that displays information about all the plants in the gardens.
                    The app also features a <span class="text-violet-400">Map</span> that allows the user to see where they are in the gardens.
                    <br/>
                    <br/>
                    Languages used: <span class="text-violet-400">Swift</span>
                    <br/>
                    Tools used: <span class="text-violet-400">XCode</span>
                </p>
            </Step>
        </div>

    </section>

    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">

        <div class="flex flex-col gap-2 text-center relative
        before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">

            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more about me?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400"> ABOUT </span> me.</h3>

        </div>

        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am...
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each aboutMeFacts as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                        0{index + 1}.
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <h5 class="text-2x sm:text-3xl font-semibold text-center poppins">The <span class="text-violet-400 poppins">COMPLETE</span> package</h5>

        <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
            <table class="bg-white text-slate-700 rounded text-center">
                <thead class="border-b border-solid border-slate-200">
                <tr class="">
                    <th/>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #4</th>
                    <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th>
                </tr>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Willingness To Learn</td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Adaptability</td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Passion</td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Experience</td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Team Working</td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>
                Scroll to see more &rarr;
            </p>
        </div>
    </section>
</main>