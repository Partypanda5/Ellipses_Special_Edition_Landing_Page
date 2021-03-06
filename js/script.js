var day = new Date();
var checkTime = day.getHours();
var backgroundImage = document.getElementById('backgroundImage');
var headingImage = document.getElementById('headingImage');
var subtitle = document.getElementById('subtitle');
var textBlock = document.getElementById('textContainer');
var closeAD = document.getElementById('closeAD');
var ad = document.getElementById('digiClenseWrapper');

var block1 = document.getElementById('smallBlock1');
var block2 = document.getElementById('smallBlock2');
var block3 = document.getElementById('smallBlock3');
var block4 = document.getElementById('smallBlock4');
var block5 = document.getElementById('smallBlock5');
var block6 = document.getElementById('smallBlock6');
var block7 = document.getElementById('smallBlock7');
var block8 = document.getElementById('smallBlock8');

var CS = document.getElementById('CS');
var BP = document.getElementById('BP');
var NM = document.getElementById('NM');
var SA = document.getElementById('SA');
var BJS = document.getElementById('BJS');
var NB = document.getElementById('NB');
var DK = document.getElementById('DK');
var RG = document.getElementById('RG');

var screenWidth = window.innerWidth;

//----------------------------------TIME-------------------------------------------

if (checkTime < 20 && checkTime >= 12)
{
    backgroundImage.style.backgroundImage="url(assets/images/backgrounds/toxicsunset.jpg)";
    headingImage.src="assets/images/headings/Joburglastsheader1.png";
    subtitle.style.color = "rgba(225, 166, 255, 0.6)";

    if (screenWidth <= 800)
    {
        backgroundImage.style.backgroundImage="url(assets/images/backgrounds/mobile/toxicSunsetMobile.jpg)";
        console.log("toxicsunset");
        console.log(checkTime);
    }
}
else if (checkTime >= 20 || checkTime < 5) 
{
    backgroundImage.style.backgroundImage="url(assets/images/backgrounds/nightlightpollution.jpg)";
    headingImage.src="assets/images/headings/Joburglastsheader2.png";
    subtitle.style.color = "rgba(247, 233, 217, 0.6)";

    if (screenWidth <= 800)
    {
        backgroundImage.style.backgroundImage="url(assets/images/backgrounds/mobile/nightLightMobile.jpg)";
        console.log("nighttimepollution");
        console.log(checkTime);
    
    }
}
else if (checkTime >= 5 && checkTime <= 12)
{
    backgroundImage.style.backgroundImage="url(assets/images/backgrounds/dustydawn.jpg)";
    headingImage.src="assets/images/headings/Joburglastsheader3.png";
    subtitle.style.color = "rgba(247, 223, 135, 0.6)";

    if (screenWidth <= 800)
    {
        backgroundImage.style.backgroundImage="url(assets/images/backgrounds/mobile/dustyDawnMobile.jpg)";
        console.log("dustydawn");
        console.log(checkTime);
    
    }
}
else
{
    backgroundImage.style.backgroundImage="url(assets/images/backgrounds/toxicsunset.jpg)";
    headingImage.style.src="assets/images/headings/Joburglastsheader1.png";
    subtitle.style.color = "rgba(225, 166, 255, 0.6)";
    console.log(checkTime);
}
//----------------------------------TIME-------------------------------------------

//---------------------------------TINY BLOCKS-------------------------------------

// block1.addEventListener('click', () => {
    
// CS.src = "assets/images/icons/CS_A.png";
// BP.src = "assets/images/icons/BP.png";
// NM.src = "assets/images/icons/NM.png";
// SA.src = "assets/images/icons/SLCA.png";
// BJS.src = "assets/images/icons/BSJ.png";
// NB.src = "assets/images/icons/NBJB.png";
// DK.src = "assets/images/icons/DK.png";
// RG.src = "assets/images/icons/RGWS.png";

// textBlock.innerHTML = 
// "<p class='biographyTitle'>Biography:</p><p>Counterspace</p> <p>Counterspace (@_counterspace) is a Johannesburg-based collaborative architectural studio, directed by an all-women team. Founded in 2015, much of their work emerges from research and interdisciplinary arts-based projects, undertaking: architectural projects; community engagement; exhibition and installation conceptualisation; urban research and design. Counterspace is inspired by Johannesburg and aims to work with developing design for their location and the continent. They have been involved in a number of research, graphic and immersive design projects with national-scale stakeholders, local architects and various South African universities, in addition to various local and international cultural architectural projects in rural and urbanized areas. This contribution to Johannesburg Lasts is led by Sarah de Villiers and Sumayya Vally. </p>";
// });

