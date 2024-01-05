(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\Angular\fakezoom\fakezoom-master\src\main.ts */"zUnb");


/***/ }),

/***/ "2aLp":
/*!**************************************!*\
  !*** ./src/app/call/call.service.ts ***!
  \**************************************/
/*! exports provided: voiceConfig, puzzles, CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voiceConfig", function() { return voiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puzzles", function() { return puzzles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



const voiceConfig = {
    '1': {
        user: 'unmasked',
        person1: 'unmasked',
        person2: 'unmasked',
        sign: 'U/U',
    },
    '2': {
        user: 'unmasked',
        person1: 'masked',
        person2: 'masked',
        sign: 'U/M',
    },
    '3': {
        user: 'masked',
        person1: 'unmasked',
        person2: 'unmasked',
        sign: 'M/U',
    },
    '4': {
        user: 'masked',
        person1: 'masked',
        person2: 'masked',
        sign: 'M/M',
    },
};
const puzzles = [
    {
        id: 7,
        img: '7_img.png',
        clips: [
            {
                speaker: 'person1',
                followedDelay: 10,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 15,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
        ],
    },
    {
        id: 10,
        img: '7_img.png',
        clips: [
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 20,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
        ],
    },
    {
        id: 13,
        img: '13_img.png',
        clips: [
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 15,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
        ],
    },
    {
        id: 15,
        img: '15_img.png',
        clips: [
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 15,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
        ]
    },
    {
        id: 17,
        img: '17_img.png',
        clips: [
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 25,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 25,
            },
            {
                speaker: 'person1',
                followedDelay: 5,
            },
            {
                speaker: 'person2',
                followedDelay: 5,
            },
        ],
    }
];
class CallService {
    constructor() {
        this.callSettings = {};
        this.currentPuzzleId = 7;
        this.metaData = {};
        this.voiceChangerTestStart = moment__WEBPACK_IMPORTED_MODULE_1__();
        this.voiceChangerTestEnd = moment__WEBPACK_IMPORTED_MODULE_1__().add(10, 'seconds');
    }
    getPuzzleById(id) {
        return puzzles.find((p) => p.id === id);
    }
}
CallService.ɵfac = function CallService_Factory(t) { return new (t || CallService)(); };
CallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallService, factory: CallService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4j91":
/*!************************************!*\
  !*** ./src/app/setup/sentences.ts ***!
  \************************************/
