/*
This is empty on purpose! Your code to build the resume will go here.
 */

'use strict';

var dataSymbol = '%data%';
var i = 0;
var j = 0;

var bio = {
  "name": "Nathachai Thongniran",
  "role": "Front-End Web Developer",
  "contacts": {
    "mobile": "+6684-661-2678",
    "email": "inid3a@gmail.com",
    "github": "jojoee",
    "twitter": "@inid3a",
    "location": "Chai Nat, Thailand"
  },
  "welcomeMessage": "Hi, How are you ? well I'm a developer.",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Node.js"
  ],
  "biopic": "images/avatar.jpg",
  display: function() {
    var $header = $('#header');
    var $topContacts = $('#topContacts');
    var $footerContacts = $('#footerContacts');

    // name and role
    $header.prepend(
      HTMLheaderName.replace(dataSymbol, this.name) +
      HTMLheaderRole.replace(dataSymbol, this.role)
    );

    // contact
    var formattedContacts = HTMLmobile.replace(dataSymbol, this.contacts.mobile) +
      HTMLemail.replace(dataSymbol, this.contacts.email) +
      HTMLgithub.replace(dataSymbol, this.contacts.github) +
      HTMLtwitter.replace(dataSymbol, this.contacts.twitter) +
      HTMLlocation.replace(dataSymbol, this.contacts.location);
    $topContacts.append(formattedContacts);
    $footerContacts.append(formattedContacts);

    // bio
    $header.append(
      HTMLbioPic.replace(dataSymbol, this.biopic) +
      HTMLwelcomeMsg.replace(dataSymbol, this.welcomeMessage)
    );

    // skill
    var nSkills = this.skills.length;
    if (nSkills > 0) {
      $header.append(HTMLskillsStart);

      var $skills = $('#skills');
      for (i = 0; i < nSkills; i++) {
        $skills.append(HTMLskills.replace(dataSymbol, this.skills[i]));
      };
    }
  }
};
bio.display();

var education = {
  "schools": [
    {
      "name": "King Mongkut's University of Technology Thonburi",
      "location": "Chiang Mai, Thailand",
      "degree": "Bachelor",
      "majors": "Electronic and Telecommunication",
      "dates": "2009 - 2012",
      "url": "http://global.kmutt.ac.th/"
    },
    {
      "name": "Taweethapisek",
      "location": "Chonburi, Thailand",
      "degree": "Senior High school",
      "majors": "Math",
      "dates": "2004 - 2009",
      "url": "http://www.taweethapisek.ac.th/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/"
    }
  ],
  display: function() {
    var $education = $('#education');
    var nSchools = this.schools.length;
    var nOnlineCourse = this.onlineCourses.length;
    var nCourse = nSchools + nOnlineCourse;
    
    if (nCourse > 0) {
      // init
      $education.append(HTMLschoolStart);
      var $educationEntry = $('.education-entry');

      // school
      if (nSchools > 0) {
        for (i = 0; i < nSchools; i++) {
          $educationEntry.append(
            HTMLschoolName.replace(dataSymbol, this.schools[i].name) +
            HTMLschoolDegree.replace(dataSymbol, this.schools[i].degree) +
            HTMLschoolDates.replace(dataSymbol, this.schools[i].dates) +
            HTMLschoolLocation.replace(dataSymbol, this.schools[i].location) +
            HTMLschoolMajor.replace(dataSymbol, this.schools[i].majors)
          );
        }
      }

      // online course
      if (nOnlineCourse > 0) {
        $educationEntry.append(HTMLonlineClasses);

        for (i = 0; i < nOnlineCourse; i++) {
          $educationEntry.append(
            HTMLonlineTitle.replace(dataSymbol, this.onlineCourses[i].title) +
            HTMLonlineSchool.replace(dataSymbol, this.onlineCourses[i].school) +
            HTMLonlineDates.replace(dataSymbol, this.onlineCourses[i].date) +
            HTMLonlineURL.replace(dataSymbol, this.onlineCourses[i].url)
          );
        }
      }
    }
  }
};
education.display();

var work = {
  "jobs" : [
    {
      "employer": "Gomeeki",
      "title": "PHP Developer",
      "location": "Nan, Thailand",
      "dates": "July 2016 - Present",
      "description": "Almost working on the front-end and wordpress"
    },
    {
      "employer": "Exa Web Solutions",
      "title": "Web Developer",
      "location": "Nong Khai, Thailand",
      "dates": "May 2014 - June 2016",
      "description": "Create an entire website, requirement depend on each project - Frontend, Backend and a bit Graphic."
    },
    {
      "employer": "Vevo Systems",
      "title": "ASP.NET Developer",
      "location": "Rayong, Thailand",
      "dates": "Nov 2013 - April 2014",
      "description": "Develop company's PMS (product management system) with Agile system and also support customer."
    }
  ],
  display: function() {
    var $workExperience = $('#workExperience');
    var nJobs = this.jobs.length;

    if (nJobs > 0) {
      $workExperience.append(HTMLworkStart);
      var $workEntry = $('.work-entry');

      for (i = 0; i < nJobs; i++) {
        $workEntry.append(
          HTMLworkEmployer.replace(dataSymbol, this.jobs[i].employer) + 
          HTMLworkTitle.replace(dataSymbol, this.jobs[i].title) + 
          HTMLworkDates.replace(dataSymbol, this.jobs[i].dates) + 
          HTMLworkLocation.replace(dataSymbol, this.jobs[i].location) + 
          HTMLworkDescription.replace(dataSymbol, this.jobs[i].description)
        );
      }
    }

  }
};
work.display();

var projects = {
  "projects": [
    {
      "title": "Jojoee.com",
      "dates": "2014",
      "description": "My personal website",
      "images": [
        "images/jojoee/1.jpg"
      ]
    },
    {
      "title": "Classic CV",
      "dates": "2015",
      "description": "FREE Classic CV / Resume HTML Template",
      "images": [
        "images/classic-cv/1.jpg",
        "images/classic-cv/2.jpg"
      ]
    },
    {
      "title": "KiKi",
      "dates": "2016",
      "description": "KiKi - The Sacrifice on Global Game Jam 2016",
      "images": [
        "images/kiki/1.png",
        "images/kiki/2.png"
      ]
    }
  ],
  display: function() {
    var $projects = $('#projects');
    var nProjects = this.projects.length;

    if (nProjects > 0) {
      $projects.append(HTMLprojectStart);
      var $projectEntry = $('.project-entry');

      for (i = 0; i < nProjects; i++) {
        $projectEntry.append(
          HTMLprojectTitle.replace(dataSymbol, this.projects[i].title) +
          HTMLprojectDates.replace(dataSymbol, this.projects[i].dates) +
          HTMLprojectDescription.replace(dataSymbol, this.projects[i].description)
        );

        var nProjectImages = this.projects[i].images.length;
        if (nProjectImages > 0) {
          for (j = 0; j < nProjectImages; j++) {
            $projectEntry.append(HTMLprojectImage.replace(dataSymbol, this.projects[i].images[j]));
          }
        }
      }
    }
  }
};
projects.display();

function inName(name) {
  console.log(name);
  if (!name) {
    name = bio.name;
  }

  name = name.replace(/  +/g, ' ');
  var names = name.trim().split(' ');

  var firstName = names[0];
  var lastName = names[1].toUpperCase();

  return firstName + ' ' + lastName;
}

// google map
var $mapDiv = $('#mapDiv');
$mapDiv.append(googleMap);

// internationalize
var $main = $('#main');
$main.append(internationalizeButton);