// block2.addEventListener('click', () => {
    
//     CS.src = "assets/images/icons/CS.png";
//     BP.src = "assets/images/icons/BP_A.png";
//     NM.src = "assets/images/icons/NM.png";
//     SA.src = "assets/images/icons/SLCA.png";
//     BJS.src = "assets/images/icons/BSJ.png";
//     NB.src = "assets/images/icons/NBJB.png";
//     DK.src = "assets/images/icons/DK.png";
//     RG.src = "assets/images/icons/RGWS.png";

//     textBlock.innerHTML = 
// "<p class='biographyTitle'>Biography:</p><p>Brett Pyper</p> <p>Brett Pyper is a South African music and humanities scholar and professional arts practitioner. He earned Master’s degrees as a Fulbright scholar from Emory University, Atlanta, and New York University. Pyper was awarded his Ph.D. on contemporary jazz culture in South Africa by NYU in 2014. He served for over six years as Chief Executive of the Klein Karoo National Arts Festival (KKNK) and is a mentor for The Festival Academy. He is currently Head of the Wits School of Arts at the University of the Witwatersrand, Johannesburg, and is the principal investigator for the Arts Research Africa project, funded by the Andrew W. Mellon Foundation.</p>";
// });

// block3.addEventListener('click', () => {
    
//     CS.src = "assets/images/icons/CS.png";
//     BP.src = "assets/images/icons/BP.png";
//     NM.src = "assets/images/icons/NM_A.png";
//     SA.src = "assets/images/icons/SLCA.png";
//     BJS.src = "assets/images/icons/BSJ.png";
//     NB.src = "assets/images/icons/NBJB.png";
//     DK.src = "assets/images/icons/DK.png";
//     RG.src = "assets/images/icons/RGWS.png";

//     textBlock.innerHTML = 
//     "<p class='biographyTitle'>Biography:</p><p>Nkgopoleng Moloi</p> <p>Nkgopoleng Moloi is a writer and an MA student in contemporary curatorial practices at Wits University. Using archives and exhibition histories, her research explores womxn’s mobility. She attempts to understand and draw attention to factors that enhance or inhibit womxn’s freedom of movement. Writing is a tool Moloi employs to understand the world around her and to explore the things she is excited and intrigued by, particularly history, art, language and architecture.</p>";
//     });

// block4.addEventListener('click', () => {
    
//     CS.src = "assets/images/icons/CS.png";
//     BP.src = "assets/images/icons/BP.png";
//     NM.src = "assets/images/icons/NM.png";
//     SA.src = "assets/images/icons/SLCA_A.png";
//     BJS.src = "assets/images/icons/BSJ.png";
//     NB.src = "assets/images/icons/NBJB.png";
//     DK.src = "assets/images/icons/DK.png";
//     RG.src = "assets/images/icons/RGWS.png";
//     textBlock.innerHTML = 
//     "<p class='biographyTitle'>Biography:</p><p>Sara-Aimee Verity & Lara Cunha</p> <p>Sara-Aimee Verity (b.1981) is a collaborative printmaker who has worked in close proximity to artists throughout her career. In 2016, she established edition ~ verso, an imprint that functions as an ongoing inquiry into the print studio: from conjunctive experimentation and publishing, to the research and knowledge sharing that the workshop generates. Sara-Aimee thinks of her work as a printer as a listening practice, offering a platform and preserve for the development of print works and their numerous spin offs.</p> <p>Lara Cunha is a freelance writer, director and content developer in both television and film. She has a B-Tech Degree in directing and has worked in different capacities on international format reality TV shows (including: Come Dine with Me, The Great South African Bake Off and The Bachelor). Cunha has written and directed CSI videos, TV movies and magazine shows. Her independent short films and documentaries include ‘Child’ (winner of the 2011 Johannesburg 48-hour film project, ‘Palesa Fruit’ (2012) and ‘Dear Betty’ (2014).</p>";
// });

// block5.addEventListener('click', () => {
    
