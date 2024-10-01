let questions = [
    {
        question: "What are the two main categories of phospholipids based on the alcohol contained in their structure?",
        choices: ["Glycerophospholipids and sphingomyelins", "Phosphatidylcholines and phosphatidylethanolamines", "Saturated and unsaturated phospholipids", "Natural and synthetic phospholipids"],
        correct: 0,
        longAnswer: "The two main categories are glycerophospholipids containing glycerol backbones and sphingomyelins containing sphingosine backbones. Glycerophospholipids make up the majority of phospholipids in eukaryotic cell membranes."
    },
    {
        question: "What are some of the major natural sources for phospholipids?",
        choices: ["Vegetables and fruits", "Vegetable oils and animal tissues", "Minerals and rocks", "Synthetic laboratories"],
        correct: 0,
        longAnswer: "Major natural sources of phospholipids include vegetable oils like soybean, corn, sunflower, rapeseed, and cottonseed oils, as well as animal tissues like egg yolk, which is rich in phosphatidylcholines, and bovine brain, which contains high sphingomyelin levels. Commercially, soybean and egg yolk are the most important sources."
    },
    {
        question: "How can phospholipids self-assemble when introduced into aqueous environments?",
        choices: ["Only as liposomes", "As micelles, liposomes, and hexagonal phases", "Only as hexagonal phases", "They cannot self-assemble in water"],
        correct: 3,
        longAnswer: "When introduced into aqueous environments, phospholipids can self-assemble into different structures depending on their molecular shape. These include micelles, liposomes, and hexagonal phases."
    },
    {
        question: "What is the phase transition temperature and how does it impact phospholipid applications?",
        choices: ["It's the temperature at which phospholipids melt", "It's the temperature at which phospholipids transition from gel to liquid crystalline state", "It's the temperature at which phospholipids evaporate", "It has no impact on phospholipid applications"],
        correct: 2,
        longAnswer: "The phase transition temperature is the temperature at which phospholipids transition from a gel to liquid crystalline state. At this temperature, the phospholipid membrane becomes more fluid, which can impact drug release in liposomal formulations and the stability of phospholipid-based drug delivery systems."
    },
    {
        question: "What are some key applications of phospholipids in drug delivery systems?",
        choices: ["Only in oral medications", "In liposomes, emulsions, and micelles", "Only in topical treatments", "They are not used in drug delivery"],
        correct: 0,
        longAnswer: "Phospholipids have major applications in drug delivery systems including: liposomes which can encapsulate both hydrophilic and lipophilic drugs, intravenous lipid emulsions, mixed micelles to solubilize poorly soluble drugs, drug-phospholipid complexes that improve absorption, and cochleates which are stable phospholipid rolls that encapsulate challenging drug molecules."
    },
    {
        question: "What are drug-phospholipid complexes and how are they formed?",
        choices: ["Simple mixtures of drugs and phospholipids", "Complexes formed by covalent bonding", "Complexes formed by hydrophobic and hydrogen bonding interactions", "Complexes formed only with synthetic phospholipids"],
        correct: 3,
        longAnswer: "Drug-phospholipid complexes involve the formation of hydrophobic and hydrogen bonding interactions between drug molecules and the phospholipid polar headgroup and hydrophobic tails. This produces amphiphilic complexes improving drug absorption and efficacy."
    },
    {
        question: "What are cochleates and how are they formed?",
        choices: ["Spherical liposomes formed with cholesterol", "Rolled up lipid structures formed with calcium ions", "Micelles formed with bile salts", "Emulsions formed with high-pressure homogenization"],
        correct: 2,
        longAnswer: "Cochleates are rolled up lipid structures composed of negatively charged phospholipids like phosphatidylserine and calcium bridges between the lipid bilayers. They form spontaneously when calcium ions are added to liposomes made from suitable phospholipids."
    },
    {
        question: "How does phospholipid headgroup selection impact carrier circulation times?",
        choices: ["It has no impact", "Negative headgroups increase circulation time", "PEGylated headgroups increase circulation time", "Only natural phospholipid headgroups affect circulation"],
        correct: 1,
        longAnswer: "Phospholipid headgroup selection significantly impacts carrier circulation times. Sterically shielded headgroups like PEGylated phospholipids show extended circulation compared to negative headgroups. The PEG brush resists opsonization and recognition as foreign particles, delaying clearance."
    },
    {
        question: "What is the main difference between glycerophospholipids and sphingomyelins?",
        choices: ["Their head groups", "The backbone structure", "Their fatty acid composition", "Their charge"],
        correct: 0,
        longAnswer: "The main difference between glycerophospholipids and sphingomyelins is their backbone structure. Glycerophospholipids contain a glycerol backbone, while sphingomyelins contain a sphingosine backbone."
    },
    {
        question: "What effect does cholesterol have on phospholipid membranes?",
        choices: ["It makes them more fluid", "It makes them more rigid", "It has no effect", "It causes them to break down"],
        correct: 3,
        longAnswer: "Cholesterol interacts strongly with phospholipids, especially sphingomyelins, to increase membrane stiffness and solidity. This interaction is key for forming lipid rafts and modulating membrane fluidity."
    },
    {
        question: "What is the accelerated blood clearance (ABC) phenomenon?",
        choices: ["Faster drug absorption", "Rapid elimination of subsequent doses of PEGylated liposomes", "Increased circulation time of liposomes", "Faster synthesis of phospholipids in blood"],
        correct: 3,
        longAnswer: "The accelerated blood clearance (ABC) phenomenon is an immune response seen with some phospholipid carriers like PEGylated liposomes. Upon repeated injections, the carrier is cleared from the blood much faster due to the production of anti-PEG antibodies."
    },
    {
        question: "How does unsaturation in hydrocarbon chains affect phospholipid structure?",
        choices: ["It has no effect", "It makes the structure more rigid", "It promotes curved structures like hexagonal phases", "It always leads to bilayer formation"],
        correct: 0,
        longAnswer: "Increasing unsaturation in the hydrocarbon chains leads to more cone-shaped molecules that favor curved hexagonal phases over flat bilayer structures. This is due to the kinks introduced by the double bonds, which reduce intermolecular packing."
    },
    {
        question: "What is the role of phosphatidylcholine in drug delivery systems?",
        choices: ["It's not used in drug delivery", "It's mainly used as a solvent", "It's a key component in liposomes and lipid emulsions", "It's only used in oral formulations"],
        correct: 1,
        longAnswer: "Phosphatidylcholine is a key component in many drug delivery systems, particularly in liposomes and lipid emulsions. Its amphiphilic nature allows it to form bilayers in liposomes and stabilize oil droplets in emulsions, enabling the encapsulation and delivery of both hydrophilic and lipophilic drugs."
    },
    {
        question: "How do pH-sensitive liposomes work?",
        choices: ["They only release drugs at high pH", "They fuse with cell membranes at low pH", "They are stable at all pH levels", "They dissolve completely at low pH"],
        correct: 3,
        longAnswer: "pH-sensitive liposomes are designed to become unstable and release their contents in acidic environments, such as in endosomes or tumor tissues. This is often achieved by incorporating phospholipids like DOPE, which transition from lamellar to hexagonal phase at low pH, destabilizing the liposome and releasing the drug."
    },
    {
        question: "What is the advantage of using natural phospholipids in drug delivery systems?",
        choices: ["They are more stable", "They are cheaper", "They have higher purity", "They are easier to synthesize"],
        correct: 2,
        longAnswer: "Natural phospholipids, derived from sources like egg yolk or soybeans, are generally cheaper to produce compared to synthetic phospholipids. However, they typically have lower and more variable purity, and may be less stable due to higher levels of unsaturation."
    },
    {
        question: "How does the presence of PEGylated lipids affect liposome structure?",
        choices: ["It has no effect", "It always leads to micelle formation", "It can stabilize liposomes or form micelles depending on concentration", "It always destabilizes liposomes"],
        correct: 0,
        longAnswer: "The effect of PEGylated lipids on liposome structure depends on their concentration. At low concentrations, they can stabilize liposomes and increase circulation time. At high concentrations, they can lead to the formation of micelles. The transition from liposomes to micelles occurs as PEG concentration increases."
    },
    {
        question: "What is the role of sphingomyelin in biological membranes?",
        choices: ["It's not present in biological membranes", "It's mainly involved in signal transduction", "It's a key component of lipid rafts", "It's only found in plant cell membranes"],
        correct: 0,
        longAnswer: "Sphingomyelin, along with cholesterol, is a key component of stable, detergent-resistant nanodomains in membranes called lipid rafts. These structures play important roles in signal transduction, protein transport, and sorting of membrane components."
    },
    {
        question: "How does the chain length of phospholipids affect their phase transition temperature?",
        choices: ["It has no effect", "Longer chains decrease the transition temperature", "Longer chains increase the transition temperature", "Chain length only affects synthetic phospholipids"],
        correct: 1,
        longAnswer: "The length of the hydrocarbon chains in phospholipids affects their phase transition temperature. Phospholipids with longer hydrocarbon chains have a higher phase transition temperature than those with shorter ones. For example, the transition temperature of DSPC (18 carbon chains) is higher than that of DPPC (16 carbon chains)."
    },
    {
        question: "What is the primary function of phospholipids in intravenous lipid emulsions?",
        choices: ["To increase drug solubility", "To act as emulsifiers", "To provide nutrition", "To increase blood viscosity"],
        correct: 3,
        longAnswer: "In intravenous lipid emulsions, phospholipids primarily act as emulsifiers. They stabilize oil droplets containing lipophilic drugs dispersed in the aqueous medium. This provides solubility for lipophilic drugs and allows for their intravenous administration."
    },
    {
        question: "How do cochleates differ from liposomes in terms of stability?",
        choices: ["Cochleates are less stable", "There is no difference in stability", "Cochleates are more stable in harsh conditions", "Stability depends on the drug loaded"],
        correct: 0,
        longAnswer: "Cochleates are generally more stable than liposomes, especially in harsh conditions. Their tightly packed, multilayered structure provides protection from degradation by enzymes and harsh environmental conditions. This makes them particularly suitable for oral drug delivery."
    },
    {
        question: "What is the main advantage of using PEGylated phospholipids in drug delivery systems?",
        choices: ["Increased drug loading", "Extended circulation time", "Improved drug solubility", "Enhanced cellular uptake"],
        correct: 3,
        longAnswer: "The main advantage of using PEGylated phospholipids in drug delivery systems is extended circulation time. The PEG coating provides a steric barrier that reduces recognition and clearance by the mononuclear phagocyte system, allowing the drug carriers to remain in circulation longer."
    },
    {
        question: "How does the presence of calcium ions affect phosphatidylserine-containing structures?",
        choices: ["It has no effect", "It promotes formation of micelles", "It can induce formation of cochleate structures", "It always leads to membrane disruption"],
        correct: 3,
        longAnswer: "Calcium ions can induce the formation of cochleate structures in phosphatidylserine-containing systems. The calcium ions bridge between the negatively charged phosphatidylserine molecules, leading to the characteristic rolled-up cylindrical structure of cochleates."
    },
    {
        question: "What is the primary difference between liposomes and micelles?",
        choices: ["Liposomes are smaller", "Micelles have a bilayer structure", "Liposomes have an aqueous core", "There is no significant difference"],
        correct: 1,
        longAnswer: "The primary difference between liposomes and micelles is their structure. Liposomes have a bilayer structure enclosing an aqueous core, allowing them to encapsulate both hydrophilic and hydrophobic drugs. Micelles, on the other hand, have a monolayer structure with a hydrophobic core, suitable only for hydrophobic drugs."
    },
    {
        question: "How does the incorporation of cholesterol affect liposome membranes?",
        choices: ["It makes them more permeable", "It increases membrane fluidity", "It enhances membrane stability and reduces permeability", "It has no significant effect"],
        correct: 2,
        longAnswer: "Incorporating cholesterol into liposome membranes enhances membrane stability and reduces permeability. Cholesterol interacts with phospholipids, particularly sphingomyelins, to increase membrane rigidity and reduce drug leakage, which is particularly important for maintaining the integrity of liposomal drug formulations."
    },
    {
        question: "What is the main challenge in using natural phospholipids for drug delivery systems?",
        choices: ["They are too expensive", "They are not biocompatible", "They have variable composition and lower stability", "They cannot form liposomes"],
        correct: 0,
        longAnswer: "The main challenge in using natural phospholipids for drug delivery systems is their variable composition and lower stability compared to synthetic phospholipids. Natural phospholipids can vary in their fatty acid composition and may contain impurities, which can affect the reproducibility and stability of drug delivery formulations."
    },
    {
        question: "How do thermosensitive liposomes work?",
        choices: ["They release drugs at low temperatures", "They become more stable at high temperatures", "They release drugs when heated to their transition temperature", "Temperature has no effect on them"],
        correct: 1,
        longAnswer: "Thermosensitive liposomes are designed to release their drug cargo when heated to their phase transition temperature. At this temperature, the lipid bilayer becomes more permeable, allowing the encapsulated drug to be released. This property is utilized for targeted drug delivery, particularly in combination with localized hyperthermia in cancer treatment."
    },
    {
        question: "What is the role of phosphatidylethanolamine in pH-sensitive liposomes?",
        choices: ["It stabilizes the liposome at low pH", "It promotes liposome fusion at low pH", "It has no role in pH-sensitivity", "It only affects drug loading"],
        correct: 3,
        longAnswer: "Phosphatidylethanolamine (PE) plays a crucial role in pH-sensitive liposomes. At physiological pH, PE can be stabilized in a bilayer structure by other lipids. However, at lower pH (such as in endosomes), PE tends to adopt a hexagonal phase, which destabilizes the liposome and promotes fusion with endosomal membranes, facilitating drug release."
    },
    {
        question: "How does the degree of saturation in phospholipid acyl chains affect membrane fluidity?",
        choices: ["Saturation increases fluidity", "Saturation decreases fluidity", "Saturation has no effect on fluidity", "The effect depends on temperature only"],
        correct: 2,
        longAnswer: "The degree of saturation in phospholipid acyl chains significantly affects membrane fluidity. Saturated acyl chains pack more tightly together, decreasing membrane fluidity. In contrast, unsaturated acyl chains, with their 'kinks' from double bonds, pack less efficiently, increasing membrane fluidity."
    },
    {
        question: "What is the significance of the 'accelerated blood clearance' (ABC) phenomenon in liposomal drug delivery?",
        choices: ["It improves drug efficacy", "It reduces the need for multiple doses", "It can limit the effectiveness of subsequent doses", "It accelerates drug absorption"],
        correct: 0,
        longAnswer: "The 'accelerated blood clearance' (ABC) phenomenon is significant because it can limit the effectiveness of subsequent doses of liposomal drugs. When PEGylated liposomes are administered repeatedly, the body may produce anti-PEG antibodies, leading to faster clearance of subsequent doses from the bloodstream. This can reduce the therapeutic efficacy of the treatment."
    },
    {
        question: "How do phospholipid-bile salt mixed micelles enhance drug solubility?",
        choices: ["By increasing drug crystallization", "By forming a hydrophobic environment", "By creating a hydrophilic shell", "By enzymatically modifying the drug"],
        correct: 3,
        longAnswer: "Phospholipid-bile salt mixed micelles enhance drug solubility by forming a hydrophobic environment within the micelle core. This allows poorly water-soluble drugs to be encapsulated within the micelles, effectively increasing their solubility in aqueous environments. The amphiphilic nature of these micelles, with a hydrophilic exterior and hydrophobic interior, makes them effective carriers for lipophilic drugs."
    },
    {
        question: "What is the primary advantage of using synthetic phospholipids over natural ones in drug delivery systems?",
        choices: ["Lower cost", "Better biocompatibility", "Higher purity and consistency", "Easier to source"],
        correct: 2,
        longAnswer: "The primary advantage of using synthetic phospholipids over natural ones in drug delivery systems is their higher purity and consistency. Synthetic phospholipids have a defined chemical structure and composition, leading to more predictable behavior in formulations. This results in better reproducibility and stability of drug delivery systems, which is crucial for pharmaceutical applications."
    }
];


