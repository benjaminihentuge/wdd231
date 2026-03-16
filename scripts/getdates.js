// Footer dates

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

// Hamburger menu

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Course Data

const courses = [
  {
    subject: "CSE",
    number: 110,
    credits: 2,
    completed: true,
  },

  {
    subject: "WDD",
    number: 130,
    credits: 2,
    completed: true,
  },

  {
    subject: "CSE",
    number: 111,
    credits: 2,
    completed: false,
  },

  {
    subject: "CSE",
    number: 210,
    credits: 2,
    completed: false,
  },

  {
    subject: "WDD",
    number: 131,
    credits: 2,
    completed: false,
  },

  {
    subject: "WDD",
    number: 231,
    credits: 2,
    completed: false,
  },
];

const container = document.querySelector("#course-container");
const totalCredits = document.querySelector("#totalCredits");

function displayCourses(courseList) {
  container.innerHTML = "";

  courseList.forEach((course) => {
    const card = document.createElement("div");

    card.classList.add("course-card");

    card.textContent = `${course.subject} ${course.number}`;

    if (course.completed) {
      card.classList.add("completed");
    }

    container.appendChild(card);
  });

  const credits = courseList.reduce((sum, course) => sum + course.credits, 0);

  totalCredits.textContent = `The total credits for course listed above: ${credits}`;
}

displayCourses(courses);

// FILTER BUTTONS

document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#cse").addEventListener("click", () => {
  const cseCourses = courses.filter((course) => course.subject === "CSE");

  displayCourses(cseCourses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  const wddCourses = courses.filter((course) => course.subject === "WDD");

  displayCourses(wddCourses);
});
