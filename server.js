const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const theDoctor = {
    '1st Doctor':{
        'docName': 'The First Doctor',
        'mainActor': 'William Hartnell',
        'altActor': 'N/A',
        'yearsActive': '1963-1966',
        'firstAppearance': 'An Unearthly Child',
        'companions': 'Badger, Butch, Susan Foreman, Gillian Who, John Who',
        'episodes': [
            {
                'episodeName': 'An Unearthly Child',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/GrYaLHJEZwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The Dalek Invasion Of Earth',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/CZ0ZK21w6jM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'Galaxy 4',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/jxmgqgWeZkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
        'quotes': [
            {
                'quoteText': 'My dear Steven, history sometimes gives us a terrible shock, and that is because we don\'t quite fully understand! Why should we? After all, we\'re too small to realize its final pattern. Therefore, don\'t try and judge it from where you stand.',
                'quoteEpisode':'from episode: THE MASSACRE OF ST. BARTHOLOMEW\'S EVE'
            },
            {
                'quoteText': 'As it happens, I am the Doctor! The original, you might say!',
                'quoteEpisode':'from episode: THE FIVE DOCTORS'
            },
            {
                'quoteText': 'Your ideas are too narrow, too crippled. I am a citizen of the universe, and a gentleman, to boot!',
                'quoteEpisode':'from episode: THE DALEKS\' MASTER PLAN'
            },
            {
                'quoteText': 'Alright? Of course I\'m alright, my child! You know, I am so constantly outwitting the opposition, I tend to forget the delights and satisfaction of the arts - the gentle art of fisticuffs!',
                'quoteEpisode':'from episode: THE ROMANS'
            },
            {
                'quoteText': 'I don\'t make threats. But I do keep promises. And I promise you I shall cause you more trouble than you bargained for, if you don’t return my property!',
                'quoteEpisode':'from episode: THE SENSORITES'
            }
        ]
    },
    '2nd Doctor':{
        'docName': 'The Second Doctor',
        'mainActor': 'Patrick Troughton',
        'altActor': 'Peter Diamond, Tom Laird',
        'yearsActive': '1966-1969',
        'firstAppearance': 'The Tenth Planet',
        'companions': 'Barnabus, Gillian Who, John Who, Marmaduke, Serena',
        'episodes': [
            {
                'episodeName': 'Tomb of the Cybermen',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/zIIKGc6jL8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The Faceless Ones',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/k6qb9tbJBQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': 'There are some corners of the universe which have bred the most terrible things! Things which act against everything we believe in. They must be fought!',
                'quoteEpisode':'from episode: THE MOONBASE'
            },
            {
                'quoteText': 'If there was a bomb under this floor timed to go off in five minutes, would you ask my permission before you ripped up the floorboards?',
                'quoteEpisode':'from episode: THE POWER OF THE DALEKS'
            },
            {
                'quoteText': 'People spend all their time making nice things, and then other people come along and break them!',
                'quoteEpisode':'from episode: THE ENEMY OF THE WORLD'
            },
            {
                'quoteText': 'Logic, my dear Zoe, merely enables one to be wrong with authority.',
                'quoteEpisode':'from episode: THE MIND ROBBER'
            },
            {
                'quoteText': 'You\'ve had this place redecorated, haven\'t you? Hmm, don\'t like it!',
                'quoteEpisode':'from episode: THE FIVE DOCTORS'
            }
        ]
    },
    '3rd Doctor':{
        'docName': 'The Third Doctor',
        'mainActor': 'Jon Pertwee',
        'altActor': 'Bill Burridge, Michael Pinder',
        'yearsActive': '1970-1974',
        'firstAppearance': 'Spearhead from Space',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'Spearhead from Space',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/4GXfH70OrHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': 'It\'s rather a pity, in a way. Now the universe is down to 699 wonders.',
                'quoteEpisode':'from episode: DEATH TO THE DALEKS'
            },
            {
                'quoteText': 'A straight line may be the shortest distance between two points, but it is by no means the most interesting!',
                'quoteEpisode':'from episode: THE TIME WARRIOR'
            },
            {
                'quoteText': 'Courage isn\'t just a matter of not being frightened, you know. It\'s being afraid and doing what you have to do, anyway.',
                'quoteEpisode':'from episode: PLANET OF THE DALEKS'
            },
            {
                'quoteText': 'I reversed the polarity of the neutron flow.',
                'quoteEpisode':'from episode: THE SEA DEVILS'
            },
            {
                'quoteText': 'You know Jo, I sometimes think that military intelligence is a contradiction in terms.',
                'quoteEpisode':'from episode: TERROR OF THE AUTONS'
            }
        ]
    },
    '4th Doctor':{
        'docName': 'The Fourth Doctor',
        'mainActor': 'Tom Baker',
        'altActor': 'Terry Walsh, Tim Bentinck',
        'yearsActive': '1974-1981',
        'firstAppearance': 'Planet of the Spiders',
        'companions': 'Adric, Andric, Ivan Asimoff, Captain, The TARDIS, Figment, K9(Marks I, II & III), Milena, Morris, Nyssa, Putta Pattershaun 5, Romana (I & II), Vesuvius',
        'episodes': [
            {
                'episodeName': 'Genesis of the Daleks',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/RUNLK2oN5c4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': 'Yes, well, I can see your long rest hasn\'t done anything to cure your megalomania. Have a jelly baby.',
                'quoteEpisode':'from episode: DESTINY OF THE DALEKS'
            },
            {
                'quoteText': 'The very powerful and the very stupid have one thing in common - they don\'t change their views to fit the facts. They change the facts to fit their views, which can be uncomfortable if you happen to be one of the facts that needs changing.',
                'quoteEpisode':'from episode: THE FACE OF EVIL'
            },
            {
                'quoteText': 'Oh! Engin, I can feel my hair curling, and that can mean either that it\'s going to rain, or that I\'m on to something!',
                'quoteEpisode':'from episode: THE DEADLY ASSASSIN'
            },
            {
                'quoteText': 'Homo sapiens. What an inventive, invincible species. It\'s only a few million years since they crawled up out of the mud and learned to walk. Puny, defenseless bipeds. They\'ve survived flood, famine, and plague. They\'ve survived cosmic wars and holocausts. And now, here they are, out among the stars, waiting to begin a new life! Ready to out-sit eternity. They\'re indomitable. Indomitable!',
                'quoteEpisode':'from episode: THE ARK IN SPACE'
            },
            {
                'quoteText': 'You may be a doctor. But I am the Doctor. The definite article, you might say!',
                'quoteEpisode':'from episode: ROBOT'
            }
        ]
    },
    '5th Doctor':{
        'docName': 'The Fifth Doctor',
        'mainActor': 'Peter Davison',
        'altActor': 'N/A',
        'yearsActive': '1981-1984',
        'firstAppearance': 'Logopolis',
        'companions': 'Abby, Adric, Alayna, Antranak, Brooke, Gravis, Kamelion, Lady of the MAnor, Nyssa, Melody Pond, River Song, Vislor Turlough, Iris Wildthyme, Zara',
        'episodes': [
            {
                'episodeName': 'Earthshock',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/jFd-RKav86w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': 'Yes, well...that\'s democracy for you. Come on.',
                'quoteEpisode':'from episode: Castrovalva'
            },
            {
                'quoteText': 'You know how it is - you put things off for a day, and next thing you know, it\'s a hundred years later.',
                'quoteEpisode':'from episode: Arc Of Infinity'
            },
            {
                'quoteText': 'Once, a man fell asleep and dreamt he was a frog. When he woke up, he didn\'t know if he was a man who dreamt he was a frog, or a frog who was now dreaming he was a man.',
                'quoteEpisode':'from episode: Snakedance'
            },
            {
                'quoteText': 'Well, there\'s a probability of anything. Statistically speaking, if you gave typewriters to a tree full of monkeys, they\'d eventually produce the works of William Shakespeare.',
                'quoteEpisode':'from episode: Mawdryn Undead'
            },
            {
                'quoteText': 'I\'m definitely not the man I was. Thank goodness!',
                'quoteEpisode':'from episode: The Five Doctors'
            }
        ]
    },
    '6th Doctor':{
        'docName': 'The Sixth Doctor',
        'mainActor': 'Collin Baker',
        'altActor': 'Sylvester McCoy, Chris Laurens',
        'yearsActive': '1984-1986',
        'firstAppearance': 'The Caves of Androzani',
        'companions': 'N/A',
        'episodes': [
            {
                'episodeName': 'The Two Doctors',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/nCjm4KRjsIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': 'This is a situation that requires tact and finesse. Fortunately, I am blessed with both!',
                'quoteEpisode':'from episode: Terror Of The Vervoids'
            },
            {
                'quoteText': 'Planets come and go. Stars perish. Matter disperses, coalesces, forms into other patterns, other worlds. Nothing can be eternal.',
                'quoteEpisode':'from episode: The Mysterious Planet'
            },
            {
                'quoteText': 'Well, since we\'re insulting each other, I can\'t say I care much for your taste in clothes. Doesn\'t do a thing for you.',
                'quoteEpisode':'from episode: Mark Of The Rani'
            },
            {
                'quoteText': 'I would suggest, Peri, that you wait a little before criticizing my new persona. You may well find it isn\'t quite as disagreeable as you think.',
                'quoteEpisode':'from episode: The Twin Dilemma'
            },
            {
                'quoteText': 'Should there be another day, I\'ll explain to you in great detail which of the many time laws I am not allowed to transgress.',
                'quoteEpisode':'from episode: Timelash'
            }
        ]
    },
    '7th Doctor':{
        'docName': 'The Seventh Doctor',
        'mainActor': 'Sylvester McCoy',
        'altActor': 'Matthew Sweet',
        'yearsActive': '1987-1996',
        'firstAppearance': 'Time and the Rani',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'Remembrance of the Daleks',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/IJ-zt-o2mIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': 'Every great decision creates ripples, like a huge boulder dropped in a lake. The ripples merge and rebound off the banks in unforeseeable ways. The heavier the decision, the larger the waves, the more uncertain the consequences.',
                'quoteEpisode':'from episode: Remembrance Of The Daleks'
            },
            {
                'quoteText': 'Anybody remotely interesting is mad in some way or another.',
                'quoteEpisode':'from episode: The Greatest Show In The Galaxy'
            },
            {
                'quoteText': 'Only the madman can see the way clearly through the tangled forest.',
                'quoteEpisode':'from episode: Ghost Light'
            },
            {
                'quoteText': 'Love and hate. Frightening feelings, especially when they\'re trapped struggling beneath the surface.',
                'quoteEpisode':'from episode: The Curse Of Fenric'
            },
            {
                'quoteText': 'There are worlds out there where the sky is burning, and the sea\'s asleep, and the rivers dream; people made of smoke and cities made of song. Somewhere there\'s danger, somewhere there\'s injustice, and somewhere else the tea\'s getting cold. Come on, Ace. We\'ve got work to do!',
                'quoteEpisode':'from episode: Survival'
            }
        ]
    },
    '8th Doctor':{
        'docName': 'The Eighth Doctor',
        'mainActor': 'Paul McGann',
        'altActor': ' ',
        'yearsActive': '1996, 2013',
        'firstAppearance': 'Timewyrm: Revelation',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'Night of the Doctor',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/-U3jrS-uhuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'Doctor Who the Movie',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/xyIv0FrwHFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': '???',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': 'I love humans. Always seeing patterns in things that aren\'t there.',
                'quoteEpisode':'from episode: Doctor Who: The Movie (1996)'
            },
            {
                'quoteText': 'You feel that pounding in your heart? That tightness in the pit of your stomach? The blood rushing to your head, do you know what that is? That\'s adventure. The thrill and the fear, and the joy of stepping into the unknown. That\'s why we\'re all here, and that\'s why we\'re alive!',
                'quoteEpisode':'from episode: Storm Warning (2001)'
            },
            {
                'quoteText': 'I’ve been too methodical recently, I think. Setting coordinates and things, actually deciding where we want to go. I’ve been getting far too safe and predictable these last few incarnations. Do you know I once traveled for centuries without ever knowing where I’d materialize next?',
                'quoteEpisode':'from episode: The Chimes of Midnight (2002)'
            },
            {
                'quoteText': 'I was once a man with a masterplan. I’d seek out injustices, topple governments, all in the name of the greater good. I’d started doing the maths, you see…. This is how evil starts, with the belief that the ends justify the means. But once you start down that road, there’s no turning back. What if you can save a million lives, but you have to let ten people die, or a hundred, or a hundred thousand. Where do you stop?',
                'quoteEpisode':'from episode: The Resurrection of Mars (2010)'
            },
            {
                'quoteText': 'I\'ve seen worlds destroyed, civilizations choked in their cradles, whole races fleeing in terror. I\'ve seen centuries of art, of science, wiped out in an instant. I just saw a beautiful rainforest burn along with every creature in it. I didn\'t even know the planet\'s name! If you\'re prepared to accept that much collateral damage to the rest of the universe, then what exactly are you fighting for? I\'ll protect those with no choice in the matter, no voice.',
                'quoteEpisode':'from episode: The Conscript (2017)'
            }
        ]
    },
    '9th Doctor':{
        'docName': 'The Ninth Doctor',
        'mainActor': 'Christopher Eccleston',
        'altActor': ' ',
        'yearsActive': '2005',
        'firstAppearance': 'The Tomorrow Windows',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'The Empty Child',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/K91dLbiHR14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The Doctor Dances',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/jhklrve5xmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The End of The Earth',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/Wm0hG_LjR_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        'quotes': [
            {
                'quoteText': 'It\'s like when you\'re a kid. The first time they tell you that the world\'s turning, and you just can\'t quite believe it \'cause everything looks like it\'s standing still. I can feel it.  The turn of the Earth. The ground beneath our feet is spinning at a thousand miles an hour, and the entire planet is hurtling around the sun at sixty-seven thousand miles an hour, and I can feel it. We\'re falling through space, you and me, clinging to the skin of this tiny little world, and if we let go? That\'s who I am.',
                'quoteEpisode':'from episode: ROSE'
            },
            {
                'quoteText': 'You think it\'ll last forever. People and cars and concrete, but it won\'t. One day it\'s all gone, even the sky. My planet\'s gone. It\'s dead. It burned, like the Earth. It\'s just rocks and dust. Before its time.',
                'quoteEpisode':'from episode: THE END OF THE WORLD'
            },
            {
                'quoteText': 'I saw the fall of Troy! World War Five! I pushed boxes at the Boston Tea Party! Now I\'m gonna\' die in a dungeon...in Cardiff!',
                'quoteEpisode':'from episode: THE UNQUIET DEAD'
            },
            {
                'quoteText': 'The thing is, Adam, time travel is like visiting Paris. You can\'t just read the guidebook.  You\'ve got to throw yourself in! Eat the food, use the wrong verbs, get charged double and end up kissing complete strangers! Or is that just me?',
                'quoteEpisode':'from episode: THE LONG GAME'
            },
            {
                'quoteText': 'Rose, there\'s a man alive in the world who wasn\'t alive before. An ordinary man! That\'s the most important thing in creation! The whole world\'s different because he\'s alive!',
                'quoteEpisode':'from episode: FATHER\'S DAY'
            }
        ]
    },
    '10th Doctor':{
        'docName': 'The Tenth Doctor',
        'mainActor': 'David Tennant',
        'altActor': 'Colum Regan',
        'yearsActive': '2005-2010',
        'firstAppearance': 'The Parting of the Ways',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'Midnight',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/I266OysPnmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'Blink',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/q2nNzNo_Xps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The Christmas Invasion',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/6cGP069GNvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        'quotes': [
            {
                'quoteText': 'You want weapons? We’re in a library! Books! The best weapons in the world!',
                'quoteEpisode':'from episode: Tooth and Claw'
            },
            {
                'quoteText': 'Some people live longer in twenty years than others do in eighty.',
                'quoteEpisode':'from episode: The Lazarus Experiment'
            },
            {
                'quoteText': 'Allons-y',
                'quoteEpisode':'catchphrase'
            },
            {
                'quoteText': 'You can spend the rest of your life with me, but I can\'t spend the rest of mine with you. I have to live on. Alone. That\'s the curse of the Time Lords.',
                'quoteEpisode':'from episode: School Reunion'
            },
            {
                'quoteText': 'Inside the TARDIS. There\'s one tiny little gap in the universe left, just about to close. And it takes a lot of power to send this projection; I\'m in orbit around a supernova. I\'m burning up a sun, just to say goodbye.',
                'quoteEpisode':'from episode: Doomsday'
            }
        ]
    },
    '11th Doctor':{
        'docName': 'The Eleventh Doctor',
        'mainActor': 'Matt Smith',
        'altActor': 'Daniel Anthony, Andy Jones',
        'yearsActive': '2010-2013',
        'firstAppearance': 'The End of Time',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'Vincent and the Doctor',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/_jjWtUpqV9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The Eleventh Hour',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/0FxKcLId-Ys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The Rings of Akhaten',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/GoVLhUxhdSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        'quotes': [
            {
                'quoteText': 'There are fixed points throughout time where things must stay exactly the way they are. This is not one of them. This is an opportunity! Whatever happens here will create its own timeline, its own reality, a temporal tipping point. The future revolves around you, here...now, so do good!',
                'quoteEpisode':'from episode: Cold Blood'
            },
            {
                'quoteText': 'The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa the bad things don’t always spoil the good things, or make them unimportant. And we definitely added to his pile of good things.',
                'quoteEpisode':'from episode: Vincent And The Doctor'
            },
            {
                'quoteText': 'I\'m the Doctor. I’m a Time Lord from the planet Gallifrey. I stole a time machine and ran away, and I\'ve been flouting the principle law of my own people ever since.',
                'quoteEpisode':'from episode: The Time Of The Doctor'
            },
            {
                'quoteText': 'Safe? No! Of course you\'re not safe! There\'s about a billion other things out there just waiting to burn your whole world, but if you want to pretend you\'re safe just so you can sleep at night, then okay, you\'re safe - but you\'re not really!',
                'quoteEpisode':'from episode: Day Of The Moon'
            },
            {
                'quoteText': 'Through crimson stars and silent stars and tumbling nebulas like oceans set on fire, through empires of glass and civilizations of pure thought, and a whole, terrible, wonderful universe of impossibilities. You see these eyes? They\'re old eyes... and one thing I can tell you, Alex: monsters are real.',
                'quoteEpisode':'from episode: Night Terrors'
            }
        ]
    },
    '12th Doctor':{
        'docName': 'The Twelfth Doctor',
        'mainActor': 'Peter Capaldi',
        'altActor': 'Paul Kasey',
        'yearsActive': '2014-2018',
        'firstAppearance': 'The Day of the Doctor',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'Heaven Sent',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/suUv4slpr3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'The Zygon Inversion',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/BJP9o4BEziI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'Before The Flood',
                'episodeEmbed': '<iframe width="560" height="315" src="https://www.youtube.com/embed/u4SEDzynMiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                'episodeName': 'Listen',
                'link': '<iframe width="560" height="315" src="https://www.youtube.com/embed/xnouj9Yz-Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ],
        'quotes': [
            {
                'quoteText': 'How many seconds in eternity?',
                'quoteEpisode':'from episode: Hell Bent'
            },
            {
                'quoteText': 'I can do whatever the hell I like. You read the stories, you know who I am - And in all that time, did you ever hear anything about anyone who stopped me?',
                'quoteEpisode':'from episode: Face The Raven'
            },
            {
                'quoteText': 'Now, the real question is, Where did I get the cup of tea? Answer: I\'m the Doctor. Just accept it.',
                'quoteEpisode':'from episode: The Witch\'s Familiar'
            },
            {
                'quoteText': 'Do you think I care for you so little that betraying me would make a difference?',
                'quoteEpisode':'from episode: Dark Water'
            },
            {
                'quoteText': 'Nothing\'s Sad Until It\'s Over, And Then Everything Is.',
                'quoteEpisode':'from episode: Hell Bent'
            }
        ]
    },
    '13th Doctor':{
        'docName': 'The Thirteenth Doctor',
        'mainActor': 'Jodie Whittaker',
        'altActor': ' ',
        'yearsActive': '2018-2022',
        'firstAppearance': 'The Death List',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            }
        ]
    },
    '14th Doctor':{
        'docName': 'The Fourteenth Doctor',
        'mainActor': 'Ncuti Gatwa',
        'altActor': ' ',
        'yearsActive': '2023 - ???',
        'firstAppearance': '60th Anniversary',
        'companions': ' ',
        'episodes': [],
        'quotes': [
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            }
        ]
    },
    'War Doctor':{
        'docName': 'The War Doctor',
        'mainActor': 'John Hurt',
        'altActor': 'Paul McGann',
        'yearsActive': '2013',
        'firstAppearance': 'The Name of the Doctor',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': 'Day of the Doctor',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': 'The Name of the Doctor',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            }
        ]
    },
    'Ruth Doctor':{
        'docName': 'The First Doctor',
        'mainActor': ' ',
        'altActor': ' ',
        'yearsActive': ' ',
        'firstAppearance': ' ',
        'companions': ' ',
        'episodes': [
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            },
            {
                'episodeName': '#',
                'episodeEmbed': 'link'
            }
        ],
        'quotes': [
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            },
            {
                'quoteText': ' ',
                'quoteEpisode':'from episode: '
            }
        ]
    }
}

//function for random episodes
let putRandomEpisode()=> {
// Math.random(), divided by episodes.length-1, then return i

 return Math.random(1*theDoctor)

}
//function for random quotes
let putRandomQuote => (){

}
// function for random doctor
let putRandomDoc => (){
    //     let randomDocNum = Math.random();//I need 14 numbers, so 0 - 13
}

let putChosenDoc()=>{

}

//app stuff

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:doctorName', (request, response)=>{
    if(theDoctor[doctorName]){
        response.json((theDoctor[doctorsName]))
    }else{
        response.console.log('The Doctor you\'re looking for is away.')
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})