(function() {
    let currentQuestion = 0;
    let timer;
    let timeLeft = 30;
    let correctAnswers = 0;
    let currentQuestions = [];

    function startQuiz() {
        correctAnswers = 0;
        currentQuestions = shuffleArray([...questions]).slice(0, 8);  // Select only 8 random questions
        currentQuestion = 0;
        showQuestion();
        startTimer();
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showQuestion() {
        const question = currentQuestions[currentQuestion];
        document.getElementById('question').textContent = question.question;
        const choicesDiv = document.getElementById('choices');
        choicesDiv.innerHTML = '';
        question.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choice', 'button');
            button.onclick = () => selectAnswer(index);
            choicesDiv.appendChild(button);
        });
        document.getElementById('feedback').textContent = '';
        document.getElementById('long-answer').textContent = '';
        document.getElementById('next-button').style.display = 'none';
    }

    function startTimer() {
        timeLeft = 30;
        updateTimerDisplay();
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft === 0) {
                clearInterval(timer);
                selectAnswer(-1);
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        document.getElementById('timer').textContent = `Time remaining: ${timeLeft} seconds`;
    }

    function selectAnswer(index) {
        clearInterval(timer);
        const question = currentQuestions[currentQuestion];
        const feedbackDiv = document.getElementById('feedback');
        const longAnswerDiv = document.getElementById('long-answer');
        
        if (index === question.correct) {
            feedbackDiv.textContent = 'Correct!';
            feedbackDiv.style.color = 'green';
            longAnswerDiv.textContent = question.longAnswer;
            correctAnswers++;
        } else {
            feedbackDiv.textContent = 'Incorrect.';
            feedbackDiv.style.color = 'red';
        }
        
        document.getElementById('next-button').style.display = 'block';
        document.querySelectorAll('.choice').forEach(button => button.disabled = true);
    }

    document.getElementById('next-button').onclick = () => {
        currentQuestion++;
        if (currentQuestion < currentQuestions.length) {
            showQuestion();
            startTimer();
        } else {
            endQuiz();
        }
    };

    function endQuiz() {
        const percentage = (correctAnswers / currentQuestions.length) * 100;
        document.querySelector('.quiz-content').innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Thank you for taking the quiz.</p>
            <p>You answered ${correctAnswers} out of ${currentQuestions.length} questions correctly.</p>
            <p>Your score: ${percentage.toFixed(2)}%</p>
        `;
    }

    startQuiz();
})();