/*! exports provided: sentences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentences", function() { return sentences; });
const sentences = [
    {
        "sentence": "The quick brown fox jumps over the lazy dog."
    },
    {
        "sentence": "My Mum tries to be cool by saying that she likes all the same things that I do."
    },
    {
        "sentence": "A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt."
    },
    {
        "sentence": "Last Friday I saw a spotted striped blue worm shake hands with a legless lizard."
    },
    {
        "sentence": "A song can make or ruin a person’s day if they let it get to them."
    },
    {
        "sentence": "Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind."
    },
    {
        "sentence": "Writing a list of random sentences is harder than I initially thought it would be."
    },
    {
        "sentence": "Lets all be unique together until we realise we are all the same."
    },
    {
        "sentence": "If I don’t like something, I’ll stay away from it."
    },
    {
        "sentence": "I love eating toasted cheese and tuna sandwiches."
    },
    {
        "sentence": "If you like tuna and tomato sauce, try combining the two, it’s really not as bad as it sounds."
    },
    {
        "sentence": "Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn’t and they don’t recommend anyone else do it either."
    },
    {
        "sentence": "Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all."
    },
    {
        "sentence": "When I was little I had a car door slammed shut on my hand and I still remember it quite vividly."
    },
    {
        "sentence": "The clock within this blog and the clock on my laptop are 1 hour different from each other."
    },
    {
        "sentence": "I want to buy a onesie… but know it won’t suit me."
    },
    {
        "sentence": "I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was."
    },
    {
        "sentence": "I currently have 4 windows open up… and I don’t know why."
    },
    {
        "sentence": "I often see the time 11:11 or 12:34 on clocks."
    },
    {
        "sentence": "This is the last random sentence I will be writing and I am going to stop mid-sent"
    },
    {
        "sentence": "We need to rent a room for our party."
    },
    {
        "sentence": "Yeah, I think it's a good environment for learning English."
    },
    {
        "sentence": "The lake is a long way from here."
    },
    {
        "sentence": "This is a Japanese doll."
    },
    {
        "sentence": "I hear that Nancy is very pretty."
    },
    {
        "sentence": "She was too short to see over the fence."
    },
    {
        "sentence": "He told us a very exciting adventure story."
    },
    {
        "sentence": "She always speaks to him in a loud voice."
    },
    {
        "sentence": "I want more detailed information."
    },
    {
        "sentence": "I checked to make sure that he was still alive."
    },
    {
        "sentence": "I'd rather be a bird than a fish."
    },
    {
        "sentence": "Mary plays the piano."
    },
    {
        "sentence": "She did her best to help him."
    },
    {
        "sentence": "She borrowed the book from him many years ago and hasn't yet returned it."
    },
    {
        "sentence": "She wrote him a long letter, but he didn't read it."
    },
    {
        "sentence": "Please wait outside of the house."
    },
    {
        "sentence": "Two seats were vacant."
    },
    {
        "sentence": "Tom got a small piece of pie."
    },
    {
        "sentence": "She folded her handkerchief neatly."
    },
    {
        "sentence": "We have a lot of rain in June."
    },
    {
        "sentence": "I am never at home on Sundays."
    },
    {
        "sentence": "Don't step on the broken glass."
    },
    {
        "sentence": "She advised him to come back at once."
    },
    {
        "sentence": "Let me help you with your baggage."
    },
    {
        "sentence": "The book is in front of the table."
    },
    {
        "sentence": "The mysterious diary records the voice."
    },
    {
        "sentence": "The stranger officiates the meal."
    },
    {
        "sentence": "The shooter says goodbye to his love."
    },
    {
        "sentence": "A glittering gem is not enough."
    },
    {
        "sentence": "The memory we used to share is no longer coherent."
    },
    {
        "sentence": "The old apple revels in its authority."
    },
    {
        "sentence": "Rock music approaches at high velocity."
    },
    {
        "sentence": "Sixty-Four comes asking for bread."
    },
    {
        "sentence": "Abstraction is often one floor above you."
    },
    {
        "sentence": "The river stole the gods."
    },
    {
        "sentence": "Joe made the sugar cookies; Susan decorated them."
    },
    {
        "sentence": "The sky is clear; the stars are twinkling."
    },
    {
        "sentence": "The waves were crashing on the shore; it was a lovely sight."
    },
    {
        "sentence": "There were white out conditions in the town; subsequently, the roads were impassable."
    },
    {
        "sentence": "Check back tomorrow; I will see if the book has arrived."
    },
    {
        "sentence": "He said he was not there yesterday; however, many people saw him there."
    },
    {
        "sentence": "I am happy to take your donation; any amount will be greatly appreciated."
    },
    {
        "sentence": "She only paints with bold colors; she does not like pastels."
    },
    {
        "sentence": "She works two jobs to make ends meet; at least, that was her reason for not having time to join us."
    },
    {
        "sentence": "Malls are great places to shop; I can find everything I need under one roof."
    },
    {
        "sentence": "Italy is my favorite country; in fact, I plan to spend two weeks there next year."
    },
    {
        "sentence": "He turned in the research paper on Friday; otherwise, he would have not passed the class."
    },
    {
        "sentence": "She did not cheat on the test, for it was not the right thing to do."
    },
    {
        "sentence": "I think I will buy the red car, or I will lease the blue one."
    },
    {
        "sentence": "I really want to go to work, but I am too sick to drive."
    },
    {
        "sentence": "I am counting my calories, yet I really want dessert."
    },
    {
        "sentence": "He ran out of money, so he had to stop playing poker."
    },
    {
        "sentence": "They got there early, and they got really good seats."
    },
    {
        "sentence": "There was no ice cream in the freezer, nor did they have money to go to the store."
    },
    {
        "sentence": "Everyone was busy, so I went to the movie alone."
    },
    {
        "sentence": "I would have gotten the promotion, but my attendance wasn’t good enough."
    },
    {
        "sentence": "It was getting dark, and we weren’t there yet."
    },
    {
        "sentence": "Cats are good pets, for they are clean and are not noisy."
    },
    {
        "sentence": "We have never been to Asia, nor have we visited Africa."
    },
    {
        "sentence": "He didn’t want to go to the dentist, yet he went anyway."
    },
    {
        "sentence": "Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?"
    },
    {
        "sentence": "All you need to do is pick up the pen and begin."
    },
    {
        "sentence": "Had he known what was going to happen, he would have never stepped into the shower."
    },
    {
        "sentence": "She hadn't had her cup of coffee, and that made things all the worse."
    },
    {
        "sentence": "All she wanted was the answer, but she had no idea how much she would hate it."
    },
    {
        "sentence": "It must be five o'clock somewhere."
    },
    {
        "sentence": "He went back to the video to see what had been recorded and was shocked at what he saw."
    },
    {
        "sentence": "Behind the window was a reflection that only instilled fear."
    },
    {
        "sentence": "That was how he came to win $1 million."
    },
    {
        "sentence": "She could hear him in the shower singing with a joy she hoped he'd retain after she delivered the news."
    },
    {
        "sentence": "As he looked out the window, he saw a clown walk by."
    },
    {
        "sentence": "There should have been a time and a place, but this wasn't it."
    },
    {
        "sentence": "It was the best sandcastle he had ever seen."
    },
    {
        "sentence": "There's an art to getting your way, and spitting olive pits across the table isn't it."
    },
    {
        "sentence": "They say that dogs are man's best friend, but this cat was setting out to sabotage that theory."
    },
    {
        "sentence": "Of course, she loves her pink bunny slippers."
    },
    {
        "sentence": "Don't put peanut butter on the dog's nose."
    },
    {
        "sentence": "She can live her life however she wants as long as she listens to what I have to say."
    },
    {
        "sentence": "There are few things better in life than a slice of pie."
    },
    {
        "sentence": "Not all people who wander are lost."
    },
    {
        "sentence": "The knives were out and she was sharpening hers."
    },
    {
        "sentence": "She felt that chill that makes the hairs on the back of your neck when he walked into the room."
    },
    {
        "sentence": "Don't piss in my garden and tell me you're trying to help my plants grow."
    },
    {
        "sentence": "He found the end of the rainbow and was surprised at what he found there."
    },
    {
        "sentence": "Two more days and all his problems would be solved."
    },
    {
        "sentence": "Love is not like pizza."
    },
    {
        "sentence": "There's a reason that roses have thorns."
    },
    {
        "sentence": "He looked behind the door and didn't like what he saw."
    },
    {
        "sentence": "He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there."
    },
    {
        "sentence": "He barked orders at his daughters but they just stared back with amusement."
    },
    {
        "sentence": "He had a hidden stash underneath the floorboards in the back room of the house."
    },
    {
        "sentence": "Nobody loves a pig wearing lipstick."
    },
    {
        "sentence": "They called out her name time and again, but were met with nothing but silence."
    },
    {
        "sentence": "He had accidentally hacked into his company's server."
    },
    {
        "sentence": "You can't compare apples and oranges, but what about bananas and plantains?"
    },
    {
        "sentence": "It doesn't sound like that will ever be on my travel list."
    },
    {
        "sentence": "He swore he just saw his sushi move."
    },
    {
        "sentence": "He had reached the point where he was paranoid about being paranoid."
    },
    {
        "sentence": "The sun had set and so had his dreams."
    },
    {
        "sentence": "He learned the important lesson that a picnic at the beach on a windy day is a bad idea."
    },
    {
        "sentence": "Be careful with that butter knife."
    },
    {
        "sentence": "He didn't heed the warning and it had turned out surprisingly well."
    },
    {
        "sentence": "It was a slippery slope and he was willing to slide all the way to the deepest depths."
    },
    {
        "sentence": "He would only survive if he kept the fire going and he could hear thunder in the distance."
    },
    {
        "sentence": "His confidence would have bee admirable if it wasn't for his stupidity."
    },
    {
        "sentence": "She let the balloon float up into the air with her hopes and dreams."
    },
    {
        "sentence": "his seven-layer cake only had six layers."
    },
    {
        "sentence": "There was coal in his stocking and he was thrilled."
    },
    {
        "sentence": "The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along."
    },
    {
        "sentence": "So long and thanks for the fish."
    },
    {
        "sentence": "The random sentence generator generated a random sentence about a random sentence."
    },
    {
        "sentence": "She says she has the ability to hear the soundtrack of your life."
    },
    {
        "sentence": "It turns out you don't need all that stuff you insisted you did."
    },
    {
        "sentence": "The irony of the situation wasn't lost on anyone in the room."
    },
    {
        "sentence": "The truth is that you pay for your lifestyle in hours."
    },
    {
        "sentence": "The light in his life was actually a fire burning all around him."
    },
    {
        "sentence": "Three generations with six decades of life experience."
    },
    {
        "sentence": "Nothing seemed out of place except the washing machine in the bar."
    },
    {
        "sentence": "He decided to live his life by the big beats manifesto."
    },
    {
        "sentence": "The secret ingredient to his wonderful life was crime."
    },
    {
        "sentence": "He was sitting in a trash can with high street class."
    },
    {
        "sentence": "The fact that there's a stairway to heaven and a highway to hell explains life well."
    },
    {
        "sentence": "I met an interesting turtle while the song on the radio blasted away."
    },
    {
        "sentence": "At that moment he wasn't listening to music, he was living an experience."
    },
    {
        "sentence": "This made him feel like an old-style rootbeer float smells."
    },
    {
        "sentence": "In the end, he realized he could see sound and hear words."
    },
    {
        "sentence": "The fish listened intently to what the frogs had to say."
    },
    {
        "sentence": "He stepped gingerly onto the bridge knowing that enchantment awaited on the other side."
    },
    {
        "sentence": "He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it."
    },
    {
        "sentence": "At that moment she realized she had a sixth sense."
    },
    {
        "sentence": "He wondered why at 18 he was old enough to go to war, but not old enough to buy cigarettes."
    },
    {
        "sentence": "She saw no irony asking me to change but wanting me to accept her for who she is."
    },
    {
        "sentence": "The fox in the tophat whispered into the ear of the rabbit."
    },
    {
        "sentence": "There can never be too many cherries on an ice cream sundae."
    },
    {
        "sentence": "The minute she landed she understood the reason this was a fly-over state."
    },
    {
        "sentence": "I just wanted to tell you I could see the love you have for your child by the way you look at her."
    },
    {
        "sentence": "Everyone says they love nature until they realize how dangerous she can be."
    },
    {
        "sentence": "He was willing to find the depths of the rabbit hole in order to be with her."
    },
    {
        "sentence": "She wore green lipstick like a fashion icon."
    },
    {
        "sentence": "Never underestimate the willingness of the greedy to throw you under the bus."
    },
    {
        "sentence": "She finally understood that grief was her love with no place for it to go."
    },
    {
        "sentence": "Each person who knows you has a different perception of who you are."
    },
    {
        "sentence": "The beauty of the African sunset disguised the danger lurking nearby."
    },
    {
        "sentence": "They ran around the corner to find that they had traveled back in time."
    },
    {
        "sentence": "25 years later, she still regretted that specific moment."
    },
    {
        "sentence": "In that instant, everything changed."
    },
    {
        "sentence": "He hated that he loved what she hated about hate."
    },
    {
        "sentence": "Random words in front of other random words create a random sentence."
    },
    {
        "sentence": "The body piercing didn't go exactly as he expected."
    },
    {
        "sentence": "The pigs were insulted that they were named hamburgers."
    },
    {
        "sentence": "It caught him off guard that space smelled of seared steak."
    },
    {
        "sentence": "As he waited for the shower to warm, he noticed that he could hear water change temperature."
    },
    {
        "sentence": "He took one look at what was under the table and noped the hell out of there."
    },
    {
        "sentence": "She found his complete dullness interesting."
    },
    {
        "sentence": "The efficiency we have at removing trash has made creating trash more acceptable."
    },
    {
        "sentence": "The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup."
    },
    {
        "sentence": "One small action would change her life, but whether it would be for better or for worse was yet to be determined."
    },
    {
        "sentence": "It was the scarcity that fueled his creativity."
    },
    {
        "sentence": "Flesh-colored yoga pants were far worse than even he feared."
    },
    {
        "sentence": "He was 100% into fasting with her until he understood that meant he couldn't eat."
    },
    {
        "sentence": "Tuesdays are free if you bring a gnome costume."
    },
    {
        "sentence": "If any cop asks you where you were, just say you were visiting Kansas."
    },
    {
        "sentence": "The crowd yells and screams for more memes."
    },
    {
        "sentence": "They throw cabbage that turns your brain into emotional baggage."
    },
    {
        "sentence": "Potato wedges probably are not best for relationships."
    },
    {
        "sentence": "It would have been a better night if the guys next to us weren't in the splash zone."
    },
    {
        "sentence": "I caught my squirrel rustling through my gym bag."
    },
    {
        "sentence": "You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah."
    },
    {
        "sentence": "It's not often you find a soggy banana on the street."
    },
    {
        "sentence": "As you consider all the possible ways to improve yourself and the world, you notice John Travolta seems fairly unhappy."
    },
    {
        "sentence": "I purchased a baby clown from the Russian terrorist black market."
    },
    {
        "sentence": "You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital."
    },
    {
        "sentence": "You're unsure whether or not to trust him, but very thankful that you wore a turtle neck."
    },
    {
        "sentence": "Your girlfriend bought your favorite cookie crisp cereal but forgot to get milk."
    },
    {
        "sentence": "He is good at eating pickles and telling women about his emotional problems."
    },
    {
        "sentence": "If my calculator had a history, it would be more embarrassing than my browser history."
    },
    {
        "sentence": "I ate a sock because people on the Internet told me to."
    },
    {
        "sentence": "Stop waiting for exceptional things to just happen."
    },
    {
        "sentence": "Choosing to do nothing is still a choice, after all."
    },
    {
        "sentence": "He was so preoccupied with whether or not he could that he failed to stop to consider if he should."
    },
    {
        "sentence": "Red is greener than purple, for sure."
    },
    {
        "sentence": "On a scale from one to ten, what's your favorite flavor of random grammar?"
    },
    {
        "sentence": "He's in a boy band which doesn't make much sense for a snake."
    },
    {
        "sentence": "He waited for the stop sign to turn to a go sign."
    },
    {
        "sentence": "It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball."
    },
    {
        "sentence": "She had some amazing news to share but nobody to share it with."
    },
    {
        "sentence": "The green tea and avocado smoothie turned out exactly as would be expected."
    },
    {
        "sentence": "When nobody is around, the trees gossip about the people who have walked under them."
    },
    {
        "sentence": "She wanted a pet platypus but ended up getting a duck and a ferret instead."
    },
    {
        "sentence": "It was at that moment that he learned there are certain parts of the body that you should never Nair."
    },
    {
        "sentence": "He realized there had been several deaths on this road, but his concern rose when he saw the exact number."
    },
    {
        "sentence": "The thunderous roar of the jet overhead confirmed her worst fears."
    },
    {
        "sentence": "The best key lime pie is still up for debate."
    },
    {
        "sentence": "Various sea birds are elegant, but nothing is as elegant as a gliding pelican."
    },
    {
        "sentence": "Peanut butter and jelly caused the elderly lady to think about her past."
    },
    {
        "sentence": "He set out for a short walk, but now all he could see were mangroves and water were for miles."
    },
    {
        "sentence": "Everyone was curious about the large white blimp that appeared overnight."
    },
    {
        "sentence": "The Tsunami wave crashed against the raised houses and broke the pilings as if they were toothpicks."
    },
    {
        "sentence": "They wandered into a strange Tiki bar on the edge of the small beach town."
    },
    {
        "sentence": "The tour bus was packed with teenage girls heading toward their next adventure."
    },
    {
        "sentence": "Her hair was windswept as she rode in the black convertible."
    },
    {
        "sentence": "Lightning Paradise was the local hangout joint where the group usually ended up spending the night."
    },
    {
        "sentence": "The thick foliage and intertwined vines made the hike nearly impossible."
    },
    {
        "sentence": "As the rental car rolled to a stop on the dark road, her fear increased by the moment."
    },
    {
        "sentence": "The newly planted trees were held up by wooden frames in hopes they could survive the next storm."
    },
    {
        "sentence": "The gruff old man sat in the back of the bait shop grumbling to himself as he scooped out a handful of worms."
    },
    {
        "sentence": "All they could see was the blue water surrounding their sailboat."
    },
    {
        "sentence": "The urgent care center was flooded with patients after the news of a new deadly virus was made public."
    },
    {
        "sentence": "The sign said there was road work ahead so he decided to speed up."
    },
    {
        "sentence": "The shark-infested South Pine channel was the only way in or out."
    },
    {
        "sentence": "He decided water-skiing on a frozen lake wasn’t a good idea."
    },
    {
        "sentence": "It was always dangerous to drive with him since he insisted the safety cones were a slalom course."
    },
    {
        "sentence": "She was the type of girl who wanted to live in a pink house."
    },
    {
        "sentence": "Her life in the confines of the house became her new normal."
    },
    {
        "sentence": "The near-death experience brought new ideas to light."
    },
    {
        "sentence": "They were excited to see their first sloth."
    },
    {
        "sentence": "The wake behind the boat told of the past while the open sea for told life in the unknown future."
    },
    {
        "sentence": "Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world."
    },
    {
        "sentence": "He wondered if it could be called a beach if there was no sand."
    },
    {
        "sentence": "Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair."
    },
    {
        "sentence": "Combines are no longer just for farms."
    },
    {
        "sentence": "The small white buoys marked the location of hundreds of crab pots."
    },
    {
        "sentence": "The snow-covered path was no help in finding his way out of the back-country."
    },
    {
        "sentence": "The waitress was not amused when he ordered green eggs and ham."
    },
    {
        "sentence": "Buried deep in the snow, he hoped his batteries were fresh in his avalanche beacon."
    },
    {
        "sentence": "Courage and stupidity were all he had."
    },
    {
        "sentence": "I don’t respect anybody who can’t tell the difference between Pepsi and Coke."
    },
    {
        "sentence": "As the years pass by, we all know owners look more and more like their dogs."
    },
    {
        "sentence": "In hopes of finding out the truth, he entered the one-room library."
    },
    {
        "sentence": "As he entered the church he could hear the soft voice of someone whispering into a cell phone."
    },
    {
        "sentence": "He quietly entered the museum as the super bowl started."
    },
    {
        "sentence": "He had concluded that pigs must be able to fly in Hog Heaven."
    },
    {
        "sentence": "The rain pelted the windshield as the darkness engulfed us."
    },
    {
        "sentence": "Beach-combing replaced wine tasting as his new obsession."
    },
    {
        "sentence": "The blinking lights of the antenna tower came into focus just as I heard a loud snap."
    },
    {
        "sentence": "People generally approve of dogs eating cat food but not cats eating dog food."
    },
    {
        "sentence": "Car safety systems have come a long way, but he was out to prove they could be outsmarted."
    },
    {
        "sentence": "They looked up at the sky and saw a million stars."
    },
    {
        "sentence": "She opened up her third bottle of wine of the night."
    },
    {
        "sentence": "With a single flip of the coin, his life changed forever."
    },
    {
        "sentence": "The tart lemonade quenched her thirst, but not her longing."
    },
    {
        "sentence": "He was the type of guy who liked Christmas lights on his house in the middle of July."
    },
    {
        "sentence": "Toddlers feeding raccoons surprised even the seasoned park ranger."
    },
    {
        "sentence": "She was disgusted he couldn’t tell the difference between lemonade and limeade."
    },
    {
        "sentence": "Whenever he saw a red flag warning at the beach he grabbed his surfboard."
    },
    {
        "sentence": "Twin 4-month-olds slept in the shade of the palm tree while the mother tanned in the sun."
    },
    {
        "sentence": "He always wore his sunglasses at night."
    },
    {
        "sentence": "The three-year-old girl ran down the beach as the kite flew behind her."
    },
    {
        "sentence": "While on the first date he accidentally hit his head on the beam."
    },
    {
        "sentence": "Her scream silenced the rowdy teenagers."
    },
    {
        "sentence": "After exploring the abandoned building, he started to believe in ghosts."
    },
    {
        "sentence": "The view from the lighthouse excited even the most seasoned traveler."
    },
    {
        "sentence": "He wondered if she would appreciate his toenail collection."
    },
    {
        "sentence": "Some bathing suits just shouldn’t be worn by some people."
    },
    {
        "sentence": "His son quipped that power bars were nothing more than adult candy bars."
    },
    {
        "sentence": "Pantyhose and heels are an interesting choice of attire for the beach."
    },
    {
        "sentence": "She did a happy dance because all of the socks from the dryer matched."
    },
    {
        "sentence": "She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages."
    },
    {
        "sentence": "When she didn’t like a guy who was trying to pick her up, she started using sign language."
    },
    {
        "sentence": "The delicious aroma from the kitchen was ruined by cigarette smoke."
    },
    {
        "sentence": "Swim at your own risk was taken as a challenge for the group of Kansas City college students."
    },
    {
        "sentence": "She wondered what his eyes were saying beneath his mirrored sunglasses."
    },
    {
        "sentence": "The ants enjoyed the barbecue more than the family."
    },
    {
        "sentence": "They did nothing as the raccoon attacked the lady’s bag of food."
    },
    {
        "sentence": "When he had to picnic on the beach, he purposely put sand in other people’s food."
    },
    {
        "sentence": "The trick to getting kids to eat anything is to put catchup on it."
    },
    {
        "sentence": "The beauty of the sunset was obscured by the industrial cranes."
    },
    {
        "sentence": "He stomped on his fruit loops and thus became a cereal killer."
    },
    {
        "sentence": "He walked into the basement with the horror movie from the night before playing in his head."
    },
    {
        "sentence": "She saw the brake lights, but not in time."
    },
    {
        "sentence": "No matter how beautiful the sunset, it saddened her knowing she was one day older."
    },
    {
        "sentence": "She lived on Monkey Jungle Road and that seemed to explain all of her strangeness."
    },
    {
        "sentence": "When motorists sped in and out of traffic, all she could think of was those in need of a transplant."
    },
    {
        "sentence": "The tortoise jumped into the lake with dreams of becoming a sea turtle."
    },
    {
        "sentence": "For the 216th time, he said he would quit drinking soda after this last Coke."
    },
    {
        "sentence": "Lucifer was surprised at the amount of life at Death Valley."
    },
    {
        "sentence": "It had been sixteen days since the zombies first attacked."
    },
    {
        "sentence": "Charles ate the french fries knowing they would be his last meal."
    },
    {
        "sentence": "She had the gift of being able to paint songs."
    },
    {
        "sentence": "Carol drank the blood as if she were a vampire."
    },
    {
        "sentence": "He drank life before spitting it out."
    },
    {
        "sentence": "He dreamed of eating green apples with worms."
    },
    {
        "sentence": "Dolores wouldn't have eaten the meal if she had known what it actually was."
    },
    {
        "sentence": "Greetings from the real universe."
    },
    {
        "sentence": "There's a message for you if you look up."
    },
    {
        "sentence": "He found the chocolate covered roaches quite tasty."
    },
    {
        "sentence": "It dawned on her that others could make her happier, but only she could make herself happy."
    },
    {
        "sentence": "She tilted her head back and let whip cream stream into her mouth while taking a bath."
    },
    {
        "sentence": "Jeanne wished she has chosen the red button."
    },
    {
        "sentence": "It was her first experience training a rainbow unicorn."
    },
    {
        "sentence": "He uses onomatopoeia as a weapon of mental destruction."
    },
    {
        "sentence": "Weather is not trivial - it's especially important when you're standing in it."
    },
    {
        "sentence": "I may struggle with geography, but I'm sure I'm somewhere around here."
    },
    {
        "sentence": "It's a skateboarding penguin with a sunhat!"
    },
    {
        "sentence": "If you don't like toenails, you probably shouldn't look at your feet."
    },
    {
        "sentence": "We will not allow you to bring your pet armadillo along."
    },
    {
        "sentence": "When he encountered maize for the first time, he thought it incredibly corny."
    },
    {
        "sentence": "He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility."
    },
    {
        "sentence": "Just go ahead and press that button."
    },
    {
        "sentence": "Going from child, to childish, to childlike is only a matter of time."
    },
    {
        "sentence": "My dentist tells me that chewing bricks is very bad for your teeth."
    },
    {
        "sentence": "He was disappointed when he found the beach to be so sandy and the sun so sunny."
    },
    {
        "sentence": "She is never happy until she finds something to be unhappy about; then, she is overjoyed."
    },
    {
        "sentence": "I would be delighted if the sea were full of cucumber juice."
    },
    {
        "sentence": "The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer."
    },
    {
        "sentence": "I love bacon, beer, birds, and baboons."
    },
    {
        "sentence": "I come from a tribe of head-hunters, so I will never need a shrink."
    },
    {
        "sentence": "You're good at English when you know the difference between a man eating chicken and a man-eating chicken."
    },
    {
        "sentence": "I'm confused: when people ask me what's up, and I point, they groan."
    },
    {
        "sentence": "The pet shop stocks everything you need to keep your anaconda happy."
    },
    {
        "sentence": "This book is sure to liquefy your brain."
    },
    {
        "sentence": "People who insist on picking their teeth with their elbows are so annoying!"
    },
    {
        "sentence": "He enjoys practicing his ballet in the bathroom."
    },
    {
        "sentence": "Separation anxiety is what happens when you can't find your phone."
    },
    {
        "sentence": "Improve your goldfish's physical fitness by getting him a bicycle."
    },
    {
        "sentence": "Nudist colonies shun fig-leaf couture."
    },
    {
        "sentence": "A kangaroo is really just a rabbit on steroids."
    },
    {
        "sentence": "When transplanting seedlings, candied teapots will make the task easier."
    },
    {
        "sentence": "Before he moved to the inner city, he had always believed that security complexes were psychological."
    },
    {
        "sentence": "Pair your designer cowboy hat with scuba gear for a memorable occasion."
    },
    {
        "sentence": "For oil spots on the floor, nothing beats parking a motorbike in the lounge."
    },
    {
        "sentence": "Standing on one's head at job interviews forms a lasting impression."
    },
    {
        "sentence": "Every manager should be able to recite at least ten nursery rhymes backward."
    },
    {
        "sentence": "Truth in advertising and dinosaurs with skateboards have much in common."
    },
    {
        "sentence": "Nothing is as cautiously cuddly as a pet porcupine."
    },
    {
        "sentence": "Nobody has encountered an explosive daisy and lived to tell the tale."
    },
    {
        "sentence": "Iron pyrite is the most foolish of all minerals."
    },
    {
        "sentence": "A suit of armor provides excellent sun protection on hot days."
    },
    {
        "sentence": "I am my aunt's sister's daughter."
    },
    {
        "sentence": "Wisdom is easily acquired when hiding under the bed with a saucepan on your head."
    },
    {
        "sentence": "Everybody should read Chaucer to improve their everyday vocabulary."
    },
    {
        "sentence": "He is no James Bond; his name is Roger Moore."
    },
    {
        "sentence": "I like to leave work after my eight-hour tea-break."
    },
    {
        "sentence": "Getting up at dawn is for the birds."
    },
    {
        "sentence": "If eating three-egg omelets causes weight-gain, budgie eggs are a good substitute."
    },
    {
        "sentence": "Shakespeare was a famous 17th-century diesel mechanic."
    },
    {
        "sentence": "Hit me with your pet shark!"
    },
    {
        "sentence": "The Japanese yen for commerce is still well-known."
    },
    {
        "sentence": "The Guinea fowl flies through the air with all the grace of a turtle."
    },
    {
        "sentence": "Fluffy pink unicorns are a popular status symbol among macho men."
    },
    {
        "sentence": "She cried diamonds."
    },
    {
        "sentence": "Dan took the deep dive down the rabbit hole."
    },
    {
        "sentence": "Erin accidentally created a new universe."
    },
    {
        "sentence": "The door slammed on the watermelon."
    },
    {
        "sentence": "Eating eggs on Thursday for choir practice was recommended."
    },
    {
        "sentence": "Pink horses galloped across the sea."
    },
    {
        "sentence": "Flying fish flew by the space station."
    },
    {
        "sentence": "He colored deep space a soft yellow."
    },
    {
        "sentence": "Dan ate the clouds like cotton candy."
    },
    {
        "sentence": "He found a leprechaun in his walnut shell."
    },
    {
        "sentence": "Bill ran from the giraffe toward the dolphin."
    },
    {
        "sentence": "It didn't make sense unless you had the power to eat colors."
    },
    {
        "sentence": "Patricia loves the sound of nails strongly pressed against the chalkboard."
    },
    {
        "sentence": "He didn't understand why the bird wanted to ride the bicycle."
    },
    {
        "sentence": "Garlic ice-cream was her favorite."
    },
    {
        "sentence": "Smoky the Bear secretly started the fires."
    },
    {
        "sentence": "Pat ordered a ghost pepper pie."
    },
    {
        "sentence": "You have every right to be angry, but that doesn't give you the right to be mean."
    },
    {
        "sentence": "Andy loved to sleep on a bed of nails."
    },
    {
        "sentence": "Her daily goal was to improve on yesterday."
    },
    {
        "sentence": "She had a habit of taking showers in lemonade."
    },
    {
        "sentence": "The elephant didn't want to talk about the person in the room."
    },
    {
        "sentence": "The skeleton had skeletons of his own in the closet."
    },
    {
        "sentence": "Even with the snow falling outside, she felt it appropriate to wear her bikini."
    },
    {
        "sentence": "He was sure the Devil created red sparkly glitter."
    },
    {
        "sentence": "He wore the surgical mask in public not to keep from catching a virus, but to keep people away from him."
    },
    {
        "sentence": "Doris enjoyed tapping her nails on the table to annoy everyone."
    },
    {
        "sentence": "Nobody questions who built the pyramids in Mexico."
    },
    {
        "sentence": "He figured a few sticks of dynamite were easier than a fishing pole to catch fish."
    },
    {
        "sentence": "When money was tight, he'd get his lunch money from the local wishing well."
    },
    {
        "sentence": "The father died during childbirth."
    },
    {
        "sentence": "Plans for this weekend include turning wine into water."
    },
    {
        "sentence": "Iguanas were falling out of the trees."
    },
    {
        "sentence": "I covered my friend in baby oil."
    },
    {
        "sentence": "Art doesn't have to be intentional."
    },
    {
        "sentence": "Now I need to ponder my existence and ask myself if I'm truly real"
    },
    {
        "sentence": "We should play with legos at camp."
    },
    {
        "sentence": "I’m a living furnace."
    },
    {
        "sentence": "Please tell me you don't work in a morgue."
    },
    {
        "sentence": "We have young kids who often walk into our room at night for various reasons including clowns in the closet."
    },
    {
        "sentence": "8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head."
    },
    {
        "sentence": "You bite up because of your lower jaw."
    },
    {
        "sentence": "Most shark attacks occur about 10 feet from the beach since that's where the people are."
    },
    {
        "sentence": "I’m working on a sweet potato farm."
    },
    {
        "sentence": "David subscribes to the \"stuff your tent into the bag\" strategy over nicely folding it."
    },
    {
        "sentence": "He invested some skill points in Charisma and Strength."
    },
    {
        "sentence": "I'm a great listener, really good with empathy vs sympathy and all that, but I hate people."
    },
    {
        "sentence": "He excelled at firing people nicely."
    },
    {
        "sentence": "When I cook spaghetti, I like to boil it a few minutes past al dente so the noodles are super slippery."
    },
    {
        "sentence": "Joyce enjoyed eating pancakes with ketchup."
    },
    {
        "sentence": "She was sad to hear that fireflies are facing extinction due to artificial light, habitat loss, and pesticides."
    },
    {
        "sentence": "He decided that the time had come to be stronger than any of the excuses he'd used until then."
    },
    {
        "sentence": "The door swung open to reveal pink giraffes and red elephants."
    },
    {
        "sentence": "She traveled because it cost the same as therapy and was a lot more enjoyable."
    },
    {
        "sentence": "The paintbrush was angry at the color the artist chose to use."
    },
    {
        "sentence": "The bees decided to have a mutiny against their queen."
    },
    {
        "sentence": "His ultimate dream fantasy consisted of being content and sleeping eight hours in a row."
    },
    {
        "sentence": "She looked into the mirror and saw another person."
    },
    {
        "sentence": "There aren't enough towels in the world to stop the sewage flowing from his mouth."
    },
    {
        "sentence": "He had a vague sense that trees gave birth to dinosaurs."
    },
    {
        "sentence": "The doll spun around in circles in hopes of coming alive."
    },
    {
        "sentence": "Grape jelly was leaking out the hole in the roof."
    },
    {
        "sentence": "Chocolate covered crickets were his favorite snack."
    },
    {
        "sentence": "The secret code they created made no sense, even to them."
    },
    {
        "sentence": "Three years later, the coffin was still full of Jello."
    },
    {
        "sentence": "His mind was blown that there was nothing in space except space itself."
    },
    {
        "sentence": "They're playing the piano while flying in the plane."
    },
    {
        "sentence": "The hand sanitizer was actually clear glue."
    },
    {
        "sentence": "The lyrics of the song sounded like fingernails on a chalkboard."
    },
    {
        "sentence": "It took him a month to finish the meal."
    },
    {
        "sentence": "Seek success, but always be prepared for random cats."
    },
    {
        "sentence": "Having no hair made him look even hairier."
    },
    {
        "sentence": "He poured rocks in the dungeon of his mind."
    },
    {
        "sentence": "The blue parrot drove by the hitchhiking mongoose."
    },
    {
        "sentence": "Happiness can be found in the depths of chocolate pudding."
    },
    {
        "sentence": "There are no heroes in a punk rock band."
    },
    {
        "sentence": "He shaved the peach to prove a point."
    },
    {
        "sentence": "Peanuts don't grow on trees, but cashews do."
    },
    {
        "sentence": "It's difficult to understand the lengths he'd go to remain short."
    },
    {
        "sentence": "He created a pig burger out of beef."
    },
    {
        "sentence": "His thought process was on so many levels that he gave himself a phobia of heights."
    },
    {
        "sentence": "He liked to play with words in the bathtub."
    },
    {
        "sentence": "There were three sphered rocks congregating in a cubed room."
    },
    {
        "sentence": "There was no telling what thoughts would come from the machine."
    },
    {
        "sentence": "He put heat on the wound to see what would grow."
    },
    {
        "sentence": "She used her own hair in the soup to give it more flavor."
    },
    {
        "sentence": "Sometimes you have to just give up and win by cheating."
    },
    {
        "sentence": "The toy brought back fond memories of being lost in the rain forest."
    },
    {
        "sentence": "She couldn't decide of the glass was half empty or half full so she drank it."
    },
    {
        "sentence": "He wasn't bitter that she had moved on but from the radish."
    },
    {
        "sentence": "He had decided to accept his fate of accepting his fate."
    },
    {
        "sentence": "The clouds formed beautiful animals in the sky that eventually created a tornado to wreak havoc."
    },
    {
        "sentence": "The swirled lollipop had issues with the pop rock candy."
    },
    {
        "sentence": "He picked up trash in his spare time to dump in his neighbor's yard."
    },
    {
        "sentence": "The fish dreamed of escaping the fishbowl and into the toilet where he saw his friend go."
    },
    {
        "sentence": "It was a really good Monday for being a Saturday."
    },
    {
        "sentence": "Greetings from the galaxy MACS0647-JD, or what we call home."
    },
    {
        "sentence": "He was surprised that his immense laziness was inspirational to others."
    },
    {
        "sentence": "He had unknowingly taken up sleepwalking as a nighttime hobby."
    },
    {
        "sentence": "He spiked his hair green to support his iguana."
    },
    {
        "sentence": "The fifty mannequin heads floating in the pool kind of freaked them out."
    },
    {
        "sentence": "Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow."
    },
    {
        "sentence": "After fighting off the alligator, Brian still had to face the anaconda."
    },
    {
        "sentence": "It didn't take long for Gary to detect the robbers were amateurs."
    },
    {
        "sentence": "He embraced his new life as an eggplant."
    },
    {
        "sentence": "Karen realized the only way she was getting into heaven was to cheat."
    },
    {
        "sentence": "He loved eating his bananas in hot dog buns."
    },
    {
        "sentence": "Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over."
    },
    {
        "sentence": "Facing his greatest fear, he ate his first marshmallow."
    },
    {
        "sentence": "He found his art never progressed when he literally used his sweat and tears."
    },
    {
        "sentence": "Nancy was proud that she ran a tight shipwreck."
    },
    {
        "sentence": "It took him a while to realize that everything he decided not to change, he was actually choosing."
    },
    {
        "sentence": "It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment."
    },
    {
        "sentence": "Jason lived his life by the motto, \"Anything worth doing is worth doing poorly."
    },
    {
        "sentence": "David proudly graduated from high school top of his class at age 97."
    },
    {
        "sentence": "The murder hornet was disappointed by the preconceived ideas people had of him."
    },
    {
        "sentence": "The two walked down the slot canyon oblivious to the sound of thunder in the distance."
    },
    {
        "sentence": "She was amazed by the large chunks of ice washing up on the beach."
    },
    {
        "sentence": "Gary didn't understand why Doug went upstairs to get one dollar bills when he invited him to go cow tipping."
    },
    {
        "sentence": "The beach was crowded with snow leopards."
    },
    {
        "sentence": "As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled."
    },
    {
        "sentence": "She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better."
    },
    {
        "sentence": "The white water rafting trip was suddenly halted by the unexpected brick wall."
    },
    {
        "sentence": "She always had an interesting perspective on why the world must be flat."
    },
    {
        "sentence": "The sudden rainstorm washed crocodiles into the ocean."
    },
    {
        "sentence": "Harrold felt confident that nobody would ever suspect his spy pigeon."
    },
    {
        "sentence": "He knew it was going to be a bad day when he saw mountain lions roaming the streets."
    },
    {
        "sentence": "He decided to fake his disappearance to avoid jail."
    },
    {
        "sentence": "He ended up burning his fingers poking someone else's fire."
    },
    {
        "sentence": "She had a difficult time owning up to her own crazy self."
    },
    {
        "sentence": "She was too busy always talking about what she wanted to do to actually do any of it."
    },
    {
        "sentence": "She had that tint of craziness in her soul that made her believe she could actually make a difference."
    },
    {
        "sentence": "He kept telling himself that one day it would all somehow make sense."
    },
    {
        "sentence": "She moved forward only because she trusted that the ending she now was going through must be followed by a new beginning."
    },
    {
        "sentence": "While all her friends were positive that Mary had a sixth sense, she knew she actually had a seventh sense."
    },
    {
        "sentence": "He had a wall full of masks so she could wear a different face every day."
    },
    {
        "sentence": "The group quickly understood that toxic waste was the most effective barrier to use against the zombies."
    },
    {
        "sentence": "There have been days when I wished to be separated from my body, but today wasn’t one of those days."
    },
    {
        "sentence": "To the surprise of everyone, the Rapture happened yesterday but it didn't quite go as expected."
    },
    {
        "sentence": "The bullet pierced the window shattering it before missing Danny's head by mere millimeters."
    },
    {
        "sentence": "The complicated school homework left the parents trying to help their kids quite confused."
    },
    {
        "sentence": "Too many prisons have become early coffins."
    },
    {
        "sentence": "The external scars tell only part of the story."
    },
    {
        "sentence": "Excitement replaced fear until the final moment."
    },
    {
        "sentence": "The tattered work gloves speak of the many hours of hard labor he endured throughout his life."
    },
    {
        "sentence": "The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder."
    },
    {
        "sentence": "Poison ivy grew through the fence they said was impenetrable."
    },
    {
        "sentence": "Watching the geriatric men’s softball team brought back memories of 3 yr olds playing t-ball."
    },
    {
        "sentence": "The teens wondered what was kept in the red shed on the far edge of the school grounds."
    },
    {
        "sentence": "He strives to keep the best lawn in the neighborhood."
    },
    {
        "sentence": "The spa attendant applied the deep cleaning mask to the gentleman’s back."
    },
    {
        "sentence": "Shingle color was not something the couple had ever talked about."
    },
    {
        "sentence": "The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it."
    },
    {
        "sentence": "The virus had powers none of us knew existed."
    },
    {
        "sentence": "A quiet house is nice until you are ordered to stay in it for months."
    },
    {
        "sentence": "As time wore on, simple dog commands turned into full paragraphs explaining why the dog couldn’t do something."
    },
    {
        "sentence": "Mothers spend months of their lives waiting on their children."
    },
    {
        "sentence": "The team members were hard to tell apart since they all wore their hair in a ponytail."
    },
    {
        "sentence": "She learned that water bottles are no longer just to hold liquid, but they're also status symbols."
    },
    {
        "sentence": "Their argument could be heard across the parking lot."
    },
    {
        "sentence": "Giving directions that the mountains are to the west only works when you can see them."
    },
    {
        "sentence": "Traveling became almost extinct during the pandemic."
    },
    {
        "sentence": "It was obvious she was hot, sweaty, and tired."
    },
    {
        "sentence": "The Great Dane looked more like a horse than a dog."
    },
    {
        "sentence": "He played the game as if his life depended on it and the truth was that it did."
    },
    {
        "sentence": "It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die."
    },
    {
        "sentence": "He went on a whiskey diet and immediately lost three days."
    },
    {
        "sentence": "He watched the dancing piglets with panda bear tummies in the swimming pool."
    },
    {
        "sentence": "Martha came to the conclusion that shake weights are a great gift for any occasion."
    },
    {
        "sentence": "She had convinced her kids that any mushroom found on the ground would kill them if they touched it."
    },
    {
        "sentence": "As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts."
    },
    {
        "sentence": "Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history."
    },
    {
        "sentence": "The tree fell unexpectedly short."
    },
    {
        "sentence": "Tomorrow will bring something new, so leave today as a memory."
    },
    {
        "sentence": "Today I dressed my unicorn in preparation for the race."
    },
    {
        "sentence": "Today is the day I'll finally know what brick tastes like."
    },
    {
        "sentence": "Today we gathered moss for my uncle's wedding."
    },
    {
        "sentence": "Today I heard something new and unmemorable."
    },
    {
        "sentence": "Today arrived with a crash of my car through the garage door."
    },
    {
        "sentence": "He found rain fascinating yet unpleasant."
    },
    {
        "sentence": "He appeared to be confusingly perplexed."
    },
    {
        "sentence": "She thought there'd be sufficient time if she hid her watch."
    },
    {
        "sentence": "You'll see the rainbow bridge after it rains cats and dogs."
    },
    {
        "sentence": "A dead duck doesn't fly backward."
    },
    {
        "sentence": "I thought red would have felt warmer in summer but I didn't think about the equator."
    },
    {
        "sentence": "Green should have smelled more tranquil, but somehow it just tasted rotten."
    },
    {
        "sentence": "Blue sounded too cold at the time and yet it seemed to work for gin."
    },
    {
        "sentence": "Warm beer on a cold day isn't my idea of fun."
    },
    {
        "sentence": "Honestly, I didn't care much for the first season, so I didn't bother with the second."
    },
    {
        "sentence": "The light that burns twice as bright burns half as long."
    },
    {
        "sentence": "I liked their first two albums but changed my mind after that charity gig."
    },
    {
        "sentence": "They improved dramatically once the lead singer left."
    },
    {
        "sentence": "They desperately needed another drummer since the current one only knew how to play bongos."
    },
    {
        "sentence": "People keep telling me \"orange\" but I still prefer \"pink\"."
    },
    {
        "sentence": "Hang on, my kittens are scratching at the bathtub and they'll upset by the lack of biscuits."
    },
    {
        "sentence": "The tears of a clown make my lipstick run, but my shower cap is still intact."
    },
    {
        "sentence": "The gloves protect my feet from excess work."
    },
    {
        "sentence": "The fog was so dense even a laser decided it wasn't worth the effort."
    },
    {
        "sentence": "He was an introvert that extroverts seemed to love."
    },
    {
        "sentence": "The golden retriever loved the fireworks each Fourth of July."
    },
    {
        "sentence": "I want a giraffe, but I'm a turtle eating waffles."
    },
    {
        "sentence": "Henry couldn't decide if he was an auto mechanic or a priest."
    },
    {
        "sentence": "100 years old is such a young age if you happen to be a bristlecone pine."
    },
    {
        "sentence": "When he asked her favorite number, she answered without hesitation that it was diamonds."
    },
    {
        "sentence": "My biggest joy is roasting almonds while stalking prey."
    },
    {
        "sentence": "Edith could decide if she should paint her teeth or brush her nails."
    },
    {
        "sentence": "It was the first time he had ever seen someone cook dinner on an elephant."
    },
    {
        "sentence": "Purple is the best city in the forest."
    },
    {
        "sentence": "There is no better feeling than staring at a wall with closed eyes."
    },
    {
        "sentence": "She couldn't understand why nobody else could see that the sky is full of cotton candy."
    },
    {
        "sentence": "He decided to count all the sand on the beach as a hobby."
    },
    {
        "sentence": "My uncle's favorite pastime was building cars out of noodles."
    },
    {
        "sentence": "The best part of marriage is animal crackers with peanut butter."
    },
    {
        "sentence": "There are over 500 starfish in the bathroom drawer."
    },
    {
        "sentence": "She insisted that cleaning out your closet was the key to good driving."
    },
    {
        "sentence": "Baby wipes are made of chocolate stardust."
    },
    {
        "sentence": "Best friends are like old tomatoes and shoelaces."
    },
    {
        "sentence": "Situps are a terrible way to end your day."
    },
    {
        "sentence": "Cursive writing is the best way to build a race track."
    },
    {
        "sentence": "Waffles are always better without fire ants and fleas."
    },
    {
        "sentence": "The bird had a belief that it was really a groundhog."
    },
    {
        "sentence": "Jenny made the announcement that her baby was an alien."
    },
    {
        "sentence": "He felt that dining on the bridge brought romance to his relationship with his cat."
    },
    {
        "sentence": "She wanted to be rescued, but only if it was Tuesday and raining."
    },
    {
        "sentence": "She was the type of girl that always burnt sugar to show she cared."
    },
    {
        "sentence": "I was offended by the suggestion that my baby brother was a jewel thief."
    },
    {
        "sentence": "Just because the water is red doesn't mean you can't drink it."
    },
    {
        "sentence": "Today I bought a raincoat and wore it on a sunny day."
    },
    {
        "sentence": "Everyone pretends to like wheat until you mention barley."
    },
    {
        "sentence": "Please put on these earmuffs because I can't you hear."
    },
    {
        "sentence": "That is an appealing treasure map that I can't read."
    },
    {
        "sentence": "Jerry liked to look at paintings while eating garlic ice cream."
    },
    {
        "sentence": "I've always wanted to go to Tajikistan, but my cat would miss me."
    },
    {
        "sentence": "If you spin around three times, you'll start to feel melancholy."
    },
    {
        "sentence": "I used to live in my neighbor's fishpond, but the aesthetic wasn't to my taste."
    },
    {
        "sentence": "Imagine his surprise when he discovered that the safe was full of pudding."
    },
    {
        "sentence": "I only enjoy window shopping when the windows are transparent."
    },
    {
        "sentence": "He was the only member of the club who didn't like plum pudding."
    },
    {
        "sentence": "You should never take advice from someone who thinks red paint dries quicker than blue paint."
    },
    {
        "sentence": "I was fishing for compliments and accidentally caught a trout."
    },
    {
        "sentence": "It isn't true that my mattress is made of cotton candy."
    },
    {
        "sentence": "I received a heavy fine but it failed to crush my spirit."
    },
    {
        "sentence": "Mr. Montoya knows the way to the bakery even though he's never been there."
    },
    {
        "sentence": "I never knew what hardship looked like until it started raining bowling balls."
    },
    {
        "sentence": "It isn't difficult to do a handstand if you just stand on your hands."
    },
    {
        "sentence": "Strawberries must be the one food that doesn't go well with this brand of paint."
    },
    {
        "sentence": "I'd always thought lightning was something only I could see."
    },
    {
        "sentence": "We're careful about orange ping pong balls because people might think they're fruit."
    },
    {
        "sentence": "The worst thing about being at the top of the career ladder is that there's a long way to fall."
    },
    {
        "sentence": "Always bring cinnamon buns on a deep-sea diving expedition."
    },
    {
        "sentence": "There's no reason a hula hoop can't also be a circus ring."
    },
    {
        "sentence": "It took me too long to realize that the ceiling hadn't been painted to look like the sky."
    },
    {
        "sentence": "Sarah ran from the serial killer holding a jug of milk."
    },
    {
        "sentence": "Gwen had her best sleep ever on her new bed of nails."
    },
    {
        "sentence": "He never understood why what, when, and where left out who."
    },
    {
        "sentence": "Douglas figured the best way to succeed was to do the opposite of what he'd been doing all his life."
    },
    {
        "sentence": "Patricia found the meaning of life in a bowl of Cheerios."
    },
    {
        "sentence": "I'll have you know I've written over fifty novels"
    },
    {
        "sentence": "That must be the tenth time I've been arrested for selling deep-fried cigars."
    },
    {
        "sentence": "Being unacquainted with the chief raccoon was harming his prospects for promotion."
    },
    {
        "sentence": "The sight of his goatee made me want to run and hide under my sister-in-law's bed."
    },
    {
        "sentence": "The most exciting eureka moment I've had was when I realized that the instructions on food packets were just guidelines."
    },
    {
        "sentence": "It must be easy to commit crimes as a snake because you don't have to worry about leaving fingerprints."
    },
    {
        "sentence": "I've traveled all around Africa and still haven't found the gnu who stole my scarf."
    },
    {
        "sentence": "At that moment I was the most fearsome weasel in the entire swamp."
    },
    {
        "sentence": "The chic gangster liked to start the day with a pink scarf."
    },
    {
        "sentence": "She was only made the society president because she can whistle with her toes."
    },
    {
        "sentence": "At last"
    },
    {
        "sentence": "The changing of down comforters to cotton bedspreads always meant the squirrels had returned."
    },
    {
        "sentence": "Written warnings in instruction manuals are worthless since rabbits can't read."
    },
    {
        "sentence": "Barking dogs and screaming toddlers have the unique ability to turn friendly neighbors into cranky enemies."
    },
    {
        "sentence": "The furnace repairman indicated the heating system was acting as an air conditioner."
    },
    {
        "sentence": "The water flowing down the river didn’t look that powerful from the car"
    },
    {
        "sentence": "The bread dough reminded her of Santa Clause’s belly."
    },
    {
        "sentence": "Little Red Riding Hood decided to wear orange today."
    },
    {
        "sentence": "The stench from the feedlot permeated the car despite having the air conditioning on recycled air."
    },
    {
        "sentence": "Joe discovered that traffic cones make excellent megaphones."
    },
    {
        "sentence": "Nancy decided to make the porta-potty her home."
    },
    {
        "sentence": "Acres of almond trees lined the interstate highway which complimented the crazy driving nuts."
    },
    {
        "sentence": "They decided to plant an orchard of cotton candy."
    },
    {
        "sentence": "Tomatoes make great weapons when water balloons aren’t available."
    },
    {
        "sentence": "The tumbleweed refused to tumble but was more than willing to prance."
    },
    {
        "sentence": "Nancy thought the best way to create a welcoming home was to line it with barbed wire."
    },
    {
        "sentence": "The underground bunker was filled with chips and candy."
    },
    {
        "sentence": "The dead trees waited to be ignited by the smallest spark and seek their revenge."
    },
    {
        "sentence": "The overpass went under the highway and into a secret world."
    },
    {
        "sentence": "His get rich quick scheme was to grow a cactus farm."
    },
    {
        "sentence": "Siri became confused when we reused to follow her directions."
    },
    {
        "sentence": "With the high wind warning"
    },
    {
        "sentence": "She found it strange that people use their cellphones to actually talk to one another."
    },
    {
        "sentence": "The reservoir water level continued to lower while we enjoyed our long shower."
    },
    {
        "sentence": "Peter found road kill an excellent way to save money on dinner."
    },
    {
        "sentence": "Trash covered the landscape like sprinkles do a birthday cake."
    },
    {
        "sentence": "The ice-cream trucks bring back bad memories for all of us."
    },
    {
        "sentence": "Karen believed all traffic laws should be obeyed by all except herself."
    },
    {
        "sentence": "They finished building the road they knew no one would ever use."
    },
    {
        "sentence": "When confronted with a rotary dial phone the teenager was perplexed."
    },
    {
        "sentence": "The glacier came alive as the climbers hiked closer."
    },
    {
        "sentence": "Normal activities took extraordinary amounts of concentration at the high altitude."
    },
    {
        "sentence": "The heat"
    },
    {
        "sentence": "Boulders lined the side of the road foretelling what could come next."
    },
    {
        "sentence": "The fence was confused about whether it was supposed to keep things in or keep things out."
    },
    {
        "sentence": "Homesickness became contagious in the young campers' cabin."
    },
    {
        "sentence": "The toddler’s endless tantrum caused the entire plane anxiety."
    },
    {
        "sentence": "The manager of the fruit stand always sat and only sold vegetables."
    },
    {
        "sentence": "The hawk didn’t understand why the ground squirrels didn’t want to be his friend."
    },
    {
        "sentence": "Jim liked driving around town with his hazard lights on."
    },
    {
        "sentence": "Mom didn’t understand why no one else wanted a hot tub full of jello."
    },
    {
        "sentence": "Instead of a bachelorette party"
    },
    {
        "sentence": "The family’s excitement over going to Disneyland was crazier than she anticipated."
    },
    {
        "sentence": "The old rusted farm equipment surrounded the house predicting its demise."
    },
    {
        "sentence": "Her fragrance of choice was fresh garlic."
    },
    {
        "sentence": "Jason didn’t understand why his parents wouldn’t let him sell his little sister at the garage sale."
    },
    {
        "sentence": "The father handed each child a roadmap at the beginning of the 2-day road trip and explained it was so they could find their way home."
    },
    {
        "sentence": "More RVs were seen in the storage lot than at the campground."
    },
    {
        "sentence": "As he dangled from the rope deep inside the crevasse"
    },
    {
        "sentence": "On each full moon"
    },
    {
        "sentence": "The elderly neighborhood became enraged over the coyotes who had been blamed for the poodle’s disappearance."
    },
    {
        "sentence": "The wooden spoon couldn’t cut but left emotional scars."
    },
    {
        "sentence": "Kevin embraced his ability to be at the wrong place at the wrong time."
    },
    {
        "sentence": "She discovered van life is difficult with 2 cats and a dog."
    },
    {
        "sentence": "He dreamed of leaving his law firm to open a portable dog wash."
    },
    {
        "sentence": "Despite multiple complications and her near-death experience"
    },
    {
        "sentence": "The teenage boy was accused of breaking his arm simply to get out of the test."
    },
    {
        "sentence": "The bug was having an excellent day until he hit the windshield."
    },
    {
        "sentence": "He was all business when he wore his clown suit."
    },
    {
        "sentence": "The miniature pet elephant became the envy of the neighborhood."
    },
    {
        "sentence": "The child’s favorite Christmas gift was the large box her father’s lawnmower came in."
    },
    {
        "sentence": "Flash photography is best used in full sunlight."
    },
    {
        "sentence": "The llama couldn't resist trying the lemonade."
    },
    {
        "sentence": "I used to practice weaving with spaghetti three hours a day but stopped because I didn't want to die alone."
    },
    {
        "sentence": "I cheated while playing the darts tournament by using a longbow."
    },
    {
        "sentence": "I had a friend in high school named Rick Shaw, but he was fairly useless as a mode of transport."
    },
    {
        "sentence": "The balloons floated away along with all my hopes and dreams."
    },
    {
        "sentence": "There were a lot of paintings of monkeys waving bamboo sticks in the gallery."
    },
    {
        "sentence": "The anaconda was the greatest criminal mastermind in this part of the neighborhood."
    },
    {
        "sentence": "They say people remember important moments in their life well, yet no one even remembers their own birth."
    },
    {
        "sentence": "I was starting to worry that my pet turtle could tell what I was thinking."
    },
    {
        "sentence": "I always dreamed about being stranded on a desert island until it actually happened."
    },
    {
        "sentence": "It's important to remember to be aware of rampaging grizzly bears."
    },
    {
        "sentence": "The estate agent quickly marked out his territory on the dance floor."
    },
    {
        "sentence": "If you really strain your ears, you can just about hear the sound of no one giving a damn."
    },
    {
        "sentence": "I honestly find her about as intimidating as a basket of kittens."
    },
    {
        "sentence": "It's never comforting to know that your fate depends on something as unpredictable as the popping of corn."
    },
    {
        "sentence": "Despite what your teacher may have told you, there is a wrong way to wield a lasso."
    },
    {
        "sentence": "I made myself a peanut butter sandwich as I didn't want to subsist on veggie crackers."
    },
    {
        "sentence": "A good example of a useful vegetable is medicinal rhubarb."
    },
    {
        "sentence": "I became paranoid that the school of jellyfish was spying on me."
    },
    {
        "sentence": "It's always a good idea to seek shelter from the evil gaze of the sun."
    },
    {
        "sentence": "I know many children ask for a pony, but I wanted a bicycle with rockets strapped to it."
    },
    {
        "sentence": "For some unfathomable reason, the response team didn't consider a lack of milk for my cereal as a proper emergency."
    },
    {
        "sentence": "After coating myself in vegetable oil I found my success rate skyrocketed."
    },
    {
        "sentence": "The efficiency with which he paired the socks in the drawer was quite admirable."
    },
    {
        "sentence": "I trust everything that's written in purple ink."
    },
    {
        "sentence": "I'm not a party animal, but I do like animal parties."
    },
    {
        "sentence": "I've never seen a more beautiful brandy glass filled with wine."
    },
    {
        "sentence": "Everything was going so well until I was accosted by a purple giraffe."
    },
    {
        "sentence": "There's a growing trend among teenagers of using frisbees as go-cart wheels."
    },
    {
        "sentence": "You have no right to call yourself creative until you look at a trowel and think that it would make a great lockpick."
    },
    {
        "sentence": "I can't believe this is the eighth time I'm smashing open my piggy bank on the same day!"
    },
    {
        "sentence": "There's probably enough glass in my cupboard to build an undersea aquarium."
    },
    {
        "sentence": "I'm worried by the fact that my daughter looks to the local carpet seller as a role model."
    },
    {
        "sentence": "My secretary is the only person who truly understands my stamp-collecting obsession."
    },
    {
        "sentence": "It's never been my responsibility to glaze the donuts."
    }
];


/***/ }),

