/**
 * NAME AND DEPARTMENT DATA 
 */
// We will use objects.
const departments = [
    {
        name: "Administration",
        employees: [
            { firstName: "Zoë", lastName: "Robins" },
            { firstname: "Madeleine", lastName: "Madden" }
        ]
    },

    {
        name: "Audit",
        employees: [
            { firstName: "Josha", lastName: "Sadowski" },
            { firstName: "Kate", lastName: "Fleetwood" }
        ]
    },

    {
        name: "Banking Operations",
        employees: [
            { firstName: "Priyanka", lastName: "Bose" },
            { firstName: "Hammed", lastName: "Animashaun" },
            { firstName: "Álvaro", lastName: "Morte" },
            { firstName: "Taylor", lastName: "Napier" },
            { firstName: "Alan", lastName: "Simmonds" }
        ]
    },

    {
        name: "Communucations",
        employees: [
            { firstName: "Gil", lastName: "Cardinal" },
            { firstName: "Richard J.", lastName: "Lewis" }
        ]
    },

    {
        name: "Corporate Services",
        employees: [
            { firstName: "Randy", lastName: "Bradshaw" },
            { firstName: "Tracey", lastName: "Cook" },
            { firstName: "Lubomir", lastName: "Mykytiuk" }
        ]
    },

    // Template
    {
        name: "",
        employees: [
            { firstName: "", lastName: "" },
        ]
    },

    {
        name: "Facilities",
        employees: [
            { firstName: "Dakota", lastName: "House" },
            { firstName: "Lori Lea", lastName: "Okemah" },
            { firstName: "Renae", lastName: "Morrisseau" },
            { firstName: "Rick", lastName: "Belcourt" }
        ]
    },

    {
        name: "Financial Services",
        employees: [
            { firstName: "Selina", lastName: "Hanusa" },
            { firstName: "Buffy", lastName: "Gaudry" },
            { firstName: "Shaneen Ann", lastName: "Fox" },
            { firstName: "Allan", lastName: "Little" },
            { firstName: "Danny", lastName: "Rabbit" }
        ]
    },

   {
        name: "Human Resources",
        employees: [
            { firstName: "Jesse Ed", lastName: "Azure" },
            { firstName: "Stacy", lastName: "Da Silva" },
            { firstName: "Vladimír", lastName: "Valenta" },
            { firstName: "Samone", lastName: "Sayeses-Whitney" },
            { firstName: "Paul", lastName: "Coeur" }
        ]
    },

    {
        name: "Information Technology",
        employees: [
            { firstName: "Graham", lastName: "Greene" },
            { firstName: "Sandika", lastName: "Evergreen" },
            { firstName: "Jennifer", lastName: "Rodriguez (Software Developer)" }
        ]
    },

    {
        name: "IT Technician",
        employees: [
            { firstName: "Aiyana", lastName: "Littlebear" },
            { firstName: "Inara", lastName: "Thunderbird" },
            { firstName: "Kaya", lastName: "Runningbrook" },
            { firstName: "Elara", lastName: "Firehawk" },
            { firstName: "Siona", lastName: "Moonflower" },
            { firstName: "Kaiyu", lastName: "Greywolf" },
            { firstName: "Ayawamat", lastName: "Nightwind" },
            { firstName: "Tala", lastName: "Braveheart" },
            { firstName: "Iniko", lastName: "Stonebear" },
            { firstName: "Onatah", lastName: "Redhawk" }
        ]
    }
];

/**
 * MAIN CODE THE GENERATE THE PAGE
 */
// This will find my <main id="employee-directory"> in index.html.
    const directory = document.querySelector("#employee-directory");


// Goes through every department in the departments array.
departments.forEach(department => {
    const section = document.createElement("section");

    const heading = document.createElement("h2");
    heading.textContent = department.name;

    const employeeList = document.createElement("ul");

    // Looping through the employees.
    department.employees.forEach(employee => {
        const employeeItem = document.createElement("li");

        employeeItem.textContent = `${employee.firstName} ${employee.lastName}`;

        employeeList.appendChild(employeeItem);
    });

    section.appendChild(heading);
    section.appendChild(employeeList);
    directory.appendChild(section);
});

const currentYear = document.querySelector("#current-year");

// Gets the current year from the computer.
currentYear.textContent = new Date().getFullYear();
