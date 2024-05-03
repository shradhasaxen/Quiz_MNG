(function() {
    var userName = prompt("What's Your Good Name?");
    var questions = [{
        question: "_____________ entrepreneurs are extremely task oriented.",
        choices: ["Technical", "Fabian", "Induced", "Business"],
        correctAnswer: 0
      }, {
        question: "_____________ entrepreneurs neither introduce new changes nor adopt new methods innovated by others.",
        choices: ["Technical", "Fabian", "Induced", "Business"],
        correctAnswer: 1
      }, {
        question: "Knowledge + Skill + Traits = _____________",
        choices: ["Innovation", "Competency", "Skill", "Creativity"],
        correctAnswer: 1
      }, {
        question: "Social attitude is one of the important problems of a __________ Entrepreneur.",
        choices: ["Drone", "Business", "Women", "Adoptive"],
        correctAnswer: 2
      },

        {
          question: "Which of the following is a psychological factor affecting entrepreneurial growth?",
          choices: ["Legitimacy of entrepreneurship", "Social status", "Need for achievement", "None of these"],
          correctAnswer: 2
        },
        {
          question: "The entrepreneur who does not change the method of production already introduced is:",
          choices: ["Drone entrepreneur", "Fabian entrepreneur", "Classical entrepreneur", "None of these"],
          correctAnswer: 0
        },
        {
          question: "Person who works within an organization and having entrepreneurial capabilities is:",
          choices: ["Entrepreneur", "Intrapreneur", "Manager", "Chief executive"],
          correctAnswer: 1
        },
        {
          question: "Who introduced the term intrapreneur?",
          choices: ["Schumpeter", "Peter Drucker", "David McClelland", "Gifford Pinchot"],
          correctAnswer: 3
        },
        {
          question: "A micro enterprise is one in which the investment in plant and machinery does not exceed Rs. __________",
          choices: ["25 Lakhs", "50 Lakhs", "1 Crore", "10 Lakhs"],
          correctAnswer: 0
        },
        {
          question: "A small enterprise is one in which the investment in plant and machinery is more than Rs__________ But does not exceed Rs__________",
          choices: ["10 lakhs / 2 crores", "25 lakhs /5crores", "5 crores/ 10 crores", "2 crores/5 crores"],
          correctAnswer: 1
        },
        {
          question: "A medium enterprise is one in which the investment in plant and machinery is more than Rs __________ But does not exceed Rs __________",
          choices: ["10 lakhs / 2 crores", "25 lakhs /5crores", "5 crores/ 10 crores", "2 crores/5 crores"],
          correctAnswer: 2
        },
        {
          question: "__________ Units provide inputs to other industries.",
          choices: ["Export", "Small", "Ancillary", "None of these"],
          correctAnswer: 2
        },
        {
          question: "__________ registration helps the entrepreneur to take necessary steps to bring industrial units into existence.",
          choices: ["Provisional", "Permanent", "Both of these", "None of these"],
          correctAnswer: 0
        },
        {
          question: "The MSME Development Act came into force in __________",
          choices: ["2005", "2006", "2010", "2001"],
          correctAnswer: 1
        },
        {
          question: "Capital investment subsidy was introduced in __________",
          choices: ["1973", "1971", "1972", "1970"],
          correctAnswer: 1
        },
        {
          question: "__________ is the financial and promotional assistance provided by the Govt. to the industries for boosting up industrial development in all regions particularly in backward areas.",
          choices: ["Seed capital", "Incentive", "Subsidy", "None of these"],
          correctAnswer: 1
        },
        {
          question: "__________ is the place where the required facilities and factory accommodation are provided by the government to the entrepreneurs to establish their industries there.",
          choices: ["Industry", "Industrial estate", "Company", "None of these"],
          correctAnswer: 1
        },
        {
          question: "The initial capital that is required to obtain loans from the financial institutions is called __________",
          choices: ["Seed capital", "Incentive", "Subsidy", "None of these"],
          correctAnswer: 0
        },
        {
          question: "Under the single roof of the __________ all the services and support required by small and village entrepreneurs are provided.",
          choices: ["KSIDC", "KITCO", "DIC", "KINFRA"],
          correctAnswer: 2
        },
        {
          question: "KITCO was set up in __________",
          choices: ["1973", "1971", "1972", "1970"],
          correctAnswer: 2
        },
        {
          question: "__________ offers comprehensive consultancy services to MSMEs in Kerala.",
          choices: ["KSIDC", "KITCO", "DIC", "KINFRA"],
          correctAnswer: 1
        },
        {
          question: "A single lump sum which is given by a govt. to an entrepreneur to cover the cost is known as __________",
          choices: ["Subsidy", "Concession", "Bounties", "None of these"],
          correctAnswer: 0
        },
        {
          question: "A bonus or financial aid which is given by a govt. to an industry to help it compete with other units in home market or in a foreign market is known as __________",
          choices: ["Subsidy", "Concession", "Bounties", "None of these"],
          correctAnswer: 2
        },
        {
          question: "Single window scheme is instituted through __________",
          choices: ["IDBI", "SIDCO", "KFC", "DIC"],
          correctAnswer: 3
        },
        {
          question: "The advance given to cover the finance requirement during the time lag between the sanctioning and disbursement of term loan by financial institutions is known as __________",
          choices: ["Soft Loan", "Seed capital", "Capital subsidy", "Bridge loan"],
          correctAnswer: 3
        },
        {
            question: "__________ is a National level apex organization of young entrepreneurs",
            choices: ["NAYE", "TCO", "SIDO", "NSIC"],
            correctAnswer: 0
          },
          {
            question: "__________ provides consultancy services to small and medium enterprises at reasonable cost.",
            choices: ["NAYE", "TCO", "SIDO", "NSIC"],
            correctAnswer: 1
          },
          {
            question: "__________ is an area where applied research on high tech projects is conducted",
            choices: ["STEP", "SWOT", "EPST", "None of these"],
            correctAnswer: 0
          },
          {
            question: "Which of these is not a state level promotional institutions",
            choices: ["KITCO", "KSIDC", "NIESBUD", "SIDCO"],
            correctAnswer: 2
          },
          {
            question: "__________ the process of collection, compilation and analysis of economic data for the purpose of finding out possible opportunities for investment.",
            choices: ["Project screening", "Project appraisal", "Project identification", "None of these"],
            correctAnswer: 2
          },
          {
            question: "A __________ is an organization designed and success of entrepreneurial companies through an array of business support resources and services.",
            choices: ["Business incubators", "Industrial estates", "DIC", "None of these"],
            correctAnswer: 0
          },
          {
            question: "Which of these is a problem of MSMEs",
            choices: ["Bogus units", "Inadequate finance", "Lack of managerial experience", "All of these"],
            correctAnswer: 3
          },
          {
            question: "The first and foremost industrial estate was established at __________",
            choices: ["Rajkot", "Ahmadabad", "Patna", "Gurgaon"],
            correctAnswer: 0
          },
          {
            question: "The first and foremost industrial estate was established in the year __________",
            choices: ["1960", "1962", "1955", "1950"],
            correctAnswer: 2
          },
          {
            question: "__________ means organising, housing and servicing industry, a planned clustering of industrial enterprises offering standard factory buildings erected in advance of demand and a variety of services and facilities to the occupants.",
            choices: ["Industry", "Industrial estate", "Company", "None of these"],
            correctAnswer: 1
          },
          {
            question: "Which of these is not a environmental barrier to entrepreneurship",
            choices: ["Lack of skilled labour", "Custom of people", "Lack of fund", "Lack of infrastructure"],
            correctAnswer: 1
          },
          {
            question: "Which of these is a social barrier to entrepreneurship",
            choices: ["Low status", "Custom of people", "Both", "None of these"],
            correctAnswer: 2
          },
          {
            question: "__________ is a combination of knowledge, skills and appropriate motives that an individual must possess to perform a given task.",
            choices: ["Persistence", "Initiative", "Competency", "Creativity"],
            correctAnswer: 2
          },
          {
            question: "To provide financial assistance to entrepreneurs the government has set up a number of __________.",
            choices: ["Financial advisors", "Financial intermediaries", "Industrial estates", "Financial institutions"],
            correctAnswer: 3
          },
          {
            question: "State Industrial corporations engage in the development of __________.",
            choices: ["Industrial estates", "Institutional estates", "Individual investors", "Agricultural entrepreneurs"],
            correctAnswer: 0
          },
          {
            question: "SIDBI was set up as a subsidiary of _________.",
            choices: ["IDBI", "IFCI", "ICICI", "SFC"],
            correctAnswer: 0
          },
          {
            question: "Which of the following is a function of SIDBI?",
            choices: ["Extension of seed capital", "Discounting of bills", "Providing factoring services", "All of the above"],
            correctAnswer: 3
          },
          {
            question: "___________ can be defined as a specifically evolved work plan to achieve a specific objective within a specific period of time.",
            choices: ["Idea generation", "Opportunity Scanning", "Project", "Strategy"],
            correctAnswer: 2
          },
          {
            question: "The granting of cash subsidy on the capital investment is called __________.",
            choices: ["Concessional finance", "Quantum of Subsidy", "Interest Subsidy", "Central Investment Subsidy"],
            correctAnswer: 3
          },
          {
            question: "__________ is primarily concerned with the identification of the project demand potential and the selection of the optimal technology.",
            choices: ["Techno-economic analysis", "Feasibility analysis", "Input analysis", "Financial analysis"],
            correctAnswer: 0
          },
          {
            question: "Which of the following shows the process of creating something new:",
            choices: ["Business model", "Modeling", "Creative flexibility", "Innovation"],
            correctAnswer: 3
          },
          {
            question: "The entrepreneur was distinguished from capital provider in:",
            choices: ["Middle ages", "17th century", "18th century", "19th and 20th century"],
            correctAnswer: 2
          },
          {
            question: "EDP (Entrepreneurship Development Programmes) is required to help:",
            choices: ["Existing entrepreneurs", "First generation entrepreneurs", "Future generation entrepreneurs", "None of the above"],
            correctAnswer: 1
          },
          {
            question: "Why should an entrepreneur do a feasibility study for starting a new venture:",
            choices: ["To identify possible sources of funds", "To see if there are possible barriers to success", "To estimate the expected sales", "To explore potential customers"],
            correctAnswer: 1
          },
          {
            question: "What is the process by which individuals pursue opportunities without regard to resources they currently control:",
            choices: ["Startup management", "Entrepreneurship", "Financial analysis", "Feasibility planning"],
            correctAnswer: 1
          },
          {
            question: "An individual who initiates, creates and manages a new business can be called __________.",
            choices: ["A leader", "A manager", "A professional", "An entrepreneur"],
            correctAnswer: 3
          },
          {
            question: "Which could provide an individual with the motivation to start a new business venture?",
            choices: ["The financial rewards", "A desire to be independent", "Risk taking", "All the above"],
            correctAnswer: 3
          },
          {
            question: "Why are small businesses important to a country’s economy?",
            choices: ["They give an outlet for entrepreneurs", "They can provide specialist support to larger companies", "They can be innovators of new products", "All the above"],
            correctAnswer: 3
          },
          {
            question: "A corporate manager who starts a new initiative for their company which entails setting up a new distinct business unit and board of directors can be regarded as:",
            choices: ["Ecopreneur", "Technopreneur", "Intrapreneur", "Social Entrepreneur"],
            correctAnswer: 2
          },
          {
            question: "As a business grows, time management continues to be an issue, but the entrepreneur’s major concern usually becomes:",
            choices: ["Setting goals", "Finding, retaining, and motivating qualified employees", "Measuring performance", "All of the above"],
            correctAnswer: 1
          },
          {
            question: "An entrepreneur who owns more than one business at a time is called ________.",
            choices: ["An intrapreneur", "A corporate entrepreneur", "A portfolio entrepreneur", "None of the above"],
            correctAnswer: 2
          },
          {
            question: "The purpose of soft loan scheme is to encourage units to undertake ___________.",
            choices: ["Modernization of plant and machinery", "Replacement of plant and machinery", "Renovation of plant and machinery", "All the above"],
            correctAnswer: 3
          },
          {
            question: "Seed capital assistance is ___________.",
            choices: ["A long-term assistance", "Initial assistance", "A help for the purchase of seeds", "A short-term assistance"],
            correctAnswer: 1
          },
          {
            question: "The application for registration of a small scale unit should be submitted to the _______.",
            choices: ["General Manager, DIC", "Director, DIC", "General Manager. NSIC", "Director, NSIC"],
            correctAnswer: 0
          },
          {
            question: "__________ implies the availability or otherwise of plant and machinery and technical know-how to produce the product.",
            choices: ["Economic viability", "Financial feasibility", "Technical feasibility", "Managerial competence"],
            correctAnswer: 2
          },
          {
            question: "Decisions taken by an entrepreneur on behalf of his enterprise are known as ________.",
            choices: ["Organizational decisions", "Personal decisions", "Routine decisions", "Strategic decisions"],
            correctAnswer: 0
          },
          {
            question: "Why should an entrepreneur do a feasibility study for starting a new venture?",
            choices: ["To identify possible sources of funds", "To see if there are possible barriers to success", "To estimate the expected sales", "To explore potential customers"],
            correctAnswer: 2
          },
          {
            question: "District Industries Centers are located ____________.",
            choices: ["In each district", "In each state", "Only in selected districts", "Only in selected states"],
            correctAnswer: 0
          },
          {
            question: "Entrepreneurship can best be described as _________.",
            choices: ["A process that requires setting up a business", "Taking a significant risk in a business context", "Having a strong vision", "A process involving innovation, new products or services, and value creation"],
            correctAnswer: 1
          },
          {
            question: "Every entrepreneur should draw an __________ for his project to ensure the timely completion of all activities involved in setting up an enterprise.",
            choices: ["Cost structure", "Implementation plan", "Market structure", "Production structure"],
            correctAnswer: 1
          },
          {
            question: "Entrepreneurial development is the key to achieve all-round ---------------- through acceleration of industrial and entrepreneurial activities.",
            choices: ["Economic development", "Increase in profits", "Shareholders value", "Business development"],
            correctAnswer: 0
          },
          {
            question: "The term “Entrepreneur” has been derived from the word “entreprendre” which means:",
            choices: ["To give", "To undertake", "To choose", "To decide"],
            correctAnswer: 1
          },
          {
            question: "Entrepreneurship is a creative activity – Said by:",
            choices: ["Frederick Harbison", "B. F. Hoselitz", "B. Higgins", "Joseph Schumpeter"],
            correctAnswer: 3
          },
          {
            question: "What is the hallmark of a successful entrepreneur?",
            choices: ["Risk bearing capacity", "Persistence", "Flexibility", "Self-confidence"],
            correctAnswer: 2
          },
          {
            question: "Which type of entrepreneurs utilizes a chance to introduce a new technique or new product?",
            choices: ["Innovative entrepreneur", "Instigated entrepreneur", "Initiative entrepreneur", "Fabian entrepreneur"],
            correctAnswer: 0
          },
          {
            question: "Which phase is the phase of real training?",
            choices: ["Initial phase", "Training phase", "Post-training phase", "Follow up phase"],
            correctAnswer: 1
          },
          {
            question: "“Seed Capital Scheme” is being operated by?",
            choices: ["IDBI", "SIDC", "ICICI", "IFCI"],
            correctAnswer: 0
          },
          {
            question: "Why the majority of women are unaware of technological developments?",
            choices: ["Low-risk bearing ability", "Low mobility", "Lack of education", "Low need for achievement"],
            correctAnswer: 0
          },
          {
            question: "Which of the following is a remedy to solve the problems of women entrepreneurs?",
            choices: ["Social attitude", "Finance cells", "Stiff Competition", "Supervision"],
            correctAnswer: 1
          },
          {
            question: "What provides all the necessary information of the unit proposed to be set-up for the manufacture of a product or rendering a service?",
            choices: ["Project description", "Project appraisal", "Project implementation schedule", "Project report"],
            correctAnswer: 3
          },

          {
            question: "Which type of industrial estates is called conventional industrial estates?",
            choices: ["General type of industrial estate", "Special type industrial estate", "Ancillary industrial estate", "Workshop bay"],
            correctAnswer: 0
          },
          {
            question: "Government industrial estates come under which type of classification?",
            choices: ["Variant", "Objective", "Functional", "Organizational"],
            correctAnswer: 3
          },
          {
            question: "According to Frederick Harbison, which of the following is not a function of a women entrepreneur?",
            choices: ["Explore the prospects of starting new enterprises.", "Co-ordination, administration and control", "The power to resist criticism", "Supervision and providing leadership in all aspects of the business"],
            correctAnswer: 2
          },
          {
            question: "On the basis of the organizational set – up, industrial estates are classified into:",
            choices: ["Private industrial estates & functional industrial estates", "Functional industrial estates & the workshop bay", "Municipal industrial estates & private industrial estates", "Functional industrial estates & Municipal industrial estates"],
            correctAnswer: 2
          },
          {
            question: "SIDO stands for ______",
            choices: ["Small Industries Developing Organization", "Small Industries Development Organization", "Short Industries Development Organization", "Small Industries Deployment Organization"],
            correctAnswer: 1
          },
          {
            question: "DIC stands for ______",
            choices: ["Disassembled Industries Centre", "District Industries Collaboration", "District Industries Centre", "Developing Industries Centre"],
            correctAnswer: 2
          },
          {
            question: "NIESBUD stands for ___",
            choices: ["National Institution for Entrepreneurship & Small Business Development", "National Institute for Enterprise & Small Business Development", "National Institute for Entrepreneurship & Small Business Development", "National Institute for Entrepreneurship & Small Businessman Development"],
            correctAnswer: 2
          },
          {
            question: "EGB stands for ___",
            choices: ["Enterprise Development Bureau", "Entrepreneurial deli censing Bank", "Entrepreneurial Development Bureau", "Entrepreneur Development Bureau"],
            correctAnswer: 2
          },
          {
            question: "Who take the lead to extend financial assistance to small-scale industries",
            choices: ["SBI", "IFCI", "IRBI", "None of the above"],
            correctAnswer: 0
          },
          {
            question: "An ___ in a tract of land which is subdivided and developed according to a comprehensive plan for the use of a community of industrial enterprises.",
            choices: ["Industrial plan", "Industrial Estate", "Industrial unit", "None of the above"],
            correctAnswer: 1
          },
          {
            question: "The main objective of setting up DICs was to promote under a single roof all the services & support required by small & village entrepreneurs. This scheme was introduced in May__________",
            choices: ["1970", "1975", "1978", "1979"],
            correctAnswer: 2
          },
          {
            question: "A provisional SSI registration certificate is valid for a period of __________.",
            choices: ["4 Years", "3 Years", "2 Years", "1 Year"],
            correctAnswer: 3
          },
          {
            question: "National Alliance of Young Entrepreneurs (NAYE) Sponsored an Entrepreneurial Development scheme with Bank of India in______________.",
            choices: ["January 1970", "August 1970", "January 1972", "August 1972"],
            correctAnswer: 3
          },
          {
            question: "Institutional agencies grant financial assistance to small scale industries for _________.",
            choices: ["participation in equity capital only", "acquisition of fixed assets", "working capital assistance", "All of the above"],
            correctAnswer: 3
          },
          {
            question: "Refusal to adopt and use opportunities to make changes in production entrepreneurs.",
            choices: ["Fabian", "Imitative", "Innovative", "Drone"],
            correctAnswer: 3
          },
          {
            question: "The entrepreneur must possess the abilities of ____________.",
            choices: ["Conceptualization", "Creative", "Understanding environment", "All of the above"],
            correctAnswer: 3
          },
          {
            question: "People who own, operate, and take risk of a business venture is known as ____________.",
            choices: ["Aptitude", "Employee", "Entrepreneurs", "Intrapreneur"],
            correctAnswer: 2
          },
          {
            question: "______________ type of entrepreneurs are particularly important for underdeveloped countries because they contribute significantly to the development of such nations.",
            choices: ["Innovative", "Adoptive", "Fabian", "Drone"],
            correctAnswer: 1
          },
          {
            question: "________________ type of entrepreneurs are very cautious and skeptical while practicing any change.",
            choices: ["Innovative", "Imitative", "Fabian", "Drone"],
            correctAnswer: 2
          },
          {
            question: "In small scale sector _________ are dominant.",
            choices: ["Institutional entrepreneurs", "Entrepreneurs by inheritance", "Technologist entrepreneurs", "Forced entrepreneurs"],
            correctAnswer: 0
          },
          {
            question: "Which one among the following is considered as one of the important economic factor which determine entrepreneurial growth?",
            choices: ["Government", "Politics", "Market", "Private"],
            correctAnswer: 2
          },
          {
            question: "Entrepreneurial management is noted for its ability to react quickly and effectively to new ___________.",
            choices: ["Market", "Business opportunities", "Product", "Technology"],
            correctAnswer: 1
          },
          {
            question: "Which one of the following is the way by which an entrepreneur can enter into international business?",
            choices: ["Export", "Non equity arrangements", "Direct foreign investment", "All the above"],
            correctAnswer: 3
          },
          {
            question: "The term EDP refers to ____________.",
            choices: ["Entrepreneurship Development Programme", "Entrepreneurial Development Programme", "Entrepreneur Development Programme", "Entrepreneuring Development Programme"],
            correctAnswer: 0
          },
          {
            question: "EDPs are conducted by ____________.",
            choices: ["Entrepreneurs", "Specialised institutions", "Business community", "Government"],
            correctAnswer: 1
          },

          {
            question: "__________ is an apex Institute in the area of Entrepreneurship and Small Business Development under the Ministry of Micro, Small and Medium Enterprises Government of India.",
            choices: ["NIESBUA", "NIESBUB", "NIESBUC", "NIESBUD"],
            correctAnswer: 3
          },
          {
            question: "___________ has helped to set up twelve state-level exclusive entrepreneurship development centres and institutes.",
            choices: ["Entrepreneurship Development Institute of India", "SBI", "Reserve Bank", "IFCI"],
            correctAnswer: 0
          },
          {
            question: "The word entrepreneurship has been derived from a _____ which means ' to undertake'.",
            choices: ["French root", "Greek root", "Roman root", "Italian root"],
            correctAnswer: 0
          },
          {
            question: "The purpose of financial analysis is to determine __________ of the project.",
            choices: ["Input feasibility", "Output feasibility", "Financial feasibility", "Cost-benefit feasibility"],
            correctAnswer: 2
          },
          {
            question: "SIDBI was set up in the year____________.",
            choices: ["1987", "1988", "1989", "1990"],
            correctAnswer: 2
          },
          {
            question: "_________ has been recognized as the nodal agency to support the small scale industry export promotion.",
            choices: ["SIDO", "TDC", "NSIC", "IFSC"],
            correctAnswer: 0
          },
          {
            question: "_________ acts as a Principal Financial Institution for the Promotion, Financing and Development of the Micro, Small and Medium Enterprise (MSME) sector.",
            choices: ["Mudra Bank", "RBI", "SBI", "SIDBI"],
            correctAnswer: 3
          },
          {
            question: "_________ is a full service credit rating agency exclusively set up for micro, small and medium enterprises (MSME) in India.",
            choices: ["Dun & Bradstreet Information", "ADFIAP", "SMERA", "MUDRA"],
            correctAnswer: 2
          },
          {
            question: "The MSME sector in India has maintained a consistent growth rate of ______ per cent.",
            choices: ["8%", "10%", "5%", "7%"],
            correctAnswer: 1
          },
          {
            question: "The MSME sector employs about _________ % workforce of India, which is roughly 6 crore people.",
            choices: ["30%", "40%", "45%", "50%"],
            correctAnswer: 1
          },
          {
            question: "Generally, MSME contributes to _________ % exports from India.",
            choices: ["20%", "25%", "30%", "40%"],
            correctAnswer: 3
          },
          {
            question: "One of the biggest threats Indian MSME sector faces is _________.",
            choices: ["Lack of financial assistance", "Lack of Marketing Skills", "Quality of products still to meet International standards", "lack of bilateral trade"],
            correctAnswer: 2
          },
          {
            question: "Out of which of these activities one of it is supporting growth of MSME sector in India?",
            choices: ["ISO Standards", "Management Education", "IT revolution", "Cluster based activities"],
            correctAnswer: 3
          },
          {
            question: "The MUDRA banks were set up under the ______ scheme. It will provide its services to small entrepreneurs outside the service area of regular banks, by using last miles agents.",
            choices: ["Jan-Gana yojana", "Atalbihari Vitta Yojana", "Pradhan Mantri MUDRA Yojana", "None of these"],
            correctAnswer: 2
          },
          {
            question: "In service sector, a micro enterprise is an enterprise where the investment in equipment does not exceed ______",
            choices: ["Rs 10 lakh", "Rs 15 lakh", "Rs 20 lakh", "Rs 25 lakh"],
            correctAnswer: 0
          },
          {
            question: "In service sector, a small enterprise is an enterprise where the investment in equipment is more than Rs.10 lakh but does not exceed _______",
            choices: ["Rs 2 crore", "Rs 3 crore", "Rs 5 crore", "Rs 10 crore"],
            correctAnswer: 0
          },
          {
            question: "In service sector, a medium enterprise is an enterprise where the investment in equipment is more than Rs. 2 crore but does not exceed ______",
            choices: ["Rs. 5 crore", "Rs. 10 crore", "Rs. 15 crore", "Rs. 20 crore"],
            correctAnswer: 0
          },
          {
            question: "A composite loan limit of ______ can be sanctioned by banks to enable the MSME entrepreneurs to avail of their working capital and term loan requirement through Single Window.",
            choices: ["Rs 10 lakh", "Rs 25 lakh", "Rs 50 lakh", "Rs 1crore"],
            correctAnswer: 3
          },
          {
            question: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) was set up by Government of India and which of the following bank?",
            choices: ["RBI", "NABARD", "SIDBI", "MUDRA"],
            correctAnswer: 2
          },
          {
            question: "Micro or Small Enterprise (as defined in the MSMED Act 2006) may be said to have become Sick, if",
            choices: ["Any of the borrowal account of the enterprise remains NPA for ten months or more", "Any of the borrowal account of the enterprise remains NPA for eight months or more", "Any of the borrowal account of the enterprise remains NPA for five months or more", "Any of the borrowal account of the enterprise remains NPA for three months or more"],
            correctAnswer: 3
          }
    
      ];
      

    // Shuffle the questions
    questions = shuffleArray(questions);

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    var userName = '';

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function(e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter++;
        displayNext();
    });

    // Click handler for the 'showAnswer' button
    $('#showAnswer').on('click', function(e) {
        e.preventDefault();
        if (questionCounter === questions.length) {
            displayAllAnswers();
        } else {
            highlightCorrectAnswer();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function() {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function() {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                if (questionCounter % 10 === 0 && questionCounter !== 0) {
                    alert("Keep it Up, " + userName + "! You are Doing Great!");
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<div>', {
            id: 'question'
        });

        for (var i = 0; i < questions.length; i++) {
            var questionDiv = $('<div>').addClass('question-info');
            var userAnswer = selections[i];
            var correctAnswer = questions[i].correctAnswer;

            var questionText = $('<p>').text("Question " + (i + 1) + ": " + questions[i].question);
            var userResponse = $('<p>').text("Your response: " + (userAnswer !== undefined ? questions[i].choices[userAnswer] : "No response"));
            var correctResponse = $('<p>').text("Correct answer: " + questions[i].choices[correctAnswer]);

            questionDiv.append(questionText, userResponse, correctResponse);
            score.append(questionDiv);
        }

        return score;
    }

    // Function to shuffle an array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Function to highlight correct answer
    function highlightCorrectAnswer() {
        var correctAnswerIndex = questions[questionCounter].correctAnswer;
        var radios = $('input[name="answer"]');
        radios.each(function(index) {
            if (index === correctAnswerIndex) {
                $(this).parent().css('color', 'green');
            }
        });
    }

    // Function to display all answers after the quiz is completed
    function displayAllAnswers() {
        var allAnswersDiv = displayScore();
        quiz.empty().append(allAnswersDiv).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#showAnswer').hide();
        $('#start').show();
    }
})();

// Add event listener to radio inputs
$('body').on('click', 'input[type="radio"]', function() {
    $('#showAnswer').show(); // Show the "Show" button when any option is clicked
});
