///// Navigation

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

///// Job Filtering
const jobs = [
    {
        id: 1,
        title: 'Ultimate C# Masterclass for 2024',
        description: 'Welcome to the "Ultimate C# Masterclass" course! Are you ready to take your knowledge and career to the next level?.',
        by_price: 'Free',
        by_language: 'English',
        by_cities: 'Yerevan',
        applyLink: 'apply_link1'
    },
    {
        id: 2,
        title: 'Backend Developer',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        by_price: 'Full Time',
        by_language: 'Russian',
        by_cities: 'Online',
        applyLink: 'apply_link2'
    },
    {
        id: 3,
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        by_price: 'Part Time',
        by_language: 'Armenian',
        by_cities: 'Yerevan',
        applyLink: 'apply_link3'
    },
    {
        id: 4,
        title: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        by_price: 'Part Time',
        by_language: 'English',
        by_cities: 'Yerevan',
        applyLink: 'apply_link4'
    },
];

document.addEventListener('DOMContentLoaded', function () {
    displayTrainings(jobs);

    const categoryButtons = document.querySelectorAll('.fil-p');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const subcategories = this.nextElementSibling;
            toggleSubcategories(subcategories);
        });
    });

    const subcategoryButtons = document.querySelectorAll('.sub-fil-p');
    subcategoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterType = this.dataset.filterType;
            const filterValue = this.textContent;
            filterItems(filterType, filterValue);
        });
    });

    document.getElementById("searchBar").addEventListener("input", function() {
        var keyword = this.value.trim().toLowerCase();
        var trainingListing = document.querySelectorAll(".training-listings ul li");

        trainingListing.forEach(function(training) {
            var title = training.querySelector("h3").textContent.toLowerCase(); // Change to search by title
            if (title.includes(keyword)) {
                training.style.display = "block";
            } else {
                training.style.display = "none";
            }
        });
    });
});

function toggleSubcategories(subcategories) {
    subcategories.style.display = subcategories.style.display === 'none' ? 'block' : 'none';
}

function filterItems(filterType, filter) {
    let filteredJobs = jobs;
    switch (filterType) {
        case 'by_price':
        case 'by_language':
        case 'by_cities':
            filteredJobs = filteredJobs.filter(job => job[filterType] === filter);
            break;
        default:
            break;
    }
    displayTrainings(filteredJobs);
}

function displayTrainings(jobs) {
    const jobList = document.querySelector('.training-listings ul');
    jobList.innerHTML = '';

    jobs.forEach(job => {
        const jobItem = document.createElement('li');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p>Description: ${job.description}</p>
            <p>Price: ${job.by_price}</p>
            <p>Language: ${job.by_language}</p>
            <p>City: ${job.by_cities}</p>
            <a href="${job.applyLink}" target="_blank">Apply</a>
        `;
        jobList.appendChild(jobItem);
    });
}