/***/ "5Tot":
/*!****************************************!*\
  !*** ./src/app/call/call.component.ts ***!
  \****************************************/
/*! exports provided: CallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call.service */ "2aLp");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "xOOu");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-duration-format */ "RiPy");
/* harmony import */ var moment_duration_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_duration_format__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _opinion_record_modal_opinion_record_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../opinion-record-modal/opinion-record-modal.component */ "XO+G");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ngx_jdenticon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-jdenticon */ "RAOg");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");



















const _c0 = ["audio"];
const _c1 = ["opinionModal"];
function CallComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ended", function CallComponent_div_0_ng_container_4_Template_audio_ended_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.clipCompleted(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.audioURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CallComponent_div_0_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function CallComponent_div_0_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function CallComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CallComponent_div_0_ng_container_4_Template, 4, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-badge", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Person 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CallComponent_div_0_img_17_Template, 1, 0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Person 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CallComponent_div_0_img_22_Template, 1, 0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Person 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "(You)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.puzzleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.audioInit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCount", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-jdenticon-value", ctx_r0.person1Avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.speaker === "person1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-jdenticon-value", ctx_r0.person2Avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.speaker === "person2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-jdenticon-value", ctx_r0.callService.callSettings.userAvatar);
} }
function CallComponent_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thank you");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " for taking part in the meeting. The meeting has now ended. A ZIP file will be downloaded to your computer. Please upload this ZIP file to the Qualtrics survey. If the download did not start automatically, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallComponent_ng_container_1_ng_template_3_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.saveZipFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to download the ZIP file manually ");
} }
function CallComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CallComponent_ng_container_1_ng_template_3_Template, 6, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _r9);
} }
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class CallComponent {
    constructor(callService, route, appService) {
        this.callService = callService;
        this.route = route;
        this.appService = appService;
        this.puzzleIds = [7, 10, 13, 15, 17];
        this.currentPuzzleId = this.puzzleIds[0];
        this.audioClipNum = 0;
        this.versionNumber = 1;
        this.idol = true;
        this.completed = false;
        this.audioInit = false;
        this.person1Avatar = this.makeid(5);
        this.person2Avatar = this.makeid(5);
        this.recordings = [];
        this.msgs = {};
        this.downloadableContent = undefined;
        this.downloadFileName = undefined;
        this.skipCode = new Set();
        this.callService.currentPuzzleId = this.currentPuzzleId;
    }
    get puzzleImage() {
        return `/assets/puzzles/${this.currentPuzzleId}_img.png`;
    }
    get selectedPuzzleClips() {
        const selectedPuzzle = this.callService.getPuzzleById(this.currentPuzzleId);
        return selectedPuzzle.clips || [];
    }
    get audioURL() {
        const selectedPuzzle = this.callService.getPuzzleById(this.currentPuzzleId);
        const folder = selectedPuzzle.clips[this.audioClipNum] ? _call_service__WEBPACK_IMPORTED_MODULE_1__["voiceConfig"][this.route.snapshot.params.id][selectedPuzzle.clips[this.audioClipNum].speaker] : '';
        return `/assets/puzzles/${this.currentPuzzleId}/${folder}/${this.audioClipNum + 1}.mp3`;
    }
    get speaker() {
        const selectedPuzzle = this.callService.getPuzzleById(this.currentPuzzleId);
        return !this.idol && selectedPuzzle.clips[this.audioClipNum] && selectedPuzzle.clips[this.audioClipNum].speaker;
    }
    get voiceConfig() {
        return _call_service__WEBPACK_IMPORTED_MODULE_1__["voiceConfig"][this.route.snapshot.params.id];
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'keydown').subscribe((event) => {
            if (event.code.toLowerCase() === 'keyq' ||
                event.code.toLowerCase() === 'keys' ||
                event.code.toLowerCase() === 'keyz' ||
                event.code.toLowerCase() === 'digit0') {
                this.skipCode.add(event.code.toLowerCase());
                if (this.skipCode.size === 4) {
                    this.clipCompleted(true);
                }
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, 'keyup').subscribe((event) => {
            if (event.code.toLowerCase() === 'keyq' ||
                event.code.toLowerCase() === 'keys' ||
                event.code.toLowerCase() === 'keyz' ||
                event.code.toLowerCase() === 'digit0') {
                this.skipCode.delete(event.code.toLowerCase());
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.skipCode).subscribe(d => console.log(d));
        this.appService.consume(this.route.snapshot.queryParams.token).subscribe();
    }
    ngAfterViewInit() {
        this.route.params.subscribe(({ id, userAvatar }) => {
            this.versionNumber = id;
            this.callService.callSettings.userAvatar = userAvatar;
            // this.opinionModal.show(this.puzzleImage);
            this.setInit();
        });
    }
    replaceAll(string, search, replace) {
        return string.split(search).join(replace);
    }
    formatTextFileContent(voiceChangeData, data) {
        const TotalMeetingTime = this.prependTab(this.timeDiff(this.callService.useStarted, moment__WEBPACK_IMPORTED_MODULE_4__().add(5000, 'millisecond')));
        let str = this.replaceAll(JSON.stringify([...[{ SetupTestingTime: this.prependTab(voiceChangeData), TotalMeetingTime }]]), '[', '');
        str =
            this.replaceAll(str, ']', '');
        str =
            this.replaceAll(str, '{', '');
        str =
            this.replaceAll(str, '}', '');
        str =
            this.replaceAll(str, '"', '');
        str =
            this.replaceAll(str, ',', '\t');
        str =
            this.replaceAll(str, ':', ':\t');
        str =
            this.replaceAll(str, 'SetupTestingTime', '\tSetupTestingTime');
        data.forEach(obj => {
            const UserOpinion = obj.UserOpinion;
            delete obj.UserOpinion;
            let objStr = JSON.stringify(obj);
            objStr =
                this.replaceAll(objStr, ']', '');
            objStr =
                this.replaceAll(objStr, '{', '');
            objStr =
                this.replaceAll(objStr, '}', '');
            objStr =
                this.replaceAll(objStr, '"', '');
            objStr =
                this.replaceAll(objStr, ',', '\t');
            objStr =
                this.replaceAll(objStr, ':', ':\t');
            objStr = objStr + `UserOpinion: ${UserOpinion}`;
            objStr = this.replaceAll(objStr, 'UserOpinion:', '\tUserOpinion:\t');
            str = str + objStr;
        });
        str = this.replaceAll(str, 'TestId', '\tTestId');
        return str;
    }
    createFile() {
    }
    download(content, fileName, contentType) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    clipCompleted(skip) {
        if (skip) {
            this.idol = true;
            this.audioInit = false;
            this.audioClipNum = this.selectedPuzzleClips.length;
            this.opinionModal.show(this.puzzleImage);
        }
        else {
            this.audioClipNum++;
            this.idol = true;
            if (this.selectedPuzzleClips.length > this.audioClipNum) {
                setTimeout(() => {
                    this.idol = false;
                    this.audio.nativeElement.load();
                    this.audio.nativeElement.play();
                }, this.selectedPuzzleClips[this.audioClipNum - 1].followedDelay * 1000);
            }
            else if (this.selectedPuzzleClips.length === this.audioClipNum) {
                setTimeout(() => this.opinionModal.show(this.puzzleImage), 5000);
            }
        }
    }
    setInit() {
        this.idol = true;
        this.audioInit = false;
        this.audioClipNum = 0;
        setTimeout(() => {
            this.idol = false;
            this.audioInit = true;
        }, 5000);
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    opinionReceived(params) {
        this.callService.metaData = Object.assign(Object.assign({}, this.callService.metaData), { [this.callService.currentPuzzleId]: params });
        const index = this.puzzleIds.indexOf(this.currentPuzzleId);
        if (index < this.puzzleIds.length - 1) {
            this.callService.currentPuzzleId = this.currentPuzzleId = this.puzzleIds[index + 1];
            this.setInit();
        }
        else {
            const dataArray = [];
            Object.keys(this.msgs).forEach((key) => {
                const metaData = this.callService.metaData[key];
                dataArray.push({
                    TestId: this.prependTab(key),
                    UserOpinion: this.prependTab(this.msgs[key]),
                    RecordingTime: this.prependTab(this.timeDiff(metaData.recordStartTime, metaData.recordEndTime)),
                    AwayFocus: this.prependTab(this.optimizeTime(metaData.awayFocus)),
                    AwayComputer: this.prependTab(this.optimizeTime(metaData.awayTime)),
                    OpinionSubmissionTime: this.prependTab(this.timeDiff(metaData.promptShowTime, metaData.recordStartTime)),
                });
            });
            // this.createXlFile(dataArray, this.makeid(8));
            // download zip
            const zip = new jszip__WEBPACK_IMPORTED_MODULE_3__();
            const zipFileName = `TestDeliverable_${this.route.snapshot.queryParams.token}`;
            var zipFolder = zip.folder(zipFileName);
            this.recordings.forEach((file) => {
                zipFolder.file(file.name, file.arrayBuffer());
            });
            zipFolder.file(this.makeid(8) + '.txt', this.createXlFile(dataArray, this.makeid(8)));
            this.completed = true;
            setTimeout(() => {
                zip.generateAsync({ type: "blob" })
                    .then((function (content) {
                    // see FileSaver.js
                    this.downloadableContent = content;
                    this.downloadFileName = zipFileName;
                    this.saveZipFile();
                }).bind(this));
            }, 5000);
        }
    }
    createXlFile(json, excelFileName) {
        // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        // const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const voiceChangerDuration = this.timeDiff(this.callService.voiceChangerTestStart, this.callService.voiceChangerTestEnd);
        const content = this.formatTextFileContent(voiceChangerDuration, json);
        return new Blob([this.voiceConfig.sign, ...content], { type: 'text/plain' });
    }
    blobOfXlx(buffer, fileName) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        return data;
        // fileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
    }
    timeDiff(a, b) {
        const diffInMS = b.diff(a, 'milliseconds');
        return moment__WEBPACK_IMPORTED_MODULE_4__["duration"](diffInMS, "milliseconds").format("ss.SS", {
            trim: false
        });
    }
    optimizeTime(ms) {
        return moment__WEBPACK_IMPORTED_MODULE_4__["duration"](ms, "milliseconds").format("ss.SS", {
            trim: false
        });
    }
    saveZipFile() {
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](this.downloadableContent, this.downloadFileName);
    }
    ;
    prependTab(text) {
        return text;
    }
}
CallComponent.ɵfac = function CallComponent_Factory(t) { return new (t || CallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"])); };
CallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallComponent, selectors: [["app-call"]], viewQuery: function CallComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.opinionModal = _t.first);
    } }, decls: 4, vars: 6, consts: [["class", "call-container", 4, "ngIf"], [4, "ngIf"], [3, "voiceConfig", "recordings", "msgs", "callService", "closed"], ["opinionModal", ""], [1, "call-container"], [1, "fake-call"], [1, "screen"], [3, "src"], [1, "actions"], [1, "interactions"], ["nz-button", "", "nzType", "text"], [3, "nzCount"], ["nz-icon", "", "nzType", "team", "nzTheme", "outline", 2, "font-size", "24px", "color", "white"], [1, "participants"], [1, "text-align-center", "title", "mt-20", "mb-12"], [1, "joinee"], ["width", "24", "height", "24", 1, "mr-8", 3, "data-jdenticon-value"], [1, "name"], ["class", "speaker", "src", "/assets/speaker.png", 4, "ngIf"], ["autoplay", "", 3, "ended"], ["audio", ""], ["type", "audio/mp3", 3, "src"], ["src", "/assets/speaker.png", 1, "speaker"], [1, "cmp-msg"], ["nzType", "success", "nzShowIcon", "", 3, "nzMessage"], ["msg", ""], [1, "manual-download", 3, "click"]], template: function CallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CallComponent_div_0_Template, 29, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CallComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-opinion-record-modal", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function CallComponent_Template_app_opinion_record_modal_closed_2_listener($event) { return ctx.opinionReceived($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("voiceConfig", ctx.voiceConfig)("recordings", ctx.recordings)("msgs", ctx.msgs)("callService", ctx.callService);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _opinion_record_modal_opinion_record_modal_component__WEBPACK_IMPORTED_MODULE_10__["OpinionRecordModalComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__["NzBadgeComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], ngx_jdenticon__WEBPACK_IMPORTED_MODULE_15__["SvgJdenticonDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_16__["NzAlertComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.call-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%] {\n  background-color: black;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: auto;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background-color: #212022;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%]   .interactions[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 100%;\n  background: #282828;\n  padding: 0 8px ;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%]   .joinee[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  margin: 0 2px;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%]   .joinee[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: white;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%]   .joinee[_ngcontent-%COMP%]    + .joinee[_ngcontent-%COMP%] {\n  border-top: 1px solid #484646;\n}\n.speaker[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  margin-left: 12px;\n}\n.cmp-msg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cmp-msg[_ngcontent-%COMP%]   nz-alert[_ngcontent-%COMP%] {\n  width: 450px;\n}\nnz-badge[_ngcontent-%COMP%]     nz-badge-sup {\n  background-color: transparent;\n  color: white;\n  font-size: 10px;\n  border: none;\n  box-shadow: none;\n}\n  .manual-download {\n  color: blue !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbC9EOi9wcm9qZWN0cy9Bbmd1bGFyL2Zha2V6b29tL2Zha2V6b29tLW1hc3Rlci9zcmMvYXBwL2NhbGwvY2FsbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY2FsbC9jYWxsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0RGO0FERkE7RUFNSSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNESjtBRFJBO0VBWU0sT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FEZkE7RUFtQlEsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RSO0FEcEJBO0VBMEJNLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNITjtBRDNCQTtFQWtDTSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSk47QURsQ0E7RUEyQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNOSjtBRHhDQTtFQWlETSxZQUFBO0FDTk47QUQzQ0E7RUFxRE0sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNQTjtBRGpEQTtFQTJEUSxZQUFBO0FDUFI7QURwREE7RUFnRU0sNkJBQUE7QUNUTjtBRGNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1pGO0FEZUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDYkY7QURRQTtFQVFJLFlBQUE7QUNiSjtBRGlCQTtFQUdNLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURzQkE7RUFFSSxzQkFBQTtFQUNBLGlCQUFBO0FDckJKIiwiZmlsZSI6InNyYy9hcHAvY2FsbC9jYWxsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4uY2FsbC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5mYWtlLWNhbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnNjcmVlbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIwMjI7XG4gICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB9XG5cbiAgICAuaW50ZXJhY3Rpb25zIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5wYXJ0aWNpcGFudHMge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzI4MjgyODtcbiAgICBwYWRkaW5nOiAwIDhweCA7XG5cbiAgICAudGl0bGUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5qb2luZWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgbWFyZ2luOiAwIDJweDtcblxuICAgICAgLm5hbWUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmpvaW5lZSArIC5qb2luZWUge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ODQ2NDZcbiAgICB9XG4gIH1cbn1cblxuLnNwZWFrZXIge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTJweFxufVxuXG4uY21wLW1zZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG56LWFsZXJ0IHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbn1cblxubnotYmFkZ2Uge1xuICA6Om5nLWRlZXAgIHtcbiAgICBuei1iYWRnZS1zdXAge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAubWFudWFsLWRvd25sb2FkIHtcbiAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhbGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYWxsLWNvbnRhaW5lciAuZmFrZS1jYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FsbC1jb250YWluZXIgLmZha2UtY2FsbCAuc2NyZWVuIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNhbGwtY29udGFpbmVyIC5mYWtlLWNhbGwgLnNjcmVlbiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmNhbGwtY29udGFpbmVyIC5mYWtlLWNhbGwgLmFjdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIyO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5jYWxsLWNvbnRhaW5lciAuZmFrZS1jYWxsIC5pbnRlcmFjdGlvbnMge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhbGwtY29udGFpbmVyIC5wYXJ0aWNpcGFudHMge1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcbiAgcGFkZGluZzogMCA4cHggO1xufVxuLmNhbGwtY29udGFpbmVyIC5wYXJ0aWNpcGFudHMgLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhbGwtY29udGFpbmVyIC5wYXJ0aWNpcGFudHMgLmpvaW5lZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMCAycHg7XG59XG4uY2FsbC1jb250YWluZXIgLnBhcnRpY2lwYW50cyAuam9pbmVlIC5uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhbGwtY29udGFpbmVyIC5wYXJ0aWNpcGFudHMgLmpvaW5lZSArIC5qb2luZWUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ4NDY0Njtcbn1cbi5zcGVha2VyIHtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uY21wLW1zZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNtcC1tc2cgbnotYWxlcnQge1xuICB3aWR0aDogNDUwcHg7XG59XG5uei1iYWRnZSA6Om5nLWRlZXAgbnotYmFkZ2Utc3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46Om5nLWRlZXAgLm1hbnVhbC1kb3dubG9hZCB7XG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-call',
                templateUrl: './call.component.html',
                styleUrls: ['./call.component.less']
            }]
    }], function () { return [{ type: _call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"] }]; }, { audio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['audio']
        }], opinionModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['opinionModal']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");



class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 1, vars: 0, consts: [["nzType", "error", "nzMessage", "Test link is expired", "nzShowIcon", "", 1, "w-100", "mt-12", "mb-12"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "D5kh":
/*!************************************!*\
  !*** ./src/app/canvas/spectrum.js ***!
  \************************************/
/*! exports provided: Spectrum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spectrum", function() { return Spectrum; });
// var canvas = document.querySelector('canvas');
// const canvasContext = canvas.getContext('2d');
// const barGradient = canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
// barGradient.addColorStop(0, '#ececec');
// barGradient.addColorStop(1, '#e2e2e2');

let canvas;
// canvas rendering for the audio
class Spectrum{

    constructor(audioCtx, canvasElem){
        canvas = canvasElem;
        this.spectrumFFTSize = 128
        this.spectrumSmoothing = 0.8
        // create the analyser to be used for the canvas rendering and the pitch detection
        this.spectrumAudioAnalyser = audioCtx.createAnalyser();
        this.spectrumAudioAnalyser.fftSize = this.spectrumFFTSize;
        this.spectrumAudioAnalyser.smoothingTimeConstant = this.spectrumSmoothing;
        this.canvasContext = canvas.getContext('2d');
        this.barGradient = this.canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
        this.barGradient.addColorStop(0, '#ececec');
        this.barGradient.addColorStop(1, '#e2e2e2');
    }

    setBarColor(voice){
        if(voice == "white"){
          this.barGradient = this.canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
          this.barGradient.addColorStop(0, 'blue');
          this.barGradient.addColorStop(1, 'red');
        } else{
          this.barGradient = this.canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
          this.barGradient.addColorStop(0, 'orange');
          this.barGradient.addColorStop(1, '#858585');
        }
    }

    render(){
        // get the frequency data and represent it as bars on a canvas
        var frequencyData = new Uint8Array(this.spectrumAudioAnalyser.frequencyBinCount);
        this.spectrumAudioAnalyser.getByteFrequencyData(frequencyData);

        this.canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        this.canvasContext.fillStyle = this.barGradient;

        var barWidth = canvas.width / frequencyData.length;
        for (let i = 0; i < frequencyData.length; i++) {
            var magnitude = frequencyData[i];
            this.canvasContext.fillRect(barWidth * i, canvas.height, barWidth - 1, -magnitude - 1);
        }
    }
}


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AppService {
    constructor(http) {
        this.http = http;
    }
    validate(token) {
        return this.http.get(`http://localhost:3000/validate?token=${token}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    }
    consume(token) {
        return this.http.get(`http://localhost:3000/consume?token=${token}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HC5s":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: sleep, generateFileName, onDecodeBufferError, decodeAndDownload, decodeFileAndAddInCollection, makeDistortionCurve, bufferToWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFileName", function() { return generateFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDecodeBufferError", function() { return onDecodeBufferError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeAndDownload", function() { return decodeAndDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeFileAndAddInCollection", function() { return decodeFileAndAddInCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDistortionCurve", function() { return makeDistortionCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferToWave", function() { return bufferToWave; });
const sleep = time => new Promise(resolve => setTimeout(resolve, time));
function generateFileName(recording_type) {
    return "recording_" + recording_type + ".wav";
}
// downloads the audio to the computer
function onDecodeBufferError(e) {
    console.log('Error decoding buffer: ' + e.message);
    console.log(e);
}
// function called when the recording is done. it decodes and downloads the audio
function decodeAndDownload(voice, audio, recording_type) {
    voice.audioCtx.decodeAudioData(audio, function make_download(abuffer) {
        // get duration and sample rate
        const duration = abuffer.duration, rate = abuffer.sampleRate, offset = 0, total_samples = abuffer.length;
        const blob = bufferToWave(abuffer, total_samples);
        const new_file = URL.createObjectURL(blob);
        const download_link = document.getElementById("download_link");
        download_link.href = new_file;
        const name = generateFileName(recording_type);
        download_link.download = name;
        download_link.click();
        voice.clear_nodes();
    }, onDecodeBufferError);
}
function decodeFileAndAddInCollection(voice, audio, quizNum, collection) {
    voice.audioCtx.decodeAudioData(audio).then((abuffer) => {
        const duration = abuffer.duration, rate = abuffer.sampleRate, offset = 0, total_samples = abuffer.length;
        const blob = bufferToWave(abuffer, total_samples);
        collection.push(new File([blob], `${quizNum}.wav`));
        voice.clear_nodes();
    }).catch(onDecodeBufferError);
}
// creates a distortion wave that can be applied on top of the input audio
function makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = 180 / Math.PI;
    let x;
    for (let i = 0; i < n_samples; ++i) {
        x = i * 2 / n_samples - 1;
        // curve[i] = Math.sin(i/(n_samples/180) * deg) ;
        curve[i] = ((3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x))) / 125;
    }
    return curve;
}
// Convert an AudioBuffer to a Blob using WAVE representation
function bufferToWave(abuffer, len) {
    const numOfChan = abuffer.numberOfChannels;
    const length = len * numOfChan * 2 + 44;
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    const channels = [];
    let i;
    let sample;
    let offset = 0;
    let pos = 0;
    // write WAVE header
    setUint32(0x46464952); // "RIFF"
    setUint32(length - 8); // file length - 8
    setUint32(0x45564157); // "WAVE"
    setUint32(0x20746d66); // "fmt " chunk
    setUint32(16); // length = 16
    setUint16(1); // PCM (uncompressed)
    setUint16(numOfChan);
    setUint32(abuffer.sampleRate);
    setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
    setUint16(numOfChan * 2); // block-align
    setUint16(16); // 16-bit (hardcoded in this demo)
    setUint32(0x61746164); // "data" - chunk
    setUint32(length - pos - 4); // chunk length
    // write interleaved data
    for (i = 0; i < abuffer.numberOfChannels; i++)
        channels.push(abuffer.getChannelData(i));
    while (pos < length) {
        for (i = 0; i < numOfChan; i++) { // interleave channels
            sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
            sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; // scale to 16-bit signed int
            view.setInt16(pos, sample, true); // write 16-bit sample
            pos += 2;
        }
        offset++; // next source sample
    }
    // create Blob
    return new Blob([buffer], { type: "audio/wav" });
    function setUint16(data) {
        view.setUint16(pos, data, true);
        pos += 2;
    }
    function setUint32(data) {
        view.setUint32(pos, data, true);
        pos += 4;
    }
}


/***/ }),

/***/ "R0Dl":
/*!******************************************!*\
  !*** ./src/app/has-valid-token.guard.ts ***!
  \******************************************/
/*! exports provided: HasValidTokenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasValidTokenGuard", function() { return HasValidTokenGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HasValidTokenGuard {
    constructor(appService, router, route) {
        this.appService = appService;
        this.router = router;
        this.route = route;
    }
    canActivate(routeSS, state) {
        return this.appService.validate(routeSS.queryParams.token || this.route.snapshot.queryParams.token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((flag) => {
            if (!flag)
                this.router.navigate(['/error']);
        }));
    }
}
HasValidTokenGuard.ɵfac = function HasValidTokenGuard_Factory(t) { return new (t || HasValidTokenGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HasValidTokenGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HasValidTokenGuard, factory: HasValidTokenGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HasValidTokenGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "R5Wi":
/*!************************************************!*\
  !*** ./src/app/complete/complete.component.ts ***!
  \************************************************/
/*! exports provided: CompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteComponent", function() { return CompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CompleteComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompleteComponent.ɵfac = function CompleteComponent_Factory(t) { return new (t || CompleteComponent)(); };
CompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteComponent, selectors: [["app-complete"]], decls: 0, vars: 0, template: function CompleteComponent_Template(rf, ctx) { }, styles: [".cmp-msg[_ngcontent-%COMP%] {\n  width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGUvRDovcHJvamVjdHMvQW5ndWxhci9mYWtlem9vbS9mYWtlem9vbS1tYXN0ZXIvc3JjL2FwcC9jb21wbGV0ZS9jb21wbGV0ZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcGxldGUvY29tcGxldGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wbGV0ZS9jb21wbGV0ZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbXAtbXNnIHtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuIiwiLmNtcC1tc2cge1xuICB3aWR0aDogNDUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-complete',
                templateUrl: './complete.component.html',
                styleUrls: ['./complete.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(appService, route, router) {
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.title = 'fakezoom';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "testFrame", "name", "testFrame", "onload", "setUniqueSource(this)", "src", "", 2, "width", "0", "height", "0", "visibility", "hidden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.select-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 272px;\n  width: 399px;\n  background-color: #212022;\n  object-fit: scale-down;\n  border-radius: 8px;\n}\n.avatar-opts[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  display: flex;\n}\n.avatar-opts[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.avatar-opts[_ngcontent-%COMP%]     nz-avatar {\n  cursor: pointer;\n}\n.avatar-opts[_ngcontent-%COMP%]     .selected.ant-avatar {\n  border: 4px solid #0e71eb;\n}\n.how-things-work[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.call-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%] {\n  background-color: black;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background-color: #212022;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n}\n.call-container[_ngcontent-%COMP%]   .fake-call[_ngcontent-%COMP%]   .interactions[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 100%;\n  background: #282828;\n  padding: 0 8px ;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%]   .joinee[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  margin: 0 2px;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%]   .joinee[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: white;\n}\n.call-container[_ngcontent-%COMP%]   .participants[_ngcontent-%COMP%]   .joinee[_ngcontent-%COMP%]    + .joinee[_ngcontent-%COMP%] {\n  border-top: 1px solid #484646;\n}\n.text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.white[_ngcontent-%COMP%] {\n  color: white;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.mt-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nhtml[_ngcontent-%COMP%] {\n  background-color: #cef;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .sonar-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sonar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n  padding: 8rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sonar-emitter[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: 48px;\n  height: 48px;\n  border-radius: 9999px;\n  background-color: transparent;\n}\n\n.sonar-wave[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 9999px;\n  background-color: #0e71eb;\n  opacity: 0;\n  z-index: -1;\n  pointer-events: none;\n}\n\n.sonar-wave[_ngcontent-%COMP%] {\n  animation: sonarWave 2s linear infinite;\n}\n@keyframes sonarWave {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    transform: scale(3);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovcHJvamVjdHMvQW5ndWxhci9mYWtlem9vbS9mYWtlem9vbS1tYXN0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FER0E7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FETUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ0pGO0FERUE7RUFLSSxpQkFBQTtBQ0pKO0FEREE7RUFVTSxlQUFBO0FDTk47QURVTTtFQUNFLHlCQUFBO0FDUlI7QURjQTtFQUNFLGdCQUFBO0FDWkY7QURlQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ2JGO0FEVUE7RUFNSSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNiSjtBRElBO0VBWU0sT0FBQTtBQ2JOO0FEQ0E7RUFnQk0seUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2ROO0FETkE7RUF3Qk0sT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZOO0FEYkE7RUFpQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNqQko7QURuQkE7RUF1Q00sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNqQk47QUR6QkE7RUE2Q1EsWUFBQTtBQ2pCUjtBRDVCQTtFQWtETSw2QkFBQTtBQ25CTjtBRHlCQTtFQUNFLGtCQUFBO0FDdkJGO0FEMEJBO0VBQ0UsWUFBQTtBQ3hCRjtBRDJCQTtFQUNFLGdCQUFBO0FDekJGO0FENEJBO0VBQ0UsWUFBQTtBQzFCRjtBQUNBLGtDQUFrQztBRDZCbEM7RUFDRSxzQkFBQTtBQzNCRjtBRDZCQTs7O0VBQ0UsWUFBQTtBQ3pCRjtBQUNBLDREQUE0RDtBRDRCNUQ7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzFCRjtBQUNBLGVBQWU7QUQ2QmY7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUMzQkY7QUFDQSxrREFBa0Q7QUQ4QmxEO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUM1QkY7QUFDQTs7O0NBR0M7QUQrQkQ7RUFDRSx1Q0FBQTtBQzdCRjtBRGdDQTtFQUNFO0lBQ0UsWUFBQTtFQzlCRjtFRGdDQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzlCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5zZWxlY3QtYXZhdGFyIHtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDI3MnB4O1xuICAgIHdpZHRoOiAzOTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIyO1xuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG5cbi5hdmF0YXItb3B0cyB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgKiArICoge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICBuei1hdmF0YXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5zZWxlY3RlZCB7XG4gICAgICAmLmFudC1hdmF0YXIge1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMGU3MWViO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaG93LXRoaW5ncy13b3JrIHtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbn1cblxuLmNhbGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcblxuICAuZmFrZS1jYWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5zY3JlZW4ge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuYWN0aW9ucyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIyO1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxuXG4gICAgLmludGVyYWN0aW9ucyB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAucGFydGljaXBhbnRzIHtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gICAgcGFkZGluZzogMCA4cHggO1xuXG4gICAgLmpvaW5lZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBtYXJnaW46IDAgMnB4O1xuXG4gICAgICAubmFtZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuam9pbmVlICsgLmpvaW5lZSB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ4NDY0NlxuICAgIH1cblxuICB9XG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tdC0yMCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLyogTWFrZSBpdCBsb29rcyBnb29kIG9uIENvZGVQZW4gKi9cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VmO1xufVxuaHRtbCwgYm9keSwgLnNvbmFyLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIFByZXZlbnQgc2Nyb2xsYmFycyB0byBhcHBlYXIgd2hlbiB3YXZlcyBnbyBvdXQgb2YgYm91bmQgKi9cbi5zb25hci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA4cmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBUaGUgY2lyY2xlICovXG4uc29uYXItZW1pdHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHRyYW5zcGFyZW50O1xufVxuXG4vKiB0aGUgJ3dhdmUnLCBzYW1lIHNoYXBlIGFuZCBzaXplIGFzIGl0cyBwYXJlbnQgKi9cbi5zb25hci13YXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzFlYjtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKlxuICBBbmltYXRlIVxuICBOT1RFOiBhZGQgYnJvd3NlciBwcmVmaXhlcyB3aGVyZSBuZWVkZWQuXG4qL1xuLnNvbmFyLXdhdmUge1xuICBhbmltYXRpb246IHNvbmFyV2F2ZSAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc29uYXJXYXZlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zZWxlY3QtYXZhdGFyIGltZyB7XG4gIGhlaWdodDogMjcycHg7XG4gIHdpZHRoOiAzOTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjAyMjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmF2YXRhci1vcHRzIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hdmF0YXItb3B0cyAqICsgKiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmF2YXRhci1vcHRzIDo6bmctZGVlcCBuei1hdmF0YXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXZhdGFyLW9wdHMgOjpuZy1kZWVwIC5zZWxlY3RlZC5hbnQtYXZhdGFyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgIzBlNzFlYjtcbn1cbi5ob3ctdGhpbmdzLXdvcmsge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xufVxuLmNhbGwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYWxsLWNvbnRhaW5lciAuZmFrZS1jYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FsbC1jb250YWluZXIgLmZha2UtY2FsbCAuc2NyZWVuIHtcbiAgZmxleDogMTtcbn1cbi5jYWxsLWNvbnRhaW5lciAuZmFrZS1jYWxsIC5hY3Rpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjAyMjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uY2FsbC1jb250YWluZXIgLmZha2UtY2FsbCAuaW50ZXJhY3Rpb25zIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYWxsLWNvbnRhaW5lciAucGFydGljaXBhbnRzIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gIHBhZGRpbmc6IDAgOHB4IDtcbn1cbi5jYWxsLWNvbnRhaW5lciAucGFydGljaXBhbnRzIC5qb2luZWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDAgMnB4O1xufVxuLmNhbGwtY29udGFpbmVyIC5wYXJ0aWNpcGFudHMgLmpvaW5lZSAubmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYWxsLWNvbnRhaW5lciAucGFydGljaXBhbnRzIC5qb2luZWUgKyAuam9pbmVlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ODQ2NDY7XG59XG4udGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubXQtMjAge1xuICBtYXJnaW46IDIwcHg7XG59XG4vKiBNYWtlIGl0IGxvb2tzIGdvb2Qgb24gQ29kZVBlbiAqL1xuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWY7XG59XG5odG1sLFxuYm9keSxcbi5zb25hci13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLyogUHJldmVudCBzY3JvbGxiYXJzIHRvIGFwcGVhciB3aGVuIHdhdmVzIGdvIG91dCBvZiBib3VuZCAqL1xuLnNvbmFyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDhyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vKiBUaGUgY2lyY2xlICovXG4uc29uYXItZW1pdHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4vKiB0aGUgJ3dhdmUnLCBzYW1lIHNoYXBlIGFuZCBzaXplIGFzIGl0cyBwYXJlbnQgKi9cbi5zb25hci13YXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlNzFlYjtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLypcbiAgQW5pbWF0ZSFcbiAgTk9URTogYWRkIGJyb3dzZXIgcHJlZml4ZXMgd2hlcmUgbmVlZGVkLlxuKi9cbi5zb25hci13YXZlIHtcbiAgYW5pbWF0aW9uOiBzb25hcldhdmUgMnMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBzb25hcldhdmUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "VBHO":
/*!*********************************************!*\
  !*** ./src/app/lib/pitch/pitch_detector.js ***!
  \*********************************************/
/*! exports provided: autoCorrelate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoCorrelate", function() { return autoCorrelate; });

function autoCorrelate( buf, sampleRate ) {
	// Implements the ACF2+ algorithm
	var SIZE = buf.length;
	var rms = 0;

	for (var i=0;i<SIZE;i++) {
		var val = buf[i];
		rms += val*val;
	}
	rms = Math.sqrt(rms/SIZE);

    // not enough signal
	if (rms<0.01){
		return -1;
    }

	var r1=0, r2=SIZE-1, thres=0.2;
	for (var i=0; i<SIZE/2; i++)
		if (Math.abs(buf[i])<thres) { r1=i; break; }
	for (var i=1; i<SIZE/2; i++)
		if (Math.abs(buf[SIZE-i])<thres) { r2=SIZE-i; break; }

	buf = buf.slice(r1,r2);
	SIZE = buf.length;

	var c = new Array(SIZE).fill(0);
	for (var i=0; i<SIZE; i++)
		for (var j=0; j<SIZE-i; j++)
			c[i] = c[i] + buf[j]*buf[j+i];

	var d=0; while (c[d]>c[d+1]) d++;
	var maxval=-1, maxpos=-1;
	for (var i=d; i<SIZE; i++) {
		if (c[i] > maxval) {
			maxval = c[i];
			maxpos = i;
		}
	}
	var T0 = maxpos;

	var x1=c[T0-1], x2=c[T0], x3=c[T0+1];
	const a = (x1 + x3 - 2*x2)/2;
	const b = (x3 - x1)/2;
	if (a) T0 = T0 - b/(2*a);

	return sampleRate/T0;
}


/***/ }),