//     CS.src = "assets/images/icons/CS.png";
//     BP.src = "assets/images/icons/BP.png";
//     NM.src = "assets/images/icons/NM.png";
//     SA.src = "assets/images/icons/SLCA.png";
//     BJS.src = "assets/images/icons/BSJ_A.png";
//     NB.src = "assets/images/icons/NBJB.png";
//     DK.src = "assets/images/icons/DK.png";
//     RG.src = "assets/images/icons/RGWS.png";
//     textBlock.innerHTML = 
//     "<p class='biographyTitle'>Biography:</p><p>Brigitta Stone-Johnson</p> <p>Brigitta Stone-Johnson is an artist and architect. She currently lectures at the Wits School of Architecture and Planning, while completing a Creative Practice PhD in Visual Arts at the University of the Witwatersrand. The focus of her work revolves around themes concerning the Anthropocene, posthumanities, and new material theory. Her current work explores the intersectionality between urban landscapes and stoney materials.</p>";
// });

// block6.addEventListener('click', () => {
    
//     CS.src = "assets/images/icons/CS.png";
//     BP.src = "assets/images/icons/BP.png";
//     NM.src = "assets/images/icons/NM.png";
//     SA.src = "assets/images/icons/SLCA.png";
//     BJS.src = "assets/images/icons/BSJ.png";
//     NB.src = "assets/images/icons/NBJB_A.png";
//     DK.src = "assets/images/icons/DK.png";
//     RG.src = "assets/images/icons/RGWS.png";
//     textBlock.innerHTML = 
//     "<p class='biographyTitle'>Biography:</p><p>Nina Barnett and Jeremy Bolen</p> <p>Jeremy Bolen is a Chicago and Atlanta -based artist, researcher, organizer and educator. He is a recent recipient of the Banff Research in Culture Residency in Alberta, Canada; PACT Zollverein Residency in Essen, Germany; Oxbow Faculty Artist Residency in Saugatuck, MI; and Center for Land Use Interpretation Residency in Wendover, Utah; Anthropocene Campus Residency in Berlin. His work has been exhibited extensively and internationally. Bolen currently serves as Assistant Professor of Photography at Georgia State University, is represented by Andrew Rafacz Gallery, Chicago, and is a co-founder of the Deep Time Chicago collective.</p> <p>Nina Barnett lives in Johannesburg. She uses drawing, printmaking, photography, moving image and installation to examine particular locations in relation to the body, deep time and vertical scale. Her work seeks connections between the geographical, the experienced and the materiality of surfaces,and questions the relationship between theoretical, surmised and accidental logic. She received her MFA from the University of Illinois at Chicago, and her BFA from the University of the Witwatersrand. Her work has been widely exhibited. Notable residencies include the Cite des Arts in Paris; AIR in Bergen, Norway; PROGR in Bern, Switzerland and Summer Forum, Joshua Tree.</p>";
// });


// block7.addEventListener('click', () => {
    
//     CS.src = "assets/images/icons/CS.png";
//     BP.src = "assets/images/icons/BP.png";
//     NM.src = "assets/images/icons/NM.png";
//     SA.src = "assets/images/icons/SLCA.png";
//     BJS.src = "assets/images/icons/BSJ.png";
//     NB.src = "assets/images/icons/NBJB.png";
//     DK.src = "assets/images/icons/DK_A.png";
//     RG.src = "assets/images/icons/RGWS.png";
//     textBlock.innerHTML = 
//     "<p class='biographyTitle'>Biography:</p><p>Dorothee Kreutzfeldt</p> <p>Dorothee Kreutzfeldt lives in Johannesburg and lectures at the Wits School of Arts (Fine Art), University of the Witwatersrand. Her artistic practice and research have been preoccupied with spatial realities and imaginations, particularly in the post-Apartheid context of South Africa. This has included researching the impact of bomb attacks in Cape Town in 1999 (‘Fresh’ Residency, 2001), to the ways in which colonial and global histories are written into the disparate, racialised urbanities and intensities of Johannesburg. She completed her MAFA in 2004 and co-published the book Not No Place, Johannesburg Fragments of Spaces and Times with Bettina Malcomess in 2014.</p>";
// });

// block8.addEventListener('click', () => {
    
