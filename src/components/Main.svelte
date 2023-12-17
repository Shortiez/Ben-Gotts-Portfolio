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
        {
            projectName: "Assembly",
            projectImage: "fa-solid fa-hard-drive",
            projectLink: ""
        },
    ];

    let aboutMeFacts = [
        {
            name: "Studying For A Bachelors In Computer Science",
            description : "I am currently studying for a Bachelors in Computer Science at the University of Liverpool. " +
                "I am currently in my second year of study and am looking for a placement year in the industry. " +
                "In my first year of study I achieved an average of 69.5% and am on track to achieve a first in my second year."
        },
        {
            name: "9 Years Of Programming Experience",
            description: "I have been programming for 9 years now. I started programming when I was 11 years old and have been programming ever since. " +
                "My main language of choice for the majority of this time has been C# but I also have experience in a variety of other languages " +
                "including Java, Python, Swift, JavaScript and HTML/CSS."
        },
        {
            name: "A Hobbyist Game Developer",
            description: "I have been developing games as a hobby for 7 years. I started learning the Unity game engine when I was 13 years old and have been developing games ever since. " +
                "Over the years I have worked on a number of small solo projects but have also worked with teams to develop large steam games such as Carth " +
                "Additionally, I have worked on a number of freelance projects for clients which has allowed me to develop my skills as a developer."
        },
        {
            name: "A Passionate Learner",
            description: "I am very passionate about everything Computer Science and Software Development related. " +
                "I am always looking to learn new things and expand my knowledge. " +
                "I am always looking for new opportunities to learn and develop my skills as a developer. " +
                "I am also very passionate about the games industry and am always looking to learn more about it."
        },
        {
            name: "Innovative Problem Solver",
            description: "I am a very innovative problem solver. I am always looking for new ways to solve problems and am always looking to improve my problem solving skills. " +
                "I am very good at thinking outside the box and coming up with creative solutions to problems. " +
                "I am also very good at working with others to solve problems and am always looking to learn new ways to solve problems."
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
                    It is a <span class="text-violet-400">Machine Learning</span> project that explores the use of <span class="text-violet-400">Adversarial Attacks</span>
                    and <span class="text-violet-400">Defences</span> on a <span class="text-violet-400">Neural Network</span>.
                    The adversarial attack uses the <span class="text-violet-400">PGD</span> algorithm with a second run over with the <span class="text-violet-400">Fast Gradient Sign Method</span>.
                    This double attack results with a highly effective attack that is able to fool the neural network with a <span class="text-violet-400">99%+</span> success rate.
                    The adversarial defence algorithm used is <span class="text-violet-400">MNIST</span> which is able to reduce the success rate of the attack to <span class="text-violet-400">30%</span>.
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
            <Step project={projects[4]}>
                <p>
                    This project was completed as part of my first year of study at the University of Liverpool.
                    It is an app which filters a list of numbers into positives, zeros and negatives.
                    It is fully created in pure <span class="text-violet-400">Assembly</span> with no libraries and a limited amount of base assembly commands allowed.
                    <br/>
                    <br/>
                    Languages used: <span class="text-violet-400">Intel Assembly</span>
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
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Technical Skills</td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Effective Communication</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Problem-Solving</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Initiative</td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>

                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold">Time Management</td>
                        <td><i class="fa-solid fa-xmark text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
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