/***/ "XO+G":
/*!************************************************************************!*\
  !*** ./src/app/opinion-record-modal/opinion-record-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: OpinionRecordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionRecordModalComponent", function() { return OpinionRecordModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "HC5s");
/* harmony import */ var _voices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../voices */ "bSOy");
/* harmony import */ var _lib_recorder_recorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/recorder/recorder */ "c116");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




















const _c0 = ["canvas"];
function OpinionRecordModalComponent_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (With Voice Changer)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.recording ? "Stop" : "Start", " Recording ");
} }
function OpinionRecordModalComponent_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Audio Recorded (With Voice Changer)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { minRows: 5, maxRows: 5 }; };
function OpinionRecordModalComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-spin", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " The two brainstormers have completed their conversation. Please record an audio clip of yourself stating what you think the answer to this question is. The brainstormers will be able to hear your audio clip before inputting their answers into the system. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OpinionRecordModalComponent_ng_container_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.recordBtnClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OpinionRecordModalComponent_ng_container_1_div_8_Template, 4, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OpinionRecordModalComponent_ng_container_1_div_9_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "nz-alert", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-collapse-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.Tab", function OpinionRecordModalComponent_ng_container_1_Template_textarea_keydown_Tab_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onKeydown($event); })("keydown.enter", function OpinionRecordModalComponent_ng_container_1_Template_textarea_keydown_enter_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onKeydown($event); })("ngModelChange", function OpinionRecordModalComponent_ng_container_1_Template_textarea_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r8.msgs[ctx_r8.callService.currentPuzzleId] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpinning", ctx_r0.hideClicked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.recordEndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("circle", !ctx_r0.recording)("square", ctx_r0.recording);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.recordEndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.recordEndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzHeader", ctx_r0.collpaseTitle)("nzActive", ctx_r0.showImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.msgs[ctx_r0.callService.currentPuzzleId])("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));
} }
class OpinionRecordModalComponent {
    constructor() {
        this.recording = false;
        this.recordings = [];
        this.msgs = {};
        this.visible = false;
        this.showImage = false;
        this.imgPath = '';
        this.hideClicked = false;
        this.bluredStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(window, 'blur');
        this.focusedStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(window, 'focus');
        this.awayfocus = 0;
        this.awaytime = 0;
        this.lastInteraction = moment__WEBPACK_IMPORTED_MODULE_5__();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        const mouseMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mousemove');
        const mouseDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mousedown');
        const keyDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keydown');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(mouseMove, mouseDown, keyDown)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.lastInteraction = moment__WEBPACK_IMPORTED_MODULE_5__()))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => this.visible && !this.hideClicked))
            .subscribe(() => {
            if (this.lastInteraction < moment__WEBPACK_IMPORTED_MODULE_5__().subtract(10, 'seconds')) {
                this.awaytime = this.awaytime + 1000;
                console.log(this.awaytime);
            }
            ;
        });
    }
    get canSubmit() {
        return this.callService.currentPuzzleId &&
            this.recordings.find(file => file.name === `${this.callService.currentPuzzleId}.wav`) &&
            this.msgs[this.callService.currentPuzzleId];
    }
    get collpaseTitle() {
        return this.showImage ? 'Hide Problem' : 'Show Problem';
    }
    recordBtnClicked() {
        try {
            if (this.recording) {
                this.recordEndTime = moment__WEBPACK_IMPORTED_MODULE_5__();
                this.recording = false;
                this.record.stop().then((audio) => {
                    audio.audioBlob.arrayBuffer().then(data => {
                        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["decodeFileAndAddInCollection"])(this.voice, data, this.callService.currentPuzzleId, this.recordings);
                        // decodeAndDownload(this.voice, data, 'masked');
                        // this.voice.clear_nodes();
                    });
                });
            }
            else {
                this.recordStartTime = moment__WEBPACK_IMPORTED_MODULE_5__();
                this.recording = true;
                let stream;
                if (this.voiceConfig.user === 'masked') {
                    this.voice.pitch('high');
                    stream = this.voice.audioStreamChanged;
                }
                else {
                    this.voice.normal();
                    stream = this.voice.audioStream;
                }
                Object(_lib_recorder_recorder__WEBPACK_IMPORTED_MODULE_4__["recordAudio"])(stream).then(recordData => {
                    this.record = recordData;
                    this.record.start();
                });
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    show(path) {
        this.visible = true;
        this.promptShowTime = moment__WEBPACK_IMPORTED_MODULE_5__();
        this.imgPath = path;
        this.totalIdleTimeSubscription();
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(function (stream) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // create the voice object. This object holds the logic of the clear and distorted voices
                try {
                    const canvas = this.canvas.nativeElement;
                    this.voice = new _voices__WEBPACK_IMPORTED_MODULE_3__["Voice"](stream, undefined, canvas);
                    // if (this.voiceConfig.user === 'masked') {
                    //   this.voice.pitch('high');
                    // } else {
                    //   this.voice.normal();
                    // }
                    // create the voice recorder (used upon pressing the record button)
                }
                catch (e) {
                    console.error(e);
                }
            });
        }.bind(this))
            .catch((err) => {
            console.log(err);
        });
    }
    hide() {
        this.replaceLineBreaksTextAreaChanges();
        setTimeout(() => {
            this.hideClicked = true;
        });
        this.showImage = false;
        if (this.awayFocusSubsciption)
            this.awayFocusSubsciption.unsubscribe();
        setTimeout(() => {
            this.visible = false;
            this.record = undefined;
            this.voice = undefined;
            this.hideClicked = false;
        }, 10000 + this.recordEndTime.diff(this.recordStartTime, 'milliseconds'));
    }
    modalClosed() {
        this.closed.emit({ recordStartTime: this.recordStartTime, recordEndTime: this.recordEndTime, promptShowTime: this.promptShowTime, awayFocus: this.awayfocus, awayTime: this.awaytime });
        this.recordStartTime = undefined;
        this.recordEndTime = undefined;
        this.promptShowTime = undefined;
        this.awayfocus = 0;
        this.awaytime = 0;
    }
    deleteRecording() {
        this.recordings = this.recordings.filter(file => file.name === `${this.callService.currentPuzzleId}.wav`);
        this.recordStartTime = undefined;
        this.recordEndTime = undefined;
    }
    totalIdleTimeSubscription() {
        let durations$ = this.bluredStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => Date.now()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(focusTime => {
            //focusTime = ft;
            return this.focusedStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => Date.now()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(outTime => outTime - focusTime));
        }));
        this.awayFocusSubsciption = durations$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])((sum, next) => sum + next, 0))
            .subscribe(total => this.awayfocus = total);
    }
    ;
    onKeydown(event) {
        event.preventDefault();
    }
    replaceLineBreaksTextAreaChanges() {
        this.msgs[this.callService.currentPuzzleId] = this.msgs[this.callService.currentPuzzleId].replace(/\n/g, "");
    }
}
OpinionRecordModalComponent.ɵfac = function OpinionRecordModalComponent_Factory(t) { return new (t || OpinionRecordModalComponent)(); };
OpinionRecordModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OpinionRecordModalComponent, selectors: [["app-opinion-record-modal"]], viewQuery: function OpinionRecordModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { voiceConfig: "voiceConfig", recordings: "recordings", msgs: "msgs", callService: "callService" }, outputs: { closed: "closed" }, decls: 4, vars: 7, consts: [["nzOkText", "Next", "nzTitle", "Record your opinion", 3, "nzWidth", "nzVisible", "nzOkLoading", "nzCancelText", "nzOkDisabled", "nzClosable", "nzVisibleChange", "nzAfterClose", "nzOnOk"], [4, "nzModalContent"], [3, "hidden"], ["canvas", ""], ["nzTip", "Please wait a moment while the brainstormers complete the problem. We will move on to the next problem in a moment.", 3, "nzSpinning"], [1, "mb-12"], [1, "d-flex", "align-center", "justify-content-space-between", "mb-12"], [1, "d-flex", "align-center"], ["nz-button", "", "nzType", "primary", "nzShape", "circle", 1, "record-btn", "mr-12", 3, "disabled", "click"], ["nz-icon", ""], [4, "ngIf"], ["href", "", "id", "download_link"], ["nzType", "info", "nzMessage", "Once you have recorded your audio clip, please also type the same answer that you recorded into the text box below for record-keeping purposes.", "nzShowIcon", "", 1, "w-100", "mt-12", "mb-12"], [3, "nzHeader", "nzActive"], [3, "src"], ["nz-input", "", "placeholder", "Type the same answer you recorded above.", 1, "mt-12", 3, "ngModel", "nzAutosize", "keydown.Tab", "keydown.enter", "ngModelChange"]], template: function OpinionRecordModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function OpinionRecordModalComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.visible = $event; })("nzAfterClose", function OpinionRecordModalComponent_Template_nz_modal_nzAfterClose_0_listener() { return ctx.modalClosed(); })("nzOnOk", function OpinionRecordModalComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OpinionRecordModalComponent_ng_container_1_Template, 16, 14, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 1024)("nzVisible", ctx.visible)("nzOkLoading", ctx.hideClicked)("nzCancelText", null)("nzOkDisabled", !ctx.canSubmit)("nzClosable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalContentDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_9__["NzSpinComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_15__["NzAlertComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__["NzCollapsePanelComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__["NzAutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"]], styles: [".record-btn[_ngcontent-%COMP%] {\n  border: none;\n  height: 48px;\n  width: 48px;\n  background: red;\n}\n.record-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.record-btn[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: white;\n  border-radius: 50%;\n}\n.record-btn[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: white;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n  display: block;\n  max-width: 100%;\n}\n  textarea.ant-input {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bpbmlvbi1yZWNvcmQtbW9kYWwvRDovcHJvamVjdHMvQW5ndWxhci9mYWtlem9vbS9mYWtlem9vbS1tYXN0ZXIvc3JjL2FwcC9vcGluaW9uLXJlY29yZC1tb2RhbC9vcGluaW9uLXJlY29yZC1tb2RhbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvb3Bpbmlvbi1yZWNvcmQtbW9kYWwvb3Bpbmlvbi1yZWNvcmQtbW9kYWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDREY7QURHRTtFQUNFLFlBQUE7QUNESjtBRE5BO0VBV0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRko7QURaQTtFQWtCSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDSEo7QURPQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBRUksWUFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvb3Bpbmlvbi1yZWNvcmQtbW9kYWwvb3Bpbmlvbi1yZWNvcmQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnJlY29yZC1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcblxuICAmW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5zcXVhcmUge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxufVxuXG5pbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAge1xuICB0ZXh0YXJlYS5hbnQtaW5wdXQge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxufVxuIiwiLnJlY29yZC1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbi5yZWNvcmQtYnRuW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi5yZWNvcmQtYnRuIC5jaXJjbGUge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJlY29yZC1idG4gLnNxdWFyZSB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCB0ZXh0YXJlYS5hbnQtaW5wdXQge1xuICByZXNpemU6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OpinionRecordModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-opinion-record-modal',
                templateUrl: './opinion-record-modal.component.html',
                styleUrls: ['./opinion-record-modal.component.less']
            }]
    }], function () { return []; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas']
        }], voiceConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], recordings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], msgs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], callService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "Yrnm":