//     CS.src = "assets/images/icons/CS.png";
//     BP.src = "assets/images/icons/BP.png";
//     NM.src = "assets/images/icons/NM.png";
//     SA.src = "assets/images/icons/SLCA.png";
//     BJS.src = "assets/images/icons/BSJ.png";
//     NB.src = "assets/images/icons/NBJB.png";
//     DK.src = "assets/images/icons/DK.png";
//     RG.src = "assets/images/icons/RGWS_A.png";
//     textBlock.innerHTML = 
//     "<p class='biographyTitle'>Biography:</p><p>Riley Grant and William Shoki </p> <p>Riley Grant is a Johannesburg-based artist, musician and student currently completing his final year in Visual Arts at the University of the Witwatersrand. William Shoki is a Johannesburg-based writer and philosophy student at the University of the Witwatersrand.</p>";
// });

//---------------------------------TINY BLOCKS-------------------------------------

//---------------------------------ICON IMAGES-------------------------------------

CS.addEventListener('click', () => {
    
    CS.src = "assets/images/NoNameIcons/CS_A.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM.png";
    SA.src = "assets/images/NoNameIcons/SLCA.png";
    BJS.src = "assets/images/NoNameIcons/BSJ.png";
    NB.src = "assets/images/NoNameIcons/NBJB.png";
    DK.src = "assets/images/NoNameIcons/DK.png";
    RG.src = "assets/images/NoNameIcons/RGWS.png";
    
    textBlock.innerHTML = 
"<p class='biographyTitle'>Abstract:</p><p>‘You Have A Message!’</p> <p>What of Johannesburg’s many deaths – and what if these could speak? What ghosts would rise, what would they say about Johannesburg’s continuities – its political, economic, and ecological dormancies and relapses? Operating at a multitude of spatial layers, this project seeks to reveal unseen currents, seepages, damage and ecological alterations, emergent through Johannesburg’s mining landscapes. The project conjures a speculative imaginary, which attempts to simultaneously narrate both past and future, where lasting consequences of mining activities in Johannesburg become intertwined in the supernatural and economic.</p> <p>As similarly observed in mining remnants found to the west of the city, the imaginary begins with land-scale registers of ground-radioactivity in the Village Main mine area. Transfusing northward through groundwater, it reaches the roots of a nearby impepho plantation. Burning of the crop some weeks later produces a lasting augmented potency. The impepho’s effects exponentially flourish. A spiritual network metastasises – a frequency of millions of voices, messages, and invocations exponentially growing – accessible through a small portal in Jeppestown, Johannesburg. The project traces the speculative by-product economy of this spatial and temporal anomaly through Kholwa’s enterprise: a micro-radio station owner on the fringes of Kwa Mai Mai market. She has acquired the ability to tap into this supernatural communication network using a massive transistor radio that she has set up on the roof of her shop. Kholwa regularly holds programming of various selected contributions by people ‘on the other side’ of Johannesburg. There are several other network-channels like her in the area. Adverts of their offerings are pasted to every visible concrete bin, bollard or electrical distribution box in Johannesburg. The presence of Johannesburg and its connected deceased remains perpetual, continuous, lasting – a chaotic yet profound archive of trauma adjacent to everyday Jo’burg life.<br/> <br/>  </p> <a href='https://ellipses.org.za/Johannesburg_Lasts/Counterspace/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button></a>";
});

    BP.addEventListener('click', () => {
    
        CS.src = "assets/images/NoNameIcons/CS.png";
        BP.src = "assets/images/NoNameIcons/BP_A.png";
        NM.src = "assets/images/NoNameIcons/NM.png";
        SA.src = "assets/images/NoNameIcons/SLCA.png";
        BJS.src = "assets/images/NoNameIcons/BSJ.png";
        NB.src = "assets/images/NoNameIcons/NBJB.png";
        DK.src = "assets/images/NoNameIcons/DK.png";
        RG.src = "assets/images/NoNameIcons/RGWS.png";
    
        textBlock.innerHTML = 
"<p class='biographyTitle'>Abstract:</p><p>The Bantu Mens’ Social Centre</p> <p>From the mid 1920s, the Bantu Mens’ Social Centre (BMSC) served as a lively centre of cultural activity for black men – and some women – in Johannesburg, attracting and nurturing many outstanding intellectuals and artists. This piece revisits the site nearly a full century after its opening, foregrounding how practices of listening, aurality and their attendant ways of knowing have shaped public and private urban experiences. Though the BMSC was silenced as a site of musical sociability by apartheid, the piece reflects on the extent to which the city’s jazz cultures have sonic afterlives that extend across historical ruptures, even if they have travelled elsewhere. Presented here as a sound essay, the piece has been recorded being read aloud in the hall of the BMSC. The sounds of the author’s voice resonate in the space to which it refers, inscribing its contemporary sonic materiality in a reflection on what lasts of the BMSC, and also what has been lost. The spoken text (which can also be read in textual form) is accompanied by two other audio sources, each with their own spatiality and temporality: the ambient resonance of the hall, and a 1959 recording by local jazz icon Zakes Nkosi, named after the BMSC.<br/> <br/></p><a href='https://ellipses.org.za/Johannesburg_Lasts/BantuMensSocialCenre/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button></a>";
});

