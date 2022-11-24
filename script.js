//QUESTION 2:=CREATE AN OWN RESUME DATA IN JSON FORMAT.
//            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var RESUME = {
  NAME: "ARUN PRAVEEN R",
  EMAIL: "arunfbfb78@gmail.com",
  PHONE_NO: "8344236645",
  LANGUAGES_KNOWN: "English and Tamil",
  ABOUT_ME:
    "A keen Computer professional graduated B.E. Computer science and engineering at Kumaraguru College of Technology,Coimbatore,looking to work for a challenging and responsible position.",
  CAREER_OBJECTIVE:
    "I am hardworking a competitive and challenging career that will challenge me to push my boundaries and expand my knowledge in the field of computer science while allowing me to add value to the dynamics of the company.",
  EDUCATION: [
    { "2013-2014": "10th-CGPA-7.6" },
    { "2014-2016": "12th-PERCENTAGE-89" },
    { "2016-2020": "B.E COMPUTER SCIENCE AND ENGINEERING-CGPA-6.78" },
  ],
  SKILLS: [
    { AREAS_OF_INTEREST: "WEB DESIGNING" },
    { PROGRAMING_LANGUAGE: "JAVASCRIPT" },
    { OPERATING_SYSTEM: "WINDOWS XP" },
  ],
  PROJECTS: [{ 1: "SMART MIRROR" }, { 2: "TRADE CARTZ" }],
  HOBBY: [
    { 1: "Interested on doing oil paintings and sketches" },
    { 2: "Interested on making advertisement posters in Adobe photoshop cs" },
    { 3: "Interested on doing Craft works" },
  ],
};
console.log(RESUME);

//--------------------------------------------------------------------------------------------

//QUESTION 1:=FOR THE GIVEN JSON ITERATE OVER ALL FOR LOOPS (for,for in,for of,foreach).
//            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//BY USING FOR LOOP:=

for (var i = 0; i < RESUME.EDUCATION.length; i++) {
  console.log(RESUME.EDUCATION[i]);
}
//----------------------------------------------------------------------------------------------

//BY USING FOR IN LOOP:=

//METHOD-1:=TO PRINT INDEX NUMBER

for (let arun in RESUME.SKILLS) {
  console.log(arun);
}
//---------------------------------------------------------------------------------------------
//METHOD-2:=TO PRINT INDEX VALUE

for (let arun in RESUME.SKILLS) {
  console.log(RESUME.SKILLS[arun]);
}
//---------------------------------------------------------------------------------------------

//BY USING FOR OF LOOP:=

for (let arunhobby of RESUME.HOBBY) {
  console.log(arunhobby);
}
//----------------------------------------------------------------------------------------------
//BY USING FOR EACH LOOP:=

RESUME.PROJECTS.forEach((PROJECTS) => console.log(PROJECTS));

//----------------------------------------------------------------------------------------------