/*!************************************!*\
  !*** ./src/app/lib/pitch/utils.js ***!
  \************************************/
/*! exports provided: hannWindow, linearInterpolation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hannWindow", function() { return hannWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearInterpolation", function() { return linearInterpolation; });
// functions used for the pitch shifting

function hannWindow(length) {

    var window = new Float32Array(length);
    for (var i = 0; i < length; i++) {
        window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
    }
    return window;
};

function linearInterpolation(a, b, t) {
    return a + (b - a) * t;
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _has_valid_token_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-valid-token.guard */ "R0Dl");
/* harmony import */ var _call_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call/call.service */ "2aLp");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ngx_jdenticon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-jdenticon */ "RAOg");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./setup/setup.component */ "uMz8");
/* harmony import */ var _ld_rollar_ld_rollar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ld-rollar/ld-rollar.component */ "s51J");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./call/call.component */ "5Tot");
/* harmony import */ var _opinion_record_modal_opinion_record_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./opinion-record-modal/opinion-record-modal.component */ "XO+G");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./complete/complete.component */ "R5Wi");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./error/error.component */ "CG0s");



































Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_25___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"] },
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
        _call_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"],
        _app_service__WEBPACK_IMPORTED_MODULE_31__["AppService"],
        _has_valid_token_guard__WEBPACK_IMPORTED_MODULE_0__["HasValidTokenGuard"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_16__["NzAvatarModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__["NzSpinModule"],
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_18__["NzBadgeModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_21__["NzAlertModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__["NzTagModule"],
            ngx_jdenticon__WEBPACK_IMPORTED_MODULE_24__["NgxJdenticonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_23__["NzCollapseModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _setup_setup_component__WEBPACK_IMPORTED_MODULE_26__["SetupComponent"],
        _ld_rollar_ld_rollar_component__WEBPACK_IMPORTED_MODULE_27__["LdRollarComponent"],
        _call_call_component__WEBPACK_IMPORTED_MODULE_28__["CallComponent"],
        _opinion_record_modal_opinion_record_modal_component__WEBPACK_IMPORTED_MODULE_29__["OpinionRecordModalComponent"],
        _complete_complete_component__WEBPACK_IMPORTED_MODULE_30__["CompleteComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_32__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_16__["NzAvatarModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__["NzSpinModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_18__["NzBadgeModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_21__["NzAlertModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__["NzTagModule"],
        ngx_jdenticon__WEBPACK_IMPORTED_MODULE_24__["NgxJdenticonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_23__["NzCollapseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _setup_setup_component__WEBPACK_IMPORTED_MODULE_26__["SetupComponent"],
                    _ld_rollar_ld_rollar_component__WEBPACK_IMPORTED_MODULE_27__["LdRollarComponent"],
                    _call_call_component__WEBPACK_IMPORTED_MODULE_28__["CallComponent"],
                    _opinion_record_modal_opinion_record_modal_component__WEBPACK_IMPORTED_MODULE_29__["OpinionRecordModalComponent"],
                    _complete_complete_component__WEBPACK_IMPORTED_MODULE_30__["CompleteComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_32__["ErrorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"],
                    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"],
                    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_16__["NzAvatarModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__["NzSpinModule"],
                    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_18__["NzBadgeModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputModule"],
                    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_21__["NzAlertModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__["NzTagModule"],
                    ngx_jdenticon__WEBPACK_IMPORTED_MODULE_24__["NgxJdenticonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_23__["NzCollapseModule"],
                ],
                providers: [
                    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"] },
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
                    _call_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"],
                    _app_service__WEBPACK_IMPORTED_MODULE_31__["AppService"],
                    _has_valid_token_guard__WEBPACK_IMPORTED_MODULE_0__["HasValidTokenGuard"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bSOy":
/*!***************************!*\
  !*** ./src/app/voices.js ***!
  \***************************/
/*! exports provided: Voice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voice", function() { return Voice; });
/* harmony import */ var _canvas_spectrum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/spectrum */ "D5kh");
/* harmony import */ var _lib_pitch_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/pitch/utils */ "Yrnm");
/* harmony import */ var _lib_pitch_pitch_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/pitch/pitch_detector */ "VBHO");




var randomPitchRatio = 0
// https://nonbinary.wiki/wiki/Voice_and_speech#:~:text=Several%20studies%20have%20identified%20a,%2C%20Wolfe%20et%20al%201990).
// Several studies have identified a gender-ambiguous average pitch at 155-187Hz, a feminine average pitch at 220Hz, and a masculine average pitch at 120Hz (Adler et al 2006, Andrews 1999, Gelfer et al 2000, Spencer 1998, Wolfe et al 1990).
var median_pitch = 171;

// this class handles the voice changing logic
class Voice {

    constructor(stream, audioCtx, elm) {
        // save the input stream and context
        this.stream = stream;
        this.audioCtx = audioCtx ? audioCtx :  new (window.AudioContext || window.webkitAudioContext)();

        // nodes array to store the active audio nodes to be disconnected when the voice changes
        this.nodes = []

        // create the source node and the destination node
        this.source = this.audioCtx.createMediaStreamSource(this.stream);
        this.destination_normal = this.audioCtx.createMediaStreamDestination()
        this.destination_distorted = this.audioCtx.createMediaStreamDestination()

        // ouput stream used for the MediaRecorder to record the output audio after being processsed
        this.audioStream = this.destination_normal.stream;
        this.audioStreamChanged = this.destination_distorted.stream;

        // audio analyser
        this.spectrum = new _canvas_spectrum__WEBPACK_IMPORTED_MODULE_0__["Spectrum"](this.audioCtx, elm);
        setInterval((function () {
            this.spectrum.render();
        }).bind(this), 1000 / 20);
    }

    // disconnects all active nodes
    clear_nodes() {
        for (const node of this.nodes) {
            node.disconnect()
        }
        this.nodes = []
    }


    // clear the active nodes and connect the source again
    init(voice_type) {
        this.clear_nodes()
        this.nodes.push(this.source)
        this.voice_type = voice_type
    }


    // pitch shifter voice
    pitch() {
        this.init("changed")

        var validGranSizes = [256, 512, 1024, 2048, 4096, 8192],
            grainSize = validGranSizes[2], // controls the gain size
            pitchRatio = 1.5, // pitchRatio will be manipulated by the onaudioprocess function
            overlapRatio = 0.55, // controls the overlap ratio of the buffer
            grainSizeUnmasked = validGranSizes[2],
            pitchRatioUnmasked = 1,
            overlapRatioUnmasked = 0.5,
            failedOnce = false;

        var audioCtx = this.audioCtx

        // create a processor node to manipulate the input buffer
        var pitchShifterProcessor = this.audioCtx.createScriptProcessor(grainSize, 1, 1);
        pitchShifterProcessor.buffer = new Float32Array(grainSize * 2);
        pitchShifterProcessor.grainWindow = Object(_lib_pitch_utils__WEBPACK_IMPORTED_MODULE_1__["hannWindow"])(grainSize);

        var pitchShifterProcessorUnmasked = this.audioCtx.createScriptProcessor(grainSizeUnmasked, 1, 1);
        pitchShifterProcessorUnmasked.buffer = new Float32Array(grainSizeUnmasked * 2);
        pitchShifterProcessorUnmasked.grainWindow = Object(_lib_pitch_utils__WEBPACK_IMPORTED_MODULE_1__["hannWindow"])(grainSizeUnmasked);

        // the function that processes the input buffer
        pitchShifterProcessor.onaudioprocess = function (event) {

            var inputData = event.inputBuffer.getChannelData(0);
            var outputData = event.outputBuffer.getChannelData(0);
          this.inputData = inputData;
            // get the pitch of the input buffer from the microphone
            var pitch_freq = Object(_lib_pitch_pitch_detector__WEBPACK_IMPORTED_MODULE_2__["autoCorrelate"])(inputData, audioCtx.sampleRate);

            // get the difference between the input pitch and the target pitch
            // then convert it to a ratio to be applied on the voice
            //pitchRatio = (1 - 0.9*(pitch_freq - median_pitch) / median_pitch)
            pitchRatio = median_pitch/pitch_freq

            // check if the ratio exceeds the bounds of the algorithm
            if (pitchRatio < 0.5) {
                pitchRatio = 0.5
            } else if (pitchRatio > 2) {
                pitchRatio = 2
            }



            //////////////////////////////////
            // Attempt at using the vocoder //

            // // 1. Create a sine wave for a 200Hz note (can be changed to any other frequency)
            // const REAL_TIME_FREQUENCY = 200;
            // const ANGULAR_FREQUENCY = REAL_TIME_FREQUENCY * 2 * Math.PI;

            // // apply the frequency to a new buffer
            // let myBuffer = audioCtx.createBuffer(1, inputData.length, 44100);
            // let myArray = myBuffer.getChannelData(0);
            // function generateSample(sampleNumber) {
            //     let sampleTime = sampleNumber / 44100;
            //     let sampleAngle = sampleTime * ANGULAR_FREQUENCY;
            //     return Math.sin(sampleAngle);
            // }
            // for (let sampleNumber = 0; sampleNumber < 88200; sampleNumber++) {
            //     myArray[sampleNumber] = generateSample(sampleNumber);
            // }

            // // 2. create the vocoder with the input buffer and the chenerated buffer
            // try {
            //     // i used a try catch because the creation of the vocoder fails due to an error in the vocoder algorithm itself
            //     if(!failedOnce){
            //         // params: audio context, carrier (fake voice input signal), modulator (real voice input signal)
            //         let v = vocoder(audioCtx, myBuffer, inputData);
            //     }
            // } catch (error) {
            //     failedOnce = true
            //     console.error(error);
            // }

            // End of attempt at using the vocoder //
            /////////////////////////////////////////




            ////////////////////////////////////
            // start pitch shifting algorithm //
            for (i = 0; i < inputData.length; i++) {

                // Apply the window to the input buffer
                inputData[i] *= this.grainWindow[i];

                // Shift half of the buffer
                this.buffer[i] = this.buffer[i + grainSize];

                // Empty the buffer tail
                this.buffer[i + grainSize] = 0.0;
            }

            // Calculate the pitch shifted grain re-sampling and looping the input
            var grainData = new Float32Array(grainSize * 2);
            if (Math.floor(audioCtx.currentTime * 1000) % 60 == 0) {
                randomPitchRatio = Math.random() * 0.3;
            }

            let pitch_move = pitchRatio + randomPitchRatio
            if (pitch_move < 0.5) {
                pitch_move = 0.5
            } else if (pitch_move > 2) {
                pitch_move = 2
            }


            for (var i = 0, j = 0.0;
                i < grainSize;
                i++, j += pitch_move) {

                var index = Math.floor(j) % grainSize;
                var a = inputData[index];
                var b = inputData[(index + 1) % grainSize];
                grainData[i] += Object(_lib_pitch_utils__WEBPACK_IMPORTED_MODULE_1__["linearInterpolation"])(a, b, j % 1.0) * this.grainWindow[i];
            }

            // Copy the grain multiple times overlapping it
            for (i = 0; i < grainSize; i += Math.round(grainSize * (1 - overlapRatio))) {
                for (j = 0; j <= grainSize; j++) {
                    this.buffer[i + j] += grainData[j];
                }
            }

            // Output the first half of the buffer
            for (i = 0; i < grainSize; i++) {
                outputData[i] = this.buffer[i];
            }

            // end of the pitch shifting algorithm //
            /////////////////////////////////////////

        };

        pitchShifterProcessorUnmasked.onaudioprocess = function (event) {

            var inputData = event.inputBuffer.getChannelData(0);
            var outputData = event.outputBuffer.getChannelData(0);

            ////////////////////////////////////
            // start pitch shifting algorithm //
            for (i = 0; i < inputData.length; i++) {

                // Apply the window to the input buffer
                inputData[i] *= this.grainWindow[i];

                // Shift half of the buffer
                this.buffer[i] = this.buffer[i + grainSizeUnmasked];

                // Empty the buffer tail
                this.buffer[i + grainSizeUnmasked] = 0.0;
            }

            // Calculate the pitch shifted grain re-sampling and looping the input
            var grainData = new Float32Array(grainSizeUnmasked * 2);
            if (Math.floor(audioCtx.currentTime * 1000) % 60 == 0) {
                randomPitchRatio = Math.random() * 0.3;
            }

            let pitch_move = pitchRatioUnmasked + randomPitchRatio
            if (pitch_move < 0.5) {
                pitch_move = 0.5
            } else if (pitch_move > 2) {
                pitch_move = 2
            }

            for (var i = 0, j = 0.0;
                i < grainSizeUnmasked;
                i++, j += pitch_move) {

                var index = Math.floor(j) % grainSizeUnmasked;
                var a = inputData[index];
                var b = inputData[(index + 1) % grainSizeUnmasked];
                grainData[i] += Object(_lib_pitch_utils__WEBPACK_IMPORTED_MODULE_1__["linearInterpolation"])(a, b, j % 1.0) * this.grainWindow[i];
            }

            // Copy the grain multiple times overlapping it
            for (i = 0; i < grainSizeUnmasked; i += Math.round(grainSizeUnmasked * (1 - overlapRatioUnmasked))) {
                for (j = 0; j <= grainSizeUnmasked; j++) {
                    this.buffer[i + j] += grainData[j];
                }
            }

            // Output the first half of the buffer
            for (i = 0; i < grainSizeUnmasked; i++) {
                outputData[i] = this.buffer[i];
            }

            // end of the pitch shifting algorithm //
            /////////////////////////////////////////

        };

        // Create the gain node
        var gainNode = this.audioCtx.createGain();
        gainNode.gain.setValueAtTime(1.5, this.audioCtx.currentTime);

        var gainNodeUnmasked = this.audioCtx.createGain();
        gainNodeUnmasked.gain.setValueAtTime(1.5, this.audioCtx.currentTime);

        // Create the oscillator node (currently not used) (it applies additional effects on the voice)
        let osc = this.audioCtx.createOscillator();
        osc.frequency.value = 1000;
        osc.type = 'sine';

        // add some delay (useful when we use the oscillator node)
        let delay = this.audioCtx.createDelay();
        delay.delayTime.value = 0.0001;

        // append the nodes to the nodes array to be able to disconnect them later
        this.nodes.push(osc)
        this.nodes.push(pitchShifterProcessor)
        this.nodes.push(gainNode)
        this.nodes.push(delay)

        // Connect the nodes to each other and to the outputs
        //                                                     -> Context Output (headphones)
        // current graph: Source -> Delay -> Processor -> Gain -> Analyser
        //                                                     -> Destination Node Output (for the recording)


        this.source.connect(delay);
        this.source.connect(this.destination_normal);

        // osc.connect(delay.delayTime);
        // osc.start()

        delay.connect(pitchShifterProcessor);
        delay.connect(pitchShifterProcessorUnmasked);
        pitchShifterProcessor.connect(gainNode);
        pitchShifterProcessorUnmasked.connect(gainNodeUnmasked);
        gainNode.connect(this.audioCtx.destination);
        gainNode.connect(this.destination_distorted);
        gainNodeUnmasked.connect(this.destination_normal);
        gainNode.connect(this.spectrum.spectrumAudioAnalyser);

        // set the color of the canvas
        this.spectrum.setBarColor("white")


    }


    // alien robot voice (very bad)
    alien() {
        this.init("changed")
        let oscillator = this.audioCtx.createOscillator();
        oscillator.frequency.value = 40;
        oscillator.type = 'sine';
        this.nodes.push(oscillator)

        let oscillatorGain = this.audioCtx.createGain();
        oscillatorGain.gain.value = 0.05;
        this.nodes.push(oscillatorGain)

        let delay = this.audioCtx.createDelay();
        delay.delayTime.value = 0.05;
        this.nodes.push(delay)

        this.source.connect(delay);
        delay.connect(this.destination_normal);
        delay.connect(this.audioCtx.destination);

        oscillator.connect(oscillatorGain);
        oscillatorGain.connect(delay.delayTime);


        oscillator.start(0);
    }


    // normal voice
    normal() {
        this.init("normal")

       var validGranSizes = [256, 512, 1024, 2048, 4096, 8192],
            grainSize = validGranSizes[2], // controls the gain size
            pitchRatio = 1, // pitchRatio will be manipulated by the onaudioprocess function
            overlapRatio = 0.5, // controls the overlap ratio of the buffer
            failedOnce = false;

        var audioCtx = this.audioCtx

        // create a processor node to manipulate the input buffer
        var pitchShifterProcessor = this.audioCtx.createScriptProcessor(grainSize, 1, 1);
        pitchShifterProcessor.buffer = new Float32Array(grainSize * 2);
        pitchShifterProcessor.grainWindow = Object(_lib_pitch_utils__WEBPACK_IMPORTED_MODULE_1__["hannWindow"])(grainSize);

        // the function that processes the input buffer
        pitchShifterProcessor.onaudioprocess = function (event) {

            var inputData = event.inputBuffer.getChannelData(0);
            var outputData = event.outputBuffer.getChannelData(0);
            this.inputData = inputData;
            // get the pitch of the input buffer from the microphone
            //var pitch_freq = autoCorrelate(inputData, audioCtx.sampleRate);

            // get the difference between the input pitch and the target pitch
            // then convert it to a ratio to be applied on the voice
            //pitchRatio = (1 - 0.9*(pitch_freq - median_pitch) / median_pitch)

            // check if the ratio exceeds the bounds of the algorithm
            //if (pitchRatio < 0.5) {
            //    pitchRatio = 0.5
            //} else if (pitchRatio > 2) {
            //    pitchRatio = 2
            //}



            //////////////////////////////////
            // Attempt at using the vocoder //

            // // 1. Create a sine wave for a 200Hz note (can be changed to any other frequency)
            // const REAL_TIME_FREQUENCY = 200;
            // const ANGULAR_FREQUENCY = REAL_TIME_FREQUENCY * 2 * Math.PI;

            // // apply the frequency to a new buffer
            // let myBuffer = audioCtx.createBuffer(1, inputData.length, 44100);
            // let myArray = myBuffer.getChannelData(0);
            // function generateSample(sampleNumber) {
            //     let sampleTime = sampleNumber / 44100;
            //     let sampleAngle = sampleTime * ANGULAR_FREQUENCY;
            //     return Math.sin(sampleAngle);
            // }
            // for (let sampleNumber = 0; sampleNumber < 88200; sampleNumber++) {
            //     myArray[sampleNumber] = generateSample(sampleNumber);
            // }

            // // 2. create the vocoder with the input buffer and the chenerated buffer
            // try {
            //     // i used a try catch because the creation of the vocoder fails due to an error in the vocoder algorithm itself
            //     if(!failedOnce){
            //         // params: audio context, carrier (fake voice input signal), modulator (real voice input signal)
            //         let v = vocoder(audioCtx, myBuffer, inputData);
            //     }
            // } catch (error) {
            //     failedOnce = true
            //     console.error(error);
            // }

            // End of attempt at using the vocoder //
            /////////////////////////////////////////




            ////////////////////////////////////
            // start pitch shifting algorithm //
            for (i = 0; i < inputData.length; i++) {

                // Apply the window to the input buffer
                inputData[i] *= this.grainWindow[i];

                // Shift half of the buffer
                this.buffer[i] = this.buffer[i + grainSize];

                // Empty the buffer tail
                this.buffer[i + grainSize] = 0.0;
            }

            // Calculate the pitch shifted grain re-sampling and looping the input
            var grainData = new Float32Array(grainSize * 2);
            if (Math.floor(audioCtx.currentTime * 1000) % 60 == 0) {
                randomPitchRatio = Math.random() * 0.3;
            }

            let pitch_move = pitchRatio + randomPitchRatio
            if (pitch_move < 0.5) {
                pitch_move = 0.5
            } else if (pitch_move > 2) {
                pitch_move = 2
            }


            for (var i = 0, j = 0.0;
                i < grainSize;
                i++, j += pitch_move) {

                var index = Math.floor(j) % grainSize;
                var a = inputData[index];
                var b = inputData[(index + 1) % grainSize];
                grainData[i] += Object(_lib_pitch_utils__WEBPACK_IMPORTED_MODULE_1__["linearInterpolation"])(a, b, j % 1.0) * this.grainWindow[i];
            }

            // Copy the grain multiple times overlapping it
            for (i = 0; i < grainSize; i += Math.round(grainSize * (1 - overlapRatio))) {
                for (j = 0; j <= grainSize; j++) {
                    this.buffer[i + j] += grainData[j];
                }
            }

            // Output the first half of the buffer
            for (i = 0; i < grainSize; i++) {
                outputData[i] = this.buffer[i];
            }

            // end of the pitch shifting algorithm //
            /////////////////////////////////////////

        };

        // Create the gain node
        var gainNode = this.audioCtx.createGain();
        gainNode.gain.setValueAtTime(1.5, this.audioCtx.currentTime);

        // Create the oscillator node (currently not used) (it applies additional effects on the voice)
        let osc = this.audioCtx.createOscillator();
        osc.frequency.value = 1000;
        osc.type = 'sine';

        // add some delay (useful when we use the oscillator node)
        let delay = this.audioCtx.createDelay();
        delay.delayTime.value = 0.0001;

        // append the nodes to the nodes array to be able to disconnect them later
        this.nodes.push(osc)
        this.nodes.push(pitchShifterProcessor)
        this.nodes.push(gainNode)
        this.nodes.push(delay)

        // Connect the nodes to each other and to the outputs
        //                                                     -> Context Output (headphones)
        // current graph: Source -> Delay -> Processor -> Gain -> Analyser
        //                                                     -> Destination Node Output (for the recording)


        this.source.connect(delay);
        this.source.connect(this.destination_normal);

        // osc.connect(delay.delayTime);
        // osc.start()

        delay.connect(pitchShifterProcessor);
        pitchShifterProcessor.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        gainNode.connect(this.destination_distorted);
        gainNode.connect(this.destination_normal);
        gainNode.connect(this.spectrum.spectrumAudioAnalyser);

        // set the color of the canvas
        this.spectrum.setBarColor("white")

        /*var biquadFilter = this.audioCtx.createBiquadFilter();
        biquadFilter.type = "lowshelf";
        this.nodes.push(biquadFilter)

        this.source.connect(biquadFilter);
        biquadFilter.connect(this.spectrum.spectrumAudioAnalyser);
        biquadFilter.connect(this.audioCtx.destination);
        biquadFilter.connect(this.destination_normal);

        this.spectrum.setBarColor("dark")*/
    }
}


/***/ }),

/***/ "c116":
/*!******************************************!*\
  !*** ./src/app/lib/recorder/recorder.js ***!
  \******************************************/
/*! exports provided: recordAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordAudio", function() { return recordAudio; });

// function that handles recording the audio input
const recordAudio = (audioStream) =>
  new Promise(async resolve => {
    // create the MediaRecorder object from the WebAudioAPI
    const mediaRecorder = new MediaRecorder(audioStream);

    // chunks of the input to be turned into a blob
    var audioChunks = [];

    // get the input chunk whenever it is ready and append it to the list of chunks
    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    // starts the recording
    const start = () => {
      // reinitialize the chunks to an empty array
      audioChunks = [];

      // start the MediaRecorder
      mediaRecorder.start();
    };


    // stops the recording
    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          // create an audio blob from the recorded chunks
          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });

          // create an audio element
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);

          // the function that will play the audio
          const play = () => audio.play();

          // return the blob, audioUrl, audio and play function
          resolve({ audioBlob, audioUrl, play, audio });
        });

        // call the stop event on the mediaRecoder
        mediaRecorder.stop();
      });

      // the recordAudio object has start and stop as functions
      resolve({ start, stop });
  });


/***/ }),

/***/ "s51J":
/*!**************************************************!*\
  !*** ./src/app/ld-rollar/ld-rollar.component.ts ***!
  \**************************************************/
/*! exports provided: LdRollarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdRollarComponent", function() { return LdRollarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LdRollarComponent {
    constructor() { }
    ngOnInit() {
    }
}
LdRollarComponent.ɵfac = function LdRollarComponent_Factory(t) { return new (t || LdRollarComponent)(); };
LdRollarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LdRollarComponent, selectors: [["app-ld-rollar"]], decls: 1, vars: 0, consts: [[1, "loading"]], template: function LdRollarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.loading[_ngcontent-%COMP%] {\n  height: 0;\n  width: 0;\n  padding: 15px;\n  border: 6px solid #ccc;\n  border-right-color: #888;\n  border-radius: px;\n  -webkit-animation: rotate 1s infinite linear;\n  \n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGQtcm9sbGFyL0Q6L3Byb2plY3RzL0FuZ3VsYXIvZmFrZXpvb20vZmFrZXpvb20tbWFzdGVyL3NyYy9hcHAvbGQtcm9sbGFyL2xkLXJvbGxhci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGQtcm9sbGFyL2xkLXJvbGxhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBREVBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUNBQSw4Q0FBOEM7RURFOUMsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbGQtcm9sbGFyL2xkLXJvbGxhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2FkaW5nIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiA2cHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC8qIGxlZnQsIHRvcCBhbmQgcG9zaXRpb24ganVzdCBmb3IgdGhlIGRlbW8hICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIC8qIDEwMCUga2V5ZnJhbWUgZm9yICBjbG9ja3dpc2UuXG4gICAgIHVzZSAwJSBpbnN0ZWFkIGZvciBhbnRpY2xvY2t3aXNlICovXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2FkaW5nIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiA2cHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC8qIGxlZnQsIHRvcCBhbmQgcG9zaXRpb24ganVzdCBmb3IgdGhlIGRlbW8hICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xuICAvKiAxMDAlIGtleWZyYW1lIGZvciAgY2xvY2t3aXNlLlxuICAgICB1c2UgMCUgaW5zdGVhZCBmb3IgYW50aWNsb2Nrd2lzZSAqL1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LdRollarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ld-rollar',
                templateUrl: './ld-rollar.component.html',
                styleUrls: ['./ld-rollar.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uMz8":
/*!******************************************!*\
  !*** ./src/app/setup/setup.component.ts ***!
  \******************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _voices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../voices */ "bSOy");
/* harmony import */ var _lib_recorder_recorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/recorder/recorder */ "c116");
/* harmony import */ var _call_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../call/call.service */ "2aLp");
/* harmony import */ var _sentences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sentences */ "4j91");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ngx_jdenticon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-jdenticon */ "RAOg");




















const _c0 = ["speakerAudio"];
const _c1 = ["canvas"];
const _c2 = ["canvas2"];
const _c3 = function () { return { width: "512px", height: "24px" }; };
const _c4 = function (a0) { return { dimen: a0 }; };
function SetupComponent_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Input Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](4, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3)));
} }
function SetupComponent_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-alert", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupComponent_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-alert", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Testing Microphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SetupComponent_ng_container_1_div_5_Template, 5, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SetupComponent_ng_container_1_div_6_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SetupComponent_ng_container_1_div_7_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.micBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.micBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.micMuted);
} }
function SetupComponent_ng_container_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_ng_container_2_ng_template_7_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.replay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Testing Audio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nz-alert", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SetupComponent_ng_container_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.wordToCheck = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SetupComponent_ng_container_2_ng_template_7_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "audio", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "source", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_ng_container_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.startVoiceChangerTest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.wordToCheck);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.speakerTestAudio, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.speakerTestPassed);
} }
function SetupComponent_ng_container_3_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r20.sentence, " ");
} }
function SetupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Voice Changer Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nz-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SetupComponent_ng_container_3_li_7_Template, 2, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "canvas", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_ng_container_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.endVoiceChangerTest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.randomSentences);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.canProceedVoiceChanger);
} }
function SetupComponent_ng_container_4__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_ng_container_4__svg_svg_5_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const token_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.callService.callSettings.userAvatar = token_r24; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const token_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", token_r24 === ctx_r23.callService.callSettings.userAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data-jdenticon-value", token_r24);
} }
function SetupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Select Avatar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-alert", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SetupComponent_ng_container_4__svg_svg_5_Template, 1, 3, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_ng_container_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.nextInstructions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.avatarToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r3.callService.callSettings.userAvatar);
} }
function SetupComponent_ng_container_5_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " In the following meeting you will try to help solve 5 computer science related problems in a group of 3 people. We are comparing scores across these problems between men and women to determine how well women do versus men. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " To help maintain your anonymity, you will be using voice changing software. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Once the meeting has begun, we ask that you do not leave your computer unless absolutely necessary. Please do not search for any outside information (e.g., using Google) during the meeting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupComponent_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " We are now searching for two other participants to match you with.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Please wait, this process can take a few minutes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SetupComponent_ng_container_5_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupComponent_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You are in the role of judge. There are two participants in the role of brainstormers. In this task, both the judge's voice and the brainstormers' voices will be voice-changed to help maintain anonymity. During the brainstormers' discussion, they will not be able to hear you. After the discussion, you will record your own opinion which they will listen to. Please wait while the connection is established. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SetupComponent_ng_container_5_ng_container_6_div_2_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.showInstructionsStep === 4);
} }
function SetupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Important Instructions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SetupComponent_ng_container_5_ul_4_Template, 7, 0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SetupComponent_ng_container_5_ng_container_5_Template, 4, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SetupComponent_ng_container_5_ng_container_6_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupComponent_ng_container_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.nextInstructions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.showInstructionsStep === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.showInstructionsStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.showInstructionsStep === 3 || ctx_r4.showInstructionsStep === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.waitingForParticipants || ctx_r4.waitingForConnection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.instructionButtonLabel);
} }
function SetupComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", null, 35);
} if (rf & 2) {
    const dimen_r35 = ctx.dimen;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("width", dimen_r35.width)("height", dimen_r35.height);
} }
class SetupComponent {
    constructor(router, route, message, callService) {
        this.router = router;
        this.route = route;
        this.message = message;
        this.callService = callService;
        this.testingMic = true;
        this.speakerTesting = false;
        this.playingAudio = true;
        this.speakerTestAudio = '';
        this.micBlocked = false;
        this.micMuted = false;
        this.speakerTestAudios = {
            '/assets/speaker-test/lemon-female.mp3': 'lemon',
            '/assets/speaker-test/lemon.mp3': 'lemon',
        };
        this.wordToCheck = '';
        this.listenYourself = false;
        this.selectingAvatar = false;
        this.showInstructionsStep = 0;
        this.waitingForParticipants = false;
        this.waitingForConnection = false;
        this.randomSentences = [];
        this.canProceedVoiceChanger = false;
        this.microphone = undefined;
        this.avatarToken = [];
        this.pickRandom = (arr, count) => {
            let _arr = [...arr];
            return [...Array(count)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
        };
    }
    get speakerTestPassed() {
        return (this.wordToCheck &&
            this.wordToCheck.toLowerCase() ===
                this.speakerTestAudios[this.speakerTestAudio]);
    }
    get instructionButtonLabel() {
        if (this.waitingForParticipants) {
            return 'Waiting...';
        }
        else if (this.waitingForConnection) {
            return 'Connecting...';
        }
        else if (this.showInstructionsStep === 4) {
            return 'Begin Meeting';
        }
        else {
            return 'Next';
        }
    }
    ngAfterViewInit() {
        this.route.params.subscribe(({ id }) => {
            this.consentMicrophone(_call_call_service__WEBPACK_IMPORTED_MODULE_4__["voiceConfig"][id].user);
            this.callService.useStarted = moment__WEBPACK_IMPORTED_MODULE_6__();
        });
        for (let i = 0; i < 10; i++) {
            this.avatarToken.push(this.makeid(5));
        }
        this.randomSentences = this.pickRandom(_sentences__WEBPACK_IMPORTED_MODULE_5__["sentences"], 3);
    }
    consentMicrophone(vt) {
        if (navigator.mediaDevices) {
            console.log('getUserMedia supported.');
            this.microphone = navigator.permissions
                .query({ name: 'microphone' })
                .then((permissionObj) => {
                if (this.micBlocked && permissionObj.state === 'granted') {
                    location.reload();
                }
                else if (permissionObj.state === 'denied') {
                    this.micBlocked = true;
                }
                //
            });
            // get the microphone input whcih resolves to the microphone stream
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(function (stream) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // show the page and hide the error message saying "allow microphone"
                    // $("#page-content").show()
                    // $("#allow-text").hide()
                    const canvas = this.canvas.nativeElement;
                    // create the voice object. This object holds the logic of the clear and distorted voices
                    try {
                        this.callService.voice = this.voice = new _voices__WEBPACK_IMPORTED_MODULE_2__["Voice"](stream, undefined, canvas);
                        // initialize it with the normal voice
                        if (vt === 'masked') {
                            this.voice.pitch('high');
                        }
                        else {
                            this.voice.normal();
                        }
                        // create the voice recorder (used upon pressing the record button)
                        this.callService.recordNormal = yield Object(_lib_recorder_recorder__WEBPACK_IMPORTED_MODULE_3__["recordAudio"])(this.voice.audioStream);
                        this.callService.recordDistorted = yield Object(_lib_recorder_recorder__WEBPACK_IMPORTED_MODULE_3__["recordAudio"])(this.voice.audioStreamChanged);
                        this.micTestingComplete(stream);
                    }
                    catch (e) {
                        console.error(e);
                    }
                });
            }.bind(this))
                .catch((err) => {
                this.micBlocked = true;
            });
        }
        else {
            this.message.create('error', `Audio not supported on your browser`);
        }
    }
    micTestingComplete(stream) {
        setTimeout(() => {
            this.voice.clear_nodes();
            this.message.create('success', `Your microphone is working`);
            this.testingMic = false;
            this.speakerTesting = true;
            this.selectAudio();
            // stream.getTracks() // get all tracks from the MediaStream
            //   .forEach( track => track.stop() ); // stop each of them
        }, 5000);
    }
    selectAudio() {
        const keys = Object.keys(this.speakerTestAudios);
        const prop = keys[Math.floor(Math.random() * keys.length)];
        this.speakerTestAudio = prop;
    }
    nextInstructions() {
        this.showInstructionsStep++;
        if (this.showInstructionsStep === 2) {
            this.waitingForParticipants = true;
            setTimeout(() => {
                this.showInstructionsStep = 3;
                this.waitingForParticipants = false;
                this.waitingForConnection = true;
                setTimeout(() => {
                    this.waitingForConnection = false;
                    this.showInstructionsStep = 4;
                }, this.randomMins(10, 15) * 1000);
            }, this.randomMins(30, 60) * 1000);
        }
        if (this.showInstructionsStep === 5) {
            this.router.navigate([
                `/call/${this.route.snapshot.params.id}/${this.callService.callSettings.userAvatar}`,
            ], { queryParams: this.route.snapshot.queryParams });
        }
    }
    startVoiceChangerTest() {
        this.callService.voiceChangerTestStart = moment__WEBPACK_IMPORTED_MODULE_6__();
        this.listenYourself = true;
        this.speakerTesting = false;
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((function (stream) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const canvas = this.canvas2.nativeElement;
                // create the voice object. This object holds the logic of the clear and distorted voices
                try {
                    this.callService.voice = this.voice = new _voices__WEBPACK_IMPORTED_MODULE_2__["Voice"](stream, undefined, canvas);
                    // initialize it with the normal voice
                    if (_call_call_service__WEBPACK_IMPORTED_MODULE_4__["voiceConfig"][this.route.snapshot.params.id].user === 'masked') {
                        this.voice.pitch('high');
                    }
                    else {
                        this.voice.normal();
                    }
                }
                catch (e) {
                    console.error(e);
                }
            });
        }).bind(this));
        setTimeout(() => {
            this.canProceedVoiceChanger = true;
        }, 10000);
    }
    endVoiceChangerTest() {
        this.selectingAvatar = true;
        this.listenYourself = false;
        this.callService.voiceChangerTestEnd = moment__WEBPACK_IMPORTED_MODULE_6__();
        this.voice.clear_nodes();
    }
    randomMins(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    replay() {
        this.speakerAudio.nativeElement.play();
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
SetupComponent.ɵfac = function SetupComponent_Factory(t) { return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_call_call_service__WEBPACK_IMPORTED_MODULE_4__["CallService"])); };
SetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupComponent, selectors: [["app-setup"]], viewQuery: function SetupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.speakerAudio = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas2 = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "root"], [4, "ngIf"], ["canvasTemp", ""], [1, "title", "d-flex"], [1, "mr-8"], [1, "loading"], ["class", "d-flex vertical", 4, "ngIf"], [1, "d-flex", "vertical"], [1, "d-flex", "justify-content-space-between", "align-center"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzType", "error", "nzMessage", "Microphone is not accessible", "nzDescription", "Please grant required access to continue", "nzShowIcon", ""], ["nzType", "error", "nzMessage", "Microphone is on mute", "nzDescription", "Please unmute and refresh the page to continue", "nzShowIcon", ""], ["nzType", "info", "nzMessage", " Please type the word you hear into the textbox below. Click play on the audio clip to repeat the word", "nzShowIcon", "", 1, "audio-note", "mb-12"], ["nzSize", "large", 1, "mb-12", "d-flex", "align-center", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Type what you hear", 1, "mr-8", 3, "ngModel", "ngModelChange"], ["suffixButton", ""], ["autoplay", ""], ["speakerAudio", ""], ["type", "audio/mp3", 3, "src"], ["nz-button", "", "nzType", "primary", 1, "width-100", 3, "disabled", "click"], ["nz-icon", "", "nzType", "play-circle", 3, "click"], ["nzType", "info", "nzMessage", "During the meeting, a voice changer will be active when you use your microphone. Please test your microphone by saying the 3 sentences below into your microphone. You should hear an echo of yourself with the voice changing active. Once you have spoken the sentences you can go to the next step.", "nzShowIcon", "", 1, "audio-note", "mb-12"], [1, "voice-changer", "instructions"], [4, "ngFor", "ngForOf"], ["width", "380px", "height", "24px", 1, "mb-12"], ["canvas2", ""], ["nz-button", "", "nzType", "primary", 1, "width-100", "mt-12", 3, "disabled", "click"], ["nzType", "info", "nzMessage", "Choose the visual avatar that will be displayed in the meeting for you", "nzShowIcon", "", 1, "audio-note", "mb-12"], [1, "avatar-selection", "mb-12"], ["width", "64", "height", "64", 3, "selected", "data-jdenticon-value", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], ["width", "64", "height", "64", 3, "data-jdenticon-value", "click"], [1, "instructions"], ["nz-button", "", "nzType", "primary", 1, "mt-12", 3, "nzLoading", "click"], ["nzType", "info", "nzMessage", "The meeting room is ready. Please press 'Begin Meeting' as soon as you are ready.", "nzShowIcon", "", 1, "w-100", "mt-12", "mb-12"], ["canvas", ""]], template: function SetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SetupComponent_ng_container_1_Template, 8, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SetupComponent_ng_container_2_Template, 15, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SetupComponent_ng_container_3_Template, 12, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SetupComponent_ng_container_4_Template, 8, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SetupComponent_ng_container_5_Template, 9, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SetupComponent_ng_template_6_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.testingMic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.speakerTesting);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listenYourself);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectingAvatar && !ctx.showInstructionsStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showInstructionsStep);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_jdenticon__WEBPACK_IMPORTED_MODULE_17__["SvgJdenticonDirective"]], styles: [".root[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n}\ncanvas[_ngcontent-%COMP%] {\n  border: 2px solid #0e71eb;\n  border-radius: 2px;\n}\n  .ant-btn-icon-only {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n  .anticon {\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\naudio[_ngcontent-%COMP%] {\n  width: 205px;\n  height: 32px;\n}\n.avatar-selection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0 25%;\n}\n.avatar-selection[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 10px;\n  cursor: pointer;\n}\n.avatar-selection[_ngcontent-%COMP%]   svg.selected[_ngcontent-%COMP%] {\n  border: 2px solid #0e71eb;\n  border-radius: 2px;\n}\n.audio-note[_ngcontent-%COMP%] {\n  width: 380px;\n}\n.replay-ico[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n.voice-changer[_ngcontent-%COMP%] {\n  width: 380px;\n  margin-bottom: 32px;\n}\n.voice-changer[_ngcontent-%COMP%]     canvas {\n  width: 382px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAvRDovcHJvamVjdHMvQW5ndWxhci9mYWtlem9vbS9mYWtlem9vbS1tYXN0ZXIvc3JjL2FwcC9zZXR1cC9zZXR1cC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2V0dXAvc2V0dXAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FESEE7RUFTSSxVQUFBO0VBQ0Ysb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSEY7QURPQTtFQUNFLFlBQUE7RUFDRSxZQUFBO0FDTEo7QURRQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNORjtBRENBO0VBUUksWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFFJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ05OO0FEV0E7RUFDRSxZQUFBO0FDVEY7QURZQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDVkY7QURhQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ1hGO0FEU0E7RUFNTSxZQUFBO0VBQ0EsWUFBQTtBQ1pOIiwiZmlsZSI6InNyYy9hcHAvc2V0dXAvc2V0dXAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmNhbnZhcyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZTcxZWI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgLmFudC1idG4taWNvbi1vbmx5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5hbnRpY29uIHtcbiAgICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuYXVkaW8ge1xuICB3aWR0aDogMjA1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uYXZhdGFyLXNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjUlO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzBlNzFlYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gIH1cbn1cblxuLmF1ZGlvLW5vdGUge1xuICB3aWR0aDogMzgwcHg7XG59XG5cbi5yZXBsYXktaWNvIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cblxuLnZvaWNlLWNoYW5nZXIge1xuICB3aWR0aDozODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcblxuICA6Om5nLWRlZXAge1xuICAgIGNhbnZhcyB7XG4gICAgICB3aWR0aDogMzgycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuICB9XG5cbn1cbiIsIi5yb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmNhbnZhcyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZTcxZWI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbjo6bmctZGVlcCAuYW50LWJ0bi1pY29uLW9ubHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuYW50aWNvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmF1ZGlvIHtcbiAgd2lkdGg6IDIwNXB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG4uYXZhdGFyLXNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjUlO1xufVxuLmF2YXRhci1zZWxlY3Rpb24gc3ZnIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXZhdGFyLXNlbGVjdGlvbiBzdmcuc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMGU3MWViO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYXVkaW8tbm90ZSB7XG4gIHdpZHRoOiAzODBweDtcbn1cbi5yZXBsYXktaWNvIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cbi52b2ljZS1jaGFuZ2VyIHtcbiAgd2lkdGg6IDM4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLnZvaWNlLWNoYW5nZXIgOjpuZy1kZWVwIGNhbnZhcyB7XG4gIHdpZHRoOiAzODJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-setup',
                templateUrl: './setup.component.html',
                styleUrls: ['./setup.component.less'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"] }, { type: _call_call_service__WEBPACK_IMPORTED_MODULE_4__["CallService"] }]; }, { speakerAudio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['speakerAudio']
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas']
        }], canvas2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['canvas2']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _has_valid_token_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-valid-token.guard */ "R0Dl");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete/complete.component */ "R5Wi");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call/call.component */ "5Tot");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup/setup.component */ "uMz8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









const routes = [
    { path: '', redirectTo: 'setup/1', pathMatch: 'full' },
    {
        path: 'setup/:id',
        component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_4__["SetupComponent"],
        canActivate: [_has_valid_token_guard__WEBPACK_IMPORTED_MODULE_0__["HasValidTokenGuard"]]
    },
    {
        path: 'call/:id/:userAvatar',
        component: _call_call_component__WEBPACK_IMPORTED_MODULE_3__["CallComponent"],
        canActivate: [_has_valid_token_guard__WEBPACK_IMPORTED_MODULE_0__["HasValidTokenGuard"]]
    },
    {
        path: 'complete',
        component: _complete_complete_component__WEBPACK_IMPORTED_MODULE_2__["CompleteComponent"],
    },
    {
        path: 'error',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map