NM.addEventListener('click', () => {
    
    CS.src = "assets/images/NoNameIcons/CS.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM_A.png";
    SA.src = "assets/images/NoNameIcons/SLCA.png";
    BJS.src = "assets/images/NoNameIcons/BSJ.png";
    NB.src = "assets/images/NoNameIcons/NBJB.png";
    DK.src = "assets/images/NoNameIcons/DK.png";
    RG.src = "assets/images/NoNameIcons/RGWS.png";

    textBlock.innerHTML = 
"<p class='biographyTitle'>Abstract:</p><p>Narratives Of Mobility</p> <p>Patriarchy, misogyny and their legacy has resulted in a pervasive culture that makes womxn feel unsafe in central Johannesburg. Womxn have had to find strategies of survival to allow them to navigate. These strategies entail personal mappings of routes and lines that allow womxn to move through the city. I will examine my journey of walking from the Gautrain Park Station to the Wits Art Museum, via Jorissen Street, using my experiences as a method to generate insight and knowledge. My research is underpinned by the idea of “theorising from the epicentres of our own agency”. I think through how womxn can use their personal, embodied experiences as a valid starting point from which knowledge can be produced. </p> <p>The title of this project contains two words that can function within a particular framework/reading. The first is “narrative” and the second is ‘navigate’. ‘Narrative’ is a retelling of an account of specific events that has taken place. Narrative becomes a method to capture experiences where each step functions as a proxy for memory. By presenting this project as a narrative, I make personal observations based on my own perceptions. I am aware that my experiences will be influenced by race and class as well as how my body is read by others. The word “navigate” draws attention to the inherent difficulty experienced in attempting to move from one place to the next as a Black womxn … and doing so safely.</p> <p>I am concerned with the idea of safety, or rather, perceptions of safety. For me, safety means the ability to complete the journey without incident. An incident can either be a verbal provocation (including but not limited to catcalling) and in extreme cases, may include a physical provocation such as mugging, (wo)manhandling and/or rape.<br/> <br/><p/><a href='https://www.ellipses.org.za/Johannesburg_Lasts/NarrativesOfMobility/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button>";
});

SA.addEventListener('click', () => {
    
    CS.src = "assets/images/NoNameIcons/CS.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM.png";
    SA.src = "assets/images/NoNameIcons/SLCA_A.png";
    BJS.src = "assets/images/NoNameIcons/BSJ.png";
    NB.src = "assets/images/NoNameIcons/NBJB.png";
    DK.src = "assets/images/NoNameIcons/DK.png";
    RG.src = "assets/images/NoNameIcons/RGWS.png";
    textBlock.innerHTML = 
    "<p class='biographyTitle'>Abstract:</p><p>Potential Heaps Of Dust</p> <p>There is nothing of particular significance to Springs. No landmarks of importance or stops worthwhile. Not unlike other small towns on the outskirts of Johannesburg, Springs was a supplier in the chain of natural resources and labour to the development of the big city. Coal, uranium, railways and power lines, slag heaps and tailings dams. Travelling along the N17 leaving Johannesburg, there is little geographical shift. Less trees, grasses to catch the dust, perhaps less to look at. The expanse is haunted with a thickness to the air, as punctuated as the sinkholes it all rests upon. Dissonant gaps in the series of photographs that follow are a result of an exchange of sorts between two friends wilfully ungluing a silly sense of identity. The identity of a place.</p> <p>What happens if you believe the stories you get told?<br/> <br/></p><a href='https://www.ellipses.org.za/Johannesburg_Lasts/HeapsOfPotentialDust/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button>";
});

BJS.addEventListener('click', () => {
    
    CS.src = "assets/images/NoNameIcons/CS.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM.png";
    SA.src = "assets/images/NoNameIcons/SLCA.png";
    BJS.src = "assets/images/NoNameIcons/BSJ_A.png";
    NB.src = "assets/images/NoNameIcons/NBJB.png";
    DK.src = "assets/images/NoNameIcons/DK.png";
    RG.src = "assets/images/NoNameIcons/RGWS.png";
    textBlock.innerHTML = 
    "<p class='biographyTitle'>Abstract:</p><p>Resistance To Ruin - Lithic Encounters</p> <p>Have you ever noticed that the wild, or wilderness is always elsewhere? Another place, primordial forest, wild savanna, desert, mountain range unspoiled by the human, thriving elsewhere? Yet even a cursory investigation of dirt and crack reveals a complex biome of insistent thriving below our feet, bringing wilderness into the current urban landscape.</p> <p>This project investigates sites of decay on and around the Witwatersrand Ridge as spaces of geological and ecological enmeshment, where stoney matter presents a lively subversive material agency, intertwining with modern stoney materials, and other nonhuman agents.</p>In this project, the writing and visual essays attempt to give voice to the stoney matter of urban spaces which we have rendered as terra nullius by narrating open urban space as wasteland. Resistance and Ruin attempts to engage the online reader in a multi-sensory experience of walking, being and becoming enmeshed in the weather worlds of stone.<br/> <br/><p> </p><a href='https://www.ellipses.org.za/Johannesburg_Lasts/ResistanceToRuin/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button>";
});

NB.addEventListener('click', () => {
    
    CS.src = "assets/images/NoNameIcons/CS.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM.png";
    SA.src = "assets/images/NoNameIcons/SLCA.png";
    BJS.src = "assets/images/NoNameIcons/BSJ.png";
    NB.src = "assets/images/NoNameIcons/NBJB_A.png";
    DK.src = "assets/images/NoNameIcons/DK.png";
    RG.src = "assets/images/NoNameIcons/RGWS.png";
    textBlock.innerHTML = 
    "<p class='biographyTitle'>Abstract:</p><p>And so we may feel echoes</p> <p>And so we may feel echos is a film and research paper focusing on particulate and the ways in which particles interact with humans, non-humans and landscapes. This researched-based exploration considers Johannesburg as an origin-point, an archive and a site of detection for particles of many kinds: those created by human movement, extraction and industry, and those which are formed as part of biological systems. Through examples as varied as pollen, neutrinos, mine dust and the Saharan Dust Plume, the piece asks: how do we detect or sense these particles and what do they have to offer? How and where do they travel and what impact do they have on the humans and non-humans they interact with? Do particles have memory?<br/> <br/></p><a href='https://ellipses.org.za//Johannesburg_Lasts/AndSoWeMayFeelEchoes/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button>";
});

DK.addEventListener('click', () => {
    
    CS.src = "assets/images/NoNameIcons/CS.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM.png";
    SA.src = "assets/images/NoNameIcons/SLCA.png";
    BJS.src = "assets/images/NoNameIcons/BSJ.png";
    NB.src = "assets/images/NoNameIcons/NBJB.png";
    DK.src = "assets/images/NoNameIcons/DK_A.png";
    RG.src = "assets/images/NoNameIcons/RGWS.png";
    textBlock.innerHTML = 
    "<p class='biographyTitle'>Abstract:</p><p>8 Seconds in Uneven Numbers</p> <p>What emerges or is withheld in the demolition of a burnt-out building in the Johannesburg city centre at the end of November 2019? To this day, the cause of a fire at the Bank of Lisbon in September 2018, which lasted for 3 days and led to its implosion, has not been disclosed publicly. This despite a series of legal investigations implicating provincial government departments, city offices and the Johannesburg Emergency Services. The Bank of Lisbon housed various departments, including the Department of Health, when it started to burn. On the first day of the fire, three firemen lost their lives as they got trapped on the 23rd floor. It emerged that fire hydrants in the building were dry. Grievous issues of occupational health and safety were ignored for years, despite repeated complaints by office workers and labour unions. At the time of the fire, the building should not have been occupied as it did not meet basic compliance standards.</p> <p>This project consists of three parts that evolve around the unfolding narrative. It begins with a video recording of the implosion, filmed from the evacuated student residency directly opposite the Bank of Lisbon (a collaboration with Simon Gush and Andrei van Wyk). This is followed by a text that collates online information around the fire, sourced mainly from available news reports and interviews. The final part is a sound piece by Andrei van Wyk: a re-composition of the cameras’ audio recordings that proposes a sonic meditation on the collapse of architecture and a search for a vertical movement through a now imagined space. Between these instances is the attempt to think through Locard’s exchange principle, that ‘every contact leaves a trace’[1] and acknowledge the disparate presence of traces in the city’s nervous system that echo an alternate, socially legitimate reality. </p><br/> <br/><a href='https://ellipses.org.za/Johannesburg_Lasts/8SecondsInUnevenNumbers/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button>";
});

RG.addEventListener('click', () => {
    
    CS.src = "assets/images/NoNameIcons/CS.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM.png";
    SA.src = "assets/images/NoNameIcons/SLCA.png";
    BJS.src = "assets/images/NoNameIcons/BSJ.png";
    NB.src = "assets/images/NoNameIcons/NBJB.png";
    DK.src = "assets/images/NoNameIcons/DK.png";
    RG.src = "assets/images/NoNameIcons/RGWS_A.png";
    textBlock.innerHTML = 
    "<p class='biographyTitle'>Abstract:</p><p>Working Life</p> <p>This paper is an attempt to broadly review the historical transformation of workplace control, in order to understand a newer instantiation of control encapsulated by the “activity-based workplace” model in high commitment organizations. It uses two new office buildings in Johannesburg as suggestive (but not conclusive) illustrations in order to highlight how this new workplace set-up bolsters managerial control by blurring the distinction between work and life. At the same time, it projects an image of being more free and laidback. In the broader context of the ongoing COVID-19 pandemic, which is changing the world of work, we suggest that the greater white-collar shift to home-working represents the final colonization of work over life.<br/> <br/></p><a href='https://www.ellipses.org.za/Johannesburg_Lasts/WorkingLife/index.html' target='_blank'> <button class='launchButton'>LAUNCH PROJECT</button>";
});

headingImage.addEventListener('click', () => {
    CS.src = "assets/images/NoNameIcons/CS.png";
    BP.src = "assets/images/NoNameIcons/BP.png";
    NM.src = "assets/images/NoNameIcons/NM.png";
    SA.src = "assets/images/NoNameIcons/SLCA.png";
    BJS.src = "assets/images/NoNameIcons/BSJ.png";
    NB.src = "assets/images/NoNameIcons/NBJB.png";
    DK.src = "assets/images/NoNameIcons/DK.png";
    RG.src = "assets/images/NoNameIcons/RGWS.png";
    textBlock.innerHTML = 
    "<p class='biographyTitle'>Abstract:</p><p>Works by Riley Grant & William Shoki, Sara-Aimee Verity &amp; Lara Cunha, Counterspace Studio, Dorothee Kreutzfeldt, Nina Barnett & Jeremy Bolen, Brett Pyper, Nkgopoleng Moloi, Brigitta Stone-Johnson and Digicleanse</p><p>Editors: Naadira Patel, Jarrett Erasmus, Tara Weber, Skye Quadling, Andrei van Wyk, Karin Tan and Ruth Sacks</p><p>Johannesburg Lasts is a project that aims to think about residues, traces and the lastingness of the legacies that built the city. Conceptualised across a collective seven practitioners the project looks at xxxxx</p><p>Nine projects tackle the idea of the last or the lasting or the lost through forms that push at and interrogate how Johannesburg lives on, but more importantly how the effects of Johannesburg’s birth ultimately affect contemporary life today. Some of the themes include securitization and surveillance, the stickiness of dust, narratives of mobility, histories of jazz, radioactive spirits and heaps of potential dust.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/> <br/></p>";
});


//----------------------------------ACCORDIAN LOGIC------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//------------------------------END ACCORDIAN LOGIC------------------------------

//--------------------------------CLICK ADVERT LOGIC------------------------------

closeAD.addEventListener('click', () => {
    ad.style.display = 'none';
});

//--------------------------------CLICK ADVERT LOGIC------------